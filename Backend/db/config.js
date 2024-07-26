const mongoose =require('mongoose')

const connectDB=async () => {
    try {
        
       await mongoose.connect('mongodb+srv://21wh1a6663:12345@cluster0.hl3ctsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
       console.log('connected to db')
    } catch (error) {
        console.log('error')
    }
}  
//export default connectDB
module.exports=connectDB