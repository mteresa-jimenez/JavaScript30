"use strict";

function handleAudio(ev) {
  const audio = document.querySelector(`audio[key-code="${ev.keyCode}"]`);
}

window.addEventListener("keydown", handleAudio);
