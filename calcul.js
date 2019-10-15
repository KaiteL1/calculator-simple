// Arithmetic functions

let arr = [];
let arr2 = [];
let currentOper;
let globalResult;

function Add(number1,number2) {
    let result = number1 + number2;
    //console.log(result);
    return result;
}
function Subtract(number1,number2) {
    let result = number1 - number2;
    return result;
}
function Multiply(number1,number2) {
    let result = number1 * number2;
    return result;
}
function Divide (number1,number2) {
    let result = number1 / number2;
    return result;
}
function Power(number1,number2) {
    let result = Math.pow(number1, number2);
    return result;
}

function ClearAll() {
        let value = document.getElementById("input").textContent = "0";
        arr = [];
        globalResult = 0;
    }


    function Display(a) {
    arr.push(a);
    document.getElementById("input").textContent = arr.join("");
    console.log(arr);
}

    function RunOperator(c){
        arr2 = arr;
        ClearAll();
        /*let c = this;
        alert(c.id);
         */
        currentOper = c;
    }
    function Equal (){
        if (arr.length>0 || arr2.length>0){
            let number1 = Number(arr2.join(""));
            let number2 = Number(arr.join(""));
            console.log(number1,number2)

            if (currentOper == "add") {
                globalResult = Add(number1,number2);
            }
            else if (currentOper == "subtraction") {
                globalResult = Subtract(number1,number2);
            }
            else if (currentOper == "multiplication") {
                globalResult = Multiply(number1,number2);
            }
            else if (currentOper == "division") {
                globalResult = Divide(number1,number2);
            }
            else if (currentOper == "power") {
                globalResult = Power(number1,number2);
            }
            //console.log(globalResult)
            document.getElementById("input").textContent = globalResult;
            arr = [];
            arr.push(globalResult)
        }
        else {
            alert("Correct mistake");
        }

    }





