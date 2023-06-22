// IMAGES MAKE SOUNDS ON HOVER
const images = document.getElementsByClassName('soundImage');

Array.from(images).forEach((image) => {
  const soundFile = image.getAttribute('data-sound');
  const audio = new Audio('sounds/' + soundFile);

  image.addEventListener('mouseenter', playSound);

  function playSound() {
    audio.play();
  }
});

///////////////////////////////////////////////////////////////////////////////