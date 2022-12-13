import "./Home.css";
import { VerticalBar } from "../../featurs/charts/VerticalBar/VerticalBar";
import { useContext } from "react";
import { EilatContext } from "../../../contexts/EilatProvaider";
import { PieProduct } from "../../featurs/charts/PieProduct/Pie";
import { PieClient } from "../../featurs/charts/PieClient/PieClient";
import { CircelNumOfOrder } from "../../featurs/charts/CircelNumOfOrder/CircelNumOfOrder";
import { CircelTotalOfOrder } from "../../featurs/charts/CircelTotalSumOrder/CircelTotalSumOrder";
import DayCard from "../../featurs/cards/cardDay";
import { LineChartProfitDay } from "../../featurs/charts/LineChartProfitDay/LineChartProfitDay";
import { VerticalBarSalesDay } from "../../featurs/charts/VerticalBarSalesDay/VerticalBarSalesDay";
import MaxProductPurchasd from "../../featurs/cards/MaxProductPurchasd/MaxProductPurchasd";
import TotalOrderedProductsCard from "../../featurs/cards/TotalOrderedProductsCard/TotalOrderedProductsCard";
import { VerticalBarNumberOfProduct } from "../../featurs/charts/VerticalBarNumberOfProduct/VerticalBarNumberOfProduct";
import { Container, Row, Col } from "react-bootstrap";
import CoffeeCard from '../../featurs/cards/CoffeeCard/CoffeeCard'
export default function Home() {
  const {
    AllDetelsFromEilat,
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

  //רווח שבועי לפי מוצרים
  let weeklyCoffeeProfitArry = 0;
  let weeklyDrinkProfitArray = 0;
  let weekyCakeProfitArray = 0;
  let weekyTeaProfitArray = 0;
  let weekyZingerProfitArray = 0;
  //רווח כולל של מוצרים
  let allCoffeeProfit = 0;
  let allDrinkProfit = 0;
  let allCakeProfit = 0;
  let allTeaProfit = 0;
  let allZingerProfit = 0;
  // let allProfit=0
  //בסוף המערך יש את הסכום הכולל של כל השבוע
  let allCoffeeProfitInEndOfLength = 0;
  let allDrinkProfitInEndOfLength = 0;
  let allCakeProfitInEndOfLength = 0;
  let allTeaProfitInEndOfLength = 0;
  let allZingerProfitInEndOfLength = 0;

  //יצירת מערך של רווח שבועי
  weeklyCoffeeProfitArry = AllDetelsFromEilat.map(
    (coffee) =>
      (weeklyCoffeeProfitArry +=
        coffee.Coffee.NumberOfOrder * coffee.Coffee.Price)
  );
  console.log(`${weeklyCoffeeProfitArry}coffee profit`);
  //חיבור של כל הרווחים היומיים ובסוף המערך יש את הסכום הכולל של כל השבוע
  allCoffeeProfitInEndOfLength = weeklyCoffeeProfitArry.map(
    (item) => (allCoffeeProfit += item)
  );
  console.log(`${allCoffeeProfitInEndOfLength} allCoffeeProfitInEndOfLength`);
  //סכום כולל של כל השבוע
  allCoffeeProfit =
    allCoffeeProfitInEndOfLength[allCoffeeProfitInEndOfLength.length - 1];

  //יצירת מערך של רווח שבועי
  weeklyDrinkProfitArray = AllDetelsFromEilat.map(
    (drink) =>
      (weeklyDrinkProfitArray += drink.Drink.NumberOfOrder * drink.Drink.Price)
  );
  //חיבור של כל הרווחים היומיים ובסוף המערך יש את הסכום הכולל של כל השבוע
  allDrinkProfitInEndOfLength = weeklyDrinkProfitArray.map(
    (item) => (allDrinkProfit += item)
  );
  //סכום כולל של כל השבוע
  allDrinkProfit =
    allDrinkProfitInEndOfLength[allDrinkProfitInEndOfLength.length - 1];

  weekyCakeProfitArray = AllDetelsFromEilat.map(
    (cake) =>
      (weekyCakeProfitArray += cake.Cake.NumberOfOrder * cake.Cake.Price)
  );
  allCakeProfitInEndOfLength = weekyCakeProfitArray.map(
    (item) => (allCakeProfit += item)
  );

  allCakeProfit =
    allCakeProfitInEndOfLength[allCakeProfitInEndOfLength.length - 1];

  weekyTeaProfitArray = AllDetelsFromEilat.map(
    (tea) => (weekyTeaProfitArray += tea.Tea.NumberOfOrder * tea.Tea.Price)
  );

  allTeaProfitInEndOfLength = weekyTeaProfitArray.map(
    (item) => (allTeaProfit += item)
  );

  allCakeProfit =
    allCakeProfitInEndOfLength[allCakeProfitInEndOfLength.length - 1];

  weekyZingerProfitArray = AllDetelsFromEilat.map(
    (zinger) =>
      (weekyZingerProfitArray +=
        zinger.Zinger.NumberOfOrder * zinger.Zinger.Price)
  );

  allZingerProfitInEndOfLength = weekyZingerProfitArray.map(
    (item) => (allZingerProfit += item)
  );

  allZingerProfit =
    allZingerProfitInEndOfLength[allZingerProfitInEndOfLength.length - 1];

  let allProfit =
    allCoffeeProfit +
    allDrinkProfit +
    allCakeProfit +
    allTeaProfit +
    allZingerProfit;

  let ProfitArrayByDay1 =
    weeklyCoffeeProfitArry[0] +
    weeklyDrinkProfitArray[0] +
    weekyCakeProfitArray[0] +
    weekyTeaProfitArray[0] +
    weekyZingerProfitArray[0];
  let ProfitArrayByDay2 =
    weeklyCoffeeProfitArry[1] +
    weeklyDrinkProfitArray[1] +
    weekyCakeProfitArray[1] +
    weekyTeaProfitArray[1] +
    weekyZingerProfitArray[1];
  let ProfitArrayByDay3 =
    weeklyCoffeeProfitArry[2] +
    weeklyDrinkProfitArray[2] +
    weekyCakeProfitArray[2] +
    weekyTeaProfitArray[2] +
    weekyZingerProfitArray[2];
  let ProfitArrayByDay4 =
    weeklyCoffeeProfitArry[3] +
    weeklyDrinkProfitArray[3] +
    weekyCakeProfitArray[3] +
    weekyTeaProfitArray[3] +
    weekyZingerProfitArray[3];
  let ProfitArrayByDay5 =
    weeklyCoffeeProfitArry[4] +
    weeklyDrinkProfitArray[4] +
    weekyCakeProfitArray[4] +
    weekyTeaProfitArray[4] +
    weekyZingerProfitArray[4];
  let ProfitArrayByDay6 =
    weeklyCoffeeProfitArry[5] +
    weeklyDrinkProfitArray[5] +
    weekyCakeProfitArray[5] +
    weekyTeaProfitArray[5] +
    weekyZingerProfitArray[5];
  let ProfitArrayByDay7 =
    weeklyCoffeeProfitArry[6] +
    weeklyDrinkProfitArray[6] +
    weekyCakeProfitArray[6] +
    weekyTeaProfitArray[6] +
    weekyZingerProfitArray[6];

  let weeklyAllProductProfit = [
    ProfitArrayByDay1,
    ProfitArrayByDay2,
    ProfitArrayByDay3,
    ProfitArrayByDay4,
    ProfitArrayByDay5,
    ProfitArrayByDay6,
    ProfitArrayByDay7,
  ];

  console.log(`${weeklyAllProductProfit}sanay`);

  console.log(`${allProfit}allProfit`);

  //הזמנות שבועיות
  let weeklyCoffeeOrderArry = 0;
  let weeklyDrinkOrderArray = 0;
  let weekyCakeOrderArray = 0;
  let weekyTeaOrderArray = 0;
  let weekyZingerOrderArray = 0;

  let allCoffeOrderInEndOfLength = 0;
  let allDrinkOrderInEndOfLength = 0;
  let allCakeOrderInEndOfLength = 0;
  let allTeaOrderInEndOfLength = 0;
  let allZingerOrderInEndOfLength = 0;

  weeklyCoffeeOrderArry = AllDetelsFromEilat.map(
    (coffee) => (weeklyCoffeeOrderArry += coffee.Coffee.NumberOfOrder)
  );
  allCoffeOrderInEndOfLength = weeklyCoffeeOrderArry.map(
    (item) => (allCoffeOrderInEndOfLength += item)
  );
  console.log(`${allCoffeOrderInEndOfLength}allCoffeOrderInEndOfLength`);
  console.log(`${weeklyCoffeeOrderArry}weeklyCoffeeOrderArry`);

  weeklyDrinkOrderArray = AllDetelsFromEilat.map(
    (drink) => (weeklyDrinkOrderArray += drink.Drink.NumberOfOrder)
  );
  allDrinkOrderInEndOfLength = weeklyDrinkOrderArray.map(
    (item) => (allDrinkOrderInEndOfLength += item)
  );
  console.log(`${allDrinkOrderInEndOfLength}allDrinkOrderInEndOfLength`);
  console.log(`${weeklyDrinkOrderArray}weeklyDrinkOrderArray`);

  weekyCakeOrderArray = AllDetelsFromEilat.map(
    (cake) => (weekyCakeOrderArray += cake.Cake.NumberOfOrder)
  );
  allCakeOrderInEndOfLength = weekyCakeOrderArray.map(
    (item) => (allCakeOrderInEndOfLength += item)
  );
  console.log(`${allCakeOrderInEndOfLength}allCakeOrderInEndOfLength`);
  console.log(`${weekyCakeOrderArray}weekyCakeOrderArray`);

  weekyTeaOrderArray = AllDetelsFromEilat.map(
    (tea) => (weekyTeaOrderArray += tea.Tea.NumberOfOrder)
  );
  allTeaOrderInEndOfLength = weekyTeaOrderArray.map(
    (item) => (allTeaOrderInEndOfLength += item)
  );
  console.log(`${allTeaOrderInEndOfLength}allTeaOrderInEndOfLength`);
  console.log(`${weekyTeaOrderArray}weekyTeaOrderArray`);

  weekyZingerOrderArray = AllDetelsFromEilat.map(
    (zinger) => (weekyZingerOrderArray += zinger.Zinger.NumberOfOrder)
  );
  allZingerOrderInEndOfLength = weekyZingerOrderArray.map(
    (item) => (allZingerOrderInEndOfLength += item)
  );
  console.log(`${allZingerOrderInEndOfLength}allZingerOrderInEndOfLength`);
  console.log(`${weekyZingerOrderArray}weekyZingerOrderArray`);

  let allOrderDay1 =
    weeklyCoffeeOrderArry[0] +
    weeklyDrinkOrderArray[0] +
    weekyCakeOrderArray[0] +
    weekyTeaOrderArray[0] +
    weekyZingerOrderArray[0];
  let allOrderDay2 =
    weeklyCoffeeOrderArry[1] +
    weeklyDrinkOrderArray[1] +
    weekyCakeOrderArray[1] +
    weekyTeaOrderArray[1] +
    weekyZingerOrderArray[1];
  let allOrderDay3 =
    weeklyCoffeeOrderArry[2] +
    weeklyDrinkOrderArray[2] +
    weekyCakeOrderArray[2] +
    weekyTeaOrderArray[2] +
    weekyZingerOrderArray[2];
  let allOrderDay4 =
    weeklyCoffeeOrderArry[3] +
    weeklyDrinkOrderArray[3] +
    weekyCakeOrderArray[3] +
    weekyTeaOrderArray[3] +
    weekyZingerOrderArray[3];
  let allOrderDay5 =
    weeklyCoffeeOrderArry[4] +
    weeklyDrinkOrderArray[4] +
    weekyCakeOrderArray[4] +
    weekyTeaOrderArray[4] +
    weekyZingerOrderArray[4];
  let allOrderDay6 =
    weeklyCoffeeOrderArry[5] +
    weeklyDrinkOrderArray[5] +
    weekyCakeOrderArray[5] +
    weekyTeaOrderArray[5] +
    weekyZingerOrderArray[5];
  let allOrderDay7 =
    weeklyCoffeeOrderArry[6] +
    weeklyDrinkOrderArray[6] +
    weekyCakeOrderArray[6] +
    weekyTeaOrderArray[6] +
    weekyZingerOrderArray[6];
  console.log(`${allOrderDay1}allOrderDay1${allOrderDay2}`);

  let orderAllWeek = [
    allOrderDay1,
    allOrderDay2,
    allOrderDay3,
    allOrderDay4,
    allOrderDay5,
    allOrderDay6,
    allOrderDay7,
  ];
  console.log(`${orderAllWeek}orderAllWeek`);

  let allOrders =
    allOrderDay1 +
    allOrderDay2 +
    allOrderDay3 +
    allOrderDay4 +
    allOrderDay5 +
    allOrderDay6 +
    allOrderDay7;

  console.log(`${allOrders}allOrdersfsgkjfgdfkgjdfgdkfjg`);

  return (
    <div>
      <h1>home</h1>
      <Container>
        <Row>
          <Col sm={4}>
            <VerticalBar orderWeekly={orderAllWeek} />
          </Col>
          <Col sm={4}>
            <PieProduct
              coffee={allCoffeOrderInEndOfLength[6]}
              drink={allDrinkOrderInEndOfLength[6]}
              cake={allCakeOrderInEndOfLength[6]}
              tea={allTeaOrderInEndOfLength[6]}
              zinger={allZingerOrderInEndOfLength[6]}
            />
          </Col>
          <Col sm={4}>
            <PieClient eilat={AllDetelsFromEilat} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CircelNumOfOrder order={allOrders} />
          </Col>
          <Col>
            <Col>
              <DayCard />
            </Col>
            <Col>
              <MaxProductPurchasd />
            </Col>
          </Col>
          <Col>
            <CircelTotalOfOrder profit={allProfit} />
          </Col>
        </Row>
        <Row>
          <Col>
            <LineChartProfitDay
              sm={12}
              weeklyCoffee={weeklyCoffeeOrderArry}
              weeklyDrink={weeklyDrinkOrderArray}
              weekyCake={weekyCakeOrderArray}
              weekyTea={weekyTeaOrderArray}
              weekyZinger={weekyZingerOrderArray}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <CoffeeCard allCoffeeProfit={allCoffeeProfit} allCoffeOrderInEndOfLength={allCoffeOrderInEndOfLength[6]} />
          </Col>
          <Col sm={6}>
            <TotalOrderedProductsCard allCakeProfit={allCakeProfit} allCakeOrderInEndOfLength={allCakeOrderInEndOfLength[6]} />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <VerticalBarNumberOfProduct orderAllWeek={orderAllWeek} />
          </Col>
          <Col sm={6}>
            <VerticalBarSalesDay
              weeklyAllProductProfit={weeklyAllProductProfit}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

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
