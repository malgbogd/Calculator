let equation = '' 

function clear(){
    equation = ''
    document.getElementById('screen').innerHTML = '';
}

function addOne(){
    equation += '1'
    document.getElementById('screen').innerHTML = equation;
}

function addTwo(){
    equation += '2'
    document.getElementById('screen').innerHTML = equation;
    }

function addThree(){
    equation += '4'
    document.getElementById('screen').innerHTML = equation;
    }

function addFour(){
    equation += '4'
    document.getElementById('screen').innerHTML = equation;
    }

function addFive(){
    equation += '5'
        document.getElementById('screen').innerHTML = equation;
    }
    
function addSix(){
    equation += '6'
    document.getElementById('screen').innerHTML = equation;
    }
    
function addSeven(){
    equation += '7'
    document.getElementById('screen').innerHTML = equation;
    }

function addEight(){
    equation += '8'
    document.getElementById('screen').innerHTML = equation;
    }    

function addNine(){
    equation += '9'
    document.getElementById('screen').innerHTML = equation;
    }

function addZero(){
    equation += '0'
    document.getElementById('screen').innerHTML = equation;
    }    

function addPlus(){
    equation += '+'
    document.getElementById('screen').innerHTML = equation;
    }

function addMinus(){
    equation += '-'
    document.getElementById('screen').innerHTML = equation;
    }

function addMultiply(){
    equation += '*'
    document.getElementById('screen').innerHTML = equation;
    }

function addDivision(){
    equation += '/'
    document.getElementById('screen').innerHTML = equation;
    }

function addDot(){
    equation += '.'
    document.getElementById('screen').innerHTML = equation;
    }

function operate(){
    document.getElementById('screen').innerHTML = 'This will be the result';

}

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
