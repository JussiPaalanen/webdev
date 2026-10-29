let num = parseInt(prompt("Number: "), 10);
let leapyear = false;

if (num % 400 === 0){
    leapyear = true;
} else if (num % 100 === 0){
    leapyear = false;
} else if (num % 4 === 0){
    leapyear = true;
}



if (leapyear){
    document.getElementById("result").textContent = `${num}, is a leap year.`;}
else{
    document.getElementById("result").textContent = `${num}, is not a leap year.`;
}