const mongoose = require("mongoose");
const bcrypts  = require("bcrypt");

const UserSchema = new mongoose.Schema({
    
    username: { 
        type: String, 
        required:[true, "Username is required"]
    },

    email: { 
        type: String, 
        required:[true, "Email is required"],
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a vaild email"

    },

    password: { 
        type: String, 
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }

}, {timestamps: true});

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set( value => this._confirmPassword = value);

const bcrypt = require('bcrypt');

UserSchema.pre('save', function(next) {
    bcrypts.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    })
});


const User = mongoose.model("User", UserSchema);
module.exports = User;