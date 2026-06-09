let url = "https://dog.ceo/api/breeds/image/random";

let images = [];

let div = document.querySelector(".container-fluid");

let btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  let image = await getImage();
  console.log(image);
  images.push(image);
});

async function getImage() {
  try {
    let res = await axios.get(url);
    return res.data.message;
    console.log(res.data.message);
  } catch (err) {
    console.log("Error --> ", err);
  }
}

let previous = document.querySelector(".previous");
let next = document.querySelector(".next");

let img = document.querySelector(".main-img");
let i = 0;

next.addEventListener("click", () => {
  if (i == images.length) {
    i = 0;
  }
  img.style.animation = "animator 1s ease-in 1";
  setTimeout(() => {
    img.style.animation = "";
  }, 1100);
  img.src = images[i];
  i++;
});

previous.addEventListener("click", () => {
  if (i <= 0) {
    i = images.length - 1;
  }
  img.style.animation = "animator 1s ease-in 1";
  setTimeout(() => {
    img.style.animation = "";
  }, 1100);
  img.src = images[i];
  i--;
});
