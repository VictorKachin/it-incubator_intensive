import { VideoImageComponent } from "./VideoImage/VideoImageComponent.js";
import VideoTitleComponent from "./VideoTitle/VideoTitleComponent.js";
import { VideoUrlComponent } from "./VideoUrl/VideoUrlComponent.js";

import { playlists } from "../../../../../data/data.js";

export function VideoComponent(inputVideo) {
  const element = document.createElement("li");
  element.classList.add("video");

  element.append(
    VideoImageComponent(inputVideo.imageSource),
    VideoTitleComponent(inputVideo),
    VideoUrlComponent(inputVideo),
  );

  return element;
}
