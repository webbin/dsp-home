import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Layout, Menu, theme, Breadcrumb, Alert, Button } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

import BatteryPage from '../battery/BatteryPage';

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        breakpoint="xs"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              // icon: <UserOutlined />,
              label: 'nav 1',
              // title: <Link to="/app">Str</Link>,
            },
            {
              key: '2',
              // icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              // icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            title={collapsed ? 'Open' : 'Close'}
            // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              color: 'black',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Breadcrumb
            style={{
              paddingTop: 20,
              paddingBottom: 20,
            }}
            items={[
              {
                title: <Link style={{ fontSize: 24 }} to="/">Home</Link>,
                key: 'Home',
              },
              {
                title: <Link style={{ fontSize: 24 }} to="/battery">Battery</Link>,
                key: 'battery',
              },
            ]}
          />
          <Routes>
            <Route path="/battery" Component={BatteryPage} />
            <Route path="*" element={<span>Content</span>} />
          </Routes>
        </Content>

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          DSP Home Footer
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
