
import './App.css';
import { useEffect, useState } from "react"
import searchIcon from "./Images/Icons/searchIcon.png"
import RainImage from './Images/Backgrounds/rain1.jpg'


const oneData = {
  "coord": {
    "lon": -85.1647,
    "lat": 34.257
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 26.76,
    "feels_like": 29.14,
    "temp_min": 26.12,
    "temp_max": 28.05,
    "pressure": 1011,
    "humidity": 79
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.57,
    "deg": 320
  },
  "clouds": {
    "all": 99
  },
  "dt": 1661189374,
  "sys": {
    "type": 2,
    "id": 2009938,
    "country": "US",
    "sunrise": 1661166426,
    "sunset": 1661214022
  },
  "timezone": -14400,
  "id": 4219762,
  "name": "Rome",
  "cod": 200
}

function App() {
  const api = {
    key: "5e23ba6621133f1210f0d95dca4df3a7",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [location, setLocation] = useState("")
  const [weather, setWeather] = useState({})

  const [cities, setCities] = useState({})

  const search = e => {
    // if (e.key === "Enter") {
    //   fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
    //     .then(response => response.json())
    //     .then(result => {
    //       setWeather(result)
    //       setLocation("")
    //       console.log(result)
    //     })
    // }
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

  const backgroundImage = {
    backgroundImage: `url(${RainImage})`
  }

  const showCityData = (e) => {
    let cityName = e.target.id

    // fetch(`${api.base}weather?q=${cityName}&units=metric&APPID=${api.key}`)
    //     .then(response => response.json())
    //     .then(result => {
    //       setWeather(result)
    //       setLocation("")
    //       console.log(result)
    //     })
  }

  return (
    <div className="weatherApp" style={backgroundImage}>

      {/* <div className="search">
        <input
          type="text"
          className="searchBar"
          placeholder="Search Location"
          onChange={e => setLocation(e.target.value)}
          value={location}
          onKeyDown={search}
        />
      </div> */}

      {/* {(typeof weather.main != "undefined") ? ( */}
      <div id="wrapper">

        {/* <div className="LocationData">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{findDate(new Date())}</div>
        </div>

        <div className="weatherData">
          <div className="temperature">{Math.round(weather.main.temp)}°c</div>
          <div className="weather">{weather.weather[0].main}</div>
        </div> */}

        <div id="mainData">
          <div className="temperature">
            {Math.round(oneData.main.temp)}°c
          </div>

          <div className="weatherDetails">

            <div className="location">
              {oneData.name},
              {oneData.sys.country}
            </div>

            <div className="timeAndDate">
              <div className="time">{findDate}</div>
              {/* {<div className="date">date</div>} */}
            </div>

            <div className="weatherIconWrapper">
              <div className="weatherIcon">icon</div>
              <div className="weatherName">{oneData.weather["main"]}</div>
            </div>

          </div>
        </div>

        <div className="aside">
          <div className="asideCities">
            <div className="search">
              <input
                type="text"
                className="searchBar"
                placeholder="Search Location"
                onChange={e => setLocation(e.target.value)}
                value={location}
                onKeyDown={search}
              />
              <button onClick={search}>
                <img id="searchIcon" src={searchIcon} alt="Search" />
              </button>

            </div>

            <ul className="citiesList">
              <li id="London" onClick={showCityData}>London</li>
              <li id="Rome" onClick={showCityData}>Rome</li>
              <li id="Berlin" onClick={showCityData}>Berlin</li>
              <li id="New York" onClick={showCityData}>New York</li>
            </ul>

          </div>

          <div className="asideWeatherData">
            <h3>Weather Details</h3>

            <ul className="weatherInfo">
              <li><span>Humidity</span>{oneData.main.humidity}</li>
              <li><span>Minimal Temperature</span>{oneData.main.temp_min}</li>
              <li><span>Maximal Temperature</span>{oneData.main.temp_max}</li>
              <li><span>Wind Speed</span>{oneData.wind.speed}</li>
            </ul>

          </div>
        </div>


      </div>
      {/* ) : ("")} */}

    </div>

  )
}

export default App;
