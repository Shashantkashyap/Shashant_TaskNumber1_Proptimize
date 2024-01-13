const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address: {
        type:Object
    },
    phone:{
        type: String,
        required: true
    },
    website:{
        type: String,
        required: true
    },
    company: {
        type:Object
      }
});

module.exports = mongoose.model("User", userSchema)