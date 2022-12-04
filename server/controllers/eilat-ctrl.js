const CoffesModel = require('../models/coffee2-model')

const getAllDetelsFromEilat = async(req, res) => {
    await CoffesModel.find({}).then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no coffe was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
// const getOrderByDay1Eilat = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Eilat','Coffee.Date':'01/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 1 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getOrderByDay2Eilat = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Eilat','Coffee.Date':'02/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 2 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getOrderByDay3Eilat = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Eilat','Coffee.Date':'03/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 3 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// };
// const getOrderByDay4Eilat = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Eilat','Coffee.Date':'04/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 3 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// }
// const getOrderByDay5Eilat = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Eilat','Coffee.Date':'05/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 5 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// }
// const getOrderByDay6Eilat = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Eilat','Coffee.Date':'06/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 6 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// }
// const getOrderByDay7Eilat = async(req, res) => {
//     await CoffesModel.find({'Coffee.City':'Eilat','Coffee.Date':'07/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
//       return result.length == 0
//         ? res.status(300).json({ successes: true, msg: "no order day 7 was found" })
//         : res.status(200).json({ successes: true , result});
//     })
//   .catch (error=> res.status(400).json({ successes: false , error})) 
// }
const getAllOrderFromEilat = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'Eilat'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no coffe was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
// const getPcoffeeOrderBy = async(req,res) => {
//     await CoffesModel.find({'Coffee.Date':'07/12'})
//     .then((result) => {
//         return result.length == 0
//           ? res.status(300).json({ successes: true, msg: "no coffe in Eilat was found" })
//           : res.status(200).json({ successes: true , result});
//       })
//     .catch (error=> res.status(400).json({ successes: false , error})) 
//   };

const addOrderFromEilat = async(req,res) => {
    await CoffesModel.insertMany(req.body.product)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};
const getAllCoffeeOrderPurcaseErrorEilat = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'Eilat','Drink.City':'Eilat','Cake.City':'Eilat','Tea.City':'Eilat','Zinger.City':'Eilat'}).select("Coffee.PurhaseError Drink.PurhaseError Cake.PurhaseError Tea.PurhaseError Zinger.PurhaseError").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no PurcaseError was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getAllCoffeeOrderClientDeclinedEilat = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'Eilat','Drink.City':'Eilat','Cake.City':'Eilat','Tea.City':'Eilat','Zinger.City':'Eilat'}).select("Coffee.ClientDeclined Drink.ClientDeclined Cake.ClientDeclined Tea.ClientDeclined Zinger.ClientDeclined").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no ClientDeclined found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getAllCoffeeOrderProfitEilat = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'Eilat','Drink.City':'Eilat','Cake.City':'Eilat','Tea.City':'Eilat','Zinger.City':'Eilat'}).select("Coffee.Price Drink.Price Cake.Price Tea.Price Zinger.Price").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no Profit found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};

    

module.exports= {addOrderFromEilat,getAllDetelsFromEilat,getAllOrderFromEilat,getAllCoffeeOrderPurcaseErrorEilat,getAllCoffeeOrderClientDeclinedEilat,getAllCoffeeOrderProfitEilat,getAllCoffeeOrderProfitEilat,
// getPcoffeeOrderBy,getOrderByDay1Eilat,getOrderByDay2Eilat,getOrderByDay3Eilat,getOrderByDay4Eilat,getOrderByDay5Eilat,getOrderByDay6Eilat,getOrderByDay7Eilat
}