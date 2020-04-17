import React from "react";
import { VictoryPie, VictoryTooltip } from "victory";

const data = [
  { x: "HTML", y: 54 },
  { x: "Jupyter Notebook", y: 42 },
  { x: "Python", y: 4 }
];

const yellows = ["#ECC94B", "#F6E05E", "#FEFCBF"];

function PieChart() {
  return (
    <VictoryPie
      labelComponent={<VictoryTooltip />}
      data={data}
      colorScale={yellows}
    />
  );
}

export default PieChart;
