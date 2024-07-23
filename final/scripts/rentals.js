const url = "https://calebjorgensen.github.io/wdd230/final/data/rentals.json";

const cards = document.querySelector("#cards");

async function getRentalData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    displayRentals(data.rentals);
}

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        let card = document.createElement("section");
        let coverImage = document.createElement("img");
        let vehicleName = document.createElement("h2");
        let personSize = document.createElement("p");


        vehicleName.textContent = `${rental.rentalType}`;


        coverImage.setAttribute("src",rental.rentalImage);

        card.appendChild(vehicleName);
        card.appendChild(coverImage);
        card.appendChild(personSize);

        cards.appendChild(card);
    })
}

getRentalData();