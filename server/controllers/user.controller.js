const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = { 

    register: (req , res)=>{
        console.log(req.body);

        const user = new User(req.body);

        user.save()
            .then((newUser)=>{ 
                console.log(newUser);
                console.log("Successfully registered!");
                res.json({
                    successMessage:"Thank you for registering",
                    user: newUser
                })
            })
            .catch((err)=>{
                console.log("Register NOT Successful");
                console.log(err);
                res.status(400).json(err);
            })
    },

    login: (req, res)=> {
        User.findOne({email: req.body.email})
            .then((userRecord)=>{
                if(userRecord === null){
                    res.status(400).json({message: "Invalid Login Attempt"})
                }
                else{
                    bcrypt.compare(req.body.password, userRecord.password)
                    .then((isPasswordValid)=>{
                        if(isPasswordValid){
                            console.log("Password is valid");

                            res.cookie("usertoken",
                                jwt.sign({
                                    user_id: userRecord._id,
                                    email: userRecord.email,
                                    username: userRecord.username
                                },
                                process.env.JWT_SECRET),

                                {
                                    httpOnly: true,
                                    expries: new Date(Date.now() + 9000000)
                                }
                            )
                            .json({
                                message:"Successfully Logged in",
                                userLoggedIn: userRecord.username,
                                userId: userRecord._id
                            })
                        }
                        else{
                            res.status(400).json({message:"Login and/or Email Invalid"});
                        }
                    })
                    .catch((err)=>{
                        console.log(err);
                        res.status(400).json({message:"Invalid Attempt"});
                    })
                }
            })
            .catch((err)=>{
                console.log("error");
                res.status(400).json({message:"Invalid Attempt"})
            })
    },

    logout: (req, res) =>{
        console.log("logging out");
        res.clearCookie("usertoken");
        res.json({
            message: "You have sucessfuly logged out!"
        })

    },

    getOneUser: (req, res)=>{
        User.findOne({_id: req.params.id})
        .then((oneUser)=>{
            console.log(oneUser);
            res.json(oneUser);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        })

    },

}

