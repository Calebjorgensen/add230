const url = "https://calebjorgensen.github.io/wdd230/final/data/rentals.json";
const cards = document.querySelector("#cards");
//This is a test line
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#close-btn");
const popupImg = document.querySelector("#popup-img");
const popupTitle = document.querySelector("#popup-title");
const popupPersonSize = document.querySelector("#popup-personSize");
const popupReservationHalfDay = document.querySelector("#popup-reservationHalfDay");
const popupReservationFullDay = document.querySelector("#popup-reservationFullDay");
const popupWalkInHalfDay = document.querySelector("#popup-walkInHalfDay");
const popupWalkInFullDay = document.querySelector("#popup-walkInFullDay");
const halfDaySaving = document.querySelector("#halfSaving");

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
        let reserveHalfday = document.createElement("p");



        vehicleName.textContent = `${rental.rentalType}`;
        personSize.textContent = `${rental.maxPersons}`;
        reserveHalfday.textContent = `${rental.reservation[0].rHalfDay}`;

        coverImage.setAttribute("src",rental.rentalImage);

        card.appendChild(vehicleName);
        card.appendChild(coverImage);
        // card.appendChild(personSize);
        // card.appendChild(reserveHalfday);

        //This is a test line
        card.addEventListener("click", () => {
            popupImg.src = rental.rentalImage;
            popupTitle.textContent = rental.rentalType;
            popupPersonSize.textContent = rental.maxPersons;

            popupReservationHalfDay.textContent = `Reservation Half Day Price: ${rental.reservation[0].rHalfDay}`;
            popupWalkInHalfDay.textContent = `Walkin Half Day Price: ${rental.walkin[0].wHalfDay}`;
            

            popupReservationFullDay.textContent = `Reservation Full Day Price: ${rental.reservation[0].rFullDay}`;
            popupWalkInFullDay.textContent = `Walkin Full Day Price: ${rental.walkin[0].wFullDay}`;

            halfDaySaving.textContent = `Save today by reserving your ride!`;


            popup.classList.add("show");
        });



        cards.appendChild(card);
    });
}


closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
});

getRentalData();




