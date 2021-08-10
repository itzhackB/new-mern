const express=require('express');
const userRouter = express.Router();
const userCtrl=require('../controllers/userController');

userRouter.get('/',userCtrl.getAllUsers)
userRouter.get('/user/:id',userCtrl.getUserById)
userRouter.post('/',userCtrl.createNewUser)
userRouter.delete('/:id',userCtrl.deleteUser)
userRouter.put('/updateOne/:id',userCtrl.updateUser)

module.exports= userRouter;