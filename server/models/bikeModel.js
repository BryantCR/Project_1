const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({

    title :{
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    },

    description : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 200
    },

    price : {
        type : Number,
        required : true,
        unique : true
    },

    location : {
        type : String,
        required : true
    },

    image : {
        type : String,
        required : true
    },

    creator : {
        type : String,
        required : true
    },

});

//const User = mongoose.model( 'polls', BikeSchema );

const UserModel = {

    //TODO INSERT MORE QUERYS

}

module.exports = {UserModel};