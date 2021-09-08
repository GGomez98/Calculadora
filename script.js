// js code
//elements
const INPUT = document.getElementById('input-screen')
const NUMBER = document.querySelectorAll('.number')
const CLEAR_BUTTON = document.getElementById('clear')
const EQUAL_BUTTON = document.getElementById('equal')
const OPERATOR = document.querySelectorAll('.operator')
let num1 = ''
let num2 = ''
let operator = undefined

//this function adds a number to the string
function addNumber(number){
    if(operator==undefined){
    num1 += `${number}`
    }
    else{
    num2 += `${number}`
    }
}

NUMBER.forEach(button =>{
    button.addEventListener('click', (e)=>{
        addNumber(button.value)
        if(operator==undefined){
            INPUT.value = num1
        }
        else{
            INPUT.value = num2
        }
    })
})

//adds an operator
OPERATOR.forEach(button =>{
    button.addEventListener('click', (e)=>{
        operator = button.textContent
        INPUT.value = operator
    })
})

//cleans all information on variables num1, num2, operator and result
function clearAll(){
    num1 = ''
    num2 = ''
    operator = undefined
    result = ''
    INPUT.value = ''
}

CLEAR_BUTTON.addEventListener('click', clearAll)

function add(a,b){
    return parseFloat(a)+parseFloat(b)
}
function substract(a,b){
    return parseFloat(a)-parseFloat(b)
}
function multiply(a,b){
    return parseFloat(a)*parseFloat(b)
}
function divide(a,b){
    return parseFloat(a)/parseFloat(b)
}

//calculates the total
function calculate(op){
    switch(op){
        case '+':
            num1 = add(num1,num2)
            break;
        case '-':
            num1 = substract(num1,num2)
            break;
        case 'x':
            num1 = multiply(num1,num2)
            break;
        case '/':
            num1 = divide(num1,num2)
            break;
    }
    return num1
}

EQUAL_BUTTON.addEventListener('click',()=>{
    calculate(operator)
    INPUT.value = num1
    num2 = ''
    operator = undefined
})