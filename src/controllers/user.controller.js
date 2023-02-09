
const create = (req, res) => {
  const {name,username,email,password,avatar,background} = req.body;
  
 if(!name || !username || !email || !avatar || !background || !password){
    res.status(400).send({"message":"Submit all fields for registration"})
 }
 

  res.status(201).send({
    message: "User created!",
    user: { name, username, email, avatar, background },
  });
}



module.exports = { create };
