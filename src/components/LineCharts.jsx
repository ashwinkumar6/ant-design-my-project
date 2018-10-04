import React, { Component } from "react";
import { TimelineChart } from "ant-design-pro/lib/Charts";

const chartData = [];
for (let i = 0; i < 20; i += 1) {
  chartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 100,
    y2: Math.floor(Math.random() * 100) + 10,
    y3: Math.floor(Math.random() * 100) + 1000
  });
}

class LineCharts extends Component {
  render() {
    return (
      <TimelineChart
        height={400}
        data={chartData}
        titleMap={{ y1: "Total", y2: "Success", y3: "Failed" }}
      />
    );
  }
}

export default LineCharts;
