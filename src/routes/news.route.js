const router = require ('express').Router();
const {authMiddleware} = require('../middlewares/auth.middleware')
const {create, findAll} = require ('../controllers/news.controller')


router.post( '/',authMiddleware, create)
router.get( '/',authMiddleware, findAll)

module.exports = router;