import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const Chart = ({ data, minValue }) => {
  return (
    <LineChart
      width={1150}
      height={300}
      data={data}
      margin={{
        top: 30,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis domain={[minValue - minValue / 20, "auto"]} />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  );
};

export default Chart;
