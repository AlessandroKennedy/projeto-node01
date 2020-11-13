
const {Router} = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/',(req,res)=>{

  return res.json({msg:"initial page"});

});

routes.get('/user',UserController.index);
routes.post('/user',UserController.store);


module.exports = routes;
