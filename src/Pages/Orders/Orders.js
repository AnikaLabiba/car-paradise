import React from 'react';
import './Order.css'
import { FaTrashAlt } from 'react-icons/fa';

<button on className='pb-3'><FaTrashAlt /></button>
const Orders = ({ order, handleDeleteOrder }) => {
    const { _id, car, img, price } = order

    return (
        <div className='order-list my-4 d-flex align-items-center justify-content-around'>
            <img src={img} alt="" />
            <div className='w-75 d-flex align-items-center justify-content-around'>
                <h5 className='w-50'>{car}</h5>
                <h5>${price}</h5>

                <button onClick={() => handleDeleteOrder(_id)} className='pb-3'><FaTrashAlt /></button>
            </div>
        </div>

    );
};

export default Orders;