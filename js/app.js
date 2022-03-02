
const api_key = `87d57cdbb10cebf4f5ff3920db5f6f7f`;
const loadData = ()=>{
    const input = document.getElementById("inputField");
    const inputValue  = input.value;
    //clear value
    input.value = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${api_key}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}

// display weather
// const displayWeather = (weather) =>{
//     const city = document.getElementById("city");
//     city.innerText = weather.name;
// }

const setInnerText = (id, text) =>{
 document.getElementById(id).innerText = text;
}
const displayWeather = (temperature) =>{
    console.log(temperature)
    setInnerText("city", temperature.name)
    setInnerText("temp", temperature.main.temp)
    setInnerText("condition", temperature.weather[0].main)
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const img = document.getElementById("src");
    img.setAttribute("src", url)


}
