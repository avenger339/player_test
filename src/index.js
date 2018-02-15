class VideoPlayer {
	constructor(w, h, slot) {
		
		var css = require('./css/style.css')
		
		this.container = document.createElement('div')
		this.container.classList.add('playercontainer')
		this.videoContainer = document.createElement('div')
		this.videoContainer.classList.add('videocontainer')
		
		this.player = document.createElement('video')
		this.player.classList.add('videoplayer')
		this.source = document.createElement('source')
		
		this.player.setAttribute('width', w)
		this.player.setAttribute('height', h)
		
		this.controlsContainer = document.createElement('div')
		this.controlsContainer.classList.add('controlscontainer')
		
		this.playPauseButton = document.createElement('div')
		this.playPauseButton.classList.add('playpausebutton')
		var here = this
		this.playPauseButton.addEventListener('click', function() {
			if(here.player.paused) here.play()
			else here.pause()
		})
		
		this.player.appendChild(this.source)
		
		this.controlsContainer.appendChild(this.playPauseButton)
		this.videoContainer.appendChild(this.player)
	
		this.container.appendChild(this.videoContainer)
		this.container.appendChild(this.controlsContainer)
		
		slot.appendChild(this.container)
	}
	
	load (url) {
		this.source.setAttribute('src', url)
	}
	
	play() {
		this.player.play()
		this.playPauseButton.classList.add('play')
		this.playPauseButton.classList.remove('pause')
	}
	
	pause() {
		this.player.pause()
		this.playPauseButton.classList.add('pause')
		this.playPauseButton.classList.remove('play')
	}
}

module.exports = VideoPlayer