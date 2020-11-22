let a='';
let result;
let equation;

function clear(){
    a = '';
    result = '';
    equation='';
    document.getElementById('screen').innerHTML = '';
}

function assignResultToA() {
    result = Number(a);
    a = '';
    return result, a;
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
   if (typeof (result) == 'number') {
        result = result + Number(a);
        document.getElementById('screen').innerHTML = result;
        a='';
        turnOnDot();
        return result, a;
    } else {
        equation += '+';
        assignResultToA();
        turnOnDot
    }}

function addMinus(){
    if (typeof (result) == 'number') {
        result = result - Number(a);
        document.getElementById('screen').innerHTML = result;
        a='';
        turnOnDot();
        return result, a;
    } else {
        equation += '-';
        assignResultToA();
        turnOnDot();
    }}

function addMultiply(){
    if (typeof (result) == 'Number') {
        result = Number(result) * Number(a);
        document.getElementById('screen').innerHTML = result;
        a='';
        turnOnDot();
        return result, a;
    } else {
        equation += '*';
        assignResultToA();
        turnOnDot();
    }}

function addDivision(){
    if (typeof (result) == 'Number') {
        result = Number(result) / Number(a);
        document.getElementById('screen').innerHTML = result;
        a='';
        turnOnDot();
        return result, a;
    } else {
        equation += '/';
        assignResultToA();
        turnOnDot();
    }}

function addDot(){
    a += '.'
    document.getElementById('screen').innerHTML = a;
    equation += '.';
    turnOffDot();
    }

function operate(){
    equation += '=';
    document.getElementById('screen').innerHTML = equation;
    turnOnDot();
}

function backspace() {
    a = document.getElementById('screen').innerHTML
    a = a.slice(0,-1);
    document.getElementById('screen').innerHTML = a;


}

function turnOnDot(){
    document.getElementById('.').addEventListener('click',addDot);
}

function turnOffDot(){
    document.getElementById('.').removeEventListener('click',addDot);
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
document.getElementById('Backspace').addEventListener('click',backspace);
