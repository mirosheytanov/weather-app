import React from "react"
import WeatherSection from '../components/WeatherSection/WeatherSection'

export default { 
    title: 'Components/WeatherSection', 
    component: WeatherSection,
  }

const Template = args => <WeatherSection {...args} />

export const DefaultWeatherSection = Template.bind({})
DefaultWeatherSection.args = {
  title: 'Current Weather',
  name: 'Sofia',
  country: 'BG',
  date: '11/06',
  temp: 30,
  details: 'Clear sky',
  icon: 'http://openweathermap.org/img/wn/01d@2x.png',
  feels_like: 30,
  sunrise: '05:50 AM',
  sunset: '09:05 PM',
  humidity: 50
}
