const apikey =  "6236e893653c6b2b09dcdd40ea23fad1 "
const apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status ==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").Style.display="none";
    }else{
        var data = await response.json();


    // console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "/clouds.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "/clear.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "/rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "/drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src="/mist.png"
    }

    }
    
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";





}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})
