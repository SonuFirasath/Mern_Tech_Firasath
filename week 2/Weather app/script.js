const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "c6fbb6820faf900e282e409a577ae90b";

const input   = document.getElementById("cityInput");
const btn     = document.getElementById("searchBtn");
const card    = document.getElementById("weatherCard");
const errBox  = document.getElementById("errorBox");
const errMsg  = document.getElementById("errorMsg");
const hint    = document.getElementById("hint");

btn.addEventListener("click", search);
input.addEventListener("keydown", e => { if (e.key === "Enter") search(); });

async function search() {
  const city = input.value.trim();
  if (!city) return;

  card.classList.remove("visible");
  errBox.classList.remove("visible");
  btn.textContent = "Searching…";
  btn.classList.add("loading");
  hint.style.display = "none";

  try {
    const data = await getWeather(city);
    renderCard(data);
    card.classList.add("visible");
  } catch (err) {
    errMsg.textContent = "City not found. Check the spelling and try again.";
    errBox.classList.add("visible");
  } finally {
    btn.textContent = "Search";
    btn.classList.remove("loading");
  }
}

async function getWeather(city) {
  const res = await axios.get(
    `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );
  return res.data;
}

function renderCard(d) {
  document.getElementById("cityName").textContent   = d.name;
  document.getElementById("country").textContent    = d.sys.country;
  document.getElementById("condition").textContent  = d.weather[0].description;
  document.getElementById("temp").textContent       = Math.round(d.main.temp);
  document.getElementById("feelsLike").textContent  = Math.round(d.main.feels_like);
  document.getElementById("tempMax").textContent    = Math.round(d.main.temp_max);
  document.getElementById("tempMin").textContent    = Math.round(d.main.temp_min);
  document.getElementById("humidity").textContent   = d.main.humidity + "%";
  document.getElementById("wind").textContent       = Math.round(d.wind.speed) + " m/s";
  document.getElementById("visibility").textContent = (d.visibility / 1000).toFixed(1) + " km";
  document.getElementById("pressure").textContent   = d.main.pressure + " hPa";
}
