// const CoffesModel = require('../models/coffee2-model')

// const getAllDetelsFromArce = async(req, res) => {
//     await CoffesModel.find({}).then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no coffe was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getOrderByDay1Arce = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Arce','Coffee.Date':'01/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 1 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getOrderByDay2Arce = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Arce','Coffee.Date':'02/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 2 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getOrderByDay3Arce = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Arce','Coffee.Date':'03/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 3 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getOrderByDay4Arce = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Arce','Coffee.Date':'04/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 3 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// }
// const getOrderByDay5Arce = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Arce','Coffee.Date':'05/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 5 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// }
// const getOrderByDay6Arce = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Arce','Coffee.Date':'06/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 6 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// }
// const getOrderByDay7Arce = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Arce','Coffee.Date':'07/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 7 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// }
// const getAllOrderFromArce = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Arce'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no coffe was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getPcoffeeOrderBy = async(req,res) => {
//     await CoffesModel.find({'Coffee.Date':'07/12'})
//     .then((result) => {
//         return result.length == 0
//           ? res.status(300).json({ successes: true, msg: "no coffe in Arce was found" })
//           : res.status(200).json({ successes: true , result});
//       })
//     .catch (error=> res.status(400).json({ successes: false , error})) 
//   };

// const addOrderFromArce = async(req,res) => {
//     await CoffesModel.insertMany(req.body.product)
//     .then((result)=>{
//         return res.status(200).json({successes: true, result})
//     }).catch(error=> res.status(400).json({ successes: false , error}))
// };
// const getAllCoffeeOrderPurcaseErrorArce = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Arce','Drink.City':'Arce','Cake.City':'Arce','Tea.City':'Arce','Zinger.City':'Arce'}).select("Coffee.PurhaseError Drink.PurhaseError Cake.PurhaseError Tea.PurhaseError Zinger.PurhaseError").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no PurcaseError was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getAllCoffeeOrderClientDeclinedArce = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Arce','Drink.City':'Arce','Cake.City':'Arce','Tea.City':'Arce','Zinger.City':'Arce'}).select("Coffee.ClientDeclined Drink.ClientDeclined Cake.ClientDeclined Tea.ClientDeclined Zinger.ClientDeclined").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no ClientDeclined found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getAllCoffeeOrderProfitArce = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Arce','Drink.City':'Arce','Cake.City':'Arce','Tea.City':'Arce','Zinger.City':'Arce'}).select("Coffee.Price Drink.Price Cake.Price Tea.Price Zinger.Price").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no Profit found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };

    

// module.exports= {addOrderFromArce,getAllDetelsFromArce,getPcoffeeOrderBy,getAllOrderFromArce,getAllCoffeeOrderPurcaseErrorArce,getAllCoffeeOrderClientDeclinedArce
// ,getAllCoffeeOrderProfitArce,getOrderByDay1Arce,getOrderByDay2Arce,getOrderByDay3Arce,getOrderByDay4Arce,getOrderByDay5Arce,getOrderByDay6Arce,getOrderByDay7Arce}