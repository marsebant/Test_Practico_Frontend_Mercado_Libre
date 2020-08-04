/**
 * General API config
 */
//#region IMPORTS
const app = require('./app');
const dotenv = require('dotenv');
//#endregion 

//#region CONFIGS
const result = dotenv.config();
if (result.error) {
    console.error(result.error);
}
// Configure listening port
const port = process.env.PORT || 3001;
//#endregion 

// Server UP
const server = app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

module.exports = server;