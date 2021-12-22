const {PollModel, Poll} = require( './../models/pollModel' );

const PollsController = {


    createPoll: function ( req, res) {
    
        let question = req.body.question
        let option1 = req.body.option1
        let option2 = req.body.option2
        let option3 = req.body.option3
        let option4 = req.body.option4
        let pollowner = req.body.pollowner
        let ownername = req.body.pollowner
        let created_at = new Date();
        let updated_at = new Date();

        newPoll = {
            question,
            option1,
            option2,
            option3,
            option4,
            pollowner,
            ownername,
            created_at,
            updated_at
        }

    PollModel
        .createPoll(newPoll)
        .then(data =>{
            pollInfo = {
                question: data.question,
                option1: data.option1,
                option2: data.option2,
                option3: data.option3,
                option4: data.option4,
            }    
            res.status(200).json(pollInfo);
        })
        .catch(err=>{
            res.status(404).json(err).end()
            console.log(err)
        })
        
    },

    getAllPolls: function(req, res){
        PollModel
        .getAllPolls()
        .then(data =>{
            res.status(200).json(data);
        })
    },

    getPollsById: function (req,res) {
        let _id = req.params.id;
        PollModel
        .getPollById(_id)
        .then(data=>{
            if(data === null){
                res.status( 404 ).json(err).end();
            }
            else{
                res.status(200).json(data)
            }
        })
        
    },

    delete: async (req, res) =>{
        const deletePoll = await Poll.findByIdAndDelete(req.params.id)
        .catch(err => console.error('error ->', err));
        res.json(deletePoll);
    },

    updateVoteById : function(req, res) {
        let id = req.body._id;
        console.log("Model Id:", req.body);
        if(req.body.voteNumber === 1){
            PollModel
            .getPollById(id)
            .then(data=>{
                console.log("DATA UPDATE: ", data)
                current = data.vote1;
                newVoteCount = current + 1;
                voteNew = {
                    vote1: newVoteCount
                }
                PollModel
                .finOneAndUpdate(data._id, voteNew)
                .then(result => {
                    res.status(200).json(result)
                })
                .catch(err =>{
                    console.log(err);
                })
            })
            .catch(err =>{
                console.log(err);
            })
        }
        else if(req.body.voteNumber === 2){
            PollModel
            .getPollById(id)
            .then(data=>{
                console.log("DATA UPDATE: ", data)
                current = data.vote2;
                newVoteCount = current + 1;
                voteNew = {
                    vote2: newVoteCount
                }
                PollModel
                .finOneAndUpdate(data._id, voteNew)
                .then(result => {
                    res.status(200).json(result)
                })
                .catch(err =>{
                    console.log(err);
                })
            })
            .catch(err =>{
                console.log(err);
            })
        }
        else if(req.body.voteNumber === 3){
            PollModel
            .getPollById(id)
            .then(data=>{
                console.log("DATA UPDATE: ", data)
                current = data.vote3;
                newVoteCount = current + 1;
                voteNew = {
                    vote3: newVoteCount
                }
                PollModel
                .finOneAndUpdate(data._id, voteNew)
                .then(result => {
                    res.status(200).json(result)
                })
                .catch(err =>{
                    console.log(err);
                })
            })
            .catch(err =>{
                console.log(err);
            })
        }
        else if(req.body.voteNumber === 4){
            PollModel
            .getPollById(id)
            .then(data=>{
                console.log("DATA UPDATE: ", data)
                current = data.vote4;
                newVoteCount = current + 1;
                voteNew = {
                    vote4: newVoteCount
                }
                PollModel
                .finOneAndUpdate(data._id, voteNew)
                .then(result => {
                    res.status(200).json(result)
                })
                .catch(err =>{
                    console.log(err);
                })
            })
            .catch(err =>{
                console.log(err);
            })
        }
    }

}

module.exports = { PollsController };