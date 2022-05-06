import React from 'react';
import './Car.css'
import { AiOutlineMedicineBox } from 'react-icons/ai';

const Car = (props) => {
    const { car } = props
    const { name, img, description, price, supplierName, quantity } = car



    return (
        <div>
            <div className="card car">
                <div className='car-info'>
                    <h4 className='text-center'>{name}</h4>
                    <p className='text-center details'> {description.slice(0, 100)}</p>
                </div>
                <div className='mx-auto mt-3 img-box'>
                    <img height={'170px'} src={img} alt={name} />
                    <div className='d-flex align-items-center justify-content-around p-2 flex-item'>
                        <div className='mt-1'>
                            <p>${price} million</p>
                            <p><AiOutlineMedicineBox /> {car.quantity > 0 ? `${car.quantity} in stock` : <span className='text-danger'>sold out</span>}</p>
                            <p>Supplied By: {supplierName}</p>
                        </div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;