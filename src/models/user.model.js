const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true,
    },
    username: {
            type: String,
            unique: true,
            required: true,
            minlength: 3,
        },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/mayurkamble/image/upload/v1623832874/146-1468479_my-profile-icon-blank-profile-picture-circle-hd_pbd3h3.png"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)