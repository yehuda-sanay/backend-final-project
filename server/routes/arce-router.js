const ArceRouter = require('express').Router()
const {addOrderFromArce,getAllDetelsFromArce,getPcoffeeOrderBy,getAllOrderFromArce,getAllCoffeeOrderPurcaseErrorArce,getAllCoffeeOrderClientDeclinedArce
,getAllCoffeeOrderProfitArce,getOrderByDay1Arce,getOrderByDay2Arce,getOrderByDay3Arce,getOrderByDay4Arce,getOrderByDay5Arce,getOrderByDay6Arce,getOrderByDay7Arce} = require('../controllers/Arce-ctrl');

ArceRouter.get('/', getAllDetelsFromArce);
ArceRouter.get('/getPcoffeeOrderBy',getPcoffeeOrderBy)
ArceRouter.get('/getAllOrderFromArce', getAllOrderFromArce);
ArceRouter.get('/getAllCoffeeOrderPurcaseErrorArce',getAllCoffeeOrderPurcaseErrorArce)
ArceRouter.get('/getAllCoffeeOrderClientDeclinedArce',getAllCoffeeOrderClientDeclinedArce)
ArceRouter.get('/getAllCoffeeOrderProfitArce',getAllCoffeeOrderProfitArce)
ArceRouter.get('/getOrderByDay1Arce',getOrderByDay1Arce)
ArceRouter.get('/getOrderByDay2Arce',getOrderByDay2Arce)
ArceRouter.get('/getOrderByDay3Arce',getOrderByDay3Arce)
ArceRouter.get('/getOrderByDay4Arce',getOrderByDay4Arce)
ArceRouter.get('/getOrderByDay5Arce',getOrderByDay5Arce)
ArceRouter.get('/getOrderByDay6Arce',getOrderByDay6Arce)
ArceRouter.get('/getOrderByDay7Arce',getOrderByDay7Arce)
ArceRouter.post('/addOrderFromArce', addOrderFromArce);
// usersRouter.put('/update/:id', updateUser);
// ArceRouter.delete('/deleteOrdersFromArce', deleteOrdersFromArce);

module.exports = ArceRouter