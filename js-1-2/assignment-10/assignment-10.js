let dice = parseInt(prompt("Number of dices: "));
let target = parseInt(prompt("Number of eyes: "));

let repetitions = 10000;
let hits = 0;

for (let i = 0; i < repetitions; i++){
    let sum = 0;

    for (let j = 0; j < dice; j++){
        sum += Math.floor(Math.random() * 6) + 1;
    }

    if (sum === target){
        hits++;
    }
}

let probability = hits / repetitions * 100;

document.getElementById("result").textContent = `Probability to get sum ${target} with ${dice} dice is ${probability.toFixed(2)}%`


