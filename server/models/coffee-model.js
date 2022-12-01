const mongoose = require('mongoose')

const CoffeeSchema = new mongoose.Schema(
  {
    cities:{
        TelAviv:{},
        Acre:{},
        Herzliya:{},
        BeerShava:{},
        Eilat:{}
    }
  }  
);

const OrdersSchema= new mongoose.Schema({
    NumberOfOrder:{type:Number, required:true},
    PurhaseError:{type:Number, required:true},
    ClientDeclined:{type:Number, required:true},
    Price:{type:Number, required:true},
    Date:{type:String, required:true}
})

const ProductSchema= new mongoose.Schema({
    Coffee:{},
    Drink:{},
    Cake:{},
    Tea:{},
    Zinger:{}
})

module.exports = mongoose.model("Coffee", CoffeeSchema);