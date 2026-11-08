function concat(items) {
    let result = ""

    for (let i = 0; i < items.length; i++) {
        result += items[i]
    }

    return result
}

let words = ["one", "two", "three"]

document.getElementById("result").textContent = concat(words)