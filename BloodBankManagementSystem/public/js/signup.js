// const hasOwnProperty = require("has");

// const error = (element, message) => {
//     const errors = document.querySelector('.errors')
//     errors.innerHTML = message;
// }
// const success = (element) => {
//     const errors = document.querySelector('.errors')
//     errors.innerHTML = '';

// }

const validation = () => {
    const user = document.querySelector('#username')
    const email = document.querySelector('#email')
    const phone = document.querySelector('#phone')
    const frst_password = document.querySelector('#password')
    const con_password = document.querySelector('#con_password')
    const submit = document.querySelector('.btn');
    submit.disabled = true
    const errors = document.querySelectorAll('.errors')

    //user name validation
    const username = user.value
    //regex
    const alphabate = /^[A-Z a-z]+$/
    const len = /^.{5,20}$/;

    const validA = alphabate.test(username);
    const validB = len.test(username);

    if (validA && validB) {

        user.style.borderBottomColor = "green";
        errors[0].innerHTML = '';
        submit.disabled = false;


    }
    else {
        user.style.borderBottomColor = "red";
        // user_err.innerHTML='';
        errors[0].innerHTML = 'username contain minimum 5 charecters';
        submit.disabled = true;

    }

    //----------------------------------------------------------------------
    // email_val validation
    const email_val = email.value;
    //regex
    const validmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const vmail = validmail.test(email_val)

    if (vmail) {

        email.style.borderBottomColor = "green";
        errors[1].innerHTML = ''
        submit.disabled = false;

    }
    else if (email_val == '') {
        email.style.borderBottomColor = "red";
        errors[1].innerHTML = ' email field is blank';
        submit.disabled = true;

    }
    else {
        email.style.borderBottomColor = "red";
        errors[1].innerHTML = ' invalid email';
        submit.disabled = true;

    }

    //----------------------------------------------------------------------

    //phone number validation
    const phone_val = phone.value;
    const no_format = /^(?=.*[0-9])/;
    const no_len = /^.{10}$/;

    const phone_no = no_format.test(phone_val);
    const phone_no_len = no_format.test(no_len);

    if (phone_no && phone_val.length >= 10) {

        phone.style.borderBottomColor = "green";
        errors[2].innerHTML = ''
        submit.disabled = false;

    }
    else if (phone_val == '') {
        phone.style.borderBottomColor = "red";
        errors[2].innerHTML = ' phone no field is blank';
        submit.disabled = true;

    }
    else {
        phone.style.borderBottomColor = "red";
        errors[2].innerHTML = 'invalid phone no';
        submit.disabled = true;

    }
    //----------------------------------------------------------------------


    //password validation section
    const firstpasword = frst_password.value;

    //regex
    const spaces = /^(?=.*\s)/;
    const capi = /^(?=.*[A-Z])/;
    const smal = /^(?=.*[a-z])/;
    const numb = /^(?=.*[0-9])/;
    const symb = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
    const lent = /^.{8,16}$/;

    //password vlidation


    if (firstpasword == "") {
        frst_password.style.borderBottomColor = "red";
        errors[3].innerHTML = 'password is blank';
        submit.disabled = true;


    }

    else if (spaces.test(firstpasword)) {
        frst_password.style.borderBottomColor = "red";
        errors[3].innerHTML = `invalid password`;
        submit.disabled = true;


    }

    else if (!capi.test(firstpasword)) {
        frst_password.style.borderBottomColor = "red";
        errors[3].innerHTML = `password contain atleast one capital letter`;
        submit.disabled = true;



    }


    else if (!smal.test(firstpasword)) {
        frst_password.style.borderBottomColor = "red";
        errors[3].innerHTML = `password contain atleast one small letter`;

        submit.disabled = true;

    }


    else if (!numb.test(firstpasword)) {
        frst_password.style.borderBottomColor = "red";
        errors[3].innerHTML = `password contain atleast one digit`;
        submit.disabled = true;

    }

    else if (!symb.test(firstpasword)) {
        frst_password.style.borderBottomColor = "red";
        errors[3].innerHTML = `password contain atleast one special charecter`;

        submit.disabled = true;

    }

    else if (!lent.test(firstpasword)) {
        frst_password.style.borderBottomColor = "red";
        errors[3].innerHTML = `password contain minimum 7 charecter`;
        submit.disabled = true;

    }
    else {
        frst_password.style.borderBottomColor = "green";
        errors[3].innerHTML = '';
        submit.disabled = false;

    }
    //----------------------------------------------------------------------
    // comfirm password validation

    const password2 = con_password.value;

    if (firstpasword === password2 && password2.length > 0) {
        con_password.style.borderBottomColor = "green";
        errors[4].innerHTML = '';
        submit.disabled = false;

    }
    else if (password2 == '') {
        con_password.style.borderBottomColor = "red";
        errors[4].innerHTML = `confirm password field is blank`;
        submit.disabled = true;

    }
    else {
        con_password.style.borderBottomColor = "red";
        errors[4].innerHTML = `password not mached`;
        submit.disabled = true;

    }

}
// label movement 
const label = document.querySelectorAll('.row')
label.forEach((e) => {
    e.addEventListener('click', (a) => {
        e.children[0].classList.remove('movement');
        const error = e.children[2]
        // console.log(  error.innerHTML  );
    })
})

// const label = document.querySelectorAll('.row')


// const labe = document.querySelectorAll('.form__input')
// labe.forEach((a) => {
//     a.addEventListener('click', (c) => {
//         console.log(a);

//         // label.children[0].classList.remove('movement');
//         // const error = a.children[2]
//         // console.log(a);
//         // console.log(  label[i] );
//     })
// })


