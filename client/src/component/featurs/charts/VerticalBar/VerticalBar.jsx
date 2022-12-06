import "./VerticalBar.css";
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Numbers Of Orders Per Day",
    },
  },
};

export function VerticalBar({ orderWeekly }) {

  const labels = ["1.12", "2.12", "03.12", "04.12", "05.12", "06.12", "07.12"];
  
  

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data:orderWeekly,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="BG">
      <div className="Chart-Grid">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
