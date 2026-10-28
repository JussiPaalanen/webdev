let n1 = parseInt(prompt("Numero: "), 10);
let n2 = parseInt(prompt("Numero: "), 10);
let n3 = parseInt(prompt("Numero: "), 10);

let summa = n1 + n2 + n3;
let product = n1 * n2 * n3;
let average = summa / 3;

document.getElementById("Sum").textContent = "Sum: " + summa;
document.getElementById("Product").textContent = "Product: " + product;
document.getElementById("Average").textContent = "Average: " + average;


