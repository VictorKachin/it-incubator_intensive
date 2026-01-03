// DATA

const playlists = [
	{
		id: 1,
		title: 'Rock Hits',
		description: 'Best Classic Rock Songs Of All Time 🔥',
		videos: [
			{
				title: 'Classic Rock Songs 70s 80s 90s Full Album',
				url: 'https://www.youtube.com/watch?v=4_O-y3SM3UM',
				isHot: true,
				imageSource: 'img/80-rock-hits.jpeg'
			},
			{
				title: '70s 80s 90s Classic Rock 🎵 Top 50 Beautiful Rock Songs',
				url: 'https://www.youtube.com/watch?v=ZrEnyrc7Pj8',
				isHot: false,
				imageSource: 'img/80-rock-hits_1.jpeg'
			}
		]
	},
	{
		id: 2,
		title: "Dance hits 80's and 90's",
		description: 'Golden Hits of Disco 80/90',
		videos: [
			{
				title: 'Golden Hits of Disco 80/90 Vol. 1 (Various artists)',
				url: 'https://www.youtube.com/watch?v=K9G3OSrAT-E',
				isHot: true,
				imageSource: 'img/80-pop-hits.jpeg'
			},
			{
				title: 'MTV EUROPE 90s VIDEOS COMPILATION',
				url: 'https://www.youtube.com/watch?v=nYOMzNYO21c',
				isHot: false,
				imageSource: 'img/80-pop-hits_1.jpeg'
			}
		]
	}
]

// RENDER

const rootEl = document.getElementById('root')
const playlistsElement = MainComponent(playlists)

rootEl.append(playlistsElement)

// components

function MainComponent(inputPlaylists) {
	const element = document.createComment('div')

	for (let i = 0; i < inputPlaylists.length; i++) {
		const playlist = inputPlaylists[i]
		rootEl.append(PlaylistComponent(playlist))
	}

	return element
}

function PlaylistComponent(inputPlaylist) {
	const element = createElement('div', ['playlist'])

	// element.classList.add('playlist')

	const playlistTitleEl = document.createElement('h2')
	playlistTitleEl.textContent = inputPlaylist.title
	element.append(playlistTitleEl)

	const descriptionEl = document.createElement('h3')
	descriptionEl.textContent = inputPlaylist.description

	element.append(descriptionEl)

	element.append(VideosComponent(inputPlaylist.videos))

	return element
}

function VideosComponent(inputVideo) {
	const element = document.createElement('ul')

	for (let j = 0; j < inputVideo.length; j++) {
		const video = inputVideo[j]

		const videoEl = VideoComponent(video)

		element.append(videoEl)
	}

	return element
}

function VideoComponent(inputVideo) {
	//create

	const element = document.createElement('li')
	element.classList.add('video')

	// add data

	element.append(
		VideoImageComponent(inputVideo.imageSource),
		VideoTitleComponent(inputVideo),
		VideoUrlComponent(inputVideo)
	)

	// return

	return element
}

function VideoImageComponent(inputVideoSource) {
	const imageElement = document.createElement('img')
	imageElement.src = inputVideoSource
	return imageElement
}

function VideoTitleComponent(inputVideo) {
	const titleElement = document.createElement('h4')
	titleElement.textContent = inputVideo.title
	return titleElement
}

function VideoUrlComponent(inputVideo) {
	const urlElement = document.createElement('a')
	urlElement.href = inputVideo.url
	urlElement.textContent = inputVideo.url
	return urlElement
}

function createElement(tagName, classes = []) {
	const element = document.createElement(tagName)
	classes.forEach(c => {
		element.classList.add(c)
	})
	return element
}
