import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";
import BookingTable from "./BookingTable";
import { data } from "autoprefixer";
import axios from "axios";


const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);
  //   console.log(bookings);

  useEffect(() => {
    if (user?.email) {
      const url = `http://localhost:5000/bookings?email=${user?.email}`;
      // normal fetch
      // fetch(url)
      //   .then((res) => res.json())
      //   .then((data) => setBooking(data));
      // axios fetch
      axios.get(url, {withCredentials: true})
      .then(res=>{
        // console.log(res.data);
        setBooking(res.data)
      })
    }
  }, [user?.email]);


  const handleDelete = id =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to delete your booking?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
            })
          console.log(id);
                const remaining = bookings.filter(booking => booking._id !== id)
                setBooking(remaining)
            
          Swal.fire(
            'Deleted!',
            'Your Booking has been deleted.',
            'success'
          )
        }
      })
}

const handleBookingConfirm = id =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: "confirm"})
    })
    .then(res=> res.json())
    .then(data=> {
        console.log(data)
        if (data.modifiedCount > 0) {
            // update state
            const remaining = bookings.filter(booking => booking._id !== id)
            const updated = bookings.find(booking => booking._id === id)
            updated.status = 'confirm'
            const newBookings = [updated, ...remaining]
            setBooking(newBookings)
        }
    })
    
}






  return (
    <div className="max-w-[1440px] mx-auto px-3">
      <h1>Bookings {bookings.length}</h1>
      <div className=" overflow-x-auto bg-blue-gray-50 p-3  rounded-md">
      {
        bookings.map(booking=> <BookingTable
        key={booking._id}
        booking={booking}
        handleDelete={handleDelete}
        handleBookingConfirm={handleBookingConfirm}
        ></BookingTable>)
      }
      </div>
    </div>
  );
};

export default Bookings;
