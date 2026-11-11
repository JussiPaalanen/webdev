let names = ["John", "Paul", "Jones"];
const target = document.getElementById(`target`);
const list = document.createElement(`li`);

for(let i = 0; i < names.length; i++){
    target.innerHTML += `<li>${names[i]}</li>`
}