var colors = ['#5c5cff', '#ff5e57', '#6bc44b', '#f0f04e'];

var sayColor = [' blue', ' red', ' green', ' yellow'];

var limbs = ['left arm', 'right arm', 'left leg', 'right leg'];
var output = document.querySelector('h1');



var intervalTime = '20000';


function loop() {

    var pickColors = Math.floor(Math.random() * colors.length);
    var pickLimbs = Math.floor(Math.random() * limbs.length);

    var resultLimbs = limbs[pickLimbs];
    var resultColors = colors[pickColors];
    var resultSayColors = sayColor[pickColors];

    output.textContent = resultLimbs;
    output.style.color = resultColors;

    const msg = new SpeechSynthesisUtterance('bip bopb' + resultLimbs + resultSayColors);
    msg.lang = 'en-UK';
    msg.pitch = 1;
    msg.rate = 0.7;
    window.speechSynthesis.speak(msg);
}





loop();
var interval = setInterval(loop, intervalTime);
