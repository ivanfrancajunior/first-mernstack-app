const userService = require('../services/user.services')
const mongoose = require('mongoose')

const create = async (req, res) => {
  const {name,username,email,password,avatar,background} = req.body;
  
 if(!name || !username || !email || !avatar || !background || !password){
    res.status(400).send({"message":"Submit all fields for registration"})
 }
 
  const user = await userService.createService(req.body)

  if(!user){
    return res.status(400).send({message:"Error creating User"})
  }

  res.status(201).send({
    message: "User created!",
    user: {id:user._id,name, username, email, avatar, background},
  });
}

const findAll = async(req,res) => {
 const users = await userService.findAllService();

 if(users.length === 0){
  return res.status(400).send({message:"There are not registred users"})
 }
 res.send(users)
}

const findById = async(req,res) =>{
  const id = req.params.id; 

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).send({message:"Invalid ID"})
  }
  
  const user = await userService.findByIdService(id);

  if(!user) {
    return res.status(400).send({message:"User not Found"})
  }

  res.send(user)
}

const update = async (req,res) =>{
  const {name,username,email,password,avatar,background} = req.body;
  
  if(!name && !username && !email && !avatar && !background && !password){
     res.status(400).send({"message":"Submit at least one fields for update"})
  }
  const id = req.params.id; 

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).send({message:"Invalid ID"})
  }
  const user = await userService.findByIdService(id);

  if(!user) {
    return res.status(400).send({message:"User not Found"})
  }

  await userService.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  );

  res.send({message: "User succesfully updateed"})



} 


module.exports = { create, findAll, findById, update };
