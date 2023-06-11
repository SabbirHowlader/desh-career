import React from 'react';
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import logo from '../../../Asset/logo/desh-career logo.png'

const Footer = () => {
    return (
        <div className='bg-secondary md:p-10 p-5'>

            <div className='flex justify-center gap-5 text-3xl text-footer-hover mb-10 md:mb-0 '>
                <FaFacebook className='border px-1 rounded-md hover:text-font-color'></FaFacebook>
                <FaYoutube className='border px-1 rounded-md hover:text-font-color'></FaYoutube>
                <FaLinkedin className='border px-1 rounded-md hover:text-font-color'></FaLinkedin>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-5 mx-10  '>
                <div>
                    <img className='w-52 -ml-4 mb-2 mx-auto' src={logo} alt="logo" />
                    <p className='font-sans text-font-color text-lg'>Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM. </p>
                </div>
                <div className='md:text-center'>
                    <h4 className='text-2xl my-7 text-footer-hover'>Privacy And Terms</h4>
                    <div className='text-font-color leading-8 text-lg'>
                        <a className='hover:text-footer-hover' href="/">Privacy Policy</a> <br />
                        <a className='hover:text-footer-hover' href="/">Terms Condition</a> <br />
                        <a className='hover:text-footer-hover' href="/">FAQ</a>
                    </div>
                </div>
                <div className='md:text-end'>
                    <h4 className='text-2xl my-7 text-footer-hover'>Support</h4>
                    <div className='text-font-color leading-8 text-lg'>
                        <a className='hover:text-footer-hover' href="/">Affiliate Link</a> <br />
                        <a className='hover:text-footer-hover' href="/">Contact us</a> <br />
                        <a className='hover:text-footer-hover' href="/">Advertise with us</a>
                    </div>
                </div>
            </div>

            <hr className='border text-font-color w-11/12 md:w-full mx-auto' />

            <div className='text-white md:flex md:justify-between px-10 mt-2 leading-8 md:leading-none'>
                <p >© 2023 Newsletter E-mail Service: All Copy right reserved</p>
                <div className='flex md:gap-5 gap-2'>
                    <a href="/">Terms</a>
                    <a href="/">Cookie Policy</a>
                    <a href="/">Terms</a>
                    <a href="/">Privacy</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;