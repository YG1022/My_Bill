import { Button, Layout, Menu, Popover, Tooltip } from 'antd'
import React from 'react'
import { useMenuSider } from './hooks/useMenuSider'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

const MenuSider: React.FC = () => {
  const { Sider } = Layout
  const { collapsed, setCollapsed, open, setOpen, menus, name, sliceLen } = useMenuSider()

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
      <Popover
        className='search-holder'
        content={
          <NavLink to={ROUTES.profiles} onClick={() => setOpen(false)}>Profile</NavLink>
        }
        title='Account'
        trigger='click'
        open={open}
        onOpenChange={(newOpen: boolean) => setOpen(newOpen)}
      >
        <Tooltip title='Account'>
          <Button type='primary'>{name.length > sliceLen ? `${name.slice(0, sliceLen)}...` : name}</Button>
        </Tooltip>
      </Popover>
      <Menu theme='dark' mode='inline' items={menus} />
    </Sider>
  )
}

export default MenuSider
