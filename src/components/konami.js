/* Listening in the background for key presses until the Konami Code is typed, then it redirects the page to the Konami Code Wiki page */

const pressed = [];
const konami = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

window.addEventListener("keyup", e => {
    pressed.push(e.key);
    pressed.splice(-konami.length - 1, pressed.length - konami.length);

    if (pressed.join("") == konami.join("")) {
        console.log("Komani Code entered successfully!");

        //Add Something in here that would be fun.
        window.location.href = "https://en.wikipedia.org/wiki/Konami_Code";
    }
});