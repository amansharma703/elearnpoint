import React from "react";
import { Card } from "../Components/Card";
import Sdata from "../API/Sdata";
const Service = () => {
    return (
        <>
            <div className='my-4'>
                <h1 className='text-center'>Our Services</h1>
            </div>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                            {Sdata.map((val, index) => {
                                return <Card key={index} imgsrc={val.imgsrc} title={val.title} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
