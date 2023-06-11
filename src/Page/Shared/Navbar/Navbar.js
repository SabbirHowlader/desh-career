import React, { useState } from 'react';
import Navlink from './Navlink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../../../Asset/logo/desh-career logo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: "1", name: "Home", path: "/" },
        { id: "2", name: "Privacy Policy", path: "" },
        { id: "3", name: "Terms Condition", path: "" },
        { id: "4", name: "About Us", path: "/aboutus" },
        { id: "5", name: "Contact Us", path: "" },
        { id: "6", name: "Advertise", path: "" },
    ]

    return (
        <nav className='flex justify-around items-center border-b-2 flex-row-reverse md:flex-row '>

            {/* --Mobile button-- */}
            <div onClick={() => setOpen(!open)} className='ml-5 h-8 w-8 md:hidden'>
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            {/* --logo-- */}
            <img className='w-52 h-p-1 md:ml-10 mr-3' src={logo} alt="logo" />

            {/* --menu items -- */}
            <ul className={`md:flex justify-center items-center font-bold text-lg absolute md:static md:p-16 pl-5 duration-500 ease-in ${open ? 'top-24 bg-white' : 'top-[-350px]'} `}>
                {
                    routes.map(route => <Navlink key={route.id} route={route}></Navlink >)
                }
                <button className='bg-nav-hover px-2 py-1 rounded-md text-white font-normal'>Join Now</button>

            </ul>
        </nav>
    );
};

export default Navbar;

