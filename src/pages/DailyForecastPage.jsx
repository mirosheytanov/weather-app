import { useParams, Link, useLocation } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import CardWrapper from '../components/CardWrapper/CardWrapper'
import Card from '../components/Card/Card'

const DailyForecastPage = () => {
  const params = useParams()
  const location = useLocation()

  const { day } = params
  const { homePage } = location.state
  const { weather } = homePage
  const { hourly } = weather

  const currentHourlyWeather = hourly.filter(item => item.week_day === day)

  return (
    <div>
      <Link className="button-link outline" to="/"><FaArrowLeft /> Back</Link>
      <CardWrapper title={`Forecast for ${params.day}`}>
        {currentHourlyWeather.map((data, index) => {
          return (
            <Card key={index} {...data} />
          )
        })}
      </CardWrapper>
    </div>
  )
}

export default DailyForecastPage
