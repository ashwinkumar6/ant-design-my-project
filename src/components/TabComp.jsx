import React, { Component } from "react";
import { Tabs, Row, Col, Dropdown, Button, Icon, Menu, Card } from "antd";
import DropdownOptions from "./SubComponents/DropDownRender";
import Charts from "./Charts";
import LineChart from "./LineChart";
import { LineChartArray } from "../assets/data"
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export class ChartGenerator extends Component {
  render() {
    console.log("inside tabbed line chart");
    const { type,tabName1,tabName2,data1, data2 } = this.props;
    if (type === "tabbedBarChart") {
      return (
        <Tabs defaultActiveKey="1" onChange={callback} size="large">
          <TabPane tab={tabName1} key={1}>
            <BarChartTabs chartData={data1} />
          </TabPane>

          <TabPane tab={tabName2} key={2}>
            <BarChartTabs chartData={data2} />
          </TabPane>
        </Tabs>
      )
    }
    else if(type === "tabbedLineChart")
    {
      console.log("inside tabbed line chart")
      return (
        <div>
        <Tabs defaultActiveKey="1" onChange={callback} size="large">
          <TabPane tab={tabName1} key={1}>
            <LineChartTabs/>
          </TabPane>

          <TabPane tab={tabName2} key={2}>
            <LineChartTabs/>
          </TabPane>
        </Tabs>
        </div>
      )
    }
    else {
      return (
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
            <Card
              style={{
                background: "#fff",
                borderRadius: 5,
                minHeight: 500
              }}>
              <LineChart data={LineChartArray} height={400} titleMap={{ y1: 'Total', y2: 'Successful', y3: 'Failed' }} />
            </Card>
          </Col>
        </Row>
      )
    }
  }
}

export class BarChartTabs extends Component {
  render() {
    const { chartData } = this.props;
    return (
      <Row gutter={24} style={{ margin: "24px 8px" }}>
        <Col className="gutter-row" span={24}>
          <Card
            style={{
              background: "#fff",
              borderRadius: 5,
              minHeight: 500
            }}>
            <Charts values={chartData.values} dataSource={chartData.dataSource} interval={chartData.interval} />
          </Card>
        </Col>
      </Row>
    )
  }
}

export class LineChartTabs extends Component {
  render() {
    return (
        <Row gutter={24} style={{ margin: "24px 8px" }}>
          <Col className="gutter-row" span={24}>
            <Card
              style={{
                background: "#fff",
                borderRadius: 5,
                minHeight: 500
              }}>
              <LineChart data={LineChartArray} height={400} titleMap={{ y1: 'Total', y2: 'Successful', y3: 'Failed' }} />
            </Card>
          </Col>
        </Row>
    )
  }
}

class TabComp extends Component {

  NestedTabChart(key, tabName, tabTypes, chartType, chartData1, chartData2) {
    return (
      <TabPane tab={tabName} key={key}>
        <DropdownOptions contents={tabTypes} />
        <ChartGenerator type={chartType} tabName1={"Success Rate"} tabName2={"Failure Rate"} data1={chartData1} data2={chartData2} />
      </TabPane>
    )
  }

  render() {
    const Chart1Data = this.props.chartData[0];
    const Chart2Data = this.props.chartData[1];
    const Chart3Data = this.props.chartData[2];
    return (
          <div>
            <Tabs defaultActiveKey="1" onChange={callback} size="large">
              {this.NestedTabChart(1, "All Activity", ["NAT Type", "O.S.", "Protocol", "Country"], "lineChart", null, null)}
              {this.NestedTabChart(2, "Country", ["NAT Type", "Protocol", "O.S."], "tabbedBarChart", Chart2Data, Chart2Data)}
              {this.NestedTabChart(3, "Operating System", ["NAT Type", "Protocol", "O.S."], "tabbedBarChart", Chart3Data, Chart3Data)}
            </Tabs>
          </div>
        );
    }

}
export default TabComp;
