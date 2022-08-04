import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointVals = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxPoint = Math.max(...dataPointVals);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxPoint}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
