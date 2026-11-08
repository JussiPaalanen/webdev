function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1
}

let sides = Number(prompt("How many sides does the dice have?"))

let list = document.getElementById("rolls")
let roll

do {
    roll = rollDice(sides)

    let li = document.createElement("li")
    li.textContent = roll
    list.appendChild(li)
} while (roll !== sides)