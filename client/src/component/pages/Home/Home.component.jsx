import './Home.css'
import {VerticalBar} from '../../featurs/charts/VerticalBar/VerticalBar'
import { useContext } from 'react';
import { EilatContext } from '../../../contexts/EilatProvaider';
import {PieProduct} from '../../featurs/charts/PieProduct/Pie'
import {PieClient} from '../../featurs/charts/PieClient/PieClient'
import {CircelNumOfOrder} from '../../featurs/charts/CircelNumOfOrder/CircelNumOfOrder'
import {CircelTotalOfOrder} from '../../featurs/charts/CircelTotalSumOrder/CircelTotalSumOrder'
import DayCard from '../../featurs/cards/cardDay'
import {LineChartProfitDay} from '../../featurs/charts/LineChartProfitDay/LineChartProfitDay'
import {VerticalBarSalesDay} from '../../featurs/charts/VerticalBarSalesDay/VerticalBarSalesDay'
import MaxProductPurchasd from '../../featurs/cards/MaxProductPurchasd/MaxProductPurchasd'
import TotalOrderedProductsCard from '../../featurs/cards/TotalOrderedProductsCard/TotalOrderedProductsCard'
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

//רווח יומי מכל מוצר
  // let profitCoffeeDay1=0
  // let profitDrinkDay1=0
  // let profitCakeDay1=0
  // let profitTeaDay1=0
  // let profitZingerDay1=0

  // let profitCoffeeDay2=0
  // let profitDrinkDay2=0
  // let profitCakeDay2=0
  // let profitTeaDay2=0
  // let profitZingerDay2=0

  // let profitCoffeeDay3=0
  // let profitDrinkDay3=0
  // let profitCakeDay3=0
  // let profitTeaDay3=0
  // let profitZingerDay3=0

  // let profitCoffeeDay4=0
  // let profitDrinkDay4=0
  // let profitCakeDay4=0
  // let profitTeaDay4=0
  // let profitZingerDay4=0

  // let profitCoffeeDay5=0
  // let profitDrinkDay5=0
  // let profitCakeDay5=0
  // let profitTeaDay5=0
  // let profitZingerDay5=0

  // let profitCoffeeDay6=0
  // let profitDrinkDay6=0
  // let profitCakeDay6=0
  // let profitTeaDay6=0
  // let profitZingerDay6=0

  // let profitCoffeeDay7=0
  // let profitDrinkDay7=0
  // let profitCakeDay7=0
  // let profitTeaDay7=0
  // let profitZingerDay7=0
  
  // profitCoffeeDay1=AllDetelsFromEilat[0].Coffee.Price*AllDetelsFromEilat[0].Coffee.NumberOfOrder
  // profitDrinkDay1=AllDetelsFromEilat[0].Drink.Price*AllDetelsFromEilat[0].Drink.NumberOfOrder
  // profitCakeDay1=AllDetelsFromEilat[0].Cake.Price*AllDetelsFromEilat[0].Cake.NumberOfOrder
  // profitTeaDay1=AllDetelsFromEilat[0].Tea.Price*AllDetelsFromEilat[0].Tea.NumberOfOrder
  // profitZingerDay1=AllDetelsFromEilat[0].Zinger.Price*AllDetelsFromEilat[0].Zinger.NumberOfOrder
  
  // profitCoffeeDay2= AllDetelsFromEilat[1].Coffee.Price*AllDetelsFromEilat[1].Coffee.NumberOfOrder
  // profitDrinkDay2=AllDetelsFromEilat[1].Drink.Price*AllDetelsFromEilat[1].Drink.NumberOfOrder
  // profitCakeDay2=AllDetelsFromEilat[1].Cake.Price*AllDetelsFromEilat[1].Cake.NumberOfOrder
  // profitTeaDay2=AllDetelsFromEilat[1].Tea.Price*AllDetelsFromEilat[1].Tea.NumberOfOrder
  // profitZingerDay2=AllDetelsFromEilat[1].Zinger.Price*AllDetelsFromEilat[1].Zinger.NumberOfOrder
    
  // profitCoffeeDay3=AllDetelsFromEilat[2].Coffee.Price*AllDetelsFromEilat[2].Coffee.NumberOfOrder
  // profitDrinkDay3=AllDetelsFromEilat[2].Drink.Price*AllDetelsFromEilat[2].Drink.NumberOfOrder
  // profitCakeDay3=AllDetelsFromEilat[2].Cake.Price*AllDetelsFromEilat[2].Cake.NumberOfOrder
  // profitTeaDay3=AllDetelsFromEilat[2].Tea.Price*AllDetelsFromEilat[2].Tea.NumberOfOrder
  // profitZingerDay3=AllDetelsFromEilat[2].Zinger.Price*AllDetelsFromEilat[2].Zinger.NumberOfOrder
  
  // profitCoffeeDay4=AllDetelsFromEilat[3].Coffee.Price*AllDetelsFromEilat[3].Coffee.NumberOfOrder
  // profitDrinkDay4=AllDetelsFromEilat[3].Drink.Price*AllDetelsFromEilat[3].Drink.NumberOfOrder
  // profitCakeDay4=AllDetelsFromEilat[3].Cake.Price*AllDetelsFromEilat[3].Cake.NumberOfOrder
  // profitTeaDay4=AllDetelsFromEilat[3].Tea.Price*AllDetelsFromEilat[3].Tea.NumberOfOrder
  // profitZingerDay4=AllDetelsFromEilat[3].Zinger.Price*AllDetelsFromEilat[3].Zinger.NumberOfOrder

  // profitCoffeeDay5=AllDetelsFromEilat[4].Coffee.Price*AllDetelsFromEilat[4].Coffee.NumberOfOrder
  // profitDrinkDay5=AllDetelsFromEilat[4].Drink.Price*AllDetelsFromEilat[4].Drink.NumberOfOrder
  // profitCakeDay5=AllDetelsFromEilat[4].Cake.Price*AllDetelsFromEilat[4].Cake.NumberOfOrder
  // profitTeaDay5=AllDetelsFromEilat[4].Tea.Price*AllDetelsFromEilat[4].Tea.NumberOfOrder
  // profitZingerDay5=AllDetelsFromEilat[4].Zinger.Price*AllDetelsFromEilat[4].Zinger.NumberOfOrder
    
  // profitCoffeeDay6=AllDetelsFromEilat[5].Coffee.Price*AllDetelsFromEilat[5].Coffee.NumberOfOrder
  // profitDrinkDay6=AllDetelsFromEilat[5].Drink.Price*AllDetelsFromEilat[5].Drink.NumberOfOrder
  // profitCakeDay6=AllDetelsFromEilat[5].Cake.Price*AllDetelsFromEilat[5].Cake.NumberOfOrder
  // profitTeaDay6=AllDetelsFromEilat[5].Tea.Price*AllDetelsFromEilat[5].Tea.NumberOfOrder
  // profitZingerDay6=AllDetelsFromEilat[5].Zinger.Price*AllDetelsFromEilat[5].Zinger.NumberOfOrder
  
  // profitCoffeeDay7=AllDetelsFromEilat[6].Coffee.Price*AllDetelsFromEilat[6].Coffee.NumberOfOrder
  // profitDrinkDay7=AllDetelsFromEilat[6].Drink.Price*AllDetelsFromEilat[6].Drink.NumberOfOrder
  // profitCakeDay7=AllDetelsFromEilat[6].Cake.Price*AllDetelsFromEilat[6].Cake.NumberOfOrder
  // profitTeaDay7=AllDetelsFromEilat[6].Tea.Price*AllDetelsFromEilat[6].Tea.NumberOfOrder
  // profitZingerDay7=AllDetelsFromEilat[6].Zinger.Price*AllDetelsFromEilat[6].Zinger.NumberOfOrder
  
  

//רווח שבועי לפי מוצרים
    let CoffeeProfit=0
    let DrinkProfit=0
    let CakeProfit=0
    let TeaProfit=0
    let ZingerProfit=0
//רווח כולל של מוצרים
    let allCoffeeProfit=0
    let allDrinkProfit=0
    let allCakeProfit=0
    let allTeaProfit=0
    let allZingerProfit=0
    let allProfit=0
    let allCoffeeProfitin0=0
    let profitArray=[allCakeProfit,allCoffeeProfit,allDrinkProfit,allTeaProfit,allZingerProfit]

    allProfit=profitArray.map(item=>allProfit+=item)

    // console.log(`${allProfit}all profit`);
    
    CoffeeProfit= AllDetelsFromEilat.map(coffee=>CoffeeProfit+=coffee.Coffee.NumberOfOrder*coffee.Coffee.Price)
    console.log(`${CoffeeProfit}dfglkdfjgdfgdfgkdlfgjdfkfgkdjfgdklfgjdfgkldfjgdflkg`);
    allCoffeeProfitin0=CoffeeProfit.map(item=>allCoffeeProfit+=item)
    allCoffeeProfit=allCoffeeProfitin0[allCoffeeProfitin0.length-1]
    console.log(`${allCoffeeProfit}allCoffeeProfitunarray 0 yehudasanau`);

    console.log(`${allCoffeeProfit}yehudajfsdhfksjdfhsdkjfshdfjksadfhsdkjfsdhfkjsdfh`);

    // console.log(`${allCoffeeProfit}allCoffeeProfit`);
    
    DrinkProfit= AllDetelsFromEilat.map(drink=>DrinkProfit+=drink.Drink.NumberOfOrder*drink.Drink.Price)
    DrinkProfit.map(item=>allDrinkProfit+=item)
    // console.log(`${allDrinkProfit}allDrinkProfit`);
    
    CakeProfit= AllDetelsFromEilat.map(cake=>CakeProfit+=cake.Cake.NumberOfOrder*cake.Cake.Price)
    CakeProfit.map(item=>allCakeProfit+=item)
    // console.log(`${allCakeProfit}allCakeProfit`);
    
    TeaProfit= AllDetelsFromEilat.map(tea=>TeaProfit+=tea.Tea.NumberOfOrder*tea.Tea.Price)
    TeaProfit.map(item=>allTeaProfit+=item)
    // console.log(`${allTeaProfit}allTeaProfit`);
    
    ZingerProfit= AllDetelsFromEilat.map(zinger=>ZingerProfit+=zinger.Zinger.NumberOfOrder*zinger.Zinger.Price)
    // console.log(`${ZingerProfit[0]}fkdjsdlkfsjdfsldkfjsdflkj`);
    ZingerProfit.map(item=>allZingerProfit+=item)
    // console.log(`${allZingerProfit}allZingerProfit`);
    // console.log( AllDetelsFromEilat[0].map(item=>item.NumberOfOrder*item.Price));
  // let day1=AllDetelsFromEilat[0].Cake.NumberOfOrder+AllDetelsFromEilat[0].Coffee.NumberOfOrder+AllDetelsFromEilat[0].Drink.NumberOfOrder+AllDetelsFromEilat[0].Tea.NumberOfOrder+AllDetelsFromEilat[0].Zinger.NumberOfOrder
  
  // console.log(day1);
  return(
    <div>
      <h1>home</h1>
      <VerticalBar eilat={AllDetelsFromEilat}/>
      <PieProduct eilat={AllDetelsFromEilat}/>
      <PieClient eilat={AllDetelsFromEilat} />
      <CircelNumOfOrder eilat={AllDetelsFromEilat}/>
      <CircelTotalOfOrder eilat={AllDetelsFromEilat}/>
      <DayCard/>
      <MaxProductPurchasd/>
      <LineChartProfitDay eilat={AllDetelsFromEilat}/>
      <TotalOrderedProductsCard/>
      <VerticalBarSalesDay eilat={AllDetelsFromEilat}/>
      
      
      </div>
  )
}