import { playlists } from "./data/data.js";
import { MainComponent } from "./ui/Playlists/MainComponent.js";

export const rootEl = document.getElementById("root");
const playlistsElement = MainComponent(playlists);

rootEl.append(playlistsElement);
