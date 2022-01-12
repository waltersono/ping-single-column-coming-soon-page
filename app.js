'use strict';

const btnSubmit = document.querySelector('.form__btn');

const inputEmail = document.querySelector('.form__input');

const inputErrorEmail = document.querySelector('.form__input-error');


btnSubmit.addEventListener('click', e => {

    e.preventDefault();


    if (!inputEmail.checkValidity()) {


        inputErrorEmail.classList.add('form__input-error--show');

        inputEmail.classList.add('form__input--error');

        return;
    }

})