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
      text: 'weekly All Product Profit',
    },
  },
};

const labels = ['01.12', '02.12', '03.12', '04.12', '05.12', '06.12', '07.12'];


export function VerticalBarSalesDay({weeklyAllProductProfit}) {
    
    const data = {
      labels,
      datasets: [
        {
          label: 'Profit For Day',
          data: weeklyAllProductProfit.map((item) =>item),
          borderColor: 'rgb(50, 99, 132)',
          backgroundColor: 'rgba( 99, 132, 0.5)',
          tension:0.4
        },
        
      ],
    };
  return <Line options={options} data={data} />;
}