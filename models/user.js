import {Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    email: {    
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"],
    },
    username: {
        type: String,
        unique: [true, "Username already exists"],
        required: [true, "Username is required"],
        // create a regex to check if the username is valid

        match: [/^[a-zA-Z0-9]+(?<![_.])$/, "Username is invalid must contain unique characters"],
        minlength: [8, "Username must be at least 3 characters long"],
        maxlength: [20, "Username must be at most 30 characters long"],
    }, 
    image: {
        type: String,
    }
});

const User = models.User || model("user", userSchema);

export default User;