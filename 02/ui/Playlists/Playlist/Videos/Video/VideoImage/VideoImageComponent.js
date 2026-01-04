export function VideoImageComponent(inputVideoSource) {
  const imageElement = document.createElement("img");
  imageElement.src = inputVideoSource;
  return imageElement;
}
