window.onload = function () {
    document.querySelector('h1').onmouseover = onMouseOver;
    document.querySelector('h1').onmouseover = onMouseOut;
    document.querySelector('background').onmouseover = backgroundOnMouseOver;
    document.querySelector('background').onmouseover = backgroundOnMouseOut;
    console.log(document.querySelectorAll('h1'));
    for (let i of document.querySelectorAll('h1')) {
        i.onmouseover = h1OnMouseOver;
        i.onmouseout = h1OnMouseOut;
    }
    console.log(document.querySelectorAll('background'));
    for (let i of document.querySelectorAll('background')) {
        i.onmouseover = backgroundOnMouseOver;
        i.onmouseout = backgroundOnMouseOut;
    }
}

function onMouseOver() {
    this.innerHTML = "HEY THERE LITTLE BOI";
    this.style.color = "black";
    this.style.backgroundColor = "white";
}
function onMouseOut() {
    this.innerHTML = "Putin: Russia's Choice";
    this.style.color = "rgb(0, 95, 48)";
    this.style.backgroundColor = "rgb(255, 0, 0)";
}
function backgroundOnMouseOver() {
    this.style.backgroundColor = "black";
}
function backgroundOnMouseOver() {
    this.style.backgroundColor = "rgb(211, 184, 255)";
}