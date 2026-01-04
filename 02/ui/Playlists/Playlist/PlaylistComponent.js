import { createElement } from "../../../createElement.js";
import { VideosComponent } from "./Videos/VideosComponent.js";

export function PlaylistComponent(inputPlaylist) {
  const element = createElement("div", ["playlist"]);

  // element.classList.add('playlist')
  const playlistTitleEl = document.createElement("h2");
  playlistTitleEl.textContent = inputPlaylist.title;
  element.append(playlistTitleEl);

  const descriptionEl = document.createElement("h3");
  descriptionEl.textContent = inputPlaylist.description;

  element.append(descriptionEl);

  element.append(VideosComponent(inputPlaylist.videos));

  return element;
}
