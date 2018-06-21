window.onload = function() {
    document.querySelector("h1").onmouseover = mouseHover;
    document.querySelector("h1").onmouseout = noMouseHover;
    document.querySelector("img").onmousedown = mouseClick;
    console.log(document.querySelectorAll("ul li"));
    for(let i of document.querySelectorAll("ul li")); {
        i.onmouseover = liMouseHover;
        i.mouseout = liNoMouseHover;
    } 
}
function mouseHover() {
    this.innerHTML = "OPPA TRUMPU";
    this.style.color = "white";
    this.style.backgroundColor = "black";
}
function noMouseHover() {
    this.innerHTML = "PUTIN";
    this.style.color = "black";
    this.style.backgroundColor = "#f47c7c";        
}
function mouseClick() {
    this.src = "https://i.pinimg.com/originals/29/9e/0d/299e0dec0ba682fca835d632f6f14246.jpg";
}
function liMouseHover() {
    this.classlist.add("active");
}
function liNoMouseHover() {
    this.classlist.remove("active");
}