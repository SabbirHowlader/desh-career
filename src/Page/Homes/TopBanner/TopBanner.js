import React from 'react';
import {EnvelopeIcon } from '@heroicons/react/24/solid'

const TopBanner = () => {
    return (
        <div className='md:w-1/2 mx-auto md:ml-20 md:my-10 p-10 leading-8'>
            <h1 className='text-5xl font-bold mb-4'>Get Smarter about your career</h1>
            <p className='text-lg mb-4'>Get the <b>5-minute newsletter</b> keeping about smart career</p>

            <div className='flex justify-between items-center border-2 p-2 rounded mb-4'>
              <EnvelopeIcon className='h-8 w-8'></EnvelopeIcon>
              <input type="text" placeholder="Your E-Mail Address" className="input w-full max-w-xs" />
              <button className='bg-nav-hover px-10 py-1 rounded-md text-white font-normal'>Join Free</button>
            </div>

            <p className='text-lg'>We're committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p>
        </div>
    );
};

export default TopBanner;