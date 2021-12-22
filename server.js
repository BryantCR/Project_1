const express = require('express');
const session = require( 'express-session' );
const path = require('path');
//const {UserRouter} = require('./server/routes/usersRouter');
//const {BikeRouter} = require('./server/routes/bikesRouter');
//const {PollRouter} = require('./server/routes/pollsRouter');
const app = express();
var cors = require('cors')

app.use( express.urlencoded({extended:true}) );
app.use(cors())
app.use( express.json() );
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 30 }
}));
//app.use(express.static(path.join(__dirname, "/public/dist/public")));

require("./server/config/database.js");

app.use( '/users', UserRouter );
app.use( '/bikes', BikeRouter );
app.use( '/polls', PollRouter);

app.all( '*', function( request, response ){
    response.sendFile( path.resolve( './public/dist/public/index.html' ) );
});

let port = 8080
app.listen(port, function(){
    console.log("This server is working on port: 8080");
})