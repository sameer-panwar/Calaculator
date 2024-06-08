let outputValue=document.querySelector(".output");
let calculation='';


function display(input){
    calculation += input;
    let initialDisplay = document.querySelector('.initial');
    initialDisplay.innerHTML = calculation;
    initialDisplay.style.color = 'rgb(176, 9, 176)';
}

function clearAll(){
    document.querySelector('.initial').innerHTML='';
    document.querySelector('.final').innerHTML='';
    calculation='';
}

function calculate(){
    try {
        let result = eval(calculation);
        document.querySelector('.final').innerHTML = `=  ${result}`;
    } catch (error) {
        document.querySelector('.final').innerHTML = 'Error';
    }
}
function clearLastChar(){
    calculation=calculation.slice(0,-1);
    document.querySelector('.initial').innerHTML=calculation;
    document.querySelector('.final').innerHTML='';
}

