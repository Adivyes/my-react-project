const usersRouter = require("express").Router();
const userCtrl = require('../controllers/user-ctrl');


usersRouter.get("/all",userCtrl.getAllUsers);
usersRouter.get('/user/:id',userCtrl.getUser);
usersRouter.post("/saveUser",userCtrl.insertUser);
usersRouter.delete('/user/:id',userCtrl.removeUserById);
usersRouter.put('/user/:id',userCtrl.updateUser);
usersRouter.post('/userauth',userCtrl.comperLog);


module.exports = usersRouter;

