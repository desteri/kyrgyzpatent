
function getAchieve() {
    document.querySelectorAll('.achieve span').forEach(item => {
        let numberTop = item.getBoundingClientRect().top;
        let start = +item.innerHTML;
        let end = +item.dataset.max;

        window.addEventListener('scroll', function onScroll() {
            if (window.scrollY > numberTop - window.innerHeight) {
                this.removeEventListener('scroll', onScroll);
                let interval = setInterval(function () {
                    item.innerHTML = ++start;
                    if (start == end) {
                        clearInterval(interval);
                    }
                }, 20);
            }
        });
    });
}

getAchieve();