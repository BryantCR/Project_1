const {UserModel} = require( './../models/userModel' );
const bcrypt = require( 'bcrypt' );


const UsersController = {


    createNewUser: function ( req, res) {
        
        let firstname = req.body.firstname
        let lastname = req.body.lastname
        let email = req.body.email
        let password = req.body.password

        console.log(firstname);
        if( firstname && lastname && email && password ){
            bcrypt.hash(password,10)
            .then(encryptedpass =>{
                newUser = {
                    firstname,
                    lastname,
                    email,
                    password : encryptedpass
                }
                UserModel
                .createUser(newUser)
                .then(data =>{
                    userInfo = {
                        _id: data._id,
                        firstname : data.firstname,
                        lastname : data.lastname,
                        email : data.email
                    }
                    
                    res.status(200).json(userInfo);
                })
                .catch(err=>{
                    res.status(404).json(err).end()
                    console.log(err)
                })
            })
        }
        else{
            res.status( 406 ).end();
        }
    },

    login: function (req,res) {
        let email = req.body.email
        let password = req.body.password

        UserModel
        .getUserByEmail(email)
        .then(data =>{
            if(!data){
                throw new Error( "That user doesn't exist!" );
            }
            bcrypt.compare( password, data.password )
            .then(flag =>{
                if( !flag ){
                    throw new Error( "Wrong password!" );
                }

                userInfo = {
                _id: data._id,
                firstname : data.firstname,
                lastname : data.lastname,
                email : data.email
                }
                res.status(200).json(userInfo);
            })
            .catch( error => {
                res.statusMessage = error.message;
                res.status(406).end()
            }); 
        })
        .catch( error => {
            res.statusMessage = error.message;
            res.status( 404 ).end();
            console.log(error);
        }); 
    },



}

module.exports = { UsersController };

// Try with username but didn't work 

// const {UserModel} = require( './../models/userModel' );
// const bcrypt = require( 'bcrypt' );


// const UsersController = {


// createNewUser: function ( req, res) {
    
//     let firstname = req.body.firstname
//     let lastname = req.body.lastname
//     let username = req.body.username
//     let password = req.body.password

//     console.log(firstname);
//     if( firstname && lastname && username && password ){
//         bcrypt.hash(password,10)
//         .then(encryptedpass =>{
//             newUser = {
//                 firstname,
//                 lastname,
//                 username,
//                 password : encryptedpass
//             }
//             UserModel
//             .createUser(newUser)
//             .then(data =>{
//                 userInfo = {
//                     _id: data._id,
//                     firstname : data.firstname,
//                     lastname : data.lastname,
//                     username : data.username,
//                     password : data.password
//                 }
//                 console.log("This user wants to be added: " + userInfo.firstname );
//                 console.log("This user wants to be added: " + userInfo.lastname );
//                 console.log("This user wants to be added: " + userInfo.username );
//                 console.log("This user wants to be added: " + userInfo.password );
//                 request.session.first_name = userInfo.firstname;
//                 request.session.last_name = userInfo.lastname;
//                 request.session.username = userInfo.username;
//                 res.status(200).json(userInfo);
//             })
//             .catch(err=>{
//                 res.status(404).json(err).end()
//                 console.log(err)
//             })
//         })
//     }
//     else{
//         res.status( 406 ).end();
//     }
// },

// login: function (req,res) {
//     let username = req.body.username
//     let password = req.body.password

//     UserModel
//     .getUserByEmail(username)
//     .then(data =>{
//         if(!data){
//             throw new Error( "That user doesn't exist!" );
//         }
//         bcrypt.compare( password, data.password )
//         .then(flag =>{
//             if( !flag ){
//                 throw new Error( "Wrong password!" );
//             }

//             userInfo = {
//             _id: data._id,
//             firstname : data.firstname,
//             lastname : data.lastname,
//             username : data.username
//             }

        
//         res.status(200).json(userInfo);
//         })
//         .catch( error => {
//             res.statusMessage = error.message;
//             res.status(406).end()
//         }); 
//     })
//     .catch( error => {
//         res.statusMessage = error.message;
//         res.status( 404 ).end();
//         console.log(error);
//     }); 
// },


// }



// module.exports = { UsersController };