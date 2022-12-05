const mongoose = require('mongoose')

const OrdersSchema= new mongoose.Schema({

    NumberOfOrder:{type:Number, required:true},
    PurhaseError:{type:Number, required:true},
    ClientDeclined:{type:Number, required:true},
    Price:{type:Number, required:true},
    Date:{type:String, required:true},
    Hour:{type:String, required:true},
    City:{type:String, required:true},

})

const ProductSchema= new mongoose.Schema({
    Coffee:{type:OrdersSchema}, 
    Drink:{type:OrdersSchema},
    Cake:{type:OrdersSchema},
    Tea:{type:OrdersSchema},
    Zinger:{type:OrdersSchema},
})
module.exports = mongoose.model("newCoffee", ProductSchema);
// const CoffeeSchema = new mongoose.Schema(
//   {
//     cities:{
//         TelAviv:{type:ProductSchema},
//         Acre:{type:ProductSchema},
//         Herzliya:{type:ProductSchema},
//         BeerShava:{type:ProductSchema},
//         Eilat:{type:ProductSchema}
//     }
//   }  
// );

