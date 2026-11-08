let numbers = []

while (true) {
    let x = Number(prompt("Give a number:"))

    if (numbers.includes(x)) {
        alert("The number " + x + " has already been given.")
        break
    }

    numbers.push(x)
}

numbers.sort((a, b) => a - b)

let list = document.getElementById("result")

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    let li = document.createElement("li")
    li.textContent = numbers[i]
    list.appendChild(li)
}