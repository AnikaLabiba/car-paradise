import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Social from '../Social/Social';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
    }
    return (
        <div>
            <h2 className='text-center mt-5'>Please Login</h2>
            <div className='w-25 mx-auto mt-3'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <p className='text-center'>Forgot Password?<button className='text-decoration-none btn btn-link'>Reset Password</button></p>
                    <Button className='w-100' variant="primary" type="submit">
                        Login
                    </Button>
                    <Social></Social>
                </Form>
            </div>
        </div>
    );
};

export default Login;