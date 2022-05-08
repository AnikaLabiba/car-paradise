import React from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { RiInstagramLine } from 'react-icons/ri';
import { ImTwitter } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div id='footer' className='text-center text-white py-3'>
            <div className='w-75 mx-auto my-3'>
                <h5>About us</h5>
                <p>Find your dream car in a best deal. We believe in your satisfaction. Allow us to help you in your way to have the dream car. We have partnership with more than 30 companies and suppliers. Support us for making your dreams come true.  </p>
            </div>
            <div className='w-25 mx-auto d-flex justify-content-evenly fs-4 mb-4'>
                <BsFacebook />
                <FcGoogle />
                <RiInstagramLine />
                <ImTwitter />
            </div>
            <div className='w-25 mx-auto d-flex justify-content-evenly mb-2'>
                <Link className='text-decoration-none text-light' to="/cars"> Cars</Link>
                <Link className='text-decoration-none text-light' to="/carAdvice">Car Advice</Link>
                <Link className='text-decoration-none text-light' to="/manageCar">Manage Car</Link>

            </div>
            <p><small>copyright &copy; {year} Car Paradise</small></p>
        </div>
    );
};

export default Footer;