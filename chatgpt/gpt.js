
// Get references to the HTML elements
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = slider.getElementsByTagName('img');
let currentIndex = 0;

// Function to show the current image and hide others
function showImage(index) {
// Hide all images
for (let i = 0; i < images.length; i++) {
images[i].classList.remove('active');
}

// Show the image at the specified index
images[index].classList.add('active');
}

// Function to show the next image
function nextImage() {
currentIndex++;
if (currentIndex >= images.length) {
currentIndex = 0;
}
showImage(currentIndex);
}

// Function to show the previous image
function prevImage() {
currentIndex--;
if (currentIndex < 0) {
currentIndex = images.length - 1;
}
showImage(currentIndex);
}

// Attach event listeners to the buttons
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Show the initial image
showImage(currentIndex);

