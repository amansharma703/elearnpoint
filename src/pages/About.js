import React from 'react';
import { Common } from '../Components/Common';
import hero1 from '../images/hero1.svg';
import Footer from '../Components/Footer';

const About = () => {
    return (
        <>
            <Common name='Welcome to About page' visit='/contact' btnname='Contact Now' img={hero1} />
            <Footer />
        </>
    );
};

export default About;
