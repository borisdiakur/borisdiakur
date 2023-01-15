varying vec2 vUv;

#include "../utils/perlin.glsl"

void main() {
	float frequency = 1.;
	float perlin1 = perlin3dPeriodic(vec3(vUv.xy * frequency * 5.0, 12.34),
																	 vec3(frequency * 5.0));
	float perlin2 = perlin3dPeriodic(vec3(vUv.xy * frequency * 10.0, 34.56),
																	 vec3(frequency * 10.0));
	float perlin3 = perlin3dPeriodic(vec3(vUv.xy * frequency * 20.0, 56.78),
																	 vec3(frequency * 20.0));
	float perlin4 = perlin3dPeriodic(vec3(vUv.xy * frequency * 40.0, 56.78),
																	 vec3(frequency * 40.0));
	gl_FragColor = vec4(perlin1, perlin2, perlin3, perlin4);
}