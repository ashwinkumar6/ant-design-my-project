import React, { Component } from "react";
import { Tabs, Row, Col, Dropdown, Button, Icon, Menu, Card } from "antd";
import DropdownOptions from "./SubComponents/DropDownRender";
import Charts from "./Charts";
import LineChart from "./LineChart";
const TabPane = Tabs.TabPane;

const dataArray = [
  { x: 1538414930276, y1: 50, y2: 40, y3: 10},
  { x: 1538415062278, y1: 31, y2: 20, y3: 11},
  { x: 1538415149420, y1: 25, y2: 10, y3: 15},
  { x: 1538415164928, y1: 30, y2: 15, y3: 15},
  { x: 1538417574996, y1: 15, y2: 10, y3: 25}
];


function callback(key) {
  console.log(key);
}

class TabComp extends Component {

BarChartComponent(key,tabName,tabTypes){
  return(
        <TabPane tab={tabName} key={key}>
        <DropdownOptions contents={tabTypes}/>
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
            <Card
              style={{
                background: "#fff",
                borderRadius: 5,
                minHeight: 500
              }}>
              <Charts />
            </Card>
          </Col>
        </Row>
        </TabPane>  
  )
}
LineChartComponent(key,tabName,tabTypes){
  return(
        <TabPane tab={tabName} key={key}>
        <DropdownOptions contents={tabTypes}/>
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
            <Card
              style={{
                background: "#fff",
                borderRadius: 5,
                minHeight: 500
              }}>
              <LineChart data={ dataArray } height={400} titleMap={ { y1: 'Total', y2: 'Successful', y3: 'Failed' } } />
            </Card>
          </Col>
        </Row>
        </TabPane>    
  )
}
PieChartComponent(key,tabName,tabTypes){
  return(
        <TabPane tab={tabName} key={key}>
        <DropdownOptions contents={tabTypes}/>
        {/* add pie chart here */}
        </TabPane>    
  )
}

  render() {
    switch (this.props.pageName) {
      case "ConnectionAttempts":
      return (
        <div>
          <Tabs defaultActiveKey="1" onChange={callback} size="large">
              {this.LineChartComponent(1,"All Activity",["NAT Type","O.S.","Protocol","Country"])}
              {this.BarChartComponent(2,"Country",["NAT Type","Protocol","O.S."])}
              {this.BarChartComponent(3,"Operating System",["NAT Type","Protocol","O.S."])}
          </Tabs>
        </div>
      );
        
      case "Protocol":
      return (
        <div>
          <Tabs defaultActiveKey="1" onChange={callback} size="large">
          {this.PieChartComponent(1,"All Protocol",["NAT Type","O.S.","Country"])}
          {this.PieChartComponent(2,"TCP Direct",["NAT Type","O.S.","Country"])}
          {this.PieChartComponent(3,"TCP Hole Punched",["NAT Type","O.S.","Country"])}
          {this.PieChartComponent(4,"uTP Hole Punched",["NAT Type","O.S.","Country"])}
          </Tabs>
        </div>
      );

      case "NAT Type":
      return (
        <div>
          <Tabs defaultActiveKey="1" onChange={callback} size="large">
          {this.PieChartComponent(1,"All Nat Type",["Protocol","O.S.","Country"])}          
          {this.PieChartComponent(2,"EDM",["Protocol","O.S.","Country"])}          
          {this.PieChartComponent(3,"EIM",["Protocol","O.S.","Country"])}          
          {this.PieChartComponent(4,"EDM Random",["Protocol","O.S.","Country"])}          
          {this.PieChartComponent(5,"EDM to EIM",["Protocol","O.S.","Country"])}          
          </Tabs>
        </div>
      );

      default:
        break;
    }
  }
}
export default TabComp;
