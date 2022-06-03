// document.getElementsByClassName('features-dropdown')[0].style.display = "inline-block";

let dropdown = document.getElementsByClassName('features-dropdown')[0];

function activateDropDown (){
    dropdown.style.display = "inline-block";
}

function deactivateDropDown () {
    dropdown.style.display = "none";
}

dropdown.onmouseover = activateDropDown;
dropdown.onmouseout = deactivateDropDown;