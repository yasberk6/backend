var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });//render ilgili içeriği arayüze bağlıyor.
});

module.exports = router;
