const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name:String,
    address:String,
    location:String,
    description: String,
    image:String,
    type:String,
    prices: {
        normal_suite: Number,
        vip_suite: Number,
      },
    ratings:Number, 
})

module.exports = mongoose.model('Hotel',hotelSchema)