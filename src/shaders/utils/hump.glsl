float hump(float x, float waveSize) {
	return pow(2.0, waveSize) / (pow(x * 100.0, 4.0) + pow(2.0, waveSize));
}