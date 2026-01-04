import { rootEl } from "../../index.js";
import { PlaylistComponent } from "./Playlist/PlaylistComponent.js";

export function MainComponent(inputPlaylists) {
  const element = document.createComment("div");

  for (let i = 0; i < inputPlaylists.length; i++) {
    const playlist = inputPlaylists[i];
    rootEl.append(PlaylistComponent(playlist));
  }

  return element;
}
