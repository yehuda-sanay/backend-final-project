import { createContext, useEffect, useState } from "react";
import {
  getAllDetelsFromEilatApi,
  getAllOrderFromEilatApi,
  getAllCoffeeOrderPurcaseErrorEilatApi,
  getAllCoffeeOrderClientDeclinedEilatApi,
  getAllCoffeeOrderProfitEilatApi,
// //   getOrderByDay1EilatApi,
// //   getOrderByDay2EilatApi,
// //   getOrderByDay3EilatApi,
// //   getOrderByDay4EilatApi,
// //   getOrderByDay5EilatApi,
// //   getOrderByDay6EilatApi,
// //   getOrderByDay7EilatApi,
} from "../servies/EilatApi";

export const EilatContext = createContext();

export default function EilatProvaider({ children }) {
  const [AllDetelsFromEilat, setAllDetelsFromEilat] = useState([]);
  const [AllOrderFromEilat, setAllOrderFromEilat]=useState([]);
  const [AllCoffeeOrderPurcaseErrorEilat, setAllCoffeeOrderPurcaseErrorEilat]=useState([]);
  const [AllCoffeeOrderClientDeclinedEilat, setAllCoffeeOrderClientDeclinedEilat]=useState([]);
  const [AllCoffeeOrderProfitEilat, setAllCoffeeOrderProfitEilat]=useState([]);
// //   const [OrderByDay1Eilat, setOrderByDay1Eilat]=useState([]);
// //   const [OrderByDay2Eilat, setOrderByDay2Eilat]=useState([]);
// //   const [OrderByDay3Eilat, setOrderByDay3Eilat]=useState([]);
// //   const [OrderByDay4Eilat, setOrderByDay4Eilat]=useState([]);
// //   const [OrderByDay5Eilat, setOrderByDay5Eilat]=useState([]);
// //   const [OrderByDay6Eilat, setOrderByDay6Eilat]=useState([]);
// //   const [OrderByDay7Eilat, setOrderByDay7Eilat]=useState([]);

  useEffect(() => {
    getAllDetelsFromEilatApi().then(res => setAllDetelsFromEilat(res.result));
    getAllOrderFromEilatApi().then(res=>setAllOrderFromEilat(res.result))
    getAllCoffeeOrderPurcaseErrorEilatApi().then(res=>setAllCoffeeOrderPurcaseErrorEilat(res.result))
    getAllCoffeeOrderClientDeclinedEilatApi().then(res=>setAllCoffeeOrderClientDeclinedEilat(res.result))
    getAllCoffeeOrderProfitEilatApi().then(res=>setAllCoffeeOrderProfitEilat(res.result))
//     // getOrderByDay1EilatApi().then(res=>setOrderByDay1Eilat(res.result))
//     // getOrderByDay2EilatApi().then(res=>setOrderByDay2Eilat(res.result))
//     // getOrderByDay3EilatApi().then(res=>setOrderByDay3Eilat(res.result))
//     // getOrderByDay4EilatApi().then(res=>setOrderByDay4Eilat(res.result))
//     // getOrderByDay5EilatApi().then(res=>setOrderByDay5Eilat(res.result))
//     // getOrderByDay6EilatApi().then(res=>setOrderByDay6Eilat(res.result))
//     // getOrderByDay7EilatApi().then(res=>setOrderByDay7Eilat(res.result))
  }, []);
//   console.log(AllDetelsFromEilat);

  return (
    <EilatContext.Provider
      value={{
        AllDetelsFromEilat,
        AllOrderFromEilat,
        AllCoffeeOrderPurcaseErrorEilat,
        AllCoffeeOrderClientDeclinedEilat,
        AllCoffeeOrderProfitEilat
//         // OrderByDay1Eilat,
//         // OrderByDay2Eilat,
//         // OrderByDay3Eilat,
//         // OrderByDay4Eilat,
//         // OrderByDay5Eilat,
//         // OrderByDay6Eilat,
//         // OrderByDay7Eilat,
      }}
    >
      {children}
    </EilatContext.Provider>
  );
}
