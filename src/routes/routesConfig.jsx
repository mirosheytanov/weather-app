import HomePage from '../pages/HomePage'
import DailyForecastPage from '../pages/DailyForecastPage'
import NotFoundPage from '../pages/NotFoundPage'

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/:day',
    element: <DailyForecastPage />,
    errorElement: <NotFoundPage />
  }
]

export default routesConfig
