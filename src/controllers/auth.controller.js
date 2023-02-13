const bcrypt = require('bcrypt')
const {loginService, genereteToken} = require('../services/auth.service')


const login = async (req,res) => {
    const {email, password} = req.body;
    
    try {
      const user = await loginService(email);
      
      const passwordIsValid =  bcrypt.compareSync(password, user.password);
      
      if(!passwordIsValid){
          return res.status(404).send({message:'user or password invalid'})
        }
        if(!user){
            return res.status(404).send({message:'user or password invalid'})
        }
        
        const token = genereteToken(user.id)
        res.send({token});

    } catch (err) {
      res.status(500).send(err.message);
    }

    
}

module.exports = {login}