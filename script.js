const video = document.getElementById(video);
const btn = document.getElementById(btn);

button.addEventListener('click', function () {
    if (button.textContent === 'Pause') {
      video.pause();
    } else if (button.textContent === 'Replay') {
      video.currentTime = 0;
      video.play();
      button.textContent = 'Pause';
    }
  });

video.addEventListener('ended',()=>{
    btn.textContent = 'Replay';
});