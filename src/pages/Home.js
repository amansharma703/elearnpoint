import React from "react";
import { Common } from "../Components/Common";
import hero2 from "../images/hero2.svg";

const Home = () => {
    return (
        <>
            <Common name='Level Up your skill with' visit='/service' btnname='get started' img={hero2} />
        </>
    );
};

export default Home;
