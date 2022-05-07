import React from 'react';
import facebook from '../../../Images/socials/fb.png'
import google from '../../../Images/socials/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Social = () => {
    const [signInWithGoogle, user, googleError] = useSignInWithGoogle(auth)
    if (user) {
        console.log(user)
    }
    let errorElement;
    if (googleError) {
        errorElement = <p className='text-danger'>{googleError?.message}</p>
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-dark'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-dark'></div>
            </div>
            {errorElement}
            <div className='d-flex justify-content-center align-items-center social-box'>
                <button className='social-btn'>
                    <img className='mx-2' height={'40px'} src={facebook} alt="" />
                </button>
                <button className='social-btn' onClick={() => signInWithGoogle()}>
                    <img height={'45px'} src={google} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Social;