const galleryImages = document.getElementById('galleryImages');
const images = galleryImages.getElementsByTagName('img');
let currentIndex = 0;

function prevImage() {
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    galleryImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    galleryImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}


const galleryImages2 = document.getElementById('galleryImages2');
const images2 = galleryImages2.getElementsByTagName('img');
let currentIndex2 = 0;

function prevImage2() {
    if (currentIndex2 === 0) {
        currentIndex2 = images2.length - 1;
    } else {
        currentIndex2--;
    }
    galleryImages2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
}

function nextImage2() {
    if (currentIndex2 === images2.length - 1) {
        currentIndex2 = 0;
    } else {
        currentIndex2++;
    }
    galleryImages2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
}


const galleryImages3 = document.getElementById('galleryImages3');
const Images3 = galleryImages3.getElementsByTagName('img');
let currentIndex3 = 0;

function prevImage2() {
    if (currentIndex3 === 0) {
        currentIndex3 = Images3.length - 1;
    } else {
        currentIndex3--;
    }
    galleryImages3.style.transform = `translateX(-${currentIndex3 * 100}%)`;
}

function nextImage2() {
    if (currentIndex3 === Images3.length - 1) {
        currentIndex3 = 0;
    } else {
        currentIndex3++;
    }
    galleryImages3.style.transform = `translateX(-${currentIndex3 * 100}%)`;
}

