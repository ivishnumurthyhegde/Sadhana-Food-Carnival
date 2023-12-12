import React from 'react';
import { MdOutlinePayments } from 'react-icons/md';
import { GoBook } from 'react-icons/go';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { IoLeafOutline } from 'react-icons/io5';

const Services = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16 ml-9">
        {/* First Column */}
        <div className="col-span-1">
        <div className="hidden md:block">
        <br />
        <br />
        <br />
        <br />
         <br />
         <br />
        </div>
          <h3 className="text-xl font-semibold text-green-500">Our services</h3>
          <h3 className="text-3xl font-semibold mt-2">As Fast As Than You Expect</h3>
          <br></br>
          {/* 2x2 grid inside the first column */}
          <div className="grid grid-cols-2 gap-9">
            {/* Service 1 */}
            <div className="flex items-center flex-col text-center md:text-left">
              <div className='text-green-500 text-5xl'><MdOutlinePayments /></div>
              <h6 className="mt-2 sm:text-base md:text-2xl lg:text-3xl xl:text-3xl font-bold">Cashless payments</h6>
            </div>
            {/* Service 2 */}
            <div className="flex items-center flex-col text-center md:text-left">
              <div className='text-green-500 text-5xl'><GoBook /></div>
              <h6 className="mt-2 sm:text-base md:text-2xl lg:text-3xl xl:text-3xl font-bold">Traditional Menu</h6>
            </div>
            {/* Service 3 */}
            <div className="flex items-center flex-col text-center md:text-left">
              <div className='text-green-500 text-5xl'><MdOutlineWorkspacePremium /></div>
              <h6 className="mt-2 sm:text-base md:text-2xl lg:text-3xl xl:text-3xl font-bold">Premium Quality</h6>
            </div>
            {/* Service 4 */}
            <div className="flex items-center flex-col text-center md:text-left">
              <div className='text-green-500 text-5xl'><IoLeafOutline /></div>
              <h6 className="mt-2 sm:text-base md:text-2xl lg:text-3xl xl:text-3xl font-bold">Natural Ingredients</h6>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-span-1">  {/* First Image */}
        <img
            src=' https://shorturl.at/nFMP3'
            alt="Sample"
            className='mr-5 relative top-[6%] left-[-5%]'
            style={{ maxWidth: '70%', maxHeight: 'auto' }}
          />
          {/* Second Image */}
          <img
            src='https://shorturl.at/AB468  '
            alt="Sample"
            className='relative bottom-9 left-8 m-auto mb-5 top-[-9%] border-8 border-white-500'
            style={{ maxWidth: '76%', maxHeight: 'auto' }}
          /></div>
      </div>

      <div className='mt-9 mb-5'> <h1 className='text-4xl font-semibold text-center mt-2'> What our customer says</h1></div>
    </>
  );
};

export default Services;
