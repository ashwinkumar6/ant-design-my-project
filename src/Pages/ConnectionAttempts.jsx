import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import Tables from "../components/Tables";
import TabComp from "../components/TabComp";
import "./Dashboard.css";

//use pagetype to pass json obj to TabComp instead of hardCoding values
import PageTypes from "../constants/page-types"

const topColResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 8,
  xl: 8
};

class ConnectionAttempts extends Component {
  render() {
    return (
      <div className="gutter-example">
      <h1 style={{padding: "10px 0px 0px 30px"}}>Connection Attempts</h1>
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
            <Card
              style={{
                background: "#fff",
                borderRadius: 5,
                minHeight: 100
              }}
            >
            <TabComp pageName={"ConnectionAttempts"} />
          </Card>
          </Col>
        </Row>
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
            <Card title="Connection Result: "
              style={{
                background: "#fff",
                minHeight: 280
              }}
            >
              <Tables />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ConnectionAttempts;
