export default function VideoTitleComponent(inputVideo) {
  const titleElement = document.createElement("h4");
  titleElement.textContent = inputVideo.title;
  return titleElement;
}
