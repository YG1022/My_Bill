import React from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

const authRoute = (props) => localStorage.getItem('signedIn') === 'true' ? props :
  <Navigate to={ROUTES.signIn} replace />

export { authRoute }
