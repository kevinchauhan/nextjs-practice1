import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Plaese provide username']
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: [true, 'Email already exists'],
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

const userModel = mongoose.models.Users || mongoose.model('Users', userSchema)

export default userModel