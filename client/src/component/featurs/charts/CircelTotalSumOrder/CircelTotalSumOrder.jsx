import React from "react";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export function CircelTotalOfOrder({eilat}){
    let allOrder=0
    let profit=0
    // allOrder=eilat[0].Coffee.NumberOfOrder+eilat[0].Drink.NumberOfOrder+eilat[0].Cake.NumberOfOrder+eilat[0].Tea.NumberOfOrder+eilat[0].Zinger.NumberOfOrder
    // allOrder=eilat[1].Coffee.NumberOfOrder+eilat[1].Drink.NumberOfOrder+eilat[1].Cake.NumberOfOrder+eilat[1].Tea.NumberOfOrder+eilat[1].Zinger.NumberOfOrder
    // allOrder=eilat[2].Coffee.NumberOfOrder+eilat[2].Drink.NumberOfOrder+eilat[2].Cake.NumberOfOrder+eilat[2].Tea.NumberOfOrder+eilat[2].Zinger.NumberOfOrder
    // allOrder=eilat[2].Coffee.NumberOfOrder+eilat[2].Drink.NumberOfOrder+eilat[2].Cake.NumberOfOrder+eilat[2].Tea.NumberOfOrder+eilat[2].Zinger.NumberOfOrder
    // allOrder=eilat[4].Coffee.NumberOfOrder+eilat[4].Drink.NumberOfOrder+eilat[4].Cake.NumberOfOrder+eilat[4].Tea.NumberOfOrder+eilat[4].Zinger.NumberOfOrder
    // allOrder=eilat[5].Coffee.NumberOfOrder+eilat[5].Drink.NumberOfOrder+eilat[5].Cake.NumberOfOrder+eilat[5].Tea.NumberOfOrder+eilat[5].Zinger.NumberOfOrder
    // allOrder=eilat[6].Coffee.NumberOfOrder+eilat[6].Drink.NumberOfOrder+eilat[6].Cake.NumberOfOrder+eilat[6].Tea.NumberOfOrder+eilat[6].Zinger.NumberOfOrder
   
    // console.log(allOrder);
    // profit=eilat[0].Coffee.Price+eilat[0].Drink.Price+eilat[0].Cake.Price+eilat[0].Tea.Price+eilat[0].Zinger.Price*allOrder
    // console.log(profit);
    return(
        <div className="div">
        <CircularProgressbarWithChildren value={profit}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <img style={{ width: 40, marginTop: -5 }}/>
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong>{profit}</strong> order
  </div>
</CircularProgressbarWithChildren>
</div>
    )
}