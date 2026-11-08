function even(numbers) {
    let result = []

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i])
        }
    }

    return result
}

let original = [2, 7, 4, 9, 10, 3, 8]
let evens = even(original)

console.log(original)
console.log(evens)

document.getElementById("original").textContent = original.join(", ")
document.getElementById("evens").textContent = evens.join(", ")