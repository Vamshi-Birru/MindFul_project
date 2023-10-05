const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true,
    },
    Email: {
        type: String,
        require: true,
        unique: true
    },
    Phone: {
        type: Number,
        require: true
    },
    Gender: {
        type: String,
        require: true
    },
    City: {
        type: String,
        require: true
    },
    State: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    }
});
module.exports = new mongoose.model("user", UserSchema);