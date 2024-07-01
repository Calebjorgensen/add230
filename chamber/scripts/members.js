const url = "https://calebjorgensen.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector("#cards");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let coverImage = document.createElement("img");
        let fullName = document.createElement("h2");
        let number = document.createElement("p")
        

        fullName.textContent = `${member.name}`;

        number.textContent = `${member.phonenumbers}`;


        coverImage.setAttribute("src",member.image);
        

        card.appendChild(fullName);
        card.appendChild(coverImage);
        card.appendChild(number);

        cards.appendChild(card);
    })
}

getMembersData();