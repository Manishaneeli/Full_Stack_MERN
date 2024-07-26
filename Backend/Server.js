const express =require('express')
const cors =require('cors')
const connectDB = require('./db/config')

const Admin =require('./db/Admin/adminSchema')
const users =require('./db/User/userSchema')   
const Hotels = require('./db/Admin/Hotel')
const Places = require('./db/Admin/Places')
const Restaurants = require('./db/Admin/Restaurant')
const bookings =require('./db/User/userBooking')

const app=express()

app.use(express.json())
app.use(cors({
    origin:  ["http://localhost:5173"],
    methods:  ["POST", "GET", "DELETE", "PUT"],    
    credentials: true

}))
connectDB()
                                         // Admin  //
// Login
app.post('/alogin', (req, resp) => {  
    const { email, password } = req.body;   
    Admin.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return resp.json({ Status: "Success", user: { id:user.id,name: user.name, email: user.email } })
                } else {
                    resp.json("login fail")
                }
            } else {
                resp.json("no user")
            }
        })
  })
  
  // Register Api
  app.post('/asignup', (req, resp) => {
    const { name, email, password } = req.body;
    Admin.findOne({ email: email })
        .then(use => {
            if (use) {
                resp.json("Already have an account")
            } else {
                Admin.create({ email: email, name: name, password: password })
                    .then(result => resp.json("  Account Created"))
                    .catch(err => resp.json(err))
            }
        }).catch(err => resp.json("failed "))
  })

                        //   User @ Admin
app.get('/users',(req,res)=>{
    users.find()
    .then((user)=>{
        res.status(200).json(user)
    })
    .catch(() => {
        res.sendStatus(500)
    })
})
app.delete('/userdelete/:id',(req,res)=>{
    const { id }=req.params
     users.findByIdAndDelete(id)
     .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.status(500).json({ error: 'Internal server error' });
    });
  })

//Add Hotel
app.post('/addhotel', async (req, res) => {
    try {
      const newHotel = new Hotels(req.body);
      const savedHotel = await newHotel.save();
      res.status(201).json(savedHotel);
    } catch (error) {
      console.error('Error creating hotel:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
// get Hotels
app.get('/hotels',(req,res)=>{
    Hotels.find()
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch(()=>{
         console.log("error in fetching")
    })
})
//Delete Hotels
app.delete('/deletehotel/:id',(req,res)=>{
    const {id}= req.params;
    Hotel.findByIdAndDelete(id)
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch(()=>{
         console.log("error in fetching")
    })
})
// Add Restaurants
app.post('/addrestaurant', async (req, res) => {
    try {
      const newHotel = new Restaurants(req.body);
      const savedHotel = await newHotel.save();
      res.status(201).json(savedHotel);
    } catch (error) {
      console.error('Error creating hotel:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
// Restaurants
app.get('/restaurants',(req,res)=>{
    Restaurants.find()
    .then((data)=>{
        res.status(200).json(data)
    })   
    .catch(()=>{
         console.log("error in fetching")
    })
})
//Delete Restro
app.delete('/deleterestaurant/:id',(req,res)=>{
    const {id}= req.params;
    Restaurants.findByIdAndDelete(id)
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch(()=>{
         console.log("error in fetching")
    })
})

// Add Places
app.post('/addplace', async (req, res) => {
    try {
      const newHotel = new Places(req.body);
      const savedHotel = await newHotel.save();
      res.status(201).json(savedHotel);
    } catch (error) {
      console.error('Error creating hotel:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


// Places
app.get('/places',(req,res)=>{
    Places.find()
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch(()=>{
         console.log("error in fetching")
    })
})

//Delete place
app.delete('/deleteplace/:id',(req,res)=>{
    const {id}= req.params;
    Places.findByIdAndDelete(id)
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch(()=>{
         console.log("error in fetching")
    })
})



  app.get('/bookings', async (req, res) => {
    try {
        const tasks = await bookings.find()  
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});


                                       // User //

   // login
app.post('/ulogin', (req, res) => {
    const { email, password } = req.body;
        users.findOne({ email: email })
            .then(user => {
                if (user) {
                    if (user.password === password) {
                        return res.json({ Status: "Success", user: { id: user.id, name: user.name, email: user.email } })
                    }
                    else {
                        res.json("Invalid Password")
                    }
                }
                else {
                    res.json("User not found")
                }
            })
    })
    
    app.post('/usignup', (req, resp) => {
        const { name, email, password } = req.body;
        users.findOne({ email: email })
            .then(use => {
                if (use) {
                    resp.json("Already have an account")
                } else {
                    users.create({ email: email, name: name, password: password })
                        .then(result => resp.json("  Account Created"))
                        .catch(err => resp.json(err))
                }
            }).catch(err => resp.json("failed "))
    })      

    app.get('/getbookings/:userId', async (req, res) => {
        const userId = req.params.userId;
        try {
            const tasks = await bookings.find({ userId }).sort('position');   
            res.json(tasks);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch tasks' });
        }
    });



app.post('/userbooking', async (req, res) => {
    const { hotelName, description, prices, name,email,phno,address,image,totalamount, BookingDate,  userId, userName: String, rooms,checkIn  } = req.body;
    try {
        const order = new bookings({ hotelName, description, prices, name,email,phno,address,image, totalamount, BookingDate,  userId, userName: String, rooms,checkIn});
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create booking' });
    }
});

app.get('/hotel/:id', async (req, res) => {     
    const id = req.params.id;
    try {
        const item = await Hotels.findById({ _id: id });
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



app.listen(7000,()=>{
    console.log("listening at 7000")   
})