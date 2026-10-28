let number = Math.floor(Math.random() * 4) + 1;

let pname = prompt("Name: ")
let room;

if (number === 1) {
   room = "Gryffindor";
} else if (number === 2){
    room = "Slytherin";
} else if (number === 3){
    room = "Hufflepuff";
} else if (number === 4){
    room = "Ravenclaw";
}

document.getElementById("result").textContent = `${pname}, you are ${room}.`;