let name = prompt("Enter your name:");
let stack = prompt("Enter your tech stack:");

let message = `Hello ${name}, welcome to ${stack} training!`;

let heading = document.createElement("h1");
heading.innerText = message;

document.body.append(heading);

console.log(message);
