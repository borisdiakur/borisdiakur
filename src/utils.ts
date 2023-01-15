export const isTouchDevice =
	'ontouchstart' in window ||
	navigator.maxTouchPoints > 0 ||
	(navigator as unknown as { msMaxTouchPoints: number }).msMaxTouchPoints > 0

export const isIOS =
	[
		'iPad Simulator',
		'iPhone Simulator',
		'iPod Simulator',
		'iPad',
		'iPhone',
		'iPod',
	].includes(navigator.platform) ||
	// iPad on iOS 13 detection
	(navigator.userAgent.includes('Mac') && 'ontouchend' in document)

export const isHighPerfDevice =
	!isTouchDevice || isIOS || window.navigator.hardwareConcurrency > 4
