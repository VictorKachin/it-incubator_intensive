import { VideoComponent } from "./Video/VideoComponent.js";

export function VideosComponent(inputVideo) {
  const element = document.createElement("ul");

  for (let j = 0; j < inputVideo.length; j++) {
    const video = inputVideo[j];

    const videoEl = VideoComponent(video);

    element.append(videoEl);
  }

  return element;
}
