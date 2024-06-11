import './WelcomeScreen.scss'

const WelcomeScreen = ({ children }) => {
  return (
    <div data-testid="welcome-screen" className="welcome">
      <h2 data-testid="welcome-screen-text">Welcome! Please click on the button below to get weather forecast for your location</h2>
      {children}
    </div>
  )
}

export default WelcomeScreen
