import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true
    }, 
    password: {
        type: String,  // Obviously password will come hashed and not the original the user entered
        required: true
    }, 
    isAdmin: {
        type: Boolean, 
        required: true, 
        default: false
    }
}, {timestamps: true})

const User = mongoose.model("User", userSchema);

export default User;