import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SetUp extends React.Component {
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
           <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>客户设置</span></span>}
            >
              <Menu.Item key="1">客户字段</Menu.Item>
              <Menu.Item key="2">客户信息</Menu.Item>
              <Menu.Item key="3">客户规则</Menu.Item>
              <Menu.Item key="4">客户过滤器</Menu.Item>
              <Menu.Item key="5">自主报名客户</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="user" /><span>工单设置</span></span>}
            >
              <Menu.Item key="6">工单类型</Menu.Item>
              <Menu.Item key="7">工单字段</Menu.Item>
              <Menu.Item key="8">工单过滤器</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="user" /><span>公海设置</span></span>}
            >
              <Menu.Item key="9">公海设置</Menu.Item>
              <Menu.Item key="10">公海分组</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={<span><Icon type="user" /><span>电话设置</span></span>}
            >
              <Menu.Item key="11">电话接入</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={<span><Icon type="user" /><span>数据设置</span></span>}
            >
              <Menu.Item key="12">报表设置</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub6"
              title={<span><Icon type="user" /><span>系统设置</span></span>}
            >
              <Menu.Item key="13">触发任务</Menu.Item>
              <Menu.Item key="14">自动任务</Menu.Item>
              <Menu.Item key="15">用户设置</Menu.Item>
              <Menu.Item key="16">工作提醒</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub7"
              title={<span><Icon type="user" /><span>应用扩展</span></span>}
            >
              <Menu.Item key="17">留言接入</Menu.Item>
              <Menu.Item key="18">网校接入</Menu.Item>
              <Menu.Item key="19">营销名片接入</Menu.Item>
              <Menu.Item key="20">ERP接入</Menu.Item>

            </SubMenu>
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
