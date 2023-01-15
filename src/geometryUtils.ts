/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

import { BufferGeometry, Mesh, Vector2, Vector3 } from 'three'
import { Face3, Geometry } from 'three/examples/jsm/deprecated/Geometry'

const GeometryUtils = {
	// Merge two geometries or geometry and geometry from object (using object's transform)

	merge: function (
		geometry1: Geometry,
		geometry2: Geometry,
		materialIndexOffset: number
	) {
		console.warn(
			'THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.'
		)

		let matrix

		if (geometry2 instanceof Mesh) {
			geometry2.matrixAutoUpdate && geometry2.updateMatrix()

			matrix = geometry2.matrix
			geometry2 = geometry2.geometry
		}

		geometry1.merge(geometry2, matrix, materialIndexOffset)
	},

	// Get random point in triangle (via barycentric coordinates)
	// 	(uniform distribution)
	// 	http://www.cgafaq.info/wiki/Random_Point_In_Triangle

	randomPointInTriangle: (function () {
		const vector = new Vector3()

		return function (vectorA: Vector3, vectorB: Vector3, vectorC: Vector3) {
			const point = new Vector3()

			let a = Math.random()
			let b = Math.random()

			if (a + b > 1) {
				a = 1 - a
				b = 1 - b
			}

			const c = 1 - a - b

			point.copy(vectorA)
			point.multiplyScalar(a)

			vector.copy(vectorB)
			vector.multiplyScalar(b)

			point.add(vector)

			vector.copy(vectorC)
			vector.multiplyScalar(c)

			point.add(vector)

			return point
		}
	})(),

	// Get random point in face (triangle)
	// (uniform distribution)

	randomPointInFace: function (face: Face3, geometry: Geometry) {
		const vA = geometry.vertices[face.a]
		const vB = geometry.vertices[face.b]
		const vC = geometry.vertices[face.c]

		return GeometryUtils.randomPointInTriangle(vA, vB, vC)
	},

	// Get uniformly distributed random points in mesh
	// 	- create array with cumulative sums of face areas
	//  - pick random number from 0 to total area
	//  - find corresponding place in area array by binary search
	//	- get random point in face

	randomPointsInGeometry: function (geometry: Geometry, n: number): Vector3[] {
		let face
		let i
		const faces = geometry.faces
		const vertices = geometry.vertices
		const il = faces.length
		let totalArea = 0
		const cumulativeAreas: number[] = []
		let vA
		let vB
		let vC

		// precompute face areas

		for (i = 0; i < il; i++) {
			face = faces[i]

			vA = vertices[face.a]
			vB = vertices[face.b]
			vC = vertices[face.c]

			totalArea += GeometryUtils.triangleArea(vA, vB, vC)

			cumulativeAreas[i] = totalArea
		}

		// binary search cumulative areas array

		function binarySearchIndices(value: number) {
			function binarySearch(start: number, end: number): number {
				// return closest larger index
				// if exact number is not found

				if (end < start) return start

				const mid = start + Math.floor((end - start) / 2)

				if (cumulativeAreas[mid] > value) {
					return binarySearch(start, mid - 1)
				} else if (cumulativeAreas[mid] < value) {
					return binarySearch(mid + 1, end)
				} else {
					return mid
				}
			}

			return binarySearch(0, cumulativeAreas.length - 1)
		}

		// pick random face weighted by face area

		let r
		let index
		const result = []

		const stats = []

		for (i = 0; i < n; i++) {
			r = Math.random() * totalArea

			index = binarySearchIndices(r)

			result[i] = GeometryUtils.randomPointInFace(faces[index], geometry)

			if (!stats[index]) {
				stats[index] = 1
			} else {
				stats[index] += 1
			}
		}

		return result
	},

	randomPointsInBufferGeometry: function (
		geometry: BufferGeometry,
		n: number
	): Vector3[] {
		let i
		const vertices = geometry.attributes.position.array
		let totalArea = 0
		const cumulativeAreas: number[] = []

		// precompute face areas
		const vA = new Vector3()
		const vB = new Vector3()
		const vC = new Vector3()

		// geometry._areas = [];
		const il = vertices.length / 9

		for (i = 0; i < il; i++) {
			vA.set(vertices[i * 9 + 0], vertices[i * 9 + 1], vertices[i * 9 + 2])
			vB.set(vertices[i * 9 + 3], vertices[i * 9 + 4], vertices[i * 9 + 5])
			vC.set(vertices[i * 9 + 6], vertices[i * 9 + 7], vertices[i * 9 + 8])

			totalArea += GeometryUtils.triangleArea(vA, vB, vC)

			cumulativeAreas.push(totalArea)
		}

		// binary search cumulative areas array

		function binarySearchIndices(value: number) {
			function binarySearch(start: number, end: number): number {
				// return closest larger index
				// if exact number is not found

				if (end < start) return start

				const mid = start + Math.floor((end - start) / 2)

				if (cumulativeAreas[mid] > value) {
					return binarySearch(start, mid - 1)
				} else if (cumulativeAreas[mid] < value) {
					return binarySearch(mid + 1, end)
				} else {
					return mid
				}
			}

			return binarySearch(0, cumulativeAreas.length - 1)
		}

		// pick random face weighted by face area

		let r
		let index
		const result = []

		for (i = 0; i < n; i++) {
			r = Math.random() * totalArea

			index = binarySearchIndices(r)

			// result[ i ] = GeometryUtils.randomPointInFace( faces[ index ], geometry, true );
			vA.set(
				vertices[index * 9 + 0],
				vertices[index * 9 + 1],
				vertices[index * 9 + 2]
			)
			vB.set(
				vertices[index * 9 + 3],
				vertices[index * 9 + 4],
				vertices[index * 9 + 5]
			)
			vC.set(
				vertices[index * 9 + 6],
				vertices[index * 9 + 7],
				vertices[index * 9 + 8]
			)
			result[i] = GeometryUtils.randomPointInTriangle(vA, vB, vC)
		}

		return result
	},

	// Get triangle area (half of parallelogram)
	// http://mathworld.wolfram.com/TriangleArea.html

	triangleArea: (function () {
		const vector1 = new Vector3()
		const vector2 = new Vector3()

		return function (vectorA: Vector3, vectorB: Vector3, vectorC: Vector3) {
			vector1.subVectors(vectorB, vectorA)
			vector2.subVectors(vectorC, vectorA)
			vector1.cross(vector2)

			return 0.5 * vector1.length()
		}
	})(),

	center: function (geometry: Geometry) {
		console.warn(
			'THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.'
		)
		return geometry.center()
	},

	/**
	 * Generates 2D-Coordinates in a very fast way.
	 *
	 * @author Dylan Grafmyre
	 *
	 * Based on work by:
	 * @author Thomas Diewald
	 * @link http://www.openprocessing.org/sketch/15493
	 *
	 * @param center     Center of Hilbert curve.
	 * @param size       Total width of Hilbert curve.
	 * @param iterations Number of subdivisions.
	 * @param v0         Corner index -X, -Z.
	 * @param v1         Corner index -X, +Z.
	 * @param v2         Corner index +X, +Z.
	 * @param v3         Corner index +X, -Z.
	 */
	hilbert2D: function (
		center?: Vector3,
		size?: number,
		iterations?: number,
		v0?: number,
		v1?: number,
		v2?: number,
		v3?: number
	) {
		// Default Vars
		center = center !== undefined ? center : new Vector3(0, 0, 0)
		size = size !== undefined ? size : 10
		const half = size / 2
		iterations = iterations !== undefined ? iterations : 1
		v0 = v0 !== undefined ? v0 : 0
		v1 = v1 !== undefined ? v1 : 1
		v2 = v2 !== undefined ? v2 : 2
		v3 = v3 !== undefined ? v3 : 3
		const vec_s = [
			new Vector3(center.x - half, center.y, center.z - half),
			new Vector3(center.x - half, center.y, center.z + half),
			new Vector3(center.x + half, center.y, center.z + half),
			new Vector3(center.x + half, center.y, center.z - half),
		]

		const vec = [vec_s[v0], vec_s[v1], vec_s[v2], vec_s[v3]]

		// Recurse iterations
		if (0 <= --iterations) {
			const tmp: Vector2[] = []

			Array.prototype.push.apply(
				tmp,
				GeometryUtils.hilbert2D(vec[0], half, iterations, v0, v3, v2, v1)
			)
			Array.prototype.push.apply(
				tmp,
				GeometryUtils.hilbert2D(vec[1], half, iterations, v0, v1, v2, v3)
			)
			Array.prototype.push.apply(
				tmp,
				GeometryUtils.hilbert2D(vec[2], half, iterations, v0, v1, v2, v3)
			)
			Array.prototype.push.apply(
				tmp,
				GeometryUtils.hilbert2D(vec[3], half, iterations, v2, v1, v0, v3)
			)

			// Return recursive call
			return tmp
		}

		// Return complete Hilbert Curve.
		return vec
	},

	/**
	 * Generates 3D-Coordinates in a very fast way.
	 *
	 * @author Dylan Grafmyre
	 *
	 * Based on work by:
	 * @author Thomas Diewald
	 * @link http://www.openprocessing.org/visuals/?visualID=15599
	 *
	 * @param center     Center of Hilbert curve.
	 * @param size       Total width of Hilbert curve.
	 * @param iterations Number of subdivisions.
	 * @param v0         Corner index -X, +Y, -Z.
	 * @param v1         Corner index -X, +Y, +Z.
	 * @param v2         Corner index -X, -Y, +Z.
	 * @param v3         Corner index -X, -Y, -Z.
	 * @param v4         Corner index +X, -Y, -Z.
	 * @param v5         Corner index +X, -Y, +Z.
	 * @param v6         Corner index +X, +Y, +Z.
	 * @param v7         Corner index +X, +Y, -Z.
	 */
	hilbert3D: function (
		center?: Vector3,
		size?: number,
		iterations?: number,
		v0?: number,
		v1?: number,
		v2?: number,
		v3?: number,
		v4?: number,
		v5?: number,
		v6?: number,
		v7?: number
	) {
		// Default Vars
		center = center !== undefined ? center : new Vector3(0, 0, 0)
		size = size !== undefined ? size : 10
		const half = size / 2
		iterations = iterations !== undefined ? iterations : 1
		v0 = v0 !== undefined ? v0 : 0
		v1 = v1 !== undefined ? v1 : 1
		v2 = v2 !== undefined ? v2 : 2
		v3 = v3 !== undefined ? v3 : 3
		v4 = v4 !== undefined ? v4 : 4
		v5 = v5 !== undefined ? v5 : 5
		v6 = v6 !== undefined ? v6 : 6
		v7 = v7 !== undefined ? v7 : 7
		const vec_s = [
			new Vector3(center.x - half, center.y + half, center.z - half),
			new Vector3(center.x - half, center.y + half, center.z + half),
			new Vector3(center.x - half, center.y - half, center.z + half),
			new Vector3(center.x - half, center.y - half, center.z - half),
			new Vector3(center.x + half, center.y - half, center.z - half),
			new Vector3(center.x + half, center.y - half, center.z + half),
			new Vector3(center.x + half, center.y + half, center.z + half),
			new Vector3(center.x + half, center.y + half, center.z - half),
		]

		const vec = [
			vec_s[v0],
			vec_s[v1],
			vec_s[v2],
			vec_s[v3],
			vec_s[v4],
			vec_s[v5],
			vec_s[v6],
			vec_s[v7],
		]

		// Recurse iterations
		if (--iterations >= 0) {
			const tmp: Vector3[] = []

			Array.prototype.push.apply(
				tmp,
				GeometryUtils.hilbert3D(
					vec[0],
					half,
					iterations,
					v0,
					v3,
					v4,
					v7,
					v6,
					v5,
					v2,
					v1
				)
			)
			Array.prototype.push.apply(
				tmp,
				GeometryUtils.hilbert3D(
					vec[1],
					half,
					iterations,
					v0,
					v7,
					v6,
					v1,
					v2,
					v5,
					v4,
					v3
				)
			)
			Array.prototype.push.apply(
				tmp,
				GeometryUtils.hilbert3D(
					vec[2],
					half,
					iterations,
					v0,
					v7,
					v6,
					v1,
					v2,
					v5,
					v4,
					v3
				)
			)
			Array.prototype.push.apply(
				tmp,
				GeometryUtils.hilbert3D(
					vec[3],
					half,
					iterations,
					v2,
					v3,
					v0,
					v1,
					v6,
					v7,
					v4,
					v5
				)
			)
			Array.prototype.push.apply(
				tmp,
				GeometryUtils.hilbert3D(
					vec[4],
					half,
					iterations,
					v2,
					v3,
					v0,
					v1,
					v6,
					v7,
					v4,
					v5
				)
			)
			Array.prototype.push.apply(
				tmp,
				GeometryUtils.hilbert3D(
					vec[5],
					half,
					iterations,
					v4,
					v3,
					v2,
					v5,
					v6,
					v1,
					v0,
					v7
				)
			)
			Array.prototype.push.apply(
				tmp,
				GeometryUtils.hilbert3D(
					vec[6],
					half,
					iterations,
					v4,
					v3,
					v2,
					v5,
					v6,
					v1,
					v0,
					v7
				)
			)
			Array.prototype.push.apply(
				tmp,
				GeometryUtils.hilbert3D(
					vec[7],
					half,
					iterations,
					v6,
					v5,
					v2,
					v1,
					v0,
					v3,
					v4,
					v7
				)
			)

			// Return recursive call
			return tmp
		}

		// Return complete Hilbert Curve.
		return vec
	},
}

export { GeometryUtils }
