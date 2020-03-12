// React imports
import * as React from "react";
import { Link, Route, Switch } from "react-router-dom";

// Component imports
import Resume from './Resume';
import Overview from "./Overview";

// Antd imports
import { Menu, Row, Col } from 'antd';
import { Layout } from 'antd';
import { GithubFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons'



interface IProps { }

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout; 

const DefaultLayout: React.FC<IProps> = (props) => {

    return(
        <Layout style={{ minHeight: "100vh" }}>
            <Header style={{color: 'white', backgroundColor: '#663A82'}}>
                <Row>
                    <Col span={24}>
                        <div style={{float: 'right', }}>
                            <a href={`https://github.com/eKirad`} style={{color: `white`}}>
                                <GithubFilled style={{ fontSize: '25px', marginRight: '10px'}} />
                            </a>
                            <a href={`https://www.linkedin.com/in/evgeni-kiradzhiyski-9946b4164/`} style={{color: `white`}}>
                                <LinkedinFilled style={{ fontSize: '25px', marginRight: '10px'}} />
                            </a>
                            <a href={`https://twitter.com/kiradzhiyski`} style={{color: `white`}}>
                                <TwitterCircleFilled style={{ fontSize: '25px', marginRight: '10px'}} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Header>
            <Layout style={{backgroundColor: `white`}}>
                <Sider theme="light">
                    <Menu
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        
                        <Menu.Item key="1">
                            <span>Overview</span>
                            <Link to="/"></Link>
                        </Menu.Item>
                        <SubMenu
                            key="subProjects"
                            title={
                                <span>About me</span>
                            }
                        >
                            <Menu.Item key="2">
                                <span>Resume</span>
                                <Link to="/resume"></Link>
                            </Menu.Item>
                            <Menu.Item key="3">Contact</Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Content style={{ backgroundColor: 'white', margin: "0 100px" }}>
                    <Switch>
                        <Route exact={true} path='/'>
                            <Overview/>
                        </Route>
                        <Route exact={true} path='/resume'>
                            <Resume/>
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
        
        

    );
}

export default DefaultLayout;