const urlApi = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "a9d7db8655bb0e0b12b373432714efca";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const searchImg = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(
    urlApi + "units=metric&q=" + city + "&appid=" + apiKey
  );
  const data = await response.json();
  console.log(response);
  console.log(data);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    if (data.name !== undefined) {
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
      const imgTemp = data.weather[0].main.toLowerCase();
      console.log(imgTemp);
      searchImg.src = `images/${imgTemp}.png`;
      console.log(searchImg.src);
    }

    searchInput.value = "";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  if (searchInput.value != 0) {
    checkweather(searchInput.value);
  }

  searchBtn.classList.add("clicked");
  setTimeout(() => {
    searchBtn.classList.remove("clicked");
  }, 150); // Duração do efeito
});
