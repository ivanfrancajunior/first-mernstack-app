const User = require('../models/User');
const jwt = require('jsonwebtoken');


const loginService = (email) => User.findOne({email:email}).select('+password')

const genereteToken = (id) => jwt.sign({id:id},process.env.MD5HASHKEY,{expiresIn: 86400})

module.exports = {loginService, genereteToken}