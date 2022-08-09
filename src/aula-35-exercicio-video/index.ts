interface VideoPlayerElements {
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
    playToggle(): void;
    stop(): void;
    iniciarEventos(): void;
}

export class VideoPlayer implements VideoPlayerProtocol {
    private videoPlayer: HTMLVideoElement;
    private playButton: HTMLButtonElement;
    private stopButton: HTMLButtonElement;

    constructor(videoElements: VideoPlayerElements) {
        this.videoPlayer = videoElements.videoPlayer;
        this.playButton = videoElements.playButton;
        this.stopButton = videoElements.stopButton;
    }

    playToggle(): void {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = 'Pause';
        } else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    }

    stop(): void {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.innerText = 'Play';
    }

    iniciarEventos(): void {
        this.playButton.addEventListener('click', this.playToggle.bind(this));
        this.stopButton.addEventListener('click', this.stop.bind(this));
    }
}

const select = (query: string) => document.querySelector(query);

const videoPlayer = new VideoPlayer({
    videoPlayer: select('.video') as HTMLVideoElement,
    playButton: select('.play') as HTMLButtonElement,
    stopButton: select('.stop') as HTMLButtonElement,
});

videoPlayer.iniciarEventos();
