import { useState, useEffect } from 'react'
import getFormattedWeatherData from './fetchWeatherData'

const useWeatherData = (query, units) => {
  const [weather, setWeather] = useState({})

  const getWeather = async () => {
    await getFormattedWeatherData({...query, units}).then(data => {
      setWeather(data)
      localStorage.setItem('query', JSON.stringify(query))
    })
  }

  useEffect(() => {
    getWeather();
  }, [query, units])

  return weather
}

export default useWeatherData
