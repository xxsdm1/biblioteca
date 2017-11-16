'use strict';
'use strict';
var express = require('express'),
	router = express.Router();
var	dataModels = require('./models');

router.get('/revistas',function(req,res){

	dataModels.getRevistas(function(error,data){
		console.log('data : ',data);
		res.send(data);
	});

});

module.exports = router;