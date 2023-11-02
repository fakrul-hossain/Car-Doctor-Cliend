import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import bannerImg1 from '../../../assets/images/banner/1.jpg'
import bannerImg2 from '../../../assets/images/banner/2.jpg'
import bannerImg3 from '../../../assets/images/banner/3.jpg'
import bannerImg4 from '../../../assets/images/banner/4.jpg'



const Banner = () => {



    
    return (
        <div className='mt-4 '>
            <Carousel className="rounded-xl ">
      <div className="relative lg:h-[700px] h-full w-full">
        <img
          src={bannerImg1}
          alt="image 1"
          className="lg:h-[700px] h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid lg:h-[700px] h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-[16px] md:text-4xl lg:text-5xl"
            >
              Affordable Price For Car Servicing
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-[14px] opacity-80"
            >
              There are many variations of passages of  available, but the majority have suffered alteration in some form
            </Typography>
            <div className="flex justify-center gap-2">
              <Button  className='bg-[#FF3811] text-[10px]'>
              Discover More
              </Button>
              <Button color="white" variant="text" className='md:text-[10px]'>
              Latest Project
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:h-[700px] h-full w-full">
        <img
          src={bannerImg2}
          alt="image 2"
          className="lg:h-[700px] h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid lg:h-[700px] h-full w-full items-center bg-black/75">
        <div className="w-3/4 mx-auto text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-[16px] md:text-4xl lg:text-5xl"
            >
              Affordable Price For Car Servicing
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-[14px] opacity-80"
            >
              There are many variations of passages of  available, but the majority have suffered alteration in some form
            </Typography>
            <div className="flex justify-center gap-2">
              <Button  className='bg-[#FF3811] text-[10px]'>
              Discover More
              </Button>
              <Button color="white" variant="text" className='md:text-[10px]'>
              Latest Project
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:h-[700px] h-full w-full">
        <img
          src={bannerImg3}
          alt="image 3"
          className="lg:h-[700px] h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid lg:h-[700px] h-full w-full items-end bg-black/75">
        <div className="w-3/4 mx-auto  text-center my-auto md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-[16px] md:text-4xl lg:text-5xl"
            >
              Affordable Price For Car Servicing
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-[14px] opacity-80"
            >
              There are many variations of passages of  available, but the majority have suffered alteration in some form
            </Typography>
            <div className="flex justify-center gap-2">
              <Button  className='bg-[#FF3811] text-[10px]'>
              Discover More
              </Button>
              <Button color="white" variant="text" className='md:text-[10px]'>
              Latest Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
        </div>
    );
};

export default Banner;