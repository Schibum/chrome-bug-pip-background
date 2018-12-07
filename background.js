
let video = document.createElement('video');
video.loop = true;
video.src = 'https://www.w3schools.com/html/mov_bbb.mp4';
video.preload = 'metadata';

function openPiP() {
  video.play();
  video.requestPictureInPicture();
}

chrome.browserAction.onClicked.addListener(openPiP);
