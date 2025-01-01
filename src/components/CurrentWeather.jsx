
const CurrentWeather = ({currentWeather}) => {
  return (
    <div className="current-weather">
        <img src={`images/icons/${currentWeather.weatherIcon}.svg`} className="weather-icon" />
        <h2 className="temperature">
          {currentWeather.temperature}<span>&deg;C</span>
        </h2>
        <p className="description">{currentWeather.description}</p>  
      </div>
  )
}

export default CurrentWeather