const Movie = require("../models/movie.model");
const jwt = require('jsonwebtoken');
const User = require("../models/movie.model")

module.exports = { 

    findAll: (req, res)=> {
        
        Movie.find({})
        .populate("user_id", "username")
        .then((allMovie) => {
            res.json(allMovie);
        })
        .catch((err)=>{
            console.log("Display all Movies Failed");
            res.status(400).json(err);
        })

    },

    createNew: (req, res)=>{
        const movie = new Movie(req.body);
        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        movie.user_id = decodedJwt.payload.user_id;
        movie.createdByUserName = decodedJwt.payload.username;

        console.log(decodedJwt.payload.user_id);
        console.log(decodedJwt.payload.username);
        console.log(movie);

        Movie.create(movie)
        .then((newMovie)=>{
            res.json(newMovie)
        })
        .catch((err)=> {
            console.log("Create a movie failed");
            res.status(400).json(err)
        })
        
    },

    findAllByUser: (req, res)=> { 
        Movie.find({user_id: req.params.id })
        .then((allByUser)=>{
            console.log(allByUser);
            res.json(allByUser);
        })
        .catch((err)=>{
            console.log("Display all movies by user failed")
            res.status(400).json(err)
        })

    },

    findOneMovie: (req, res)=>{
        Movie.findOne({_id: req.params.id})
        .then((oneMovie)=>{
            console.log(oneMovie);
            res.json(oneMovie);
        })
        .catch((err)=>{
            console.log("Display one movie failed");
            res.status(400).json(err)
        })

    },

    updateMovie: (req, res)=> {
        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
            Movie.findOneAndUpdate({_id: req.params.id},
                    req.body,
                    {new: true, runValidators: true},
            )
            .then(editMovie => { 

                    console.log("Movie has been updated");
                    res.json(editMovie)
            })
            .catch((err)=>{
                console.log("Edit movie failed");
                res.status(400).json(err)
            })


    }, 

    deleteMovie: (req, res)=> {

        Movie.deleteOne({_id: req.params.id})
        .then((deleteMovie)=>{
            console.log("Movie had been deleted");
            res.json(deleteMovie)
        })
        .catch((err)=> { 
            console.log("Delete movie failed");
            res.status(400).json(err)
        })

    }




}
