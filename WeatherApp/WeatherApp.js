const apiKey = "0889c6b97f60be904fe38a48900d3f73";
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector('.search button');
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else {
        // console.log(searchbtn.value);
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `<sup>o</sup>C`;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "./images/clouds.png"
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "./images/clear.png"
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "./images/rain.png"
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "./images/drizzle.png"
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "./images/mist.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

}

if (searchbtn) {
    searchbtn.addEventListener("click", () => {
        checkWeather(searchbox.value.toLowerCase());
    });
}
else
    alert("wrong")