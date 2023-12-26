
// In line 28, you are using a switch statement to assign different values to the weather_Img.src attribute based on the weather_data.weather[0].main property.However, this property is an array of strings that contains multiple values separated by commas.For example, "Clouds", "Clear", "Rain", etc.To get the correct image name based on the weather condition, you should use a loop or a map function to iterate over the array and find the matching value.For example:


// using a loop
for (let i = 0; i < weather_data.weather[0].main.length; i++) {
    if (weather_data.weather[0].main[i] === 'Clouds') {
        weather_Img.src = "/Weather app Project/images/cloud.png";
        break;
    }
}

// using a map function
weather_Img.src = weather_data.weather[0].main.map(value => {
    if (value === 'Clouds') {
        return "/Weather app Project/images/cloud.png";
    }
}).join('');


// In line 9, you are using Math.round to convert the temperature from Celsius to Fahrenheit. However, this function returns the number of decimal places after the decimal point, not the actual value rounded to the nearest integer. For example, Math.round(273.15) returns 273, not 273. To get the correct value in Fahrenheit, you should use Math.floor instead of Math.round. For example:

temperature.innerHTML = `${Math.floor(weather_data.main.temp - 273.15)}°F`;