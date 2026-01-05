import { GAME_STATUSES } from "./GAME_STATUSES.js";

const _data = {
	status: GAME_STATUSES.SETTINGS,
};

// getter

export function getStatus() {
	return _data.status
}
