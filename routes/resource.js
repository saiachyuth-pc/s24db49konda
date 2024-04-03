var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var instrument_controller = require('../controllers/instrument');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// instrument ROUTES ///
// POST request for creating a instrument.
router.post('/instrument', instrument_controller.instrument_create_post);
// DELETE request to delete instrument.
router.delete('/instrument/:id', instrument_controller.instrument_delete);
// PUT request to update instrument.
router.put('/instrument/:id', instrument_controller.instrument_update_put);
// GET request for one instrument.
router.get('/instrument/:id', instrument_controller.instrument_detail);
// GET request for list of all instrument items.
router.get('/instrument', instrument_controller.instrument_list);
module.exports = router;