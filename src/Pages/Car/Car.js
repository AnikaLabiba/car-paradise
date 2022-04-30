import React from 'react';
import './Car.css'
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Car = ({ car }) => {
    const { _id, name, img, description, price, supplierName, quantity } = car
    const navigate = useNavigate()

    const handleNavigate = id => {
        navigate(`inventory/${id}`)
    }
    return (
        <div>
            <div className="card car">
                <h4 className='text-center'>{name}</h4>
                <p className='text-center details'> {description.slice(0, 100)}</p>
                <div className='mx-auto mt-3 img-box'>
                    <img height={'290px'} src={img} alt={name} />
                    <div className='d-flex align-items-center justify-content-around p-2 flex-item'>
                        <div className='mt-1'>
                            <p>${price} million</p>
                            <p><AiOutlineMedicineBox /> {quantity} in stock</p>
                            <p>Supplied By: {supplierName}</p>
                        </div>
                        <button onClick={() => handleNavigate(_id)} className='update-btn'><span>Update</span> <FaRegEdit /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;