const url = "https://api.openweathermap.org/data/2.5/";
const key = "54b1407dcc4d3ca0d88eefdeca4dd8a4";

let searchBar = document.querySelector("#searchBar");

let setQuery = (e) => {
  if (e.keyCode == "13") getResault(searchBar.value);
};

let getResault = (cityName) => {
  let query = `${url}/weather?q=${cityName}&appid=${key}&units=metric&lang=en`;

  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResault);
};
const displayResault = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;
  console.log(result);
  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${result.wind.speed} km/h` + [" "] + "wind speed";
};

searchBar.addEventListener("keypress", setQuery);
