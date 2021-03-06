import React from "react";
import { VictoryPie } from "victory";

const yellows = ["#ECC94B", "#F6E05E", "#FAF089"];
function PieChart({ data }) {
  return (
    <VictoryPie
      data={data}
      labelRadius={30}
      colorScale={yellows}
      style={{
        labels: {
          fill: "#1A202C",
          fontFamily: "Raleway",
          fontSize: 18,
          fontWeight: "600"
        }
      }}
      innerRadius={75}
    />
  );
}

export default PieChart;
