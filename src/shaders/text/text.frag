// input uniforms
uniform float uAspectRatio;
uniform sampler2D uNoiseTexture;
uniform float uOpacity;
uniform float uTargetOpacity;
uniform float uTime;

// input varyings
varying float vDistance;
varying float vMouseStrengh;
varying vec3 vPosition;
varying vec4 vRandom;
varying float vTweenProgressFract;
varying vec2 vUv;

#define M_PI 3.1415926535897932384626433832795

#include "../utils/logger";
#include "../utils/perlin";
#include "../utils/random";
#include "../utils/rotation";
#include "../utils/simplex";

void main() {
	vec2 vUv = vec2(vUv.x * uAspectRatio, vUv.y);

	// Dot
	float strength = distance(gl_PointCoord, vec2(0.5));
	//	strength += vMouseStrengh * 10.0;
	strength = step(0.5, strength);
	strength = 1.0 - strength;
	//	gl_FragColor = vec4(vRandom.xyz, strength);
	vec2 ownCol = vRandom.xy * (1.0 - vMouseStrengh * 40.0);
	vec2 rotatedCol =
		rotate(vRandom.xy, M_PI * 0.5, vec2(0.5)) * vMouseStrengh * 40.0;

	float tweenProgressInv = 1.0 - vTweenProgressFract;
	float opacity = pow(
		uOpacity * tweenProgressInv + uTargetOpacity * vTweenProgressFract, 4.0);
	gl_FragColor = vec4(ownCol + rotatedCol, vRandom.z, strength * opacity);
}