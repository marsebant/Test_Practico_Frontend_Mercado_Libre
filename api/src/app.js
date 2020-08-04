/**
 * Specific API config
 */
const express = require('express');

const app = express();

//#region Load routes
const items = require('../routes/items.routes');
//#endregion

//#region Headers config
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origini, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, OPTIONS'); 
	// res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	 res.header('Allow', 'GET, OPTIONS'); 
	// res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');

	next();
})
//#endregion

// Base routes
app.use('/api', items);

module.exports = app;