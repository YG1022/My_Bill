import { Button, Layout, Menu, Popover, Tooltip } from 'antd'
import React from 'react'
import { useMenuSider } from './hooks/useMenuSider'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

const MenuSider: React.FC = () => {
  const { Sider } = Layout
  const { collapsed, setCollapsed, open, setOpen, menus, name, sliceLen, signOut } = useMenuSider()

  return (
    <Sider className='side-bar' collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
      <Popover
        className='account-holder'
        content={(
          <div className='account-content'>
            <NavLink style={{ display: 'block' }} to={ROUTES.profiles} onClick={() => setOpen(false)}>Profile</NavLink>
            <NavLink to={ROUTES.signIn} onClick={signOut}>Sign Out</NavLink>
          </div>
        )}
        trigger='click'
        open={open}
        onOpenChange={(newOpen: boolean) => setOpen(newOpen)}
      >
        <Tooltip title='Account'>
          <Button type='primary'>
            {name.length > sliceLen ?
              (collapsed ? `${name.slice(0, sliceLen)}` : `${name.slice(0, sliceLen)}...`)
              : name}
          </Button>
        </Tooltip>
      </Popover>
      <Menu theme='dark' mode='inline' items={menus} />
    </Sider>
  )
}

export default MenuSider
