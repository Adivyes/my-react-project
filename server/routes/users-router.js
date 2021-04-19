const moviesRouter = require("express").Router();
const movieCtrl = require('../controllers/user-ctrl');


moviesRouter.get("/all",movieCtrl.getAllUsers);
moviesRouter.get('/user/:id',movieCtrl.getUser);
moviesRouter.post("/saveUser",movieCtrl.insertUser);
moviesRouter.delete('/user/:id',movieCtrl.removeUserById)
moviesRouter.put('/user/:id',movieCtrl.updateUser)


module.exports = moviesRouter;

