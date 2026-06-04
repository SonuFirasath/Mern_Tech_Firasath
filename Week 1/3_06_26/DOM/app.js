let smallImg = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImg.length; i++) {
  console.dir(smallImg[i].src);
}

let heading = document.querySelector("h1");

heading.classList.add("green");

let para = document.createElement("p");

para.innerText = "Hello i am new Paragraph .....";
para.style.color = "red";

let body = document.querySelector("body");

body.append(para);

let h3 = document.createElement("h3");

h3.innerText = "Hello i am blue h3";

h3.style.color = "blue";

body.insertAdjacentElement("afterbegin", h3);

let div = document.createElement("div");

div.style.border = "2px solid black";
div.style.backgroundColor = "pink";

let h1 = document.createElement("h1");

h1.innerText = "Hey i am inside div";

let p = document.createElement("p");

p.innerText = "Me toooo !!!";

div.append(h1);
div.append(p);

body.append(div);
