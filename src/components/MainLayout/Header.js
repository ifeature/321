import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/epam">
        <a href="https://git.epam.com/" target="_blank" rel="noopener noreferrer">git.epam.com</a>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
