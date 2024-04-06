// Scroll to section js
function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
}

// Add hidden class
function addHidden(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}
// Remove hidden class
function removeHidden(id) {
    const element = document.getElementById(id);
    element.classList.remove('hidden');
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
        const lastUpdatePrice = document.getElementById('update-price');
        const cuponLabel = document.getElementById('cupon-code');

        // discount show
        const discountContainer = document.getElementById('add-discount');
        const discountList1 = document.createElement('li');
        const discountList2 = document.createElement('li');

        if (parseInt(seatAdd.innerText) >= 4) {
            inputField.addEventListener('keyup', function (event) {
                const inputText = event.target.value;
                if (inputText === "NEW15") {
                    applyBtn.removeAttribute('disabled');
                    // discount show
                    const discountMoney = parseInt(lastUpdatePrice.innerText) * 15 / 100;
                    discountList1.innerText = 'Get Discount';
                    discountList2.innerText = `BDT ${discountMoney}`;
                    discountContainer.appendChild(discountList1);
                    discountContainer.appendChild(discountList2);

                    applyBtn.addEventListener('click',function(){
                        const totalMoney = parseInt(lastUpdatePrice.innerText) - discountMoney;
                        grandTotal.innerText = totalMoney;
                        cuponLabel.classList.add('hidden');
                    })
                } else if (inputText === "Couple 20") {
                    applyBtn.removeAttribute('disabled');
                    // discount show
                    const discountMoney = parseInt(lastUpdatePrice.innerText) * 20 / 100;
                    discountList1.innerText = 'Get Discount';
                    discountList2.innerText = `BDT ${discountMoney}`;
                    discountContainer.appendChild(discountList1);
                    discountContainer.appendChild(discountList2);

                    applyBtn.addEventListener('click',function(){
                        const totalMoney = parseInt(lastUpdatePrice.innerText) - discountMoney;
                        grandTotal.innerText = totalMoney;
                        coupleLabel.classList.add('hidden');
                    })
                } else {
                    applyBtn.setAttribute('disabled', true);
                }
            });
        }

        // Enable next button
        const nextBtn = document.getElementById('next-btn');
        const continueBtn = document.getElementById('continue-btn');
        const phoneNum = document.getElementById('phone-number');
        const allNum = '0123456789';
        const allNumArray = allNum.split('')
        if(event.target) {
            phoneNum.addEventListener('keyup',function(e){
                for(const num of allNum) {
                    console.log(num)
                    if(e.key === num || e.target.value) {
                        nextBtn.classList.remove('disabled-submit');
                    }
                }
            });
        }

        nextBtn.addEventListener('click',function(){
            addHidden('main-page');
            removeHidden('success');
        });
        continueBtn.addEventListener('click',function(){
            removeHidden('main-page');
            addHidden('success');
        });

        if (seatCount === 0) {
            alert('No Seat Left, All Seat Are Booking')
            seatLeft.innerText = 40;
        }
    });
}


