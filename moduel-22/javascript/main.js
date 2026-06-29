//functions
function showMessage() {
    alert("this message is inside the function")
}

showMessage()

function sum(number1, number2) {
    return number1 + number2
}

console.log(sum(25, 5))

function toCelsius(f) {
    return (5/9) * (f-32)
}

console.log("54 fehrenheight is equal to" + toCelsius(54) + "celsius")

var result = toCelsius(54)

console.log("54 fehrenheight is equal to" + result + "celsius")

function dsFunction() {
    var localVar = "Digital School";
    alert(localVar)
}

dsFunction();

function toSeconds(minutes) {
    return minutes * 60;
}

console.log(toSeconds(60));

function triangleArea(baseLength, height) {
    return 0.5 * baseLength * height;
}

console.log(triangleArea(5, 7));