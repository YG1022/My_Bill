import { useState } from 'react'
import { menus } from './menuConfig'
import { useAccountStore } from '../../../stores/useAccountStore'

const useMenuSider = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [open, setOpen] = useState(false)
  const { user } = useAccountStore(state => ({ user: state.user }))
  const name = user.account_name
  const sliceLen = collapsed ? 1 : 16

  return { collapsed, setCollapsed, open, setOpen, menus, name, sliceLen }
}

export { useMenuSider }
