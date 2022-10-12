import React from "react";
import { Common } from "../Components/Common";
import hero1 from "../images/hero1.svg";

const About = () => {
    return (
        <>
            <Common name='Welcome to About page' visit='/contact' btnname='Contact Now' img={hero1} />
        </>
    );
};

export default About;
