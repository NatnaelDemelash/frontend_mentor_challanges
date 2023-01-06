const notifyBtn = document.querySelector('.btn')
const userValue = document.querySelector('input')
const errMsg = document.querySelector('.error')

notifyBtn.addEventListener('click', () => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!userValue.value.match(validRegex)) {
        errMsg.style.visibility = 'visible';
        userValue.style.border = "1px solid hsl(354, 100%, 66%)"
        userValue.value = "";
    } else {
        userValue.style.border = "1px solid hsl(223, 100%, 88%)"
        errMsg.style.visibility = 'hidden';
        alert('Thanks! We will notify you soon');
    }

})