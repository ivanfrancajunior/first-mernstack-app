const bcrypt = require('bcrypt')
const {loginService} = require('../services/auth.service')


const login = async (req,res) => {
    const {email, password} = req.body;
    
    try {
      const user = await loginService(email);

      const passwordIsValid =  bcrypt.compareSync(password, user.password);

      console.log(passwordIsValid);

      res.send({ user });
    } catch (err) {
      res.status(500).send(err.message);
    }

    
}

module.exports = {login}