var express = require('express');
const instrument_controlers= require('../controllers/instrument');
var router = express.Router();
/* GET instrument */
router.get('/',instrument_controlers.instrument_view_all_Page );
 
/* GET detail instrument page */
router.get('/detail', instrument_controlers.instrument_view_one_Page);
 
/* GET create instrument page */
router.get('/create', instrument_controlers.instrument_create_Page);
 
router.get('/update', instrument_controlers.instrument_update_Page);

/* GET delete instrument page */
router.get('/delete', instrument_controlers.instrument_delete_Page);

module.exports = router;