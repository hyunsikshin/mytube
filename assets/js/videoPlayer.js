const videoContainer = document.getElementById("jsVideoPlayer");
const playButton = document.getElementById("jsPlayButton");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const volumeButton = document.getElementById("jsVolumeBtn");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    videoPlayer.muted = true;
    volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function init() {
  playButton.addEventListener("click", handlePlayClick);
  volumeButton.addEventListener("click", handleVolumeClick);
}

if (videoContainer) {
  init();
}

// videoContainer.addEventListener("click", () => false);
