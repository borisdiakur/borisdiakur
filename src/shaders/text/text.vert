// input attributes
attribute vec4 aRandom;
attribute vec3 aTargetPosition;

// input uniforms
uniform float uAmplitudeX;
uniform float uAmplitudeY;
uniform float uAspectRatio;
uniform vec2 uBBoxMax;
uniform vec2 uBBoxMin;
uniform float uFrequency;
uniform float uIsOrtho;
uniform float uMouseX;
uniform float uMouseY;
uniform float uNoiseRotation;
uniform sampler2D uNoiseTexture;
uniform float uSize;
uniform float uTime;
uniform float uTweenDuration;
uniform float uTweenProgress;

// output varyings
varying vec2 vUv;
varying float vDistance;
varying float vMouseStrengh;
varying vec3 vPosition;
varying vec4 vRandom;
varying float vTweenProgressFract;

//#include "../utils/perlin";
#include "../utils/hump";
#include "../utils/inverseLerp";
#include "../utils/remap";
#include "../utils/rotation";

#define M_PI 3.1415926535897932384626433832795

void main() {
	// Noisify
	vec4 noise =
		texture(uNoiseTexture, rotate(position.xy, uNoiseRotation, vec2(0)));

	// Randomize tween progress
	//
	//                          tweenFract = 0.2
	//                                   V
	//     tweenMin (random) -> 0.6    0.8 <- tweenMax
	//                  0 - - - - - -|- -|- - 1 <- tweenDuration
	//
	float tweenFract = uTweenDuration / 1.5;
	float tweenMin =
		(uTweenDuration - tweenFract) * (aRandom.x + aRandom.y + aRandom.z) / 3.0;
	float tweenMax = tweenMin + tweenFract;
	float tweenProgressFract =
		clamp(remap(uTweenProgress, tweenMin, tweenMax, 0.0, 1.0), 0.0, 1.0);
	vTweenProgressFract = tweenProgressFract;

	// Move vertices to target position
	float tweenProgressInv = 1.0 - tweenProgressFract;
	vec3 tweenPositionDirect = vec3(
		position.x * tweenProgressInv + aTargetPosition.x * tweenProgressFract,
		position.y * tweenProgressInv + aTargetPosition.y * tweenProgressFract,
		position.z * tweenProgressInv + aTargetPosition.z * tweenProgressFract);
	vec3 tweenPositionNoise =
		vec3(tweenPositionDirect.x +
					 noise.x * 0.25 * sin(tweenProgressFract * M_PI),
				 tweenPositionDirect.y +
					 noise.y * 0.125 * sin(tweenProgressFract * M_PI),
				 tweenPositionDirect.z);
	vec4 modelPosition = modelMatrix * vec4(tweenPositionNoise, 1.0);

	// Additional movement on mouse over
	//
	//          hump
	//          ->          X
	//  0 ____/TTT\_____________ 1
	//
	vec4 _viewPosition = viewMatrix * modelPosition;
	float mouseStrenghX =
		hump((_viewPosition.x / 2.0) - uMouseX + 0.5, 8.0) / 10.0;
	float mouseStrenghY =
		hump((_viewPosition.y * uAspectRatio / 2.0) + uMouseY - 0.5,
				 7.5 * (pow(uAspectRatio, 0.5))) /
		10.0;
	float mouseStrengh = min(1.0, mouseStrenghX * mouseStrenghY * 2.5);

	// Some vibration on mouse over
	modelPosition.x +=
		mouseStrengh * cos((uTime + aRandom.x) * 50.0 * aRandom.y) * 0.05;
	modelPosition.y +=
		mouseStrengh * sin((uTime + aRandom.y) * 50.0 * aRandom.x) * 0.05;

	// Wobble effect
	float frequency = 1.0;
	float _y = sin(modelPosition.x * frequency);
	float t = 0.005 * (-uTime * 100.0 * (1.0 - aRandom.z / 3.0));
	_y += sin(modelPosition.x * frequency * 2.1 + t) * 4.5 * aRandom.y;
	_y += sin(modelPosition.x * frequency * 1.72 + t * 1.121) * 4.0 * aRandom.y;
	_y += sin(modelPosition.x * frequency * 2.221 + t * 0.437) * 5.0 * aRandom.y;
	_y += sin(modelPosition.x * frequency * 3.1122 + t * 4.269) * 2.5 * aRandom.y;
	_y *= uAmplitudeY * 0.003;
	float _x = sin(modelPosition.y * frequency);
	_x += sin(modelPosition.y * frequency * 2.1 + t) * 4.5 * aRandom.x;
	_x += sin(modelPosition.y * frequency * 1.72 + t * 1.121) * 4.0 * aRandom.x;
	_x += sin(modelPosition.y * frequency * 2.221 + t * 0.437) * 5.0 * aRandom.x;
	_x += sin(modelPosition.y * frequency * 3.1122 + t * 4.269) * 2.5 * aRandom.x;
	_x *= uAmplitudeX * 0.003;
	float _z = sin(modelPosition.z * frequency);
	_z += sin(modelPosition.z * frequency * 2.1 + t) * 4.5 * aRandom.z;
	_z += sin(modelPosition.z * frequency * 1.72 + t * 1.121) * 4.0 * aRandom.z;
	_z += sin(modelPosition.z * frequency * 2.221 + t * 0.437) * 5.0 * aRandom.z;
	_z += sin(modelPosition.z * frequency * 3.1122 + t * 4.269) * 2.5 * aRandom.z;
	_z *= (uAmplitudeX + uAmplitudeY) * 0.0015;
	modelPosition.y += _y * 0.1 * aRandom.z;
	modelPosition.x += _x * 0.1 * aRandom.x;
	modelPosition.z += _z * 0.1 * aRandom.y;

	// Boost effect
	modelPosition.x +=
		(aRandom.x - 0.5) * 6.0 * mouseStrengh * aRandom.z;
	modelPosition.y -=
		-abs((aRandom.y - 0.5) * 4.0 * mouseStrengh * aRandom.z);
	modelPosition.z +=
		(aRandom.z - 0.5) * 2.0 * mouseStrengh * aRandom.x;

	vec4 viewPosition = viewMatrix * modelPosition;
	vec4 projectedPosition = projectionMatrix * viewPosition;

	gl_Position = projectedPosition;
	gl_PointSize = max(0.01, uSize * (aRandom.y + 0.5));
	gl_PointSize *= (1.0 / max(uIsOrtho, -viewPosition.z));

	vDistance = abs(10.0) * 0.01 * aRandom.z;
	vMouseStrengh = mouseStrengh;
	vPosition = modelPosition.xyz;
	vRandom = aRandom;
	vUv = uv;
}