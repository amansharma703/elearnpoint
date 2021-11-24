import React from 'react';
import { NavLink } from 'react-router-dom';

export const Common = (props) => {
    return (
        <div>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-2 order-2 order-lg-1 d-flex justify-content-center  flex-wrap flex-column'>
                                    <h1>
                                        {props.name} <strong className='brand_name'>eLearnpoint</strong>
                                    </h1>
                                    <h2 className='my-3'> We are the team who makes professional Developers </h2>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn-get-started'>
                                            {props.btnname}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6  order-2 order-lg-2 header-img'>
                                    <img src={props.img} className='img-fluid animated' alt='image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
