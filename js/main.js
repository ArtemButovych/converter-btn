'use strict';

const inputAmount = document.querySelector('.currency__input'),
    btnBit = document.querySelector('.btn-bit'),
    showRate = document.querySelector('.show__rate');

btnBit.addEventListener("click", function () {
    showRate.innerHTML = (Number(inputAmount.value) / Number(this.getAttribute('data-rate'))).toFixed(5);
})
