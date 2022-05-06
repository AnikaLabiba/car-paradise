import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CarDetails.css'
import useSingleCar from '../../Hooks/useSingleCar';

const CarDetails = () => {
    const { id } = useParams()
    const [car, setCar] = useSingleCar(id)


    const handleIncreaseQuantity = event => {
        event.preventDefault()

        const oldQuantity = parseInt(car.quantity)

        const newQuantity = parseInt(event.target.quantity.value)
        const updatedQuantity = oldQuantity + newQuantity
        const updatedCar = { ...car, quantity: updatedQuantity }
        console.log(updatedCar)
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log('success', data)
                    setCar(updatedCar)
                    toast.info('Quantity is added.', {
                        position: toast.POSITION.TOP_CENTER
                    })
                    event.target.reset()
                }
            })
    }

    const handleDecreaseQuantity = () => {

        const oldQuantity = parseInt(car.quantity)

        const updatedQuantity = oldQuantity - 1
        const updatedCar = { ...car, quantity: updatedQuantity }

        const url = `http://localhost:5000/inventory/${id}`
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0)
                    setCar(updatedCar)
                console.log('success', data)
                toast.info('One item will be deleivered', {
                    position: toast.POSITION.TOP_CENTER
                })
            })
    }

    return (
        <div className='container'>

            <div className='d-flex justify-content-around align-items-center flex-column flex-lg-row my-2 py-3'>
                <h2>{car.name} details:</h2>

                <form className='d-flex form-container' onSubmit={handleIncreaseQuantity}>
                    <input className='w-75' type="number" name="quantity" id="" placeholder='Enter Quantity' required />
                    <input className='p-1 w-25 increase-btn update-btn' type="submit" value="Add" />
                </form>

            </div>
            <div className='car-details d-flex align-items-center flex-lg-row flex-column flex-sm-column'>
                <div className='p-5'>
                    <img className='img' height={'290px'} src={car.img} alt={car.name} />
                </div>
                <div className='p-3'>
                    <div className='fs-5'>
                        <h3>{car.name}</h3>
                        <p>{car.description}</p>
                        <p>${car.price} million</p>
                        <p><AiOutlineMedicineBox /> {car.quantity > 0 ? `${car.quantity} in stock` : <span className='text-danger'>sold out</span>}</p>
                        <p>Supplied By: {car.supplierName}</p>
                    </div>
                    <button onClick={handleDecreaseQuantity} className='card-btn delivered-btn'>Delivered</button>
                </div>

            </div>
            <Link className='link-btn mt-2' to='/cars'><span>Manage Inventories</span> <BsArrowRight /></Link>
            <ToastContainer />
        </div>
    );
};

export default CarDetails;