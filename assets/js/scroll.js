// add class navbarDark on navbar scroll
const navBar = document.getElementById('nav-id');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        navBar.classList.add('navbar-dark');
    }
    else {
        navBar.classList.remove('navbar-dark');
    }
}