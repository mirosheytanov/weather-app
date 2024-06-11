import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({ day, icon, temp, title }) => {
  return (
    <div data-testid="card" className="card outline">
      <div className="date">{title}</div>
      <div className="day">{day}</div>
      <div><img src={icon} /></div>
      <div className="weather">{temp?.toFixed()}°</div>
    </div>
  )
}

Card.propTypes = {
  day: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  temp: PropTypes.number,
}

export default Card
