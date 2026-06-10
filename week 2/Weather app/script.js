let url = "https://api.openweathermap.org/data/2.5/weather";

let apiKey = "c6fbb6820faf900e282e409a577ae90b";
let btn = document.querySelector(".btn");
let input = document.querySelector("input");

btn.addEventListener("click", async () => {
  let info = await getInfo(input.value);

  let result = {
    temp : info.main.temp,
    

  }
  console.log(info);
});

async function getInfo(city) {
  try {
    let res = await axios.get(`${url}?q=${city}&appid=${apiKey}&units=metric`);
    return res.data;
  } catch (err) {
    console.log("Error --->", err);
  }
}
