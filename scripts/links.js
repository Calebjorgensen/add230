const baseURL = "https://calebjorgensen.github.io/wdd230/";

const linksURL = "https://calebjorgensen.github.io/wdd230/data/links.json";

const cards = document.querySelector(".cards");

async function getLinks() {
  try{  
  const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    console.log("fetch data:", data);

    if (Array.isArray(data)){
      displayLinks(data);
    }else if(data && Array.isArray(data.weeks)) {
      displayLinks(data.weeks);
    }else {
      console.error("Unexpected data format:", data);
    }
  }catch (error){
      console.error("Error fecthing links: ", error);
  }
}

async function displayLinks(weeks) {
    const linksContainer = document.getElementById('card'); // Assuming you have a container element with this ID
    //linksContainer.innerHTML = ''; // Clear any existing links
  
    weeks.forEach((week) => {
      const weekDiv = document.createElement('div');
      weekDiv.classList.add('week');
  
      const weekTitle = document.createElement('h3');
      weekTitle.textContent = `Week ${week.week}`;
      weekDiv.appendChild(weekTitle);
  
      const linksList = document.createElement('ul');
  
      week.links.forEach((link) => {
        const listItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.title;
        listItem.appendChild(linkElement);
        linksList.appendChild(listItem);
      })
  
      weekDiv.appendChild(linksList);
      linksContainer.appendChild(weekDiv);
    })
  }


getLinks();
