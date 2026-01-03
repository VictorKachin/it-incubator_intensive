// DATA

const playlists = [
  {
    id: 1,
    title: "Rock Hits",
    description: "Best Classic Rock Songs Of All Time 🔥",
    videos: [
      {
        title: "Classic Rock Songs 70s 80s 90s Full Album",
        url: "https://www.youtube.com/watch?v=4_O-y3SM3UM",
        isHot: true,
        imageSource: "img/80-rock-hits.jpeg",
      },
      {
        title: "70s 80s 90s Classic Rock 🎵 Top 50 Beautiful Rock Songs",
        url: "https://www.youtube.com/watch?v=ZrEnyrc7Pj8",
        isHot: false,
        imageSource: "img/80-rock-hits_1.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "Dance hits 80's and 90's",
    description: "Golden Hits of Disco 80/90",
    videos: [
      {
        title: "Golden Hits of Disco 80/90 Vol. 1 (Various artists)",
        url: "https://www.youtube.com/watch?v=K9G3OSrAT-E",
        isHot: true,
        imageSource: "img/80-pop-hits.jpeg",
      },
      {
        title: "MTV EUROPE 90s VIDEOS COMPILATION",
        url: "https://www.youtube.com/watch?v=nYOMzNYO21c",
        isHot: false,
        imageSource: "img/80-pop-hits_1.jpeg",
      },
    ],
  },
];

// RENDER

const rootEl = document.getElementById("root");

for (let i = 0; i < playlists.length; i++) {
  const playlist = playlists[i];
  const playlistEl = document.createElement("div");
  playlistEl.classList.add("playlist");

  const titleEl = document.createElement("h2");
  titleEl.textContent = playlist.title;
  playlistEl.appendChild(titleEl);

  const descriptionEl = document.createElement("p");
  descriptionEl.textContent = playlist.description;
  playlistEl.appendChild(descriptionEl);

  const videosEl = document.createElement("ul");

  for (let j = 0; j < playlist.videos.length; j++) {
    const video = playlist.videos[j];
    const videoEl = document.createElement("li");
    videoEl.classList.add("video");

    const imageEl = document.createElement("img");
    imageEl.src = video.imageSource;
    videoEl.appendChild(imageEl);

    const titleEl = document.createElement("h3");
    titleEl.textContent = video.title;
    videoEl.appendChild(titleEl);

    const urlEl = document.createElement("a");
    urlEl.href = video.url;
    urlEl.textContent = video.url;
    videoEl.appendChild(urlEl);

    videosEl.appendChild(videoEl);
  }

  playlistEl.appendChild(videosEl);

  rootEl.appendChild(playlistEl);
}

function createVideoElement() {}
