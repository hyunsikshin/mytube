const videoContainer = document.getElementById("jsVideoPlayer");
const playButton = document.getElementById("jsPlayButton");
const videoPlayer = document.querySelector("#jsVideoPlayer video");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function init() {
  playButton.addEventListener("click", handlePlayClick);
}

if (videoContainer) {
  init();
}

// videoContainer.addEventListener("click", () => false);
