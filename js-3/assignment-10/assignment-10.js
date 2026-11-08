let candidateCount = Number(prompt("Number of candidates:"))
let candidates = []

for (let i = 0; i < candidateCount; i++) {
    let name = prompt("Name for candidate " + (i + 1))
    candidates.push({ name: name, votes: 0 })
}

let voterCount = Number(prompt("Number of voters:"))

for (let i = 0; i < voterCount; i++) {
    let vote = prompt("Voter " + (i + 1) + ", who do you vote for?")

    for (let j = 0; j < candidates.length; j++) {
        if (candidates[j].name === vote) {
            candidates[j].votes++
        }
    }
}

candidates.sort((a, b) => b.votes - a.votes)

let lines = []
lines.push("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.")
lines.push("results:")

for (let i = 0; i < candidates.length; i++) {
    lines.push(candidates[i].name + ": " + candidates[i].votes + " votes")
}

let output = document.getElementById("result")

for (let i = 0; i < lines.length; i++) {
    console.log(lines[i])

    let p = document.createElement("p")
    p.textContent = lines[i]
    output.appendChild(p)
}