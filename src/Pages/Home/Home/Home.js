import React from 'react';
import { Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useCars from '../../../Hooks/useCars';
import Car from '../../Car/Car';
import { BsArrowRight } from 'react-icons/bs';
import { GoRequestChanges } from 'react-icons/go';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import FeatureServices from '../../FeatureServices/FeatureServices';

const Home = () => {
    //from custom hook
    const [cars] = useCars()
    const selectedCars = cars.slice(0, 6)
    const navigate = useNavigate()

    //nagivate to car details
    const handleNavigate = id => {
        navigate(`inventory/${id}`)
    }
    return (
        <div className='fixed-height'>
            <Banner></Banner>
            {/* maximum 6 in home page */}
            <div className="container">
                <h2 className='mt-5 text-center'>Our Items {selectedCars.length}</h2>
                <div className='container my-5'>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            selectedCars.map(car => <Car
                                key={car._id}
                                car={car}>
                                <button onClick={() => handleNavigate(car._id)} className='update-btn'><span>Update</span> <GoRequestChanges /></button>
                            </Car>)
                        }
                    </Row>
                </div>
                {/* sending btn as props */}
                <Link className='link-btn mb-5' to='/cars'><span>Manage Inventories</span> <BsArrowRight /></Link>
            </div>
            <Reviews></Reviews>
            <FeatureServices></FeatureServices>
        </div>
    );
};

export default Home;