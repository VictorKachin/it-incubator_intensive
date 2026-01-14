import { GAME_STATUSES } from './GAME_STATUSES.js'

const _state = {
	status: GAME_STATUSES.SETTINGS,
	settings: {
		gridSize: {
			rowCount: 4,
			columnCount: 4
		}
	},
	position: {
		google: { x: 0, y: 0 },
		player1: { x: 3, y: 3 },
		player2: { x: 2, y: 2 }
	}
}

let observer = null

export function subscribe(callback) {
	observer = callback
}

// getter / selector

export function getStatus() {
	return _state.status
}

export function getGridSize() {
	return _state.settings.gridSize
}

export function getGooglePosition() {
	return _state.position.google
}

// setter / command /mutation / action

export function startGame() {
	_state.status = GAME_STATUSES.IN_PROGRESS

	observer()

	setInterval(() => {
		_state.position.google.x++

		observer()
	}, 1000)
}

// function getRandomInt(max) {
// 	return Math.floor(Math.random() * max)
// }

// https://www.youtube.com/watch?v=NbQ_ktgxF60
// 1:35:00
