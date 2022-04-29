import React from 'react';
import facebook from '../../../Images/socials/fb.png'
import google from '../../../Images/socials/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Social = () => {
    const [signInWithGoogle, user, googleError] = useSignInWithGoogle(auth)

    let errorElement;
    if (googleError) {
        errorElement = <p className='text-danger'>{googleError?.message}</p>
    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
        console.log('clicked')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <div className='d-flex justify-content-center align-items-center'>
                <button>
                    <img className='me-4' height={'55px'} src={facebook} alt="" />
                </button>
                <button onClick={handleGoogleLogin}>
                    <img height={'60px'} src={google} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Social;