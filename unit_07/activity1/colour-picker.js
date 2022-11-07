document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("colr1").addEventListener("mouseover", changeColour);
    document.getElementById("colr2").addEventListener("mouseover", changeColour);
    document.getElementById("colr3").addEventListener("mouseover", changeColour);
    document.getElementById("colr4").addEventListener("mouseover", changeColour);
    document.getElementById("colr5").addEventListener("mouseover", changeColour);
    document.getElementById("colr6").addEventListener("mouseover", changeColour);
    document.getElementById("colr7").addEventListener("mouseover", changeColour);
    document.getElementById("colr8").addEventListener("mouseover", changeColour);
});

function changeColour() {
    document.getElementById("mainColr").style.backgroundColor = this.style.backgroundColor;
}
