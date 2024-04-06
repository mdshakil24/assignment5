// Scroll to section js
function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
}

// Seat booking js

const allSeat = document.getElementsByClassName('seat-no');
let count = 0;
let price = 0;


for (const seat of allSeat) {

    seat.addEventListener('click', function (event) {
        // reduce the seat 
        event.target.classList.add('disabled');
        const seatLeft = document.getElementById('seat-left');
        const convertSeatToNumber = parseInt(seatLeft.innerText);
        const seatCount = convertSeatToNumber - 1;
        seatLeft.innerText = seatCount;

        // add the seat
        let seatAdd = document.getElementById('seat-add');
        const convertSeatAddNumber = parseInt(seatAdd.innerText);
        count = count + 1;
        seatAdd.innerText = count;


        // Add div with list of the price
        const addSeat = document.getElementById('add-seat');
        const updatePrice = document.getElementById('update-price');
        const grandTotal = document.getElementById('grand-total');
        const seatNo = event.target.innerText;
        const div = document.createElement('div');
        const li1 = document.createElement('li');
        li1.innerText = seatNo;
        div.appendChild(li1);
        const li2 = document.createElement('li');
        li2.innerText = 'Business Class';
        div.appendChild(li2);
        const li3 = document.createElement('li');
        li3.innerText = 550;
        div.appendChild(li3);
        addSeat.appendChild(div);

        const ticketPrice = parseInt(li3.innerText);
        price = price + ticketPrice;
        updatePrice.innerText = price;
        grandTotal.innerText = price;

        if (parseInt(seatAdd.innerText) === 5) {
            alert('Your booking limit is finished, Now you are not able to book any seat!!!');
            seatAdd.innerText = 4;
            count = 4;
            seatLeft.innerText = 36;
            event.target.classList.remove('disabled');
            addSeat.removeChild(div);
            updatePrice.innerText = ticketPrice * 4;
            grandTotal.innerText = ticketPrice * 4;
        }

        // Cupon code
        const inputField = document.getElementById('input-field');
        const applyBtn = document.getElementById('apply-btn');

        if (parseInt(seatAdd.innerText) >= 4) {
            inputField.addEventListener('keyup', function (event) {
                const inputText = event.target.value;
                if (inputText === "NEW15") {
                    applyBtn.removeAttribute('disabled');
                    const discountMoney = price * 15 / 100;
                    const totalMoney = price - discountMoney;
                    grandTotal.innerText = totalMoney;
                } else if (inputText === "Couple 20") {
                    applyBtn.removeAttribute('disabled');
                    const discountMoney = price * 20 / 100;
                    const totalMoney = price - discountMoney;
                    grandTotal.innerText = totalMoney;
                } else {
                    applyBtn.setAttribute('disabled', true);
                }
            });
        }









        if (seatCount === 0) {
            alert('No Seat Left, All Seat Are Booking')
            seatLeft.innerText = 40;
        }



    });
}


