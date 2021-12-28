'use strict';

function navDropAndUp() {
    let header = document.querySelector('header');
    let up = document.querySelector('.up');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 100) {
            header.classList.add('fixed');
            up.style.display = 'block';
        } else {
            header.classList.remove('fixed');
            up.style.display = 'none';
        }
    });
}

navDropAndUp();