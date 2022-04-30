import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCars from '../../../Hooks/useCars';
import Car from '../../Car/Car';
import { BsArrowRight } from 'react-icons/bs';
import Banner from '../Banner/Banner';

const Home = () => {
    //from custom hook
    const [cars, setCars] = useCars()
    const selectedCars = cars.slice(0, 3)
    return (
        <div>
            <Banner></Banner>

            {/* maximum 6 in home page */}
            <div className="container">
                <h2 className='mt-5 text-center'>Our Items {selectedCars.length}</h2>
                <div className='container my-5'>
                    <Row xs={1} md={2} lg={2} className="g-4">
                        {
                            selectedCars.map(car => <Car
                                key={car._id}
                                car={car}
                            ></Car>)
                        }
                    </Row>
                </div>
                <Link className='link-btn' to='/cars'><span>Manage Cars</span> <BsArrowRight /></Link>
            </div>
        </div>
    );
};

export default Home;