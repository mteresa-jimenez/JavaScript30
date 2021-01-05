"use strict";

function handleAudio(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", handleAudio);
