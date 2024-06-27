const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=45.84053&lon=-119.28587&appid=97736a7ce7990381579bf806d4bb426f&units=imperial";

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);//Remember to remove this later.
        }else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}