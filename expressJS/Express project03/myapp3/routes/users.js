var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('userindex',{'Username':req.session.Username})
});

module.exports = router;
