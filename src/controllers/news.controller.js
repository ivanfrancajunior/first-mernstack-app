const {createService, findAllService} = require('../services/news.service')
const {ObjectId} = require('mongoose')

const create = async (req,res) => {
    try {
        const {title,text,banner} = req.body

        if(!title || !text || !banner ){
            res.status(400).send({"message":"Submit all fields for registration"})
        }
        
        await createService({
            title,
            text,
            banner,
            user:{_id: "63e55f03711c49a8c4219604"}
        })
        res.send(201)

    } catch (error) {
        res.status(500).send({message: err.message})
    }
}

const findAll =()=>{
    const news = []; 
    res.send(news);
}

module.exports = {create, findAll}