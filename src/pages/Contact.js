import React, { useState } from 'react';
// Importing toastify module
import { toast } from 'react-toastify';

// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';

// toast-configuration method,
toast.configure();

const Contact = () => {
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    // connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { name, phone, email, message } = userData;

        if (name && phone && email && message) {
            const res = fetch('https://elearnpointreact-default-rtdb.firebaseio.com/contact.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    message,
                }),
            });

            if (res) {
                setUserData({
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                });
                toast('Data Stored successfully');
            } else {
                toast('plz fill the data');
            }
        } else {
            toast('plz fill the data');
        }
    };
    return (
        <>
            <div className='mb-4 pb-2'>
                <div className='my-4'>
                    <h1 className='text-center'>Contact Us</h1>
                </div>

                <div className='container contact_div'>
                    <div className='row'>
                        <div className='col-md-6 col-10 mx-auto'>
                            <form method='POST'>
                                <div className='mb-3'>
                                    <label for='exampleInputEmail1' className='form-label'>
                                        Name
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        id=''
                                        className='form-control'
                                        placeholder='Enter your name'
                                        value={userData.name}
                                        onChange={postUserData}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label for='exampleInputEmail1' className='form-label'>
                                        Email
                                    </label>
                                    <input
                                        type='text'
                                        name='email'
                                        id=''
                                        className='form-control'
                                        placeholder='Enter your email'
                                        value={userData.email}
                                        onChange={postUserData}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label for='exampleInputPassword1' className='form-label'>
                                        Phone
                                    </label>
                                    <input
                                        type='number'
                                        name='phone'
                                        id=''
                                        className='form-control'
                                        placeholder='Enter your number'
                                        value={userData.phone}
                                        onChange={postUserData}
                                    />
                                </div>
                                <div class='mb-3'>
                                    <label for='exampleFormControlTextarea1' class='form-label'>
                                        Query
                                    </label>
                                    <textarea
                                        type='text'
                                        name='message'
                                        id=''
                                        className='form-control'
                                        placeholder='Enter Your Message'
                                        value={userData.message}
                                        onChange={postUserData}
                                        rows='3'
                                    />
                                </div>
                                <div className='mb-3'>
                                    <button type='submit' onClick={submitData} className='btn btn-width btn-outline-primary'>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
