let a=''; //always on the screen
let result; 
let equation = '';
let newEquation =[];

function clear(){
    a = '';
    result = '';
    equation='';
    newEquation=[];
    document.getElementById('screen').innerHTML = '';
    turnOnDot();
}

function addOne(){
    document.getElementById('screen').innerHTML = a+= '1';
    equation +='1';
}

function addTwo(){
    document.getElementById('screen').innerHTML = a+='2';
    equation +='2';
    }

function addThree(){
    document.getElementById('screen').innerHTML = a+='3'
    equation +='3';
    }

function addFour(){
   document.getElementById('screen').innerHTML = a+= '4'
   equation +='4';
    }

function addFive(){
    document.getElementById('screen').innerHTML = a+= '5';
    equation +='5';
    }
    
function addSix(){
    document.getElementById('screen').innerHTML = a+= '6';
    equation +='6';
    }
    
function addSeven(){
    document.getElementById('screen').innerHTML = a+= '7';
    equation +='7';
    }

function addEight(){
    document.getElementById('screen').innerHTML = a+= '8';
    equation +='8';
    }    

function addNine(){
    document.getElementById('screen').innerHTML = a+= '9';
    equation +='9';
    }

function addZero(){
    document.getElementById('screen').innerHTML = a+= '0';
    equation +='0';
    }    


function addPlus(){

    devideEquation();

    switch (newEquation.length){
        case 0 :
            clear();

        case 1: 
            a = '';
            equation += ' + ';
            checkDot();
            console.log(equation);
            return a, equation;

        case 2:
            a = '';
            equation = equation.slice(-3);
            equation += ' + ';
            checkDot();
            console.log(equation);
            return a, equation;

        case 3:
            solution();
    }
}

function addMinus(){

    devideEquation();

    switch (newEquation.length){
        case 0 :
            clear();

        case 1: 
            a = '';
            equation += ' - ';
            checkDot();
            console.log(equation);
            return a, equation;

        case 2:
            a = '';
            equation = equation.slice(-3);
            equation += ' - ';
            checkDot();
            console.log(equation);
            return a, equation;

        case 3:
            solution();
    }
 }

function addMultiply(){

    devideEquation();

    switch (newEquation.length){
        case 0 :
            clear();

        case 1: 
            a = '';
            equation += ' * ';
            checkDot();
            console.log(equation);
            return a, equation;

        case 2:
            a = '';
            equation = equation.slice(-3);
            equation += ' * ';
            checkDot();
            console.log(equation);
            return a, equation;

        case 3:
            solution();
    }

    }

function addDivision(){

    devideEquation();

    switch (newEquation.length){
        case 0 :
            clear();

        case 1: 
            a = '';
            document.getElementById('screen').innerHTML = a;
            equation += ' / ';
            checkDot();
            console.log(equation);
            return a, equation;

        case 2:
            a = '';
            document.getElementById('screen').innerHTML = a;
            equation = equation.slice(-3);
            equation += ' / ';
            checkDot();
            console.log(equation);
            return a, equation;

        case 3:
            solution();
    }
    }

function addDot(){
    a += '.'
    document.getElementById('screen').innerHTML = a;
    equation += '.';
    turnOffDot();
    }

function operate(){

    devideEquation();

    switch (newEquation.length){
        case 0 :
            clear();

        case 1: 
            document.getElementById('screen').innerHTML = newEquation[0];
            equation = newEquation[0].toString();;
            checkDot();
            console.log(equation);
            return equation;

        case 2:
            document.getElementById('screen').innerHTML = newEquation[0];
            equation = newEquation[0].toString;
            checkDot();
            console.log(equation);
            return equation;

        case 3:
            solution();
    }                  
    }

function devideEquation(){
newEquation = equation.split(' ');
    return newEquation;
}


function solution(){
    console.log(equation);
    switch(newEquation[1]){
        case '+' :
            result = Number(newEquation[0]) + Number(newEquation[2]);
            result = Math.round(result * 1000000000000) / 1000000000000 ;
            document.getElementById('screen').innerHTML = result;
            a = '';
            equation = result.toString();
            console.log(equation);
            return equation, a;
            
        case '-' :
            result = Number(newEquation[0]) - Number(newEquation[2])
            result = Math.round(result * 1000000000000) / 1000000000000 ;
            document.getElementById('screen').innerHTML = result;
            a = '';
            equation = result.toString();
            console.log(equation);
            return equation, a;

        case '*' :
            result = Number(newEquation[0]) * Number(newEquation[2])
            result = Math.round(result * 1000000000000) / 1000000000000 ;
            document.getElementById('screen').innerHTML = result;
            a = '';
            equation = result.toString();
            console.log(equation);
            return equation, a;

        case '/' :
            if (newEquation[2] = '0'){
            alert('Nie dziel przez zero!');
            clear();
            } else {
            result = Number(newEquation[0]) / Number(newEquation[2])
            result = Math.round(result * 1000000000000) / 1000000000000 ;
            document.getElementById('screen').innerHTML = result;
            a = '';
            equation = result.toString();
            console.log(equation);
            return equation, a;
    }}
}


function backspace() {
    a = document.getElementById('screen').innerHTML
    a = a.slice(0,-1);
    document.getElementById('screen').innerHTML = a;
    checkDot();
}

function turnOnDot(){
    document.getElementById('.').addEventListener('click',addDot);
}

function turnOffDot(){
    document.getElementById('.').removeEventListener('click',addDot);
}

function checkDot() {
    a.toString;
    a.includes('.') ? turnOffDot : turnOnDot();
};
window.onload = clear();
document.getElementById('1').addEventListener('click',addOne);
document.getElementById('2').addEventListener('click',addTwo);
document.getElementById('3').addEventListener('click',addThree);
document.getElementById('4').addEventListener('click',addFour);
document.getElementById('5').addEventListener('click',addFive);
document.getElementById('6').addEventListener('click',addSix);
document.getElementById('7').addEventListener('click',addSeven);
document.getElementById('8').addEventListener('click',addEight);
document.getElementById('9').addEventListener('click',addNine);
document.getElementById('0').addEventListener('click',addZero);
document.getElementById('+').addEventListener('click',addPlus);
document.getElementById('-').addEventListener('click',addMinus);
document.getElementById('x').addEventListener('click',addMultiply);
document.getElementById('/').addEventListener('click',addDivision);
document.getElementById('.').addEventListener('click',addDot);
document.getElementById('=').addEventListener('click',operate);
document.getElementById('Clear').addEventListener('click',clear);
document.getElementById('Backspace').addEventListener('click',backspace);