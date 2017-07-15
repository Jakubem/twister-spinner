var loading_bar = document.querySelector('.loading');

loading_bar.style.animationDuration = intervalTime + 'ms';
loading_bar.style.animationPlayState = 'running';

var resetMyAnimation = function () {
    if (loading_bar.matches('.loading')) {
        loading_bar.classList.remove('loading');
        setTimeout(function () {
            loading_bar.classList.add('loading_reset');
        }, 10);
    } else if (loading_bar.matches('.loading_reset')) {
        loading_bar.classList.remove('loading_reset');
        setTimeout(function () {
            loading_bar.classList.add('loading');
        }, 10);
    }
};

var keyboard = document.body.addEventListener('keypress', function (ev) {
    if (ev.code === 'Space') {
        loop();
        clearInterval(interval);
        interval = setInterval(loop, intervalTime);
    }
    resetMyAnimation();
});
