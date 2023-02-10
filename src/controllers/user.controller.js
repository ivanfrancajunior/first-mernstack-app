const userService = require('../services/user.services')

const create = async (req, res) => {
  try {const {name,username,email,password,avatar,background} = req.body;
  
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
  } catch(error){
    res.status(500).send({message: err.message})
  }
}

const findAll = async(req,res) => {
 try {const users = await userService.findAllService();

 if(users.length === 0){
  return res.status(400).send({message:"There are not registred users"})
 }
 res.send(users)} catch(error){
  res.status(500).send({message: err.message})
} 
}

const findById = async(req,res) =>{
  try {const {id, user} = req 

  res.send(user)
}catch(error){
  res.status(500).send({message: err.message})
} 
}

const update = async (req,res) =>{
  try {const {name,username,email,password,avatar,background} = req.body;
  const {id, user} = req 
  
  if(!name && !username && !email && !avatar && !background && !password){
     res.status(400).send({"message":"Submit at least one fields to update the user"})
  }
  

  await userService.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  );} 
  catch(error){
    res.status(500).send({message: err.message})
  } 

  res.send({message: "User succesfully updated!"})



} 


module.exports = { create, findAll, findById, update };
