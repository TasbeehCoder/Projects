const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#searchBtn');
const weather_Img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity')
const wind_speed = document.querySelector('#wind-speed');
const location_Not_Found = document.querySelector('.location_not_found');
const weather_body = document.querySelector('.weather-body')



// add eventlistener on search button
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value)
})

async function checkWeather(city) {
    const api_Key = "f2fc813e03c299fb0e8361db835dedc6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    // for error
    if (weather_data.cod === `404`) {
        location_Not_Found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error")
        return;

    }

    location_Not_Found.style.display = "none";
    weather_body.style.display = "flex";
    // -------**------**

    temperature.innerHTML = `${Math.floor(weather_data.main.temp - 273.15)}°C|°F`;
    // * padStart method also use 
    // temperature.innerHTML = `${weather_data.main.temp - 273.15} .00°F`;

    description.innerHTML = `${weather_data.weather[0].description} `;
    humidity.innerHTML = `${weather_data.main.humidity}% `;

    wind_speed.innerHTML = `${weather_data.wind.speed} Km / H`;

    console.log(weather_data)

    // for image Case 
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_Img.src = "/Weather app Project/images/cloud.png";
            break;
        case 'Clear':
            weather_Img.src = "/Weather app Project/images/clear.png";
            break;
        case 'Rain':
            weather_Img.src = "/Weather app Project/images/rain.png";
            break;
        case 'Mist':
            weather_Img.src = "/Weather app Project/images/mist.png";
            break;
        case 'Snow':
            weather_Img.src = "/Weather app Project/images/snow.png";
            break;


    }

}