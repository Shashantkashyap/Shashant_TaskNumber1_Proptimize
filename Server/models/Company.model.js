const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    catchPhrase:{
        type: String,
        required: true
    },
    bs:{
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model("Company", companySchema)