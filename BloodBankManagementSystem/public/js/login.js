
const validation = () => {
    const email_0r_phone = document.querySelector('#email_0r_phone').value;

    if (email_0r_phone.charCodeAt(0) >= 65 && email_0r_phone.charCodeAt(0) <= 90 || email_0r_phone.charCodeAt(0) >= 97 && email_0r_phone.charCodeAt(0) <= 122) {
        console.log('its a email');

    }
    else if (email_0r_phone.charCodeAt(0) >= 48 && email_0r_phone.charCodeAt(0) <= 57) {
        console.log("it is phone number");

    }
}
const label = document.querySelectorAll('.row')
label.forEach((e) => {
    e.addEventListener('click', (a) => {
        e.children[0].classList.remove('movement');
        const error = e.children[2]
        // console.log(  error.innerHTML  );
    })
})