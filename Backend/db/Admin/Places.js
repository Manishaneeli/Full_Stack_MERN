const mongoose = require('mongoose')

const placesSchema = new mongoose.Schema({
    name:String,
    address:String,
    location:String,
    description: String,
    image:String,
    timings:{
        open:String,
        close:String
    },
    ratings:Number
    
})

module.exports = mongoose.model('Place',placesSchema)    