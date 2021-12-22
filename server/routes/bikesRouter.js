const express = require( 'express' );
const BikeRouter = express.Router();
const {BikesController} = require( './../controllers/bikesController' );

module.exports = { BikeRouter };