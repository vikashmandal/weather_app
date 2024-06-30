const inputBox = document.querySelector('.input-box');
const button = document.querySelector('.button');
const temp = document.querySelector('.temperature');
const forecast = document.querySelector('.forecast');
const cityName = document.querySelector('.location');
const day = document.querySelector('.day');
const time = document.querySelector('.time');
const image = document.querySelector('.img');
const pressure = document.querySelector('.pressure-value');
const humidity = document.querySelector('.humidity-value');
const visibility = document.querySelector('.visibility-value');
const wind = document.querySelector('.wind-value');
const lati = document.querySelector('.lat-value');
const long = document.querySelector('.lon-value');
const clouds = document.querySelector('.clouds-value');
const maxTemp = document.querySelector('.max-temp-value');
const minTemp = document.querySelector('.min-temp-value');

async function checkWeather(city){
    
    const apiKey = '9f522fe3cb8101e680138a7ed1902744';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const weatherData = await fetch(`${url}`).then(response => response.json());

    console.log(weatherData);

    temp.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°`;
    forecast.innerHTML = `${weatherData.weather[0].description}`;
    cityName.innerHTML = inputBox.value;
    pressure.innerHTML = weatherData.main.pressure ;
    humidity.innerHTML = weatherData.main.humidity ;
    visibility.innerHTML = weatherData.visibility ;
    wind.innerHTML = weatherData.wind.speed ;
    lati.innerHTML = Math.round(weatherData.coord.lat);
    long.innerHTML = Math.round(weatherData.coord.lon) ;
    clouds.innerHTML = weatherData.clouds.all ;
    maxTemp.innerHTML = `${Math.round(weatherData.main.temp_max - 273.15)}°` ;
    minTemp.innerHTML = `${Math.round(weatherData.main.temp_min - 273.15)}°` ;

}

button.addEventListener('click', ()=>{
    checkWeather(inputBox.value)
});

function formatTime(day){
    const hours12 = day.getHours() % 12 || 12;
    const minutes = day.getMinutes();
    const isAm = day.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;

}

function formatday(day){

    DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return `${DAYS[day.getDay()]}`

}

setInterval(() => {

    const now = new Date();

    time.textContent = formatTime(now);
    day.textContent = formatday(now);

},200);