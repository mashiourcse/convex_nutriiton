import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto'; // ADD THIS
export const ChartComponent = ({ labels, data,header}) => {
  console.log(labels);
  console.log(data);
  const [chartData, setChartData] = useState({
    labels: labels || [],
    datasets: [
      {
        label: "Count",
        data: data || [],
        backgroundColor: [
          "rgba(255, 0, 0, 0.8)",
          "rgba(0, 255, 0, 0.8)",
          "rgba(0, 0, 255, 0.8)",
          "rgba(255, 255, 0, 0.8)",
          "rgba(128, 0, 128, 0.8)",
          "rgba(255, 165, 0, 0.8)",
        ],
        borderColor: [
          "rgba(255, 0, 0, 0.8)",
          "rgba(0, 255, 0, 0.8)",
          "rgba(0, 0, 255, 0.8)",
          "rgba(255, 255, 0, 0.8)",
          "rgba(128, 0, 128, 0.8)",
          "rgba(255, 165, 0, 0.8)",
        ],
      },
    ],
  });

  return (
    <div className="card categoryCard">
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              // text: header || "dummy",
              text: "",
              align: "start",
              font: { size: 20 },
              color: "black",
            },
          },
        }}
      />
    </div>
  );
};