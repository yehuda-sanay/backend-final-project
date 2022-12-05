import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export function PieClient({eilat}) {
    let purchswError=0;
    let clientDeclined=0
    eilat.map(coffee =>purchswError+=coffee.Coffee.PurhaseError);
    eilat.map(cake =>purchswError+=cake.Cake.PurhaseError);
    eilat.map(drink =>purchswError+=drink.Drink.PurhaseError);
    eilat.map(tea =>purchswError+=tea.Tea.PurhaseError);
    eilat.map(zinger =>purchswError+=zinger.Zinger.PurhaseError);
    console.log(purchswError);
    eilat.map(coffee =>clientDeclined+=coffee.Coffee.ClientDeclined);
    eilat.map(cake =>clientDeclined+=cake.Cake.ClientDeclined);
    eilat.map(drink =>clientDeclined+=drink.Drink.ClientDeclined);
    eilat.map(tea =>clientDeclined+=tea.Tea.ClientDeclined);
    eilat.map(zinger =>clientDeclined+=zinger.Zinger.ClientDeclined);
    
    
    const data = {
      labels: ['PurchswError', 'ClientDeclined'],
      
      datasets: [
        {
          label: '# of Votes',
          data: [purchswError, clientDeclined],
          backgroundColor: [
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 255, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  return <Pie data={data} />;
}