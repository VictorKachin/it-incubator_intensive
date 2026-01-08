import { getStatus, subscribe } from '../state/data.js'
import { gameComponent } from './gameComponent.js'

const rootElement = document.getElementById('root')

function render() {
	rootElement.innerHTML = ''

	const status = getStatus()

	const gameElement = gameComponent(status)

	rootElement.append(gameElement)
}

render()

// https://www.youtube.com/watch?v=NbQ_ktgxF60
// 56:30 - 1:03:18

subscribe(render)
