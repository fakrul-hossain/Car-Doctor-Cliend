import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  // console.log(services);
  useEffect(() => {
    fetch("servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center mt-[100px]">
        <h2 className="text-[#FF3811] text-[20px] font-semibold">About Us</h2>
        <h1 className="text-[#151515] text-[45px] py-[20px] font-bold">
          Our Service Area
        </h1>
        <p className="text-[#737373] text-[16px] capitalize">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3  mt-16 gap-7">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
