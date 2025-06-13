// script.js
document.addEventListener("DOMContentLoaded", function () {
  const youtubePlayer = document.getElementById("youtube-player");

  // Set default playback rate
  youtubePlayer.addEventListener("load", function () {
    youtubePlayer.contentWindow.postMessage(
      '{"event":"command","func":"setPlaybackRate","args":[1]}',
      "*"
    );
  });
});

