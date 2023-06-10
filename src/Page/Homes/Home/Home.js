import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import UseTitle from '../../../Hooks/UseTitle/UseTitle';

const Home = () => {
    UseTitle('Home')
    
    return (
        <div>
         <TopBanner></TopBanner>
        </div>
    );
};

export default Home;