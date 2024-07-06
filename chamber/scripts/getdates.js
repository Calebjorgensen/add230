const currentYear = new Date().getFullYear();

const lastModified = document.lastModified;

document.getElementById("copyright").innerHTML = `&copy; ${currentYear} Caleb Jorgensen WDD230`;

document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;