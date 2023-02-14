const router = require ('express').Router();

const {create, findAll} = require ('../controllers/news.controller')


router.post( '/', create)
router.get( '/', findAll)

module.exports = router;