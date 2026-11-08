let list = []

for (let x = 0; x < 5; x++) {
    let number = prompt("Give a number: ")
    list.push(number)
}

let reversed = []

for (let i = list.length - 1; i >= 0; i--) {
    console.log(list[i])      
    reversed.push(list[i])    
}

document.getElementById("result").textContent = reversed.join(", ")