const url = "https://calebjorgensen.github.io/wdd230/chamber/members.json";

const cards = document.querySelector("#cards");

async function getMembersData() {
    const response = await fetch("https://calebjorgensen.github.io/wdd230/chamber/members.json");
    const data = await response.json();
    conosole.table("data.members");
}