let index = 0;
displayImages(index);

function displayImages(n) {
    let i;
    const images = document.getElementsByClassName("image");
    if (n >= images.length) {
        index = 0;
    } 
    if (n < 0) {
        index = images.length - 1;
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[index].style.display = "block";
}

// Function to navigate manually
function plusSlides(n) {
    displayImages(index += n);
}

// Auto play slideshow
function autoSlides() {
    index++;
    displayImages(index);
    setTimeout(autoSlides, 8000); // Change image every 2 seconds
}

autoSlides();
