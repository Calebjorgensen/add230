const input1 = document.getElementById("stateInput");
const input2 = document.getElementById("countryInput");

input1.addEventListener("input", function() {
    if (input1.value.trim() !== "") {
        input2.removeAttribute("required");
    }
    else {
        input2.setAttribute("required", "required");
    }
});

input2.addEventListener("input", function() {
    if (input2.value.trim() !== "") {
        input1.removeAttribute("required");
    }
    else {
        input1.setAttribute("required", "required");
    }
});