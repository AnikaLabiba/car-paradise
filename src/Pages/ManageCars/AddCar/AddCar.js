import React from 'react';
import { Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const AddCar = () => {


    const handleAddNewItem = event => {
        event.preventDefault()
        const name = event.target.name.value
        const img = event.target.img.value
        const price = event.target.price.value
        const quantity = event.target.quantity.value
        const supplierName = event.target.supplierName.value
        const description = event.target.description.value
        const car = { name, img, price, quantity, supplierName, description }

        fetch('http://localhost:5000/inventory', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('New Car added', {
                    position: toast.POSITION.TOP_CENTER
                })
                event.target.reset()

            })
    }
    return (
        <div className='fixed-height'>
            <h1 className='text-center my-3'>Add a New Item</h1>
            <div className='w-50 mx-auto form-container'>
                <Form onSubmit={handleAddNewItem}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control className='input border-0' name='name' type="text" placeholder="Item name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicImg">
                        <Form.Control className='input border-0' type="text" name='img' placeholder="Photo Url" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Control className='input border-0' name='price' type="text" placeholder="Price" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                        <Form.Control className='input border-0' name='quantity' type="number" placeholder="Quantity" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSupplier">
                        <Form.Control className='input border-0' name='supplierName' type="text" placeholder="Supplier" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Control className='input border-0' name='description' type="text" placeholder="Description" required />
                    </Form.Group>

                    <button className='w-100 submit-btn py-2' type="submit">
                        Add
                    </button>

                </Form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddCar;