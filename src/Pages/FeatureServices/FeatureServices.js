import React from 'react';
import { Fade } from 'react-reveal';
import feature from '../../Images/feature.png'
import './FeatureServices.css'
import { FiSettings } from 'react-icons/fi';
import { GiCartwheel } from 'react-icons/gi';
import { GiVideoCamera } from 'react-icons/gi';
import { AiFillCar } from 'react-icons/ai';

const FeatureServices = () => {
    return (
        <div className='container feature-service my-5 py-5'>
            <h2 className='text-center my-5 title'>Our Feature Services</h2>
            <div className='d-flex services-container align-items-center justify-content-around flex-column flex-lg-row'>

                <Fade left>
                    <img src={feature} alt="" />
                </Fade>
                <div className='services'>
                    <div className='d-flex  align-items-center m-3'>
                        <p className='fs-1 title'> <GiVideoCamera /></p>
                        <div className='ms-3'>
                            <h4 className='title'>Engine Upgrades</h4>
                            <p>We have the right caring, experience and dedicated professional for yo</p>
                        </div>
                    </div>
                    <div className='d-flex  align-items-center m-3'>
                        <p className='fs-2 title'> <AiFillCar /></p>
                        <div className='ms-3'>
                            <h4 className='title'>Car Oil Change</h4>
                            <p>We have the right caring, experience and dedicated professional for yo</p>
                        </div>
                    </div>
                    <div className='d-flex  align-items-center m-3'>
                        <p className='fs-2 title'> <FiSettings /></p>
                        <div className='ms-3'>
                            <h4 className='title'>Car Oil Change</h4>
                            <p>We have the right caring, experience and dedicated professional for yo</p>
                        </div>
                    </div>
                    <div className='d-flex  align-items-center m-3'>
                        <p className='fs-2 title'> <GiCartwheel /></p>
                        <div className='ms-3'>
                            <h4 className='title'>Power Steering</h4>
                            <p>We have the right caring, experience and dedicated professional for yo</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeatureServices;