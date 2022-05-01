import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import './CarDetails.css'

const CarDetails = () => {
    const [car, setCar] = useState({})
    let quantity = car.quantity

    // const [carQuantity, setCarQuantity] = useState(quantity)
    const { id } = useParams()

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [id])


    const handleQuantity = () => {

        quantity = quantity - 1
        return quantity
    }

    return (
        <div className='container'>
            <h2>car details {car.name}</h2>
            <div className='car-details d-flex align-items-center flex-lg-row flex-column flex-sm-column'>
                <div className='p-5'>
                    <img height={'290px'} src={car.img} alt={car.name} />
                </div>
                <div>
                    <div>
                        <h3>{car.name}</h3>
                        <p>{car.description}</p>
                        <p>${car.price} million</p>
                        <p><AiOutlineMedicineBox /> {quantity} in stock</p>
                        <p>Supplied By: {car.supplierName}</p>
                    </div>
                    <button onClick={handleQuantity} className='card-btn'>Delivered</button>
                </div>

            </div>
            <Link className='link-btn mt-2' to='/cars'><span>Manage Cars</span> <BsArrowRight /></Link>
        </div>
    );
};

export default CarDetails;