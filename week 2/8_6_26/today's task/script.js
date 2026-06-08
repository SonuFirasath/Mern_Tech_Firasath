// let arr = [5,15,20,8,25];
let arr = [];
let num = prompt("Enter the number of values that you want to enter : ");

for (let i = 0; i < num; i++) {
  let a = prompt(`Enter the value of ${i}th index : `);
  arr.push(a);
}

let arr2 = arr.filter((el) => {
  return el > 10;
});

let h1 = document.createElement("h1");
h1.innerText = "The numbers that are greater than 10(ten) are : ";

let body = document.querySelector("body");
body.insertAdjacentElement("afterbegin", h1);

for (el of arr2) {
  let h2 = document.createElement("h2");

  h2.innerText = el;

  h1.append(h2);
}
