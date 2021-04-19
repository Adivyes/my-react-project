
const userModel = require('../models/user-model');

    async function getAllUsers(req,res){
    
        await userModel.find((err,results)=>{
            if(err) throw err;
            console.log("result:", JSON.stringify(results));
            res.status(200).json({success: true, data: results});
        });
    }  
    async function getUser(req,res){
        let userId = req.params.id;
        await userModel.findById(userId,(err,movieItem)=>{
            if(err) throw err;
            console.log("result:", JSON.stringify(movieItem));
            res.status(200).json({success: true, data: movieItem});
        });
    }
    async function removeUserById(req,res){
        let userId = req.params.id;
        await userModel.findByIdAndRemove(userId,(err,doc)=>{
            if(err) throw err;
            
            res.status(201).json({success: true, data:doc, message:"movie delete success"})
                });
    }
    async function insertUser(req,res){
        let newUser = req.body.user;
        await userModel.insertMany(newUser,(err,results)=>{
            if(err) throw err;
            
            res.status(201).json({success: true, data: results});
        });
    }
    async function updateUser (req,res){
        let userIdToChange = req.params.id
        let newUserInfo = req.body.user;
      
        await userModel.findByIdAndUpdate(userIdToChange, newUserInfo, (err, doc)=>{
      if (err) throw err;
      res.status(300).json({success: true, data:doc, message:"user update success"})
        })
    }
   

module.exports = {getAllUsers,getUser,removeUserById,insertUser, updateUser};