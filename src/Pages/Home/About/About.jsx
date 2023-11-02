import React from "react";
import person1 from "../../../assets/images/about_us/person.jpg";
import person2 from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="mx-w-[1440px] mt-[100px] mx-auto">
      <div className="lg:flex lg:gap-10 gap-10 justify-center items-center">
        <div className="lg:w-3/4 mx-auto relative">
          <img className="mx-auto w-3/4 h-full rounded-xl" src={person1} alt="" />
          <img className="mx-auto w-1/2 h-full border-8 border-white  absolute right-5 top-1/2 rounded-xl" src={person2} alt="" />
        </div>
        <div className="p-3 lg:w-3/4 mt-24 md:mt-40 lg:mt-18">
          <h2 className="text-[#FF3811] text-[20px] font-semibold">About Us</h2>
          <h1 className="text-[#151515] text-[45px] py-[20px] font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="text-[#737373] text-[16px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="text-[#737373] text-[16px] py-[15px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="bg-[#FF3811] text-white rounded-lg text-[18px] p-3">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
