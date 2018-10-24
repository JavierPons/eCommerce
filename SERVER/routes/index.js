const express = require('express'),
      router = express.Router(),
      isLoggedIn = require('../middlewares/isLoggedIn');


router.get('/', (req, res) => {
  console.log('Hello!')
  res.status(200).send({text:'Welcome!!!!'})
});

module.exports = router;
