// React imports
import * as React from "react";

// Antd imports
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
interface IProps { }

const { SubMenu } = Menu;

const DefaultLayout: React.FC<IProps> = (props) => {

    return(
        <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <Menu.Item key="1">About me</Menu.Item>
            <Menu.Item key="2">Contact</Menu.Item>
        </Menu>
    );
}

export default DefaultLayout;