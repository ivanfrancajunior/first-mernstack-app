const create = (req,res) => {
    res.send(201)
}

const findAll =()=>{
    const news = []; 
    res.send(news);
}

module.exports = {create, findAll}