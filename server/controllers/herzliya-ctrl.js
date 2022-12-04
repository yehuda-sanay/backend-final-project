// const CoffesModel = require('../models/coffee2-model')

// const getAllDetelsFromHerzliya = async(req, res) => {
//     await CoffesModel.find({}).then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no coffe was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getOrderByDay1Herzliya = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Herzliya','Coffee.Date':'01/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 1 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getOrderByDay2Herzliya = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Herzliya','Coffee.Date':'02/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 2 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getOrderByDay3Herzliya = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Herzliya','Coffee.Date':'03/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 3 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getOrderByDay4Herzliya = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Herzliya','Coffee.Date':'04/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 3 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// }
// const getOrderByDay5Herzliya = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Herzliya','Coffee.Date':'05/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 5 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// }
// const getOrderByDay6Herzliya = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Herzliya','Coffee.Date':'06/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 6 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// }
// const getOrderByDay7Herzliya = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Herzliya','Coffee.Date':'07/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 7 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// }
// const getAllOrderFromHerzliya = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Herzliya'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder").then((result) => {
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
//           ? res.status(300).json({ successes: true, msg: "no coffe in Herzliya was found" })
//           : res.status(200).json({ successes: true , result});
//       })
//     .catch (error=> res.status(400).json({ successes: false , error})) 
//   };

// const addOrderFromHerzliya = async(req,res) => {
//     await CoffesModel.insertMany(req.body.product)
//     .then((result)=>{
//         return res.status(200).json({successes: true, result})
//     }).catch(error=> res.status(400).json({ successes: false , error}))
// };
// const getAllCoffeeOrderPurcaseErrorHerzliya = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Herzliya','Drink.City':'Herzliya','Cake.City':'Herzliya','Tea.City':'Herzliya','Zinger.City':'Herzliya'}).select("Coffee.PurhaseError Drink.PurhaseError Cake.PurhaseError Tea.PurhaseError Zinger.PurhaseError").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no PurcaseError was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getAllCoffeeOrderClientDeclinedHerzliya = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Herzliya','Drink.City':'Herzliya','Cake.City':'Herzliya','Tea.City':'Herzliya','Zinger.City':'Herzliya'}).select("Coffee.ClientDeclined Drink.ClientDeclined Cake.ClientDeclined Tea.ClientDeclined Zinger.ClientDeclined").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no ClientDeclined found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getAllCoffeeOrderProfitHerzliya = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Herzliya','Drink.City':'Herzliya','Cake.City':'Herzliya','Tea.City':'Herzliya','Zinger.City':'Herzliya'}).select("Coffee.Price Drink.Price Cake.Price Tea.Price Zinger.Price").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no Profit found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };

    

// module.exports= {addOrderFromHerzliya,getAllDetelsFromHerzliya,getPcoffeeOrderBy,getAllOrderFromHerzliya,getAllCoffeeOrderPurcaseErrorHerzliya,getAllCoffeeOrderClientDeclinedHerzliya
// ,getAllCoffeeOrderProfitHerzliya,getOrderByDay1Herzliya,getOrderByDay2Herzliya,getOrderByDay3Herzliya,getOrderByDay4Herzliya,getOrderByDay5Herzliya,getOrderByDay6Herzliya,getOrderByDay7Herzliya}