import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

export const PrivateRoute = ({ component: Component, ...props }) => {
  const navigate = useNavigate()
  const isAuthenticated = localStorage.getItem('signedIn')
  const location = useLocation()

  if (!isAuthenticated) {
    navigate(ROUTES.signIn, { state: { from: location } })
    return null
  }

  return <Component {...props} />
}