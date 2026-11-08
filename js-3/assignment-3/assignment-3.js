let dogs = []

for (let i = 0; i < 6; i++) {
    let name = prompt("Name of dog " + (i + 1) + ":")
    dogs.push(name)
}

dogs.sort()
dogs.reverse()

let list = document.getElementById("result")

for (let i = 0; i < dogs.length; i++) {
    let li = document.createElement("li")
    li.textContent = dogs[i]
    list.appendChild(li)
}