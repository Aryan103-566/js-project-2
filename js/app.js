// CUSTOM CURSOR STARTS HERE //
let cursor = document.querySelector('.cursor')
let dot = document.querySelector(".dot");

function customCursor (event) {
    
let leftValue = event.pageX
let topValue = event.pageY
   
cursor.style.top = `${topValue}px`;
cursor.style.left = `${leftValue}px`;

dot.style.top = `${topValue}px`;
dot.style.left = `${leftValue}px`;
}
window.addEventListener("mousemove", customCursor);
// CUSTOM CURSOR ENDS HERE //


// DARKMODE STARTS HERE //
let darkModeBtn = document.querySelector(".darkModeBtn");
let body  = document.querySelector('body')
let heading = document.querySelector("#darkModeArea .wrapper h2");
function setDarkMode() {
    body.classList.toggle('darkmode')
    if (body.classList.contains("darkmode")) {
        // dark
        heading.innerHTML = 'Dark Mode'
    } else{
        // light
        heading.innerHTML = 'Light Mode'
    }
}
darkModeBtn.addEventListener("click", setDarkMode);
// DARKMODE ENDS HERE //