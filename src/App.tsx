import './App.scss'
import React, { useEffect, useRef } from 'react'
import { useAccountBook } from './pages/AccountBook/hooks/useAccountBook'
import { useRoutes } from 'react-router-dom'
import { ROUTES } from './constants/routes'
import SignIn from './pages/SignIn/SignIn'
import Registration from './pages/Registration/Registration'
import EditProfiles from './pages/Registration/EditProfiles'
import AppContent from './components/AppContent'
import HomePage from './pages/Home/HomePage'
import { PrivateRoute } from './utils/PrivateRoute'
import InputAmount from './pages/InputAmount/InputAmount'
import AccountBook from './pages/AccountBook/AccountBook'

const App: React.FC = () => {
  const { amountList, fetchData } = useAccountBook()
  const { current: transDeps } = useRef(amountList)

  useEffect(() => {
    fetchData()
  }, [transDeps])

  return useRoutes([
    {
      path: ROUTES.signIn,
      element: <SignIn />,
    },
    {
      path: ROUTES.registration,
      element: <Registration />,
    },
    {
      path: ROUTES.profilesEdit,
      element: <EditProfiles />,
    },
    {
      path: ROUTES.home,
      element: <PrivateRoute component={AppContent} />,
      children: [
        {
          path: ROUTES.home,
          element: <PrivateRoute component={HomePage} />,
        },
        {
          path: ROUTES.transactionInput,
          element: <PrivateRoute component={InputAmount} />,
        },
        {
          path: ROUTES.transactions,
          element: <PrivateRoute component={AccountBook} />,
        },
        {
          path: ROUTES.transactionEdit,
          element: <PrivateRoute component={InputAmount} />,
        },
        {
          path: ROUTES.profiles,
          element: <PrivateRoute component={EditProfiles} />,
        },
      ],
    },
  ])
}

export default App
