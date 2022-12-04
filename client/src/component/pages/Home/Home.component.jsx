import './Home.css'
import {VerticalBar} from '../../featurs/charts/VerticalBar/VerticalBar'
import { useContext } from 'react';
import { EilatContext } from '../../../contexts/EilatProvaider';
export default function Home(){
  const {
    AllDetelsFromEilat
    // OrderByDay1Eilat,
    // OrderByDay2Eilat,
    // OrderByDay3Eilat,
    // OrderByDay4Eilat,
    // OrderByDay5Eilat,
    // OrderByDay6Eilat,
    // OrderByDay7Eilat,
  } = useContext(EilatContext);
  // console.log(AllDetelsFromEilat);
  // console.log(OrderByDay1Eilat);
  // const day1=OrderByDay1Eilat
  // const day1=OrderByDay1Eilat[0].Coffee.NumberOfOrder
  // const orderOfDay1=OrderByDay1Eilat[0].Coffee.NumberOfOrder
  // const orderDay1=OrderByDay1Eilat[0].Coffee.NumberOfOrder
  console.log(AllDetelsFromEilat);
  // let day1=AllDetelsFromEilat[0].Cake.NumberOfOrder+AllDetelsFromEilat[0].Coffee.NumberOfOrder+AllDetelsFromEilat[0].Drink.NumberOfOrder+AllDetelsFromEilat[0].Tea.NumberOfOrder+AllDetelsFromEilat[0].Zinger.NumberOfOrder
  
  // console.log(day1);
  return(
    <div>
      <h1>home</h1>
      <VerticalBar/>
      
      </div>
  )
}