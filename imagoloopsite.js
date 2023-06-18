// MOVING IMAGE BACKGROUND

NUM_OF_PIC = 47
VIBRATION = 1
// Array to hold the image filenames
imageFiles = []
n = 1
while (n <= NUM_OF_PIC + 1) {
    imgLabel = 'image' + n + ".jpg"
    imageFiles.push(imgLabel)
    n = n + 1
}

// Function to load the images
function loadImages() {
  const imageContainer = document.getElementById('image-container');

  // Iterate over each image filename
  imageFiles.forEach((filename) => {
    const image = new Image();
    image.src = 'Background Images/' + filename;

    // Add the image to the container
    imageContainer.appendChild(image);
  });
}

// Function to animate the images
function animateImages() {
  const images = document.querySelectorAll('#image-container img');

  // Set initial position for each image
  images.forEach((image) => {
    image.style.position = 'absolute';
    image.style.left = Math.random() * window.innerWidth - 500 + 'px';
    image.style.top = Math.random() * window.innerHeight - 500 + 'px';
  });

  // Function to update the position of the images
  function updatePositions() {
    images.forEach((image) => {
      const currentLeft = parseFloat(image.style.left);
      const currentTop = parseFloat(image.style.top);

      // Calculate new position
      const newX = currentLeft + Math.random() * 2 * VIBRATION - VIBRATION;
      const newY = currentTop + Math.random() * 2 * VIBRATION - VIBRATION;

      // Update image position
      image.style.left = newX + 'px';
      image.style.top = newY + 'px';
    });

    // Call the function recursively
    requestAnimationFrame(updatePositions);
  }

  // Start the animation
  updatePositions();
}

// Load the images and start the animation when the page is ready
window.addEventListener('load', () => {
  loadImages();
  animateImages();
});

//////////////////////////////////////////////////////////////////////////////