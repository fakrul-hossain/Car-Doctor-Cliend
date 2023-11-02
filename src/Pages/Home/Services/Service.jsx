import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';


const Service = ({service}) => {
    const { title,_id, img, price } = service;
    return (
        <div>
            <div className="relative w-full mt-3 flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
  <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img
      src={img}
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-[25px] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {title}
    </h5>
  </div>
  <div className="p-6 flex justify-between items-center pt-0">
    <p className='text-[#FF3811] font-bold text-[20px]'>Price: ${price}</p>
    <NavLink to={`/checkout/${_id}`}
      className="text-[18px] text-[#FF3811] "
      type="button"
      data-ripple-light="true"
    >
      <FiArrowRight></FiArrowRight>
    </NavLink>
  </div>
</div>
        </div>
    );
};

export default Service;