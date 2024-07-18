const url = "https://calebjorgensen.github.io/wdd230/final/data/rentals.json";

const slideshow = document.querySelector("#slideshow");

async function getRentalsData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}