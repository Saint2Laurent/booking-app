import React from 'react';
import { Layout, Menu } from 'antd';
import useIsInAuth from '../../../hooks/use-is-in-auth';
import style from '../nav.module.scss';
import NavProfile from './nav-profile';
import '../nav.scss';
import logo from '../../../assets/images/logo-solo.svg';

const NavHeader = () => {
  const { Header } = Layout;
  const [isInAuth] = useIsInAuth();

  return (
    <Header className={style.navbar} style={{ display: isInAuth ? 'none' : 'flex' }}>
      <div className={style.navLogo}>
        <img className={style.navLogoImg} src={logo} alt="" />
      </div>
      <Menu className={style.nav} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item className="nav-menu-item" key="1">
          ΠΙΝΑΚΑΣ
        </Menu.Item>
        <Menu.Item className="nav-menu-item" key="2">
          ITEM 2
        </Menu.Item>
        <Menu.Item className="nav-menu-item" key="3">
          ITEM 3
        </Menu.Item>
        <NavProfile />
      </Menu>
    </Header>
  );
};

export default NavHeader;
