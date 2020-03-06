var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home.ejs', { title: 'Megha' });
});

router.get('/test', function(req, res, next) {
  res.render('test.ejs', { title: 'Megha' });
});


module.exports = router;
