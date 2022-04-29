import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner/most.png'
import banner2 from '../../../Images/banner/banner2.png'
import banner3 from '../../../Images/banner/banner3.png'
import './Banner.css'

const Banner = () => {
    return (
        <div id='banner'>
            <Carousel variant="light">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Rolls Royce</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Ferrai SF90 Stradle</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Audi-R8-First-Generation</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;