let count = Number(prompt("How many participants?"))
let names = []

for (let i = 0; i < count; i++) {
    let name = prompt("Name of participant " + (i + 1) + ":")
    names.push(name)
}

names.sort()

let list = document.getElementById("result")

for (let i = 0; i < names.length; i++) {
    let li = document.createElement("li")
    li.textContent = names[i]
    list.appendChild(li)
}