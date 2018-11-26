import React, { Component } from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import './css/Box/Box.css';
import { Layout, Menu, Breadcrumb, Icon, Avatar, Dropdown } from 'antd';
import Customer from './Sider/Customer.js';
import GongHai from './Sider/GongHai.js';
import Number from './Sider/number.js';
import Phone from './Sider/Phone.js';
import SetUp from './Sider/SetUp.js';
import Desk from './Sider/desk.js';
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
var KeyNow = 1;
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
             KeyNow : 1
    };
    }
    onClick(key){
       setInterval(
       this.setState({KeyNow:key.key})
     , 0);
        KeyNow = key.key;
    }
    componentDidMount() {
        }
    componentWillMount(){
       console.log(this.props.location.query)
    }
  render() {
    function Sider(props) {
      if (KeyNow ==1) {
        return(<Desk />);
      }
      if (KeyNow == 2) {
        return(<Customer />);
      }
      else if (KeyNow == 3) {
        return(<GongHai />);
      }
      else if (KeyNow == 4) {
        return(<Phone />);
      }
      else if (KeyNow == 5) {
        return(<Number />);
      }
      else if (KeyNow == 6) {
        return(<SetUp />);
      }
    }
    return (
      <div>
<Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px',left:'50px'}}
      >
        <Menu.Item><Avatar  src="http://193.112.92.136/imgs/react.jpg" /></Menu.Item>
        <Menu.Item key="1" onClick={this.onClick.bind(this)}>工作台</Menu.Item>
        <Menu.Item key="2" onClick={this.onClick.bind(this)}>客户</Menu.Item>
        <Menu.Item key="3" onClick={this.onClick.bind(this)}>公海</Menu.Item>
        <Menu.Item key="4" onClick={this.onClick.bind(this)}>电话</Menu.Item>
        <Menu.Item key="5" onClick={this.onClick.bind(this)}>数据</Menu.Item>
        <Menu.Item key="6" onClick={this.onClick.bind(this)}>设置</Menu.Item>
        <div style={{width:'50%',height:64,backgroundColor:'white',position:'absolute',right:0,top:0,borderRadius:'100px 0px 0px 0px'}}>
            <Avatar style={{left:50}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </div>
      </Menu>
    </Header>
    <Content>
      <Sider />
    </Content>
    <Footer style={{ textAlign: 'center' }}>

    </Footer>
  </Layout>
  </div>
    );
  }
}

export default Main;
