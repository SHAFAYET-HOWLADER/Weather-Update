
const api_key = `87d57cdbb10cebf4f5ff3920db5f6f7f`;
const loadData = ()=>{
    const input = document.getElementById("inputField");
    const inputValue  = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${api_key}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}

// display weather
const displayWeather = (weather)=>{
  console.log(weather)
}

