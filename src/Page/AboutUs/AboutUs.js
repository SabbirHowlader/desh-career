import React from 'react';
import UseTitle from '../../Hooks/UseTitle/UseTitle';

const AboutUs = () => {
    UseTitle('AboutUs')
    return (
        <div className='md:w-1/2 mx-auto md:ml-20 md:my-10 p-10 '>
            <h1 className='text-6xl font-bold mb-4'>About Us</h1>
            <p>Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM. </p>
            <div className='leading-8'>
                <p>We focus on Career trend, news, smart job etc. </p>
                <p>If you want to contact us: you can send an email to contact.deshcareer@gmail.com</p>
                <p>If you want to meet with us, you can come to our office based on an appointment. </p>
                <p>Our Office address:</p>
                <p>House: 13/3,</p>
                <p>Road: 2,</p>
                <p>Shyamoly, Dhaka-1207</p>
                <p>+8801880811047</p>
            </div>
        </div>
    );
};

export default AboutUs;