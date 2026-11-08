function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

let list = document.getElementById("rolls")
let roll

do {
    roll = rollDice()

    let li = document.createElement("li")
    li.textContent = roll
    list.appendChild(li)
} while (roll !== 6)