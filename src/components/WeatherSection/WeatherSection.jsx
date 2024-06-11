import PropTypes from 'prop-types'
import { FiSunrise, FiSunset } from "react-icons/fi"
import { FaThermometerHalf } from "react-icons/fa"
import { WiHumidity } from "react-icons/wi"

import './WeatherSection.scss'

const WeatherSection = ({ 
  title, 
  name, 
  country, 
  date, 
  temp, 
  details, 
  icon, 
  feels_like, 
  sunrise, 
  sunset, 
  humidity 
}) => {
  return (
    <div data-testid="weather-section" className="weather-section outline">
      <h2>{title}</h2>
      <section className="current-weather">
        <div className="location-date">
          <div className="weather-conditions">{`${name}, ${country}`}</div>
          <div>{date}</div>
        </div>
        <div>
          <div className="weather-conditions">{temp?.toFixed()}°</div>
          <div className="weather-conditions">{details}</div>
        </div>
        <div><img src={icon} /></div>
      </section>
      <h2>Conditions</h2>
      <section className="current-weather">
        <div className="weather-conditions"><FaThermometerHalf /> {feels_like?.toFixed()}°</div>
        <div className="weather-conditions"><FiSunrise /> {sunrise}</div>
        <div className="weather-conditions"><FiSunset /> {sunset}</div>
        <div className="weather-conditions"><WiHumidity /> {humidity}%</div>
      </section>
    </div>
  )
}

WeatherSection.propTypes = {
  title: PropTypes.string, 
  name: PropTypes.string, 
  country: PropTypes.string, 
  date: PropTypes.string, 
  temp: PropTypes.number, 
  details: PropTypes.string, 
  icon: PropTypes.string, 
  feels_like: PropTypes.number, 
  sunrise: PropTypes.string, 
  sunset: PropTypes.string, 
  humidity: PropTypes.number
}

export default WeatherSection
