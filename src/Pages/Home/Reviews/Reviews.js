import React from 'react';
import './Reviews.css'

const Reviews = () => {

    return (
        <div className='container mb-5'>
            <h2 className='text-center'>What did our Client say</h2>
            <div className='d-flex flex-lg-row flex-column'>
                <div className='car-details review mx-4 my-2 p-4'>
                    <h5>Find it quit professional</h5>
                    <p>They are just fabulas. Got my favourite car in a budget. They guys really care for their custromers</p>
                    <div className='d-flex flex-item align-items-center'>
                        <img src={'https://templates.scriptsbundle.com/carspot/demos/images/users/4.jpg'} alt="" />
                        <h4 className='ms-2'>Emily</h4>
                    </div>
                </div>
                <div className='car-details mx-4 my-2 p-4'>
                    <h5>Find it quit professional</h5>
                    <p>They are just fabulas. Got my favourite car in a budget. They guys really care for their custromers</p>
                    <div className='d-flex flex-item align-items-center'>
                        <img src={'https://templates.scriptsbundle.com/carspot/demos/images/users/3.jpg'} alt="" />
                        <h4 className='ms-2'>Harry</h4>
                    </div>
                </div>

                <div className='car-details mx-4 my-2 p-4'>
                    <h5>Find it quit professional</h5>
                    <p>They are just fabulas. Got my favourite car in a budget. They guys really care for their custromers</p>
                    <div className='d-flex flex-item align-items-center'>
                        <img src={'https://templates.scriptsbundle.com/carspot/demos/images/users/1.jpg'} alt="" />
                        <h4 className='ms-2'>Jessica</h4>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Reviews;