// let num1 = parseInt(prompt("Enter first number."));
// let num2 = parseInt(prompt("Enter second number."));
// let sum = num1 + num2;
// let diff = num1 - num2;
// let prod = num1 * num2;
// let div = num1 / num2;

// function calculate(){
 
//     document.write(`
//     <p>The sum of ${num1} and ${num2} is ${sum}</p>
//     <p>The difference of ${num1} and ${num2} is ${diff}</p>
//     <p>The product of ${num1} and ${num2} is ${prod}</p>
//     <p>The remainder of ${num1} and ${num2} is ${div}</p>
//     `)}

// calculate();

function calculator(){
    var num1 = Number(prompt("Enter first number."));
    var num2 = Number(prompt("Enter second number."));
    var tmp= `
        <p>${num1} + ${num2} = ${num1+num2}</p>
        <p>${num1} - ${num2} = ${num1-num2}</p>
        <p>${num1} * ${num2} = ${num1*num2}</p>
        <p>${num1} / ${num2} = ${num1/num2}</p>
    `;
    // console.log(tmp);
    document.getElementById("results").innerHTML=tmp;
}
