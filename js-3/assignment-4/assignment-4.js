let numbers = []

let input = Number(prompt("Give a number (0 to stop):"))

while (input !== 0) {
    numbers.push(input)
    input = Number(prompt("Give a number (0 to stop):"))
}

numbers.sort((a, b) => b - a)

let list = document.getElementById("result")

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])   // optional, keeps console output too
    let li = document.createElement("li")
    li.textContent = numbers[i]
    list.appendChild(li)
}