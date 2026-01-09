import { GAME_STATUSES } from "../state/GAME_STATUSES.js";
import { GameMode } from "./game-mode/gameModeComponent.js";
import { LoseMode } from "./loseModeComponent.js";
import { SettingsMode } from "./settingsModeComponent.js";

export const gameComponent = (status) => {
  const element = document.createElement("div");

  switch (status) {
    case GAME_STATUSES.SETTINGS:
      const settingsModeElement = SettingsMode();
      element.append(settingsModeElement);
      break;

    case GAME_STATUSES.IN_PROGRESS:
      const gameModeElement = GameMode();
      element.append(gameModeElement);
      break;

    case GAME_STATUSES.LOSE:
      const loseModeElement = LoseMode();
      element.append(loseModeElement);
      break;

    case GAME_STATUSES.WIN:
      const winModeElement = "WIN!";
      element.append(winModeElement);
      break;

    default:
      element.append("STATE IS INVALID");
  }

  return element;
};
