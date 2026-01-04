export function VideoUrlComponent(inputVideo) {
  const urlElement = document.createElement("a");
  urlElement.href = inputVideo.url;
  urlElement.textContent = inputVideo.url;
  return urlElement;
}
