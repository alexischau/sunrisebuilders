const largeImage = document.getElementById('largeImage');
const images = ['INSERT PAGES HERE'];
let currentIndex = 0;

function changeImage(imageSrc) {
  largeImage.src = imageSrc;
  currentIndex = images.indexOf(imageSrc);
}

document.querySelector('.prev').addEventListener('click', function() {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  largeImage.src = images[currentIndex];
});

document.querySelector('.next').addEventListener('click', function() {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  largeImage.src = images[currentIndex];
});
