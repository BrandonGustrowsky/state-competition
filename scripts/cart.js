const bookingModal = document.getElementById("booking-modal");
const bookingModalCloseBtns = document.querySelectorAll(".close-modal");
const bookBtns = document.querySelectorAll(".book-btn");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const dateInput = document.getElementById("date-input");
const cartData = [];

class Booking {
    constructor(name, email, date) {
        this.name = name;
        this.email = email;
        this.date = date;
    }
}

const saveData = () => {
    const bookingInfo = new Booking(nameInput.value, emailInput.value, dateInput.value);
    
    // Reset all the inputs
    nameInput.value = "";
    emailInput.value = "";
    dateInput.value = "";

    //Add to the global array of bookings
    cartData.push(bookingInfo)
    console.log(cartData);
    closeModal();
}

const openAndPopulateModal = () => {
    bookingModal.classList.add("is-active");
}

const closeModal = () => {
    bookingModal.classList.remove("is-active");
}

bookBtns.forEach(btn => {
    btn.addEventListener("click", openAndPopulateModal);
})

bookingModalCloseBtns.forEach(button => {
    button.addEventListener("click", closeModal);
})