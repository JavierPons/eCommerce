var express 		        = require('express'),
	router 			        = express.Router(),
	controller 				= require('../controllers/userController');

router.get('/', controller._find);
router.post('/register', controller._register);
router.post('/login',controller._login);
router.post('/admin/products/add',controller._add);
module.exports = router