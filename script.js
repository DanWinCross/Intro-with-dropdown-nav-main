// document.getElementsByClassName('features-dropdown')[0].style.display = "inline-block";

let dropdown = document.getElementsByClassName('features-dropdown');
let dropdown2 = document.getElementsByClassName('company-dropdown');

function activateDropDown (){
    Element.style.display = "inline-block";
}

function deactivateDropDown () {
    Element.style.display = "none";
}

dropdown.onmouseenter = activateDropDown;
dropdown.onmouseleave = deactivateDropDown;
dropdown2.onmouseenter = activateDropDown;
dropdown2.onmouseleave = deactivateDropDown;
