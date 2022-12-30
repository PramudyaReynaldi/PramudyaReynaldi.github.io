window.onscroll = function() {
    var nav = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}
