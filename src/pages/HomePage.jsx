import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoLocationSharp } from "react-icons/io5"
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import CardWrapper from '../components/CardWrapper/CardWrapper'
import WeatherSection from '../components/WeatherSection/WeatherSection'
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen'
import useWeatherData from '../utils/useWeatherData'

const HomePage = () => {
  const [query, setQuery] = useState(typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('query')) : '')
  const [units, setUnits] = useState(typeof window !== 'undefined' ? localStorage.getItem('units') : 'metric')

  const weather = useWeatherData(query, units)

  const handleUserLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        setQuery({ lat: latitude, lon: longitude })
      })
    }
  }

  const toggleUnits = (units) => {
    setUnits(units)
    localStorage.setItem('units', units)
  }

  return (
    <div>
      {!query ? 
        <WelcomeScreen>
          <Button text={<IoLocationSharp />} onClick={handleUserLocation} />
        </WelcomeScreen> :
        <div>
          <div className="button-group">
            <Button text={'C°'} onClick={() => (toggleUnits('metric'))} />
            <Button text={'F°'} onClick={() => (toggleUnits('imperial'))} />
            <Button text={<IoLocationSharp />} onClick={handleUserLocation} />
          </div>
          <WeatherSection title={'Current Weather'} {...weather} />
          <CardWrapper title={'Weekly Forecast'} data={weather}>
            {weather.daily?.map((day, index) => {
                return (
                <Link className="link" key={index} to={`/${day.title}`} state={ { homePage: { weather }}}>
                  <Card key={index} {...day} />
                </Link>
              )
              })}
          </CardWrapper>
        </div>
      }
    </div>
  )
}

export default HomePage
