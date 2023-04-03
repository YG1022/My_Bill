import { useState } from 'react'
import { menus } from './menuConfig'
import { useAccountStore } from '../../../stores/useAccountStore'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../constants/routes'

const useMenuSider = () => {
  const navigateTo = useNavigate()

  const [collapsed, setCollapsed] = useState(false)
  const [open, setOpen] = useState(false)
  const { user } = useAccountStore(state => ({ user: state.user }))
  const name = user.account_name
  const sliceLen = collapsed ? 1 : 16

  const signOut = (event) => {
    event.preventDefault()
    localStorage.removeItem('signedIn')
    localStorage.removeItem('uuid')
    navigateTo(ROUTES.signIn)
  }

  return { collapsed, setCollapsed, open, setOpen, menus, name, sliceLen, signOut }
}

export { useMenuSider }
