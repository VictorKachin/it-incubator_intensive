import { getStatus } from "../state/data.js";
import { gameComponent } from "./gameComponent.js";

const rootElement = document.getElementById('root')

const status = getStatus()

const gameElement = gameComponent(status)

rootElement.append(gameElement)


