const eilatRouter = require('express').Router()
const {addOrderFromEilat,getCoffeeOrderFromEilt} = require('../controllers/eilat-ctrl');

eilatRouter.get('/', getCoffeeOrderFromEilt);
// usersRouter.get('/byId/:id', getUserById);
eilatRouter.post('/addOrderFromEilat', addOrderFromEilat);
// usersRouter.put('/update/:id', updateUser);
// usersRouter.delete('/delete/:id', deleteUser);

module.exports = eilatRouter