var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('instrument', { title: 'Search Result instrument' });
});
module.exports = router;

var express = require('express');
const instrument_controlers= require('../controllers/instrument');
var router = express.Router();
/* GET instrument */
router.get('/', instrument_controlers.instrument_view_all_Page );
module.exports = router;