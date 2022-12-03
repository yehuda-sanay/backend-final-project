const CoffesModel = require('../models/coffee2-model')

const getAllDetelsFromBeerShava = async(req, res) => {
    await CoffesModel.find({}).then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no coffe was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getOrderByDay1BeerShava = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerShava','Coffee.Date':'01/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 1 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getOrderByDay2BeerShava = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerShava','Coffee.Date':'02/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 2 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getOrderByDay3BeerShava = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerShava','Coffee.Date':'03/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 3 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getOrderByDay4BeerShava = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerShava','Coffee.Date':'04/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 3 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
}
const getOrderByDay5BeerShava = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerShava','Coffee.Date':'05/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 5 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
}
const getOrderByDay6BeerShava = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerShava','Coffee.Date':'06/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 6 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
}
const getOrderByDay7BeerShava = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerShava','Coffee.Date':'07/12'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder Coffee.Date Drink.Date Cake.Date Tea.Date Zinger.Date").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no order day 7 was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
}
const getAllOrderFromBeerShava = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerShava'}).select("Coffee.NumberOfOrder Drink.NumberOfOrder Cake.NumberOfOrder Tea.NumberOfOrder Zinger.NumberOfOrder").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no coffe was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getPcoffeeOrderBy = async(req,res) => {
    await CoffesModel.find({'Coffee.Date':'07/12'})
    .then((result) => {
        return result.length == 0
          ? res.status(300).json({ successes: true, msg: "no coffe in BeerShava was found" })
          : res.status(200).json({ successes: true , result});
      })
    .catch (error=> res.status(400).json({ successes: false , error})) 
  };

const addOrderFromBeerShava = async(req,res) => {
    await CoffesModel.insertMany(req.body.product)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};
const getAllCoffeeOrderPurcaseErrorBeerShava = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerShava','Drink.City':'BeerShava','Cake.City':'BeerShava','Tea.City':'BeerShava','Zinger.City':'BeerShava'}).select("Coffee.PurhaseError Drink.PurhaseError Cake.PurhaseError Tea.PurhaseError Zinger.PurhaseError").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no PurcaseError was found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getAllCoffeeOrderClientDeclinedBeerShava = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerShava','Drink.City':'BeerShava','Cake.City':'BeerShava','Tea.City':'BeerShava','Zinger.City':'BeerShava'}).select("Coffee.ClientDeclined Drink.ClientDeclined Cake.ClientDeclined Tea.ClientDeclined Zinger.ClientDeclined").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no ClientDeclined found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};
const getAllCoffeeOrderProfitBeerShava = async(req, res) => {
    await CoffesModel.find({'Coffee.City':'BeerShava','Drink.City':'BeerShava','Cake.City':'BeerShava','Tea.City':'BeerShava','Zinger.City':'BeerShava'}).select("Coffee.Price Drink.Price Cake.Price Tea.Price Zinger.Price").then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no Profit found" })
        : res.status(200).json({ successes: true , result});
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};

    

module.exports= {addOrderFromBeerShava,getAllDetelsFromBeerShava,getPcoffeeOrderBy,getAllOrderFromBeerShava,getAllCoffeeOrderPurcaseErrorBeerShava,getAllCoffeeOrderClientDeclinedBeerShava
,getAllCoffeeOrderProfitBeerShava,getOrderByDay1BeerShava,getOrderByDay2BeerShava,getOrderByDay3BeerShava,getOrderByDay4BeerShava,getOrderByDay5BeerShava,getOrderByDay6BeerShava,getOrderByDay7BeerShava}