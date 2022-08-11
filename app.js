window.onscroll = function(){stickyScroll()};

let navbar = document.getElementById(navbar);

let sticky = navbar.offsetTop;

function stickyScroll() {
    if (window.pageXOffset >= sticky){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky")
    }
}