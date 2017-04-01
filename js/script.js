//Script for hamburger menu sliding effect

var hamButton = document.querySelector(".hamburger-menu");
var menu = document.getElementById("nav-menu");
var body = document.querySelector('body');
var closeIcon = document.querySelector('.close-icon');

hamButton.addEventListener('click', function(e) {
    console.log("registered click");
    menu.classList.toggle('active');
    e.stopPropagation();
});

//Remove Menu when anywhere on the body is clicked
body.addEventListener('click',function() {
    if(menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

//Remove Menu when X sign is clicked 
closeIcon.addEventListener('click', function() {
    menu.classList.remove('active');
});