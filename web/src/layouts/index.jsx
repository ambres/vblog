import { Component } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';
import { Layout, Menu, Icon } from 'antd';
import styles from './index.less';

const { Header, Sider, Content } = Layout;

class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/login">
                <Icon type="user" />
                <span>nav 1</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(connect(({ global }) => ({ global }))(BasicLayout));
