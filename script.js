// document.getElementsByClassName('features-dropdown')[0].style.display = "inline-block";

let dropdown = document.getElementsById('features');
let dropdown2 = document.getElementsById('company');

let activateDropDown = function (){
    dropdown.style.display = 'block';
}

function deactivateDropDown () {
    dropdown2.style.display = 'none';
}

dropdown.addEventListener('click',activateDropDown);