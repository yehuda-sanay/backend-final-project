import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};


export function LineChartProfitDay({weeklyCoffee,weeklyDrink,weekyCake,weekyTea,weekyZinger}) {
  const labels = ['01.12', '02.12', '03.12', '04.12', '05.12', '06.12', '07.12'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: weeklyCoffee.map((item) =>item),
        borderColor: 'rgb(200, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension:0.4
      },
      {
        label: 'Dataset 1',
        data: weeklyDrink.map((item) =>item),
        borderColor: 'rgb(150, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension:0.4
      },
      {
        label: 'Dataset 1',
        data: weekyCake.map((item) =>item),
        borderColor: 'rgb(50, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension:0.4
      },
      {
        label: 'Dataset 1',
        data: weekyTea.map((item) =>item),
        borderColor: 'rgb(89, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension:0.4
      },
      {
        label: 'Dataset 1',
        data: weekyZinger.map((item) =>item),
        borderColor: 'rgb(300, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension:0.4
      },
      
    ],
  };
  return <Line options={options} data={data} />;
}

