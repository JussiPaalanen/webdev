let start = parseInt(prompt("Pick start year: "));
let end = parseInt(prompt("Pick end year: "));

let list = "";

for (let year = start; year <= end; year++){ 
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        list += `<li>${year}</li>`;
    }    
}

document.getElementById("result").innerHTML = list;