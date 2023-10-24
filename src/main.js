const weatherIcon = document.querySelector(".weather-icon");




async function latLon(city){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9d7e92d7adc398efe2e29de2d324f63e&units=metric`);
    let answer =  await response.json();
    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }else{
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
    document.querySelector(".city").innerHTML = answer.name;
    document.querySelector(".temp").innerHTML = Math.round(answer["main"]["temp"]) + "°C";
    document.querySelector(".humidity").innerHTML = answer["main"]["humidity"] +"%";
    document.querySelector(".wind").innerHTML = answer["wind"]["speed"] + "km/h";
    if(answer["weather"][0]["main"] === "Clouds"){
        weatherIcon.src ="./src/images/clouds.png";
    }else if(answer["weather"][0]["main"] === "Clear"){
        weatherIcon.src ="./src/images/clear.png";
    }else if(answer["weather"][0]["main"] === "Rain"){
        weatherIcon.src ="./src/images/rain.png";
    }else if(answer["weather"][0]["main"] === "Drizzle"){
        weatherIcon.src ="./src/images/drizzle.png";
    }else if(answer["weather"][0]["main"] === "Mist"){
        weatherIcon.src ="./src/images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";



}




document.querySelector("form").addEventListener("submit",e =>{
    e.preventDefault();
    latLon(document.getElementById("search").value);
    document.getElementById("search").val = "";
})

