"use strict";
    function calc(){
    let memory;
   
function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function getCurrentResult() {
    return memory;
}

   
    return {
        
        addNumbers: function(num1, num2) {
            const result = add(Number(num1), Number(num2));
            memory = result;
            return result;
        },
        subtractNumbers: function(num1, num2) {
            const result = subtract(Number(num1), Number(num2));
            memory = result;
            return result;
        },
        saveResult: function() {
            memory = getCurrentResult(); 
        },
        clearMemory: function() {
            memory = 0;  
        },
        currentResult: function() {
            return `Current result: ${memory}`;
        }
    }
    }


const calculator = calc();
console.log(calculator.addNumbers(5, 3));  
console.log(calculator.subtractNumbers(10, 4));  
console.log(calculator.currentResult());  
calculator.saveResult();  
console.log(calculator.addNumbers(5, 3));
console.log(calculator.currentResult());  
calculator.clearMemory();
console.log(calculator.currentResult());