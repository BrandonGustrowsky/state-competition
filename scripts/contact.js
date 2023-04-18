const inputFields = document.querySelectorAll('.contact-field')
const contactText = document.querySelector('.contact-first')
const submitBtn = document.querySelector('.submission-btn')
const cancelBtn = document.querySelector('#cancel-btn')
const formContainer = document.querySelector('.form')
const submitMessages = document.querySelectorAll('.after-text')
const errorText = document.querySelector('.error-text')

// clear fields when 'cancel' is clicked
cancelBtn.addEventListener('click', () => {
    for (let field of inputFields) {
        field.value = ''
    }
    // clear error text
    errorText.style.display = 'none'
})

submitBtn.addEventListener('click', () => {
    // make sure required fields are filled out
    for (let field of inputFields) {
        if (field.value == '') {
            errorText.style.display = 'block'
            errorText.textContent = `Please enter a value in the ${field.placeholder} field.`
            return
        }
    }

    // display success message
    formContainer.style.display = 'none'
    contactText.style.display = 'none'
    for (let message of submitMessages) {
        message.style.display = 'block'
    }
})
