const mongoose = require('mongoose');

const bookingschema = new mongoose.Schema({
    name:String,
    email:String,
    phno:String,
    rooms:Number,
    totalamount:String,
    hotelName:String,
    image:String,
    address:String,
    description:String,
    checkIn:String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName:String,
    BookingDate: {
        type: String, // Store dates as strings
        default: () => new Date().toLocaleDateString('hi-IN') // Set the default value to the current date in "MM/DD/YYYY" format
    },  
    
})

module.exports =mongoose.model('bookings',bookingschema)

