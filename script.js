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
let result = ''

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
        if(operator==undefined&&result!=''&&num1.length<13){
            clearAll()
            addNumber(button.value)
            INPUT.textContent = num1
        }
        else if(operator==undefined&&num1.length<13){
            addNumber(button.value)
            INPUT.textContent = num1
        }
        else if(num2.length<13&&operator!=undefined){
            addNumber(button.value)
            INPUT.textContent = num2
        }
        else if(operator==undefined){
            INPUT.textContent = num1
        }
        else{
            INPUT.textContent = num2
        }
    })
})

//adds an operator
OPERATOR.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(operator!=undefined){
            num1 = calculate(operator)
            num2 = ''
            INPUT.textContent = num1
            operator = button.textContent
        }
        else{
        operator = button.textContent
        INPUT.textContent = operator
        }
    })
})

//cleans all information on variables num1, num2, operator and result. Also cleans the input
function clearAll(){
    num1 = ''
    num2 = ''
    operator = undefined
    result = ''
    INPUT.textContent = ''
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
    if (b==0){
        return 'SYNTAX ERROR'
    }
    else{
    return parseFloat(a)/parseFloat(b)
    }
}

//calculates the total
function calculate(op){
    switch(op){
        case '+':
            result = add(num1,num2)
            break;
        case '-':
            result = substract(num1,num2)
            break;
        case 'x':
            result = multiply(num1,num2)
            break;
        case '/':
            result = divide(num1,num2)
            break;
    }
    return result
}

EQUAL_BUTTON.addEventListener('click',()=>{
    if(operator==undefined||num1==''||num2==''){
        INPUT.textContent = 'SYNTAX ERROR'
    }
    else{
    calculate(operator)
    num1 = result
    if(result.toString().length > 13){
        INPUT.textContent = result.toString().slice(0,13) + 'E'
    }
    else{
    INPUT.textContent = result
    }
    num2 = ''
    operator = undefined
    }
})