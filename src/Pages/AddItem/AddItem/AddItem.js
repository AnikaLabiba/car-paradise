import React from 'react';
import { Row } from 'react-bootstrap';
import { IoMdGift } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import useCars from '../../../Hooks/useCars';
import Car from '../../Car/Car';
import { Fade } from 'react-reveal';

const AddItem = () => {
    const [cars] = useCars()

    const navigate = useNavigate()
    const handleNavigate = id => {
        navigate(`/order/${id}`)
    }

    return (
        <div>
            <div className='container my-4'>
                <Fade top>
                    <h2 className='text-center'>Shop your Dream Car..</h2>
                </Fade>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        cars.map(car => <Car
                            key={car._id}
                            car={car}>

                            <button onClick={() => handleNavigate(car._id)} className='update-btn fs-6'><span>Order</span> <IoMdGift /></button>
                        </Car>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default AddItem;