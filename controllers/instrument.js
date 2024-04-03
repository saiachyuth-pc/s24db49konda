var instrument = require('../models/instrument');
// List of all instrument
exports.instrument_list = function(req, res) {
 res.send('NOT IMPLEMENTED: instrument list');
};
// for a specific instrument.
exports.instrument_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: instrument detail: ' + req.params.id);
};
// Handle instrument create on POST.
exports.instrument_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: instrument create POST');
};
// Handle instrument delete from on DELETE.
exports.instrument_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: instrument delete DELETE ' + req.params.id);
};

// Handle instrument update form on PUT.
exports.instrument_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: instrument update PUT' + req.params.id);
   };


   exports.instrument_list = async function(req, res) {
    try{
    theinstrument = await instrument.find();
    res.send(theinstrument);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// var express = require('express');
// const instrument_controllers= require('../controllers/instrument');
// var router = express.Router();
// /* GET instruments */
// router.get('/', instrument_controllers.instrument_view_all_Page );
// module.exports = router;

// VIEWS
// Handle a show all view
exports.instrument_view_all_Page = async function(req, res) {
    try{
    theinstrument = await instrument.find();
    res.render('instrument', { title: 'instrument Search Results', results: theinstrument });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle instrument create on POST.
exports.instrument_create_post = async function(req, res) {
    console.log(req.body)
    let document = new instrument();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"instrument_type":"goat", "cost":12, "size":"large"}
    document.instrument_type = req.body.instrument_type;
    document.instrument_size = req.body.instrument_size;
    document.instrument_price = req.body.instrument_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };