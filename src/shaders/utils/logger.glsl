vec4 logFloat(vec4 gl_FragColor, vec2 vUv, float uTime, float theFloat) {
	float dotSize = 0.3;
	if (vUv.x < dotSize && vUv.y < dotSize) {
		float frequency = 1.0;
		return vec4(1., 0., step(0.5 * frequency, mod(uTime, 1. * frequency)), 1.0);
	} else {
		return gl_FragColor;
	}
}
