import { getStatus, startGame } from '../state/data.js'

export function SettingsMode() {
	const element = document.createElement('div')

	const gridSizeSelectElement = document.createElement('select')
	const gridSizeOptionElement = document.createElement('option')
	gridSizeOptionElement.append('4x4')
	gridSizeSelectElement.append(gridSizeOptionElement)
	element.append(gridSizeSelectElement)

	const startButtonElement = document.createElement('button')
	startButtonElement.append('START')

	startButtonElement.addEventListener('click', () => {
		console.log(getStatus())
		startGame()
		console.log(getStatus())
	})

	element.append(startButtonElement)

	return element
}

// https://www.youtube.com/watch?v=NbQ_ktgxF60
// 48:40
