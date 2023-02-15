const dotenv = require('dotenv').config(); 
const jwt = require('jsonwebtoken')


const authMiddleware = (req,res,next) =>{


    const { authorization } = req.headers;

    if (!authorization) {
      return res.send(401);
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.send(401);
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.send(401);
    }

    jwt.verify(token,process.env.MD5HASHKEY, (err,decoded) => {
        console.log(err)
        console.log(decoded)

    })

    next();
} 

module.exports = {authMiddleware}