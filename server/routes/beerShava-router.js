const BeerShavaRouter = require('express').Router()
const {addOrderFromBeerShava,getAllDetelsFromBeerShava,getPcoffeeOrderBy,getAllOrderFromBeerShava,getAllCoffeeOrderPurcaseErrorBeerShava,getAllCoffeeOrderClientDeclinedBeerShava
,getAllCoffeeOrderProfitBeerShava,getOrderByDay1BeerShava,getOrderByDay2BeerShava,getOrderByDay3BeerShava,getOrderByDay4BeerShava,getOrderByDay5BeerShava,getOrderByDay6BeerShava,getOrderByDay7BeerShava} = require('../controllers/BeerShava-ctrl');

BeerShavaRouter.get('/', getAllDetelsFromBeerShava);
BeerShavaRouter.get('/getPcoffeeOrderBy',getPcoffeeOrderBy)
BeerShavaRouter.get('/getAllOrderFromBeerShava', getAllOrderFromBeerShava);
BeerShavaRouter.get('/getAllCoffeeOrderPurcaseErrorBeerShava',getAllCoffeeOrderPurcaseErrorBeerShava)
BeerShavaRouter.get('/getAllCoffeeOrderClientDeclinedBeerShava',getAllCoffeeOrderClientDeclinedBeerShava)
BeerShavaRouter.get('/getAllCoffeeOrderProfitBeerShava',getAllCoffeeOrderProfitBeerShava)
BeerShavaRouter.get('/getOrderByDay1BeerShava',getOrderByDay1BeerShava)
BeerShavaRouter.get('/getOrderByDay2BeerShava',getOrderByDay2BeerShava)
BeerShavaRouter.get('/getOrderByDay3BeerShava',getOrderByDay3BeerShava)
BeerShavaRouter.get('/getOrderByDay4BeerShava',getOrderByDay4BeerShava)
BeerShavaRouter.get('/getOrderByDay5BeerShava',getOrderByDay5BeerShava)
BeerShavaRouter.get('/getOrderByDay6BeerShava',getOrderByDay6BeerShava)
BeerShavaRouter.get('/getOrderByDay7BeerShava',getOrderByDay7BeerShava)
BeerShavaRouter.post('/addOrderFromBeerShava', addOrderFromBeerShava);
// usersRouter.put('/update/:id', updateUser);
// BeerShavaRouter.delete('/deleteOrdersFromBeerShava', deleteOrdersFromBeerShava);

module.exports = BeerShavaRouter