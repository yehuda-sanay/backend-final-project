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

const labels = ['01.12', '02.12', '03.12', '04.12', '05.12', '06.12', '07.12'];


export function VerticalBarSalesDay({eilat}) {
    let day1=0;
    let day2=0;
    let day3=0;
    let day4=0;
    let day5=0;
    let day6=0;
    let day7=0;
    // day1=eilat[0].Coffee.Price+eilat[0].Drink.Price+eilat[0].Cake.Price+eilat[0].Tea.Price+eilat[0].Zinger.Price
    // day2=eilat[1].Coffee.Price+eilat[1].Drink.Price+eilat[1].Cake.Price+eilat[1].Tea.Price+eilat[1].Zinger.Price
    // day3=eilat[2].Coffee.Price+eilat[2].Drink.Price+eilat[2].Cake.Price+eilat[2].Tea.Price+eilat[2].Zinger.Price
    // day4=eilat[2].Coffee.Price+eilat[2].Drink.Price+eilat[2].Cake.Price+eilat[2].Tea.Price+eilat[2].Zinger.Price
    // day5=eilat[4].Coffee.Price+eilat[4].Drink.Price+eilat[4].Cake.Price+eilat[4].Tea.Price+eilat[4].Zinger.Price
    // day6=eilat[5].Coffee.Price+eilat[5].Drink.Price+eilat[5].Cake.Price+eilat[5].Tea.Price+eilat[5].Zinger.Price
    // day7=eilat[6].Coffee.Price+eilat[6].Drink.Price+eilat[6].Cake.Price+eilat[6].Tea.Price+eilat[6].Zinger.Price
    const pricePerDayArray =[day1,day2,day3,day4,day5,day6,day7]
    console.log(pricePerDayArray);
    const data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: pricePerDayArray.map((item) =>item),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          tension:0.4
        },
        // {
        //   label: 'Dataset 2',
        //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        //   borderColor: 'rgb(53, 162, 235)',
        //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // },
      ],
    };
  return <Line options={options} data={data} />;
}