const CoffesModel = require('../models/coffee-model')

const getCoffeeOrderFromEilt = async(req, res) => {
    await CoffesModel.find().then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no coffe was found" })
        : res.status(200).json({ successes: true }, result);
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};

const addOrderFromEilat = async(req,res) => {
    await CoffesModel.insertMany([{Eilat:{product:req.body.product}}])
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

module.exports= {addOrderFromEilat,getCoffeeOrderFromEilt}