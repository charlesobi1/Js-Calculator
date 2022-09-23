// JS CALCULATOR

let fnum = 0;
let snum = 0;
let operator;

function addNo(num) {
    document.getElementById('display').value += num;
    console.log(num);
}

function del(num) {
    document.getElementById('display').value = '';
    console.log(num);
}

function negate(num) {
    document.getElementById('display').value = document.getElementById('display').value * -1;
    console.log(num);
}

function percent(num) {
    document.getElementById('display').value = document.getElementById('display').value / 100;
    console.log(num);
}

function divide(num) {
    fnum = document.getElementById('display').value;
    operator = '/';
    document.getElementById('display').value = '';
}

function multiply(num) {
    fnum = document.getElementById('display').value;
    operator = '*';
    document.getElementById('display').value = '';
}

function minus(num) {
    fnum = document.getElementById('display').value;
    operator = '-';
    document.getElementById('display').value = '';
}

function add(num) {
    fnum = document.getElementById('display').value;
    operator = '+';
    document.getElementById('display').value = '';
}


function equ() {
    snum = document.getElementById('display').value

    // Conditions for the the functions of each operator to be carried out...

    if (operator == '+') {
        output = Number(fnum) + Number(snum);
        document.getElementById('display').value = output;
    }
    else if (operator == '-') {
        output = Number(fnum) - Number(snum);
        document.getElementById('display').value = output;
    }else if (operator == '/') {
        output = Number(fnum) / Number(snum);
        document.getElementById('display').value = output;
    }else if (operator == '*') {
        output = Number(fnum) * Number(snum);
        document.getElementById('display').value = output;
    }
}

let cal = false;

function off() {

    if (cal == true) {
        data = document.getElementById('display')
        data.value = ""
        data.style.visibility = 'visible';
        document.getElementById("on").innerText = "OFF"
        cal = false;
    } else {
        data = document.getElementById('display')
        data.style.visibility = 'hidden';
        data.value = ""
        document.getElementById("on").innerText = "ON"
        cal = true;
    }
    console.log(cal);
}