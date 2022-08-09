/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************************************!*\
  !*** ./src/aula-35-exercicio-video/index.ts ***!
  \**********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VideoPlayer = void 0;
class VideoPlayer {
    constructor(videoElements) {
        this.videoPlayer = videoElements.videoPlayer;
        this.playButton = videoElements.playButton;
        this.stopButton = videoElements.stopButton;
    }
    playToggle() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = 'Pause';
        }
        else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    }
    stop() {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.innerText = 'Play';
    }
    iniciarEventos() {
        this.playButton.addEventListener('click', this.playToggle.bind(this));
        this.stopButton.addEventListener('click', this.stop.bind(this));
    }
}
exports.VideoPlayer = VideoPlayer;
const select = (query) => document.querySelector(query);
const videoPlayer = new VideoPlayer({
    videoPlayer: select('.video'),
    playButton: select('.play'),
    stopButton: select('.stop'),
});
videoPlayer.iniciarEventos();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map