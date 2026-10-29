let num = parseInt(prompt("Number of dice: "), 10);
let sum = 0;

for (let x = 0; x < num; x++ ){
    let dice = Math.floor((Math.random() * 6) +1);
    sum = sum + dice;
}   

document.getElementById("result").textContent = "Sum of dices is: " + sum;

 
