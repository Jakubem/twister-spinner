var colors = ['#5c5cff', '#ff5e57', '#6bc44b', '#f0f04e'];
var limbs = ['left arm', 'right arm', 'left leg', 'right leg'];
var output = document.querySelector('h1');

function loop() {

    var pick_colors = Math.floor(Math.random() * colors.length);
    var pick_limbs = Math.floor(Math.random() * limbs.length);

    var result_limbs = limbs[pick_limbs];
    var result_colors = colors[pick_colors];

    output.textContent = result_limbs;
    output.style.background = result_colors;
}

var intervalTime = '5000';


loop();
var interval = setInterval(loop, intervalTime);



var loading_bar = document.querySelector('.loading');

loading_bar.style.animationDuration = intervalTime + 'ms';
loading_bar.style.animationPlayState = 'running';

document.body.addEventListener('keypress', function (ev) {
    if (ev.code === 'Space') {
        loop();
        clearInterval(interval);
        interval = setInterval(loop, intervalTime);
    }
})
