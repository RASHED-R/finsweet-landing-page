//preloader
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        $("#panel_left").addClass("panel_left");
        $("#panel_right").addClass("panel_right");
        $("#loader").addClass("loaded-circle");
        $("#loader-img").addClass("loaded-img");
        $("#preloader").addClass("loaded-img");
    }
}
// nav main
let hamburgerMain = document.querySelector('.hamburger');
let mobileNavMain = document.querySelector('.nav-menu-ul');

let barsMain = document.querySelectorAll('.hamburger span');

let isActiveMain = false;
hamburgerMain.addEventListener('click', function () {

    if (mobileNavMain.classList.contains('open')) {
        mobileNavMain.classList.remove('open')
        document.getElementsByTagName('body')[0].style = 'overflow-y: scroll';
    } else {
        mobileNavMain.classList.add('open')
        document.getElementsByTagName('body')[0].style = 'overflow-y: hidden';

    }
    if (!isActiveMain) {
        barsMain[0].style.transform = 'rotate(45deg)'
        barsMain[1].style.opacity = '0'
        barsMain[2].style.transform = 'rotate(-45deg)'
        isActiveMain = true;
    } else {
        barsMain[0].style.transform = 'rotate(0deg)'
        barsMain[1].style.opacity = '1'
        barsMain[2].style.transform = 'rotate(0deg)'
        isActiveMain = false;
    }

})
// nav-scroll
window.onscroll = function () {
    scrollFunction()
};
let position = document.getElementById("scrollNavbar");

function scrollFunction() {
    if (document.documentElement.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        position.classList.add("is-sticky");
    } else {
        position.classList.remove("is-sticky");

    }
}