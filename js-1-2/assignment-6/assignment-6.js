let answer = confirm("Should i calculate the square root?");


if (answer){
    let num = parseFloat(prompt("Number: "))
    if (num < 0){
        document.getElementById("result").textContent = "The square root of a negative number is not defined";
    } else {
        document.getElementById("result").textContent = "Square root: " + Math.sqrt(num);} 
    }
else {
    document.getElementById("result").textContent = "The square root is not calculated."
    }
