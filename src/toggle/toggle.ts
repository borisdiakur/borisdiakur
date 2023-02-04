import './toggle.css'

const toggle = document.createElement('label') as HTMLLabelElement
toggle.classList.add('dark-light-toggle')
toggle.ariaLabel = 'Switch between dark and light mode'
toggle.setAttribute('role', 'switch')
toggle.tabIndex = 0

let isDark
const storedPref = window.localStorage.getItem('dark-light')
if (storedPref) {
	isDark = storedPref === 'dark' ? true : false
} else {
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		isDark = true
	} else {
		isDark = false
	}
}

toggle.innerHTML = `
  <input id="dark-light-toggle" type="checkbox" ${isDark ? '' : 'checked'}>
  <div class="toggle-sun">
    <svg viewBox="0 0 120 120">
      <g><circle cx="60" cy="60" r="24" /></g>
      <g><circle class="ray" cx="30" cy="30" r="8" /></g>
      <g><circle class="ray" cx="60" cy="20" r="6" /></g>
      <g><circle class="ray" cx="85" cy="30" r="7" /></g>
      <g><circle class="ray" cx="100" cy="55" r="5" /></g>
      <g><circle class="ray" cx="96" cy="85" r="9" /></g>
      <g><circle class="ray" cx="72" cy="100" r="6" /></g>
      <g><circle class="ray" cx="45" cy="100" r="7" /></g>
      <g><circle class="ray" cx="20" cy="80" r="10" /></g>
      <g><circle class="ray" cx="17" cy="55" r="5" /></g>
    </svg>
  </div>
  <div class="toggle-moon">
    <svg viewBox="0 0 1024 1024">
      <g>
        <circle cx="512" cy="512" r="270" />
        <path style="transform-origin: center; scale: 0.6" d="M524.8 938.7h-4.3a439.9 439.9 0 0 1-313.1-134.4 446.3 446.3 0 0 1-11.1-597.4A432.2 432.2 0 0 1 366.9 90a42.7 42.7 0 0 1 45.3 9.4 42.7 42.7 0 0 1 10.2 42.7A358.4 358.4 0 0 0 505.2 518a361.4 361.4 0 0 0 376.7 82.7 42.7 42.7 0 0 1 54.2 55 433.5 433.5 0 0 1-99.8 155 438.6 438.6 0 0 1-311.5 128z"/>
      </g>
    </svg>
  </div>
`
document.body.appendChild(toggle)

const toggleInput = document.getElementById(
	'dark-light-toggle'
) as HTMLInputElement
toggleInput.addEventListener('change', () => {
	const isDark = !toggleInput.checked
	window.localStorage.setItem('dark-light', isDark ? 'dark' : 'light')
	document.documentElement.classList.add(`ui-${isDark ? 'dark' : 'light'}`)
	document.documentElement.classList.remove(`ui-${!isDark ? 'dark' : 'light'}`)
	document.documentElement.style.colorScheme = isDark ? 'dark' : 'auto'
})

toggle.addEventListener('keydown', (ev) => {
	const key = (ev as KeyboardEvent).key
	if (key === ' ' || key === 'Enter') {
		toggleInput.click()
	}
})

window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', (e) => {
		const isDark = e.matches
		window.localStorage.setItem('dark-light', isDark ? 'dark' : 'light')
		toggleInput.checked = !isDark
	})
