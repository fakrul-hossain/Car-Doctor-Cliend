import React from 'react';
import { IconButton } from "@material-tailwind/react";
import Swal from 'sweetalert2'
import { HiXMark } from 'react-icons/hi2';

const BookingTable = ({handleBookingConfirm,booking,handleDelete}) => {

    const {service,_id,customerName,img,email,date,service_id,price,status} = booking

   

    return (
        <div>
           <div className="flex lg:bg-blue-gray-100 md:bg-blue-gray-100 rounded-md md:p-6 p-3 gap-x-16 shadow-blue-gray-100 my-3 justify-between items-center">
            <div className="flex gap-3 justify-center items-center">
            <button onClick={()=>handleDelete(_id)} className='ml-14  lg:ml-0'>
            <IconButton variant="gradient" className="rounded-full">
        <HiXMark className='text-xl '></HiXMark>
      </IconButton>
            </button>
                <img className='w-36 rounded-lg' src={img} alt="service photo" />
                <div className="">
                    <h3 className='text-[#444 ] text-[20px] font-semibold'>{customerName}</h3>
                    <p className='text-[A2A2A2] text-[14px]'>{service}</p>
                    <p className='text-[A2A2A2] text-[14px]'>{email}</p>

                </div>
            </div>
            <div className="">
            <h3 className='text-[#444 ] text-[20px] font-semibold'>${price}</h3>
            </div>
            <div className="">
            <h3 className='text-[#444 ] text-[20px] font-semibold'>{date}</h3>
            </div>
            <div className="">
              {status === 'confirm' ? (<>
                <button 
                className="select-none rounded-lg  bg-blue-gray-50 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  transition-all hover:scale-90 focus:scale-100 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
              >
                Confirmed
              </button>
              </>) : 
              (<><button onClick={()=>handleBookingConfirm(_id)}
                className="select-none rounded-lg text-white bg-[#000] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase hover:text-white hover:bg-[#FF3811] transition-all hover:scale-90 focus:scale-100 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
              >
                Confirm
              </button></>)}
            
            </div>
           </div>
        </div>
    );
};

export default BookingTable;