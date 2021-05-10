// trigger for hamburger side nav menu
const burgerMenu = document.getElementById('#mobile-nav');

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, burgerMenu)
})

//tigger for login modal
const modal = document.getElementById('#modal1');

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, modal)
})