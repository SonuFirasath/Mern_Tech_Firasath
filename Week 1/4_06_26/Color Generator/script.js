let btn = document.querySelector("button");
let dropDown = document.querySelector("select");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  let randColor = randomColor();

  h1.innerText = randColor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randColor;

  let opt = document.createElement("option");
  opt.innerText = randColor;
  opt.style.backgroundColor = opt.innerText;
  opt.value = opt.innerText;

  dropDown.insertAdjacentElement("afterbegin", opt);
});

dropDown.addEventListener("change", function () {
  body.style.backgroundColor = this.value;
  h1.style.color = "white";
});

function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let randColor = `rgb(${red},${green},${blue})`;

  return randColor;
}
