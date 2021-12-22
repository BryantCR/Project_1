//* REQUIRES
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    firstname :{
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    },

    lastname : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },


});

const User = mongoose.model( 'users', UserSchema );

const UserModel = {

    createUser : function (newUser) {
        return User.create(newUser) 
    },
    getUserByEmail : function( email ){
        return User.findOne({ email });
    },
    //TODO INSERT MORE QUERYS

}

module.exports = {UserModel};