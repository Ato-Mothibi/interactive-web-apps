// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


// Select all the elements
const statusElements = document.querySelectorAll('.status');
const reserveButtons = document.querySelectorAll('.reserve');
const checkoutButtons = document.querySelectorAll('.checkout');
const checkinButtons = document.querySelectorAll('.checkin');

// Loop through all the book elements
for (let i = 0; i < statusElements.length; i++) {
  const status = statusElements[i].textContent.trim();
  const statusInfo = STATUS_MAP[status];

  // Set the color of the status element
  statusElements[i].style.color = statusInfo.color;

  // Set the status of the reserve button
  reserveButtons[i].disabled = !statusInfo.canReserve;
  reserveButtons[i].style.color = reserveButtons[i].disabled ? 'gray' : 'black';

  // Set the status of the checkout button
  checkoutButtons[i].disabled = !statusInfo.canCheckout;
  checkoutButtons[i].style.color = checkoutButtons[i].disabled ? 'gray' : 'black';

  // Set the status of the checkin button
  checkinButtons[i].disabled = !statusInfo.canCheckIn;
  checkinButtons[i].style.color = checkinButtons[i].disabled ? 'gray' : 'black';
}





/*
// Get DOM elements for each book
const book1 = document.getElementById('book1');
const book2 = document.getElementById('book2');
const book3 = document.getElementById('book3');

// Update book 1
const book1Status = book1.querySelector('.status').textContent;
const book1ReserveBtn = book1.querySelector('.reserve');
const book1CheckoutBtn = book1.querySelector('.checkout');
const book1CheckinBtn = book1.querySelector('.checkin');
book1CheckinBtn.style.color = 'black';
book1ReserveBtn.disabled = !STATUS_MAP[book1Status].canReserve;
book1CheckoutBtn.disabled = !STATUS_MAP[book1Status].canCheckout;
book1CheckinBtn.disabled = !STATUS_MAP[book1Status].canCheckIn;
book1.querySelector('.status').style.color = STATUS_MAP[book1Status].color;

// Update book 2
const book2Status = book2.querySelector('.status').textContent;
const book2ReserveBtn = book2.querySelector('.reserve');
const book2CheckoutBtn = book2.querySelector('.checkout');
const book2CheckinBtn = book2.querySelector('.checkin');
book2CheckinBtn.style.color = 'black';
book2ReserveBtn.disabled = !STATUS_MAP[book2Status].canReserve;
book2CheckoutBtn.disabled = !STATUS_MAP[book2Status].canCheckout;
book2CheckinBtn.disabled = !STATUS_MAP[book2Status].canCheckIn;
book2.querySelector('.status').style.color = STATUS_MAP[book2Status].color;

// Update book 3
const book3Status = book3.querySelector('.status').textContent;
const book3ReserveBtn = book3.querySelector('.reserve');
const book3CheckoutBtn = book3.querySelector('.checkout');
const book3CheckinBtn = book3.querySelector('.checkin');
book3CheckinBtn.style.color = 'black';
book3ReserveBtn.disabled = !STATUS_MAP[book3Status].canReserve;
book3CheckoutBtn.disabled = !STATUS_MAP[book3Status].canCheckout;
book3CheckinBtn.disabled = !STATUS_MAP[book3Status].canCheckIn;
book3.querySelector('.status').style.color = STATUS_MAP[book3Status].color;*/

