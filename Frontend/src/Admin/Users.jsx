import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table,Card } from 'react-bootstrap';
import { FaTrash,FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Anavbar from './Anavbar';
// import "./users.css"

const Users = () => {
  const [userbookings, setUserbookings] = useState([]);
  const [users, setUsers] = useState([]);

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

   useEffect(() => {
    axios.get(`http://localhost:7000/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
      });
}, []);

const deleteData = (taskId) => {
    axios.delete(`http://localhost:7000/userdelete/${taskId}`);
    window.location.assign('/users');
    alert('User is deleted');
  };




 
  
  const fetchUserBikeData = (userId) => {
   
    axios.get(`http://localhost:7000/getbookings/${userId}`)

    .then((response) => {
      setUserbookings(response.data);
      toggleDetails(); // Show Plan Details when data is fetched
    })
    .catch((error) => {
      console.error('Error fetching user bike data:', error);
    });
  };
  const calculateStatus = (date) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(date);

    if (formattedDeliveryDate >= currentDate) {
      return "Upcomming";
    } else {
      return "completed";
    }
  };

  return (
    <div>
    <Anavbar/>
    <br />
    <h1 className='text-center'>Users</h1> <br />
    <div style={{display:"flex",justifyContent:"center"}}>
    <Table striped bordered hover variant="dark" style={{width:"70%"}}>
      <thead>
        <tr>
          <th>sl/no</th>
          <th>UserId</th>
          <th>User name</th>
          <th>Email</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => (
          <tr key={item._id}>
            <td>{index + 1}</td>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
            <div style={{display:"flex",justifyContent:"space-around"}}>
              <button onClick={() => deleteData(item._id)} style={{ border: 'none', color: 'red', background: 'none' }}>
                <FaTrash />
              </button>
              <Button onClick={() => fetchUserBikeData(item._id)} style={{ marginBottom: '12px' }}>
                view
              </Button>
              </div>
              <div style={{ display: 'flex' }}>
                {showDetails && (
                  <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50" >
                    <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
                    <div className="bg-white p-4 rounded-lg z-10 relative" style={{ maxHeight: "80vh", overflowY: "scroll" }}>
                      {/* Rest of your content */}
                      <p className="text-sm text-gray-600">
                        <div className="container mx-auto mt-8" style={{width:"1350px"}}>
                          <h1 className='text-center text-blue-300'>User Orders</h1>
                          {userbookings.map((item) => {
                             const status = calculateStatus(item.checkIn);
                            return (
                                <Card
                                key={item._id}
                                style={{
                                  width: '90%',
                                  marginLeft: '65px',
                                  backgroundColor: '#fff',
                                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                  borderRadius: '8px',
                                  paddingTop: '15px',
                                  marginBottom: '35px',
                                }}
                              >
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                  <div >
                                  <img src={item.image} style={{ height: "80px",width:"120px" }} /> 
                                  </div>
                                  <div>
                                    <p>Hotel Name:</p>
                                    <p>{item.hotelName}</p>
                                  </div>
                                  <div>
                                    <p>Bookingid:</p>
                                    <p>{item._id.slice(0,10)}</p>
                                  </div>
                                  <div>
                    <p>Address:</p>
                    {item.address.slice(0,22)}
                    <br/>
                    {item.address.slice(22,42)}
                    <br/>
                    {item.address.slice(42,62)}
                    <br/>
                    {item.address.slice(62)}
                  </div>
                  <div>
                    <p>Rooms:</p>
                    {item.rooms}
                  </div>
                  <div>
                    <p>BookingDate</p>
                    <p>{item.BookingDate}</p>
                  </div>
                  <div>
                    <p>Check-In Date</p>
                    <p>{item.checkIn}</p>
                  </div>
                  <div>
                    <p>Price</p>
                    <p>₹{item.totalamount}</p>
                  </div>
                                  <div>
                                    <p>Status</p>
                                    <p>{status}</p>
                                  </div>
                             
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      </p>
                      <Button onClick={toggleDetails} className="mt-4">
                        Close
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  </div>
  
  )
}

export default Users
