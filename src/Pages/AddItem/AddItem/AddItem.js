import React from 'react';
import { Row } from 'react-bootstrap';
import { IoMdGift } from 'react-icons/io';
import { BsCart4 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useCars from '../../../Hooks/useCars';

import Car from '../../Car/Car';
import ConfirmOrder from '../ConfirmOrder/ConfirmOrder';
import useCart from '../../../Hooks/useCart';

const AddItem = () => {
    const [cars, setCars] = useCars()


    const navigate = useNavigate()
    const handleNavigate = id => {
        navigate(`/order/${id}`)
    }

    // // handling add to cart
    // const handleAddToCart = (car) => {

    //     if (cart.indexOf(car) === -1) {
    //         const newCart = [...cart, car]
    //         setCart(newCart)
    //     }
    //     else {
    //         alert('This is already selected')
    //     }

    // }
    return (
        <div>
            <div className='container my-4'>
                <div className='d-flex justify-content-around align-items-center flex-column flex-lg-row my-3'>
                    <h2>Shop your Dream Car..</h2>
                    {/* <div onClick={handleNavigate} className='fs-3'>
                        <BsCart4 /><sup>{cart.length}</sup>
                    </div> */}
                </div>
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