
import './App.css';
import { useEffect, useState } from "react"


function App() {
  const api = {
    key: "5e23ba6621133f1210f0d95dca4df3a7",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [location, setLocation] = useState("")
  const [weather, setWeather] = useState({})

  const [cities, setCities] = useState({})

  const search = e => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
        .then(response => response.json())
        .then(result => {
          setWeather(result)
          setLocation("")
          console.log(result)
        })
    }
  }





    const findDate = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()]
  let date = d.getDate()
  let month = months[d.getMonth()]
  let year = d.getFullYear()

  return `${day} ${date} ${month} ${year}`
}


return (
  <div className="weatherApp">

    <h1 className="title">Weather app</h1>

    <div className="search">
      <input
        type="text"
        className="searchBar"
        placeholder="Search Location"
        onChange={e => setLocation(e.target.value)}
        value={location}
        onKeyDown={search}
      />
    </div>

    {(typeof weather.main != "undefined") ? (
      <div>

        <div className="LocationData">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{findDate(new Date())}</div>
        </div>

        <div className="weatherData">
          <div className="temperature">{Math.round(weather.main.temp)}°c</div>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
      </div>
    ) : ("")}

  </div>

)
}

export default App;
