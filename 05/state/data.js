import { GAME_STATUSES } from "./GAME_STATUSES.js";

const _state = {
  status: GAME_STATUSES.SETTINGS,
};

let observer = null;

export function subscribe(callback) {
  observer = callback;
}

// getter / selector

export function getStatus() {
  return _state.status;
}

// setter / command /mutation / action

export function startGame() {
  _state.status = GAME_STATUSES.IN_PROGRESS;
  observer();
}
