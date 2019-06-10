function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function startAnimation() {
    const cartoon = document.getElementById('cartoon');
    cartoon.classList.remove('start', 'end');
    setTimeout(() => {
        cartoon.classList.add('start');
    }, 10);
    return false;
}
window.onload = () => {
    // Fastforward to the end if a user already watched it
    const ls = window.localStorage;
    if (ls.getItem('hasWatchedAnimation')) {
        const cartoon = document.getElementById('cartoon');
        cartoon.classList.remove('start');
        cartoon.classList.add('end');
    } else {
        cartoon.classList.add('start');
        ls.setItem('hasWatchedAnimation', true);
    }
    // Create stars
    const star = document.querySelector('.star');
    const stars = document.querySelector('.stars');
    for(let i = 0; i <= 40; i++) {
        const newStar = star.cloneNode();
        const top = getRandomInt(100);
        const left = getRandomInt(100);
        const size = getRandomInt(20) / 200;
        newStar.setAttribute('style', `top: ${top}%; left: ${left}%; width: ${size}em; height: ${size}em`);
        stars.appendChild(newStar);
    }
}

// Pause cartoon when a user scrolls away
// Safari supports it but it doesn't really work
if (navigator.userAgent.indexOf("Chrome") !== -1) {
    window.onscroll = throttle(() => {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        document.getElementById('cartoon').classList.toggle('pause', window.innerHeight * 0.5 <= scrollPosition);
    }, 200);
}