import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export function PieProduct({eilat}) {
    let Coffee=0;
    let Cake=0
    let Drink=0
    let Tea=0
    let Zinger=0
    eilat.map(coffee =>Coffee+=coffee.Coffee.NumberOfOrder);
    eilat.map(cake =>Cake+=cake.Cake.NumberOfOrder);
    eilat.map(drink =>Drink+=drink.Drink.NumberOfOrder);
    eilat.map(tea =>Tea+=tea.Tea.NumberOfOrder);
    eilat.map(zinger =>Zinger+=zinger.Zinger.NumberOfOrder);
    
    
    console.log(Coffee,Cake);
    const data = {
      labels: ['Coffee', 'Cake', 'Drink', 'Tea', 'Zinger'],
      
      datasets: [
        {
          label: '# of Votes',
          data: [Coffee, Cake, Drink, Tea, Zinger],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  return <Pie data={data} />;
}