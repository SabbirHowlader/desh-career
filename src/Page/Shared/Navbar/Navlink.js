import React from 'react';

const Navlink = ({ route }) => {
    return (
        <li className='mr-3 text-left md:mt-0 '>
            <a className=' hover:text-nav-hover p-1 rounded-md' href={route.path}>{route.name}
            </a>
        </li>

    );
};

export default Navlink;