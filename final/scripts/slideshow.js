
const url = "https://calebjorgensen.github.io/wdd230/final/data/rentals.json";

const slideshow = document.querySelector(".slideshow");

let slideIndex = 0;
let slides = [];
const slideContainer = document.querySelector('.slides-container');



fetch(url)
    .then(response => response.json())
    .then(data => {
        slides = data.rentals;
        renderSlides();
        showSlides(slideIndex);
    });

function renderSlides() {
    slides.forEach(slide => {
        const slideElement = document.createElement('div');
        slideElement.classList.add('slide');
        slideElement.innerHTML = `
            <img src="${slide.rentalImage}" alt="${slide.rentalType}">
            <h2>${slide.rentalType}</h2>
            <p>Max Persons: ${slide.maxPersons}</p>
        `;
        slideContainer.appendChild(slideElement);
    });
}

function showSlides(n) {
    const slidesArray = document.querySelectorAll('.slide');
    if (n >= slidesArray.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slidesArray.length - 1; }
    slidesArray.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => changeSlide(1), 5000);
});

