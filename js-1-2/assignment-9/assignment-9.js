let num = parseInt(prompt("Number: "));

let isPrime = true;

if (num <= 1){
    isPrime = false;
}


for (let i = 2; i < num; i++){
    if (num % i === 0){
        isPrime = false;
    }
}


if (isPrime){
    document.getElementById("result").textContent = `${num} is a prime number.`;
} else {
    document.getElementById("result").textContent = `${num} is not a prime number.`;
}