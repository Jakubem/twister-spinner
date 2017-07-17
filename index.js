var colors = ['#5c5cff', '#ff5e57', '#6bc44b', '#f0f04e'];

var sayColor = [' blue', ' red', ' green', ' yellow'];

var limbs = ['left arm', 'right arm', 'left leg', 'right leg'];
var output = document.querySelector('h1');

var mute = document.querySelector('.mute');

var input = document.querySelector('input');
//input.defaultValue = 15000;
var send = document.querySelector('.send');


//kartka kruci papieru
send.addEventListener('click', function () {
    var input = document.querySelector('input');
    if (Number(input.value) == 0) {
        return;
    }
    intervalTime = Number(input.value);
    currentTime.textContent = ' ' + intervalTime + 'ms';
    clearInterval(interval);
    resetMyAnimation();
    loadingBar.style.animationDuration = intervalTime + 'ms';
    interval = setInterval(loop, intervalTime);
});

var intervalTime = 15000;
var currentTime = document.querySelector('.current_time');

currentTime.textContent = ' ' + intervalTime + 'ms';

function loop() {

    var pickColors = Math.floor(Math.random() * colors.length);
    var pickLimbs = Math.floor(Math.random() * limbs.length);

    var resultLimbs = limbs[pickLimbs];
    var resultColors = colors[pickColors];
    var resultSayColors = sayColor[pickColors];

    output.textContent = resultLimbs;
    output.style.color = resultColors;

    if (mute.checked === true) {
        const msg = new SpeechSynthesisUtterance(resultLimbs + resultSayColors);
        msg.lang = 'en-UK';
        msg.pitch = 1;
        msg.rate = 0.7;
        speechSynthesis.speak(msg);
    }
}

loop();
var interval = setInterval(loop, intervalTime);
