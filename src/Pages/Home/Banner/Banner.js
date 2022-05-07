import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner/most.png'
import banner2 from '../../../Images/banner/banner2.png'
import banner3 from '../../../Images/banner/banner3.png'
import { Fade } from 'react-reveal';


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
                        <div>
                            <Fade left>
                                <h3>Welcome to Car Paradise.</h3>
                            </Fade>
                            <Fade right>
                                <h5>Find your dream car in a best deal.</h5>
                            </Fade>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <Fade left>
                                <h3>Welcome to Car Paradise.</h3>
                            </Fade>
                            <Fade right>
                                <h5>Find your dream car in a best deal.</h5>
                            </Fade>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <Fade left>
                                <h3>Welcome to Car Paradise.</h3>
                            </Fade>
                            <Fade right>
                                <h5>Find your dream car in a best deal.</h5>
                            </Fade>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;