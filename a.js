document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById('menu-icon');
    var navbar = document.querySelector('.navbar');
    
    menuIcon.addEventListener('click', function() {
        console.log("Menu icon clicked"); // Debugging
        navbar.classList.toggle('show');
    });
});