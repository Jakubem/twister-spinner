//get number from input
var timeInput = document.querySelector('.input-time');
var button = document.querySelector('.send');

//refresh input change
var inputNumber = Number(timeInput.value);
timeInput.addEventListener('input', function () {
    inputNumber = Number(timeInput.value);
});
