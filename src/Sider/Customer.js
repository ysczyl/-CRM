import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Customer extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>全部用户</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>成交用户</span>
            </Menu.Item>
              <Menu.Item key="3">
              <Icon type="user" />
              <span>待分配客户</span>
              </Menu.Item>
              <Menu.Item key="4">
              <Icon type="user" />
              <span>已删除客户</span>
              </Menu.Item>
            <Menu.Item key="5">
              <Icon type="file" />
              <span>工作日志</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
