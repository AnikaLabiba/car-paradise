import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import './CarDetails.css'

const CarDetails = () => {
    const [car, setCar] = useState({})
    const carQuantity = car.quantity
    const [quantity, setQuantity] = useState(carQuantity)

    //i have a usestate react hook where i have loaded my data from database now i want to put product quantity in another useState and display in UI but the useState initial value is not taking the quantity it's showing undefined what should i do now?

    // console.log(quantity)
    const { id } = useParams()

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [id])


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
                    alert('Quantity is added.')
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
                alert('One item will be deleivered')
            })
    }

    return (
        <div className='container'>
            <h2>car details {car.name}</h2>
            <div className='d-flex justify-content-end mb-2 form-container py-3'>
                <form className='d-flex' onSubmit={handleIncreaseQuantity}>
                    <input type="number" name="quantity" id="" placeholder='Quantity' required />
                    <input className='p-1' type="submit" value="Add" />
                </form>
            </div>
            <div className='car-details d-flex align-items-center flex-lg-row flex-column flex-sm-column'>
                <div className='p-5'>
                    <img className='img' height={'290px'} src={car.img} alt={car.name} />
                </div>
                <div>
                    <div>
                        <h3>{car.name}</h3>
                        <p>{car.description}</p>
                        <p>${car.price} million</p>
                        <p><AiOutlineMedicineBox /> {car.quantity} in stock</p>
                        <p>Supplied By: {car.supplierName}</p>
                    </div>
                    <button onClick={handleDecreaseQuantity} className='card-btn'>Delivered</button>
                </div>

            </div>
            <Link className='link-btn mt-2' to='/cars'><span>Manage Cars</span> <BsArrowRight /></Link>
        </div>
    );
};

export default CarDetails;