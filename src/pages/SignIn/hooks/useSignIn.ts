import { useNavigate } from 'react-router-dom'
import userSignIn from '../../../services/userSignIn'
import { ROUTES } from '../../../constants/routes'
import { useAccountStore } from '../../../stores/useAccountStore'

const useSignIn = form => {
  const navigateTo = useNavigate()
  const { setUser } = useAccountStore(state => ({ setUser: state.setUser }))

  const signIn = async () => {
    const { flag, checkData } = await userSignIn(form)
    localStorage.setItem('signedIn', flag.toString())

    if (!flag) {
      form.setFields([{
        name: 'password',
        errors: ['Wrong user name or password, please try again!'],
      }])
      localStorage.removeItem('uuid')
    } else {
      setUser(checkData)
      localStorage.setItem('uuid', checkData.uuid)
      navigateTo(ROUTES.home)
    }
  }

  return { signIn }
}

export default useSignIn
