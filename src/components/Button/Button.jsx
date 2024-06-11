import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({ text, onClick }) => {
  return (
    <div data-testid="button">
      <button className="button outline" onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
