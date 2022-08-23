
import './App.css';
import { useEffect, useState } from "react"
import Axios from "axios"
import searchIcon from "./Images/Icons/searchIcon.png"
import RainImage from './Images/Backgrounds/rain1.jpg'
import SnowImage from './Images/Backgrounds/snow.jpg'
import CloudsImage from './Images/Backgrounds/clouds.jpg'
import ClearSkyImage from './Images/Backgrounds/clear-sky.jpg'




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

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      Axios.get(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`).then((res) => {
        setWeather(res.data)
        console.log("weather: " + weather.name)
      })
      setLocation('')
    }
  }


  const backgroundImage = {
    backgroundImage: `url(${RainImage})`
  }

return (
  <div className="weatherApp" style={backgroundImage}>
    <div id="wrapper">
      <div id="mainData">
        <div className="smallContainerWeather">
          <div className="temperature">
            {weather.main ? Math.round(weather.main.temp) : null}°c
          </div>

          <div className="weatherDetails">
            <div className="location">{weather ? weather.name : null}</div>

            <div className="timeAndDate">
              <div className="time">15:22</div>
              {<div className="date">11.22.2000</div>}
            </div>
          </div>
          <div className="weatherIconWrapper">
            <div className="weatherIcon">icon</div>
            <div className="weatherName">
              {weather.weather ? weather.weather[0].main : null}
            </div>
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
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              onKeyDown={searchLocation}
            />

            <div onClick={searchLocation}>
              <img id="searchIcon" src={searchIcon} alt="Search" />
            </div>
          </div>

          {/* <ul className="citiesList">
            <li id="London" onClick={showCityData}>London</li>
            <li id="Rome" onClick={showCityData}>Rome</li>
            <li id="Berlin" onClick={showCityData}>Berlin</li>
            <li id="New York" onClick={showCityData}>New York</li>
          </ul> */}
        </div>

        <hr />

        <div className="asideWeatherData">
          <h3>Weather Details</h3>

          <ul className="weatherInfo">
            <li>
              <span>Humidity</span>
              {weather.main ? weather.main.humidity : null}
            </li>
            <li>
              <span>Minimal Temperature</span>
              {weather.main ? weather.main.temp_min : null}
            </li>
            <li>
              <span>Maximal Temperature</span>
              {weather.main ? weather.main.temp_max : null}
            </li>
            <li>
              <span>Wind Speed</span>
              {weather.main ? weather.wind.speed : null}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;
