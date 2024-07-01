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
        let phoneTitle = document.createElement("h3");
        let number = document.createElement("p");
        let address = document.createElement("p");
        let website = document.createElement("p"); 
        let membership = document.createElement("p");       

        fullName.textContent = `${member.name}`;
        number.textContent = `${member.phoneNumbers}`;
        address.textContent = `${member.addresses}`;
        website.textContent = `${member.websiteURL}`;
        membership.textContent = `${member.membershipLevel}`
        phoneTitle.textContent = "Phone Number";
        


        coverImage.setAttribute("src",member.image);
        

        card.appendChild(fullName);
        card.appendChild(coverImage);
        card.appendChild(number);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(phoneTitle);

        cards.appendChild(card);
    })
}

getMembersData();