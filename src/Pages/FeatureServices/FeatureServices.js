import React from 'react';
import { Fade } from 'react-reveal';
import feature from '../../Images/feature.png'
import './FeatureServices.css'

const FeatureServices = () => {
    return (
        <div className='container feature-service my-5'>
            <h2>Our Feature Services</h2>
            <div className='d-flex services-container align-items-center justify-content-around flex-column flex-lg-row'>

                <Fade left>
                    <img src={feature} alt="" />
                </Fade>
                <div className='services'>
                    <div>
                        <h4>Engine Upgrades</h4>
                        <p>We have the right caring, experience and dedicated professional for yo</p>
                    </div>
                    <div>
                        <h4>Engine Upgrades</h4>
                        <p>We have the right caring, experience and dedicated professional for yo</p>
                    </div>
                    <div>
                        <h4>Engine Upgrades</h4>
                        <p>We have the right caring, experience and dedicated professional for yo</p>
                    </div>
                    <div>
                        <h4>Engine Upgrades</h4>
                        <p>We have the right caring, experience and dedicated professional for yo</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeatureServices;