const express    = require('express'),
        router   = express.Router(),
     controller  = require('../controllers/productControler');
     
     
     //router.post('/add', controller.add);
        
     router.post('/add', controller.add);
     router.post('/remove', controller.deleteProduct);
     router.get('/', controller.products);
     router.get('/some_product_id', controller._findProductById);

     module.exports = router;