import React from 'react';
import About from '../About/About';
import Contactme from '../Contactme/Contactme';
import Navbar from '../Navbar/Navbar';

import Banner from './Banner/Banner';

import Service from './Service/Service';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div className=''>

            
             <Navbar></Navbar>
            <Banner></Banner>
            <Skills></Skills>
            {/* <ProjectNav></ProjectNav> */}
            <Service></Service>
            <About></About>
            {/* <Blog></Blog> */}
            <Contactme></Contactme>

            
        </div>
    );
};

export default Home;