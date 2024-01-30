
const members = [
    "Jardins d'Ariana",
    "Jérôme Livran",
    "Philippe Parguey",
    "Archimed",
    "BeCom"
];


function createDropdown() {
    const dropdown = document.createElement("select");
    dropdown.id = "clientDropdown";

    members.forEach((member, index) => {
        const option = document.createElement("option");
        option.value = index + 1; 
        option.text = member;
        dropdown.appendChild(option);
    });

    const form = document.querySelector('.form');
    form.appendChild(dropdown);
}


document.addEventListener('DOMContentLoaded', createDropdown);
