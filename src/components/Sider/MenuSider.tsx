import { Button, Layout, Menu, Popover, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { useMenuSider } from './hooks/useMenuSider'
import { useAccountStore } from '../../stores/useAccountStore'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

const MenuSider: React.FC = () => {
  const { Sider } = Layout
  const { collapsed, setCollapsed, menus } = useMenuSider()
  const { user } = useAccountStore(state => ({ user: state.user }))
  const [open, setOpen] = useState(false)

  const hide = () => setOpen(false)
  const handleOpenChange = (newOpen: boolean) => setOpen(newOpen)

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
      <Popover
        className="search-holder"
        content={
          <NavLink to={ROUTES.profiles} onClick={hide}>
            Profile
          </NavLink>
        }
        title="Account"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Tooltip title="Account">
          <Button type="primary">{user.account_name}</Button>
        </Tooltip>
      </Popover>
      <Menu theme="dark" mode="inline" items={menus} />
    </Sider>
  )
}

export default MenuSider
