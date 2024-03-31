// Scroll to section
function scrollToSection(id){
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
    console.log(id);
}

// Seat booking js

const seatLeft = document.getElementById('seat-left').innerText;
const convertNumberSeatLeft = parseInt(seatLeft)
console.log(convertNumberSeatLeft);