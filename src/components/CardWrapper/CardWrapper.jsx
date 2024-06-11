import PropTypes from 'prop-types'
import './CardWrapper.scss'

const CardWrapper = ({ title, children }) => {

  return (
    <div data-testid="card-wrapper" className="card-wrapper outline">
      <h2>{title}</h2>
      {children}
    </div>
  )
}

CardWrapper.propTypes = {
  title: PropTypes.string,
}

export default CardWrapper
