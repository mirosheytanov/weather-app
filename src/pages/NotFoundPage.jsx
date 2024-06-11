import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div>
      <h2 data-testid="not-found-heading">Whoops.. Something went wrong. <Link to="/">Back to home</Link></h2>
    </div>
  )
}

export default NotFoundPage
