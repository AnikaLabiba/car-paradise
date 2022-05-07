import React from 'react';
import facebook from '../../../Images/socials/fb.png'
import google from '../../../Images/socials/google.png'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const Social = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, googleUser, googleError, googleLoading] = useSignInWithGoogle(auth)
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    if (googleUser || facebookUser) {
        navigate('/')
    }
    let errorElement;
    if (googleError || facebookError) {
        errorElement = <p className='text-danger'>{googleError?.message} {facebookError?.message}</p>
    }

    if (googleLoading || facebookLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mb-b'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-dark'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-dark'></div>
            </div>
            {errorElement}
            <div className='d-flex justify-content-center align-items-center social-box'>
                <button onClick={() => signInWithFacebook()} className='social-btn'>
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