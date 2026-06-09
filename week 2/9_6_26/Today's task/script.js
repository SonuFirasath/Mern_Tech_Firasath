let images = [
  "https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UGj1d3j2PMKdQg0Q_ki1pZGpmqhPq53kSA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPa6u-X0ux___Wu_FVEmYHGzwbdXzojkaCBg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnOItFm-7l8RQBfEsISFNN0HJI9m2X8xUWQ&s",
  "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-cloudy-background-beautiful-natural-streaks-of-sky-and-clouds-red-image_15684333.jpg",
  "https://img.magnific.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg?size=626&ext=jpg",
  "https://img.magnific.com/free-photo/vividly-colored-hummingbird-nature_23-2151495292.jpg?size=626&ext=jpg",
];

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
