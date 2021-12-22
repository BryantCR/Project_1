const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({

    question :{
        type : String,
        required : true,
        minlength : 8,
        maxlength : 1000
    },

    option1 : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 50
    },

    option2 : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 50
    },

    option3 : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 50
    },

    option4 : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 50
    },

    vote1 : {
        type : Number,
        required : false,
        default : 0
    },
    vote2 : {
        type : Number,
        required : false,
        default : 0
    },
    vote3 : {
        type : Number,
        required : false,
        default : 0
    },
    vote4 : {
        type : Number,
        required : false,
        default : 0
    },

    pollowner : {
        type : String,
        required : true,
    },

    ownername : {
        type : String,
        required : true,
    },

    created_at : {
        type : Date
    },

    updated_at : {
        type : Date
    },

});

const Poll = mongoose.model( 'polls', PollSchema );

const PollModel = {

    createPoll : function (poll) {
        return Poll.create(poll) 
    },
    getAllPolls : function(){
        return Poll.find()
    },
    getPollById : function( _id ){
        console.log("Find with this id1: ", _id);
        return Poll.findOne( {_id} );
    },
    finOneAndUpdate : function( _id, newVote ){
        return Poll.findOneAndUpdate({_id}, {$set : newVote}, {new:true})
    }

}

module.exports = {PollModel, Poll};
