import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Uhome from './User/Uhome';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Destinations from './User/Destinations';
import Gallery from './User/Testimonials';
import BookHotel from './User/BookHotel';
import Testimonials from './User/Testimonials';
import About from './User/About';
import Home from './Components/Home';
import Ulogin from './User/Ulogin';
import Usignup from './User/Usignup';
import Alogin from './Admin/Alogin';
import Asignup from './Admin/Asignup';
import MyBookings from './User/MyBookings';
import Ahome from './Admin/Ahome';
import Users from './Admin/Users';
import Hotels from './Admin/Hotels';
import Restaurants from './Admin/Restaurants';
import Places from './Admin/Places';
import CreateHotel from './Admin/CreateHotel';
import CreateRestaurant from './Admin/CreateRestaurant';
import CreatePlace from './Admin/CreatePlace';

const App = () => {

  return (
    <div>
  
      <BrowserRouter>
      <Routes>
        {/* Home */}
        
        <Route path='/' element={<Home/>}/>
        <Route path='/ulogin' element={<Ulogin/>}/>
        <Route path='/usignup' element={<Usignup/>}/>
       

        {/* Admin */}
        <Route path='/alogin' element={<Alogin/>}/>
        <Route path='/asignup' element={<Asignup/>}/>
        <Route path='/ahome' element={<Ahome/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/createhotel' element={<CreateHotel/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/createrestaurant' element={<CreateRestaurant/>}/>
        <Route path='/restaurants' element={<Restaurants/>}/>
        <Route path='/createplace' element={<CreatePlace/>}/>
        <Route path='/places' element={<Places/>}/>

        {/* User */}
        <Route path='/uhome' element={<Uhome/>}/>
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path='/bookhotel/:id' element={<BookHotel/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/mybookings' element={<MyBookings/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
