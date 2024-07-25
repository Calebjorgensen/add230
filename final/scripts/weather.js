const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=20.44284&lon=-86.92055&exclude=daily&appid=97736a7ce7990381579bf806d4bb426f&units=imperial";

async function apiFetch() {
    try{
        const response = await fetch(weatherUrl);
        if(response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        }else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp} -F`;

}

apiFetch();