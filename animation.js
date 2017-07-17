var loadingBar = document.querySelector('.loading');

loadingBar.style.animationDuration = intervalTime + 'ms';
loadingBar.style.animationPlayState = 'running';

var resetMyAnimation = function () {
    if (loadingBar.matches('.loading')) {
        loadingBar.classList.remove('loading');
        setTimeout(function () {
            loadingBar.classList.add('loading_reset');
        }, 10);
    } else if (loadingBar.matches('.loading_reset')) {
        loadingBar.classList.remove('loading_reset');
        setTimeout(function () {
            loadingBar.classList.add('loading');
        }, 10);
    }
};

var keyboard = document.body.addEventListener('keypress', function (ev) {
    if (ev.code === 'Space') {
        loop();
        clearInterval(interval);
        interval = setInterval(loop, intervalTime);
        resetMyAnimation();
    }
});
