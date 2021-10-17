const mongoose = require("mongoose");
const User = require("./user.model");


const MovieSchema = new mongoose.Schema({

    title: {
        type: String, 
        required: [true, "Title is required"]
    },

    rated: { 
        type: String,
        enum: [
            "G",
            "PG",
            "PG-13",
            "R",
            "NC-17"
        ]
    },

    genre: {
        type: String, 
        required: [true, "Genre is required"],
        enum: [
            "Action",
            "Animation",
            "Comedy",
            "Crime",
            "Drama",
            "Fantasy",
            "Historical",
            "Experimental",
            "Horror",
            "Romance",
            "Science Fiction",
            "Thriller",
            "Western",
            "Other"
        ]
    },

    length: { 
        type: String
    },

    image: { 
        type: String, 
        required: [true, "Image is required"]
    },

    producer: {
        type: String
    },

    summary: {
        type: String, 
        required: [true, "Summary is required"]
    },

    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    createdByUserName: { 
        type: String
    }

}, {timestamps:true})

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie; 