const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({          //like Create table
    name: { type: String, required: [true, "name is required"] },
    phone: { type: Number, required: [true, "phone number is required"] },
    email: { type: String, required: [true, "email is required"] }
},
    { 
        timestamps : true
    })     

    module.exports = mongoose.model("contactSchema",contactSchema);