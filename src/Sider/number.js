import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Number extends React.Component {
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
              <span>业务日报</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>业务周报</span>
            </Menu.Item>
              <Menu.Item key="3">
              <Icon type="user" />
              <span>业务月报</span>
              </Menu.Item>
              <Menu.Item key="4">
              <Icon type="user" />
              <span>业绩报表</span>
              </Menu.Item>
            <Menu.Item key="5">
              <Icon type="file" />
              <span>销售效能报表</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="file" />
              <span>销售机会报表</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="file" />
              <span>销售业绩报表</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="file" />
              <span>分配记录</span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>转让记录</span>
            </Menu.Item>
            <Menu.Item key="10">
              <Icon type="file" />
              <span>数据导出</span>
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
