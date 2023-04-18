const bookingModal = document.getElementById("booking-modal");
const bookingModalCloseBtns = document.querySelectorAll(".close-modal");
const bookBtns = document.querySelectorAll(".book-btn");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const dateInput = document.getElementById("date-input");

// Checkout modal variables
const checkoutCart = document.getElementById("checkout-cart");
const checkoutModal = document.getElementById("checkout-modal");
const closeCheckoutModalBtns = document.querySelectorAll(".close-checkout-modal");
const checkoutCardBody = document.getElementById("checkout-card-body");

const cartData = [];

class Booking {
    constructor(name, email, date) {
        this.name = name;
        this.email = email;
        this.date = date;
        this.photographer = photographer
    }
}

const saveData = () => {
    const bookingInfo = new Booking(nameInput.value, emailInput.value, dateInput.value, photographer);

    // Reset all the inputs
    nameInput.value = "";
    emailInput.value = "";
    dateInput.value = "";
    photographer = "";

    //Add to the global array of bookings
    cartData.push(bookingInfo)
    console.log(cartData);
    closeModal();
}

const openAndPopulateModal = (event) => {
    photographer = event.target.dataset.value;
    bookingModal.classList.add("is-active");
}

const closeModal = () => {
    bookingModal.classList.remove("is-active");
    photographer = "";
}

const showCheckoutModal = () => {
    checkoutModal.classList.add("is-active");
    addCheckoutElement();
}

const closeCheckoutModal = () => {

    checkoutModal.classList.remove("is-active");
    while (checkoutCardBody.firstChild) {
        checkoutCardBody.removeChild(checkoutCardBody.firstChild);
    }
}

const addCheckoutElement = () => {
    cartData.forEach(booking => {
        const container = document.createElement("div");
        container.classList.add("modal-card-element");
        console.log(booking); container.classList.add("modal-card-element");
        const photographerName = document.createElement("p")
        photographerName.innerText = booking.photographer;
        photographerName.classList.add("photographerOutput");
        console.log(photographerName);
        const timeOutput = document.createElement("p");
        timeOutput.innerText = booking.date;
        timeOutput.classList.add("timeOutput");
        console.log(timeOutput);
        container.appendChild(photographerName);
        container.appendChild(timeOutput);
        checkoutCardBody.appendChild(container);
    })
}

bookBtns.forEach(btn => {
    btn.addEventListener("click", event => openAndPopulateModal(event));
})

bookingModalCloseBtns.forEach(button => {
    button.addEventListener("click", closeModal);
})

closeCheckoutModalBtns.forEach(btn => {
    btn.addEventListener("click", closeCheckoutModal)
})

checkoutCart.addEventListener("click", showCheckoutModal);