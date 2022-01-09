let hb = document.querySelector('.header-main .hb');

function hbHandler(e) {
    e.currentTarget.classList.toggle('rotate');
    document.querySelector('.header-navbar').classList.toggle('open');
}


hb.addEventListener('click', hbHandler);