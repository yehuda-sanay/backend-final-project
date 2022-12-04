const eilatRouter = require('express').Router()
const {addOrderFromEilat,getAllDetelsFromEilat,getPcoffeeOrderBy,getAllOrderFromEilat,getAllCoffeeOrderPurcaseErrorEilat,getAllCoffeeOrderClientDeclinedEilat
,getAllCoffeeOrderProfitEilat
// ,getOrderByDay1Eilat,getOrderByDay2Eilat,getOrderByDay3Eilat,getOrderByDay4Eilat,getOrderByDay5Eilat,getOrderByDay6Eilat,getOrderByDay7Eilat
} = require('../controllers/eilat-ctrl');

eilatRouter.get('/', getAllDetelsFromEilat);
// eilatRouter.get('/getPcoffeeOrderBy',getPcoffeeOrderBy)
eilatRouter.get('/getAllOrderFromEilat', getAllOrderFromEilat);
eilatRouter.get('/getAllCoffeeOrderPurcaseErrorEilat',getAllCoffeeOrderPurcaseErrorEilat)
eilatRouter.get('/getAllCoffeeOrderClientDeclinedEilat',getAllCoffeeOrderClientDeclinedEilat)
eilatRouter.get('/getAllCoffeeOrderProfitEilat',getAllCoffeeOrderProfitEilat)
// eilatRouter.get('/getOrderByDay1Eilat',getOrderByDay1Eilat)
// eilatRouter.get('/getOrderByDay2Eilat',getOrderByDay2Eilat)
// eilatRouter.get('/getOrderByDay3Eilat',getOrderByDay3Eilat)
// eilatRouter.get('/getOrderByDay4Eilat',getOrderByDay4Eilat)
// eilatRouter.get('/getOrderByDay5Eilat',getOrderByDay5Eilat)
// eilatRouter.get('/getOrderByDay6Eilat',getOrderByDay6Eilat)
// eilatRouter.get('/getOrderByDay7Eilat',getOrderByDay7Eilat)
eilatRouter.post('/addOrderFromEilat', addOrderFromEilat);
// usersRouter.put('/update/:id', updateUser);
// eilatRouter.delete('/deleteOrdersFromEilat', deleteOrdersFromEilat);

module.exports = eilatRouter