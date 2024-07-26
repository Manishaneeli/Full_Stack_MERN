import React from 'react';
import './Testimonials.css'
import Unavbar from './Unavbar';
import Footer from '../Components/Footer'


const Testimonials = () => {
  return (
    <div >
      <div style={{ backgroundColor: "skyblue" }}>
        <Unavbar />
      </div>
      <br />
      <h2 className='text-center'>What Our Customers Say</h2>
      <br />
      <div style={{ display: "flex" }}>
        <div style={{ width: "55%", paddingLeft: "150px" }}><p style={{ fontSize: "22px" }}>'Planning a trip with TripPlanner was an absolute delight! From the moment I reached out to them, their team went above and beyond to ensure every detail was taken care of. The itinerary was well-crafted, and the accommodations exceeded my expectations. The entire journey was seamless, allowing me to focus on creating unforgettable memories. I highly recommend TripPlanner for an exceptional travel experience!' <p style={{ display: "flex", justifyContent: "flex-end" }}>~ pm Modi.</p></p>
          
        </div>
        <div style={{ width: "40%", paddingLeft: "110px" }}><img src='https://www.hindustantimes.com/ht-img/img/2024/01/04/550x309/PM-modi-lakshadweep-visit-viral-pics_1704376419939_1704376430000.jpg' style={{ width: "400px",height:"250px" }} /></div>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <div style={{ width: "40%", paddingLeft: "150px" }}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSa-qBNWyUlKzgpFD1zinFG5n-b8JtcpiNw&usqp=CAU' style={{ width: "400px",height:"250px" }} /></div>
        <div style={{ width: "55%", paddingLeft: "30px" }}><p style={{ fontSize: "22px" }}>Planning' my dream vacations became an absolute breeze with TripSavvy! This incredible platform effortlessly takes care of all the nitty-gritty details, ensuring a seamless and unforgettable travel experience. From discovering hidden gems to booking accommodations with stunning views, TripSavvy has become my go-to travel companion. The personalized itineraries and expert recommendations make every trip a picture-perfect adventure. Thanks to TripSavvy, I've created memories that will last a lifetime!',
 <p style={{ display: "flex", justifyContent: "flex-end" }}>~ Kiara Advani.</p></p>
        </div>
      </div>
      <br />

      

      <div style={{ display: "flex" }}>
        <div style={{ width: "55%", paddingLeft: "150px" }}><p style={{ fontSize: "22px" }}>"I am delighted to endorse [Trip Planner], an exceptional platform that has revolutionized the way we plan and experience our travels. This innovative trip planning website has set new standards in the industry, making travel seamless and enjoyable." <p style={{ display: "flex", justifyContent: "flex-end" }}>~ MS Dhoni.</p></p>
          
        </div>
        <div style={{ width: "40%", paddingLeft: "110px" }}><img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/202160109_324823062680863_6344_1200x768.jpeg' style={{ width: "400px",height:"250px" }} /></div>
      </div>

      <br/>
      <Footer/>
    </div>
  );
};

export default Testimonials;
