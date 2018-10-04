import React, { Component } from "react";
import { Layout, Menu, Icon, DatePicker } from "antd";
import { Link, Route } from "react-router-dom";
import moment from "moment";

import logo from "../assets/logo.png";
import Dashboard from "../Pages/Dashboard";
import NatType from "../Pages/NatType";
import "./Layouts.css";
import ConnectionAttempts from "../Pages/ConnectionAttempts";
import Protocol from "../Pages/Protocol";

const { Header, Sider, Content } = Layout;
const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";

class Layouts extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: 900 }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width={256}
        >
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1>CRUST TESTNET</h1>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">
                <span id="item">
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/nat">
                <span id="item">
                  <Icon type="retweet" />
                  <span>NAT Type</span>
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/protocol">
                <span id="item">
                  <Icon type="arrow-up" />
                  <span>Protocol</span>
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/connect">
                <span id="item">
                  <Icon type="warning" />
                  <span>Connection Attempts</span>
                </span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />    
            <span class="topnav">
              <a href="#">Hour</a>
              <a href="#">Day</a>
              <a href="#">Week</a>
              <a href="#">Month</a>
              <a class="active" href="#">
                All Time
              </a>
            <span className="date">
              <RangePicker
                defaultValue={[
                  moment("2015/01/01", dateFormat),
                  moment("2015/01/01", dateFormat)
                ]}
                format={dateFormat}
              />
            </span>
            </span>
          </Header>
          <Content
          >
            <Route path="/" exact component={Dashboard} />
            <Route path="/nat" component={NatType} />
            <Route path="/protocol" component={Protocol} />
            <Route path="/connect" component={ConnectionAttempts} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Layouts;
