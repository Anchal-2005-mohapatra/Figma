const apiKey = "2fba79a572bf417b6233f12a54a38568";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const enter = document.querySelector(".search input");
const search = document.querySelector(".search button");
const weatherIcon = document.getElementById("icon");

async function checkWeather(city) {
    const objResponse = await fetch(apiUrl + city + `&appid=${apiKey}` );
    // console.log(objResponse);
    if(objResponse.status ==404){
        document.querySelector(".invalid").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data = await objResponse.json();
        console.log(data);
        document.querySelector("#temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#humidity").innerHTML=data.main.humidity + "%";
        document.querySelector("#air").innerHTML=data.wind.speed +"KM/H";

         if (data.weather[0].main == "Clouds") {
           weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".invalid").style.display = "none";
    }
}
search.addEventListener("click", ()=>{
    checkWeather(enter.value);
});