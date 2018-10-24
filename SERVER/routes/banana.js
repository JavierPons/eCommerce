const express = require('express'),
      router = express.Router();


router.get('/', (req, res) => {
  res.status(200).send({text:'Welcome banana!!!!'})
});

module.exports = router;