import React from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const HeaderNav = ({ collapsed, setToggle }) => {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {
                React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: setToggle,
                })
            }
        </Header>
    )
};

export default HeaderNav;