var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('te encuentras en la pagina de mercado');
});

module.exports = router;