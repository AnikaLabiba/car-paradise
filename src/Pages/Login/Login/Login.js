import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import './Login.css'

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
    }
    return (
        <div>
            <h2 className='text-center mt-5 font-weight-bold'>Please Login</h2>
            <div className=' mx-auto mt-3 form-container'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='bg-dark border-0' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='bg-dark border-0 text-muted' type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className='text-center text-muted'>Forgot Password?<button className='text-decoration-none btn btn-link'>Reset Password</button></p>
                    <button className='w-100 submit-btn py-2' type="submit">
                        Login
                    </button>
                    <p className='text-center mt-3'>Don't have an account? <br /><Link to='/signup'>Create Account</Link ></p>
                    <Social></Social>
                </Form>
            </div>
        </div>
    );
};

export default Login;