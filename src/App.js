
import './App.css';
import { useEffect, useState } from "react"
import Axios from "axios"
import searchIcon from "./Images/Icons/searchIcon.png"
import RainImage from './Images/Backgrounds/rain1.jpg'
import SnowImage from './Images/Backgrounds/snow.jpg'
import CloudsImage from './Images/Backgrounds/clouds.jpg'
import ClearSkyImage from './Images/Backgrounds/clear-sky.jpg'






function App() {
  const api = {
    key: "5e23ba6621133f1210f0d95dca4df3a7",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [location, setLocation] = useState("London")
  const [weather, setWeather] = useState({})


  // show default weather
  useEffect(() => {
    Axios.get(`${api.base}weather?q=Rome&units=metric&APPID=${api.key}`).then((res) => {
      setWeather(res.data)
      console.log("weather: " + weather.name)
    })
    setLocation('')
  }, [])


  // search location by keyboard input
  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      Axios.get(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`).then((res) => {
        setWeather(res.data)
        console.log("weather: " + weather.name)
      })
      setLocation('')
    }
  }

  //show weather for defulte cites, onclick
  const showCityData = (e) => {
    let city = e.target.id
    console.log(e)
    console.log(city)
    Axios.get(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`).then((res) => {
      setWeather(res.data)
      console.log(weather)
    })
    setLocation('')
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
                <div className="time">
                  {weather ? weather.dt : null}
                </div>
                {<div className="date">
                  {weather ? weather.dt : null}
                </div>}
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

            <ul className="citiesList">
              <li id="London" onClick={showCityData}>London</li>
              <li id="Rome" onClick={showCityData}>Rome</li>
              <li id="Berlin" onClick={showCityData}>Berlin</li>
              <li id="Moscow" onClick={showCityData}>Moscow</li>
            </ul>
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
