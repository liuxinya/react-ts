var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.send({
    succ: true,
    data: '味盎然而非',
  });
});

module.exports = router;
