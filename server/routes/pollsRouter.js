const express = require( 'express' );
const PollRouter = express.Router();
const {PollsController} = require( './../controllers/pollController' );

PollRouter
    .post('/add', PollsController.createPoll);

PollRouter
    .get('/get', PollsController.getAllPolls);

PollRouter
    .get('/get/:id', PollsController.getPollsById);

PollRouter
    .delete('/delete/:id', PollsController.delete);

PollRouter
    .put('/update', PollsController.updateVoteById);


/*PollRouter
    .get('/createpoll', PollsController.displayform)
*/

module.exports = { PollRouter };