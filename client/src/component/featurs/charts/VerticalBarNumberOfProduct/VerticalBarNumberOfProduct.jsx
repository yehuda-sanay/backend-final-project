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

export function VerticalBarNumberOfProduct({ orderAllWeek }) {
  // console.log(eilat[0].Coffee.NumberOfOrder);
  const labels = ["1.12", "2.12", "03.12", "04.12", "05.12", "06.12", "07.12"];
  // const numbers2 = [5, 8, 2, 110, 24, 1]
  // console.log("EILAT:",eilat);
  
  console.log(
    // eilat[0]?.map(key => Object.keys(key)?.map(obj => obj.NumberOfOrder))
    // var result = arr.map(person => ({ value: person.id, text: person.name }));
  );
  // let day1=0;
  // let day2=0;
  // let day3=0;
  // let day4=0;
  // let day5=0;
  // let day6=0;
  // let day7=0;
  // // day1=eilat[0].Coffee.NumberOfOrder+eilat[0].Drink.NumberOfOrder+eilat[0].Cake.NumberOfOrder+eilat[0].Tea.NumberOfOrder+eilat[0].Zinger.NumberOfOrder
  // // day2=eilat[1].Coffee.NumberOfOrder+eilat[1].Drink.NumberOfOrder+eilat[1].Cake.NumberOfOrder+eilat[1].Tea.NumberOfOrder+eilat[1].Zinger.NumberOfOrder
  // // day3=eilat[2].Coffee.NumberOfOrder+eilat[2].Drink.NumberOfOrder+eilat[2].Cake.NumberOfOrder+eilat[2].Tea.NumberOfOrder+eilat[2].Zinger.NumberOfOrder
  // // day4=eilat[2].Coffee.NumberOfOrder+eilat[2].Drink.NumberOfOrder+eilat[2].Cake.NumberOfOrder+eilat[2].Tea.NumberOfOrder+eilat[2].Zinger.NumberOfOrder
  // // day5=eilat[4].Coffee.NumberOfOrder+eilat[4].Drink.NumberOfOrder+eilat[4].Cake.NumberOfOrder+eilat[4].Tea.NumberOfOrder+eilat[4].Zinger.NumberOfOrder
  // // day6=eilat[5].Coffee.NumberOfOrder+eilat[5].Drink.NumberOfOrder+eilat[5].Cake.NumberOfOrder+eilat[5].Tea.NumberOfOrder+eilat[5].Zinger.NumberOfOrder
  // // day7=eilat[6].Coffee.NumberOfOrder+eilat[6].Drink.NumberOfOrder+eilat[6].Cake.NumberOfOrder+eilat[6].Tea.NumberOfOrder+eilat[6].Zinger.NumberOfOrder
  // // console.log(day1);
  

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data:orderAllWeek,
        backgroundColor: "rgba(50, 99, 132, 0.5)",
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