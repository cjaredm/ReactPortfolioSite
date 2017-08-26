/* Sticky Nav */
const nav = document.querySelector(".nav");
const navHeight = nav.offsetHeight;
const topOfNav = nav.offsetTop;
const landing = document.querySelector(".nav").parentElement;
const landingHeight = landing.offsetHeight;
const almostBottomOfLanding = landingHeight - navHeight;
const nextSib = document.querySelector(".nav").nextSibling;

export function fixNav() {
    let scrolledDown = false;

    if (window.scrollY >= topOfNav + 2) {
        //nextSib.style.paddingTop = `${nav.offsetHeight}px`;
        document.body.classList.add("fixed-nav");
        scrolledDown = true;
    } else {
        //nextSib.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
        scrolledDown = false;
    }

    if (window.scrollY >= almostBottomOfLanding) {
        nav.style.backgroundColor = "black";
    } else if (scrolledDown) {
        nav.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        nav.style.backgroundColor = "transparent";
    }
}