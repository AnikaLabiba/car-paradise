import React from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useSingleCar from '../../../Hooks/useSingleCar';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const ConfirmOrder = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams()
    const [car, setCar] = useSingleCar(id)

    const handleConfirmOrder = event => {
        event.preventDefault()
        const order = {
            carId: id,
            email: user.email,
            car: car.name,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/order', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('Order is Confirmed.')
                event.target.reset()

            })
    }
    return (
        <div className='container'>
            <h2>You are ordering {car.name}</h2>
            <div className='car-details d-flex align-items-center flex-lg-row flex-column flex-sm-column'>
                <div className='p-5'>
                    <img className='img' height={'290px'} src={car.img} alt={car.name} />
                </div>
                <div className='p-3 w-100 form-container'>
                    <Form onSubmit={handleConfirmOrder}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control className='input text-dark border-0' type="text" name='name' value={user?.displayName} placeholder="Enter Name" required disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='input text-dark border-0' type="email" name='email' value={user?.email} placeholder="Enter email" required disabled />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='input text-dark border-0' type="text" name='carName' value={car.name} required disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='input text-dark border-0' type="text" name='address' autoComplete='off' placeholder='Address' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Control className='input text-dark border-0' name='phone' type="number" autoComplete='off' placeholder="Enter Phone Number" required />
                        </Form.Group>
                        <button className='w-100 submit-btn py-2' type="submit">
                            Confirm Order
                        </button>
                    </Form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default ConfirmOrder;