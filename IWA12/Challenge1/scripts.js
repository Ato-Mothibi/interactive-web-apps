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