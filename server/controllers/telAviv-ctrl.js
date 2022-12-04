const CoffesModel = require('../models/coffee2-model')

const getAllDetelsFromBeerTelAviv = async(req, res) => {
    await CoffesModel.find({}).then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no coffe was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getOrderByDay1BeerTelAviv = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerTelAviv','Coffee.Date':'01/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 1 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getOrderByDay2BeerTelAviv = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerTelAviv','Coffee.Date':'02/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 2 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getOrderByDay3BeerTelAviv = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerTelAviv','Coffee.Date':'03/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 3 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getOrderByDay4BeerTelAviv = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerTelAviv','Coffee.Date':'04/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 3 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
}
const getOrderByDay5BeerTelAviv = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerTelAviv','Coffee.Date':'05/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 5 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
}
const getOrderByDay6BeerTelAviv = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerTelAviv','Coffee.Date':'06/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 6 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
}
const getOrderByDay7BeerTelAviv = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerTelAviv','Coffee.Date':'07/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 7 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
}
const getAllOrderFromBeerTelAviv = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerTelAviv'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder").then((result) => {
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
//           ? res.status(300).json({ successes: true, msg: "no coffe in BeerTelAviv was found" })
//           : res.status(200).json({ successes: true , result});
//       })
//     .catch (error=> res.status(400).json({ successes: false , error})) 
//   };

const addOrderFromBeerTelAviv = async(req,res) => {
    await CoffesModel.insertMany(req.body.product)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};
const getAllCoffeeOrderPurcaseErrorBeerTelAviv = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerTelAviv','Drink.City':'BeerTelAviv','Cake.City':'BeerTelAviv','Tea.City':'BeerTelAviv','Zinger.City':'BeerTelAviv'}).select("Coffee.PurhaseError Drink.PurhaseError Cake.PurhaseError Tea.PurhaseError Zinger.PurhaseError").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no PurcaseError was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getAllCoffeeOrderClientDeclinedBeerTelAviv = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerTelAviv','Drink.City':'BeerTelAviv','Cake.City':'BeerTelAviv','Tea.City':'BeerTelAviv','Zinger.City':'BeerTelAviv'}).select("Coffee.ClientDeclined Drink.ClientDeclined Cake.ClientDeclined Tea.ClientDeclined Zinger.ClientDeclined").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no ClientDeclined found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getAllCoffeeOrderProfitBeerTelAviv = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerTelAviv','Drink.City':'BeerTelAviv','Cake.City':'BeerTelAviv','Tea.City':'BeerTelAviv','Zinger.City':'BeerTelAviv'}).select("Coffee.Price Drink.Price Cake.Price Tea.Price Zinger.Price").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no Profit found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};

    

module.exports= {addOrderFromBeerTelAviv,getAllDetelsFromBeerTelAviv,getAllOrderFromBeerTelAviv,getAllCoffeeOrderPurcaseErrorBeerTelAviv,getAllCoffeeOrderClientDeclinedBeerTelAviv
,getAllCoffeeOrderProfitBeerTelAviv,getOrderByDay1BeerTelAviv,getOrderByDay2BeerTelAviv,getOrderByDay3BeerTelAviv,getOrderByDay4BeerTelAviv,getOrderByDay5BeerTelAviv,getOrderByDay6BeerTelAviv,getOrderByDay7BeerTelAviv}