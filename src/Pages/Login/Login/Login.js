import axios from 'axios';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        loginUser,
        loading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);

    const [user] = useAuthState(auth)
    const location = useLocation()
    const navigate = useNavigate()

    const emailRef = useRef('')
    const passRef = useRef('')

    let error;
    if (loginError) {
        error = <p className='text-danger'>{loginError?.message}</p>
    }

    let from = location.state?.from?.pathname || "/";

    if (user) {
        // navigate(from, { replace: true });
    }

    // handling login
    const handleLogin = async event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passRef.current.value
        await signInWithEmailAndPassword(email, password)

        const { data } = await axios.post('http://localhost:5000/login', { email })
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });

    }
    return (
        <div>
            <h2 className='text-center mt-5 font-weight-bold'>Please Login</h2>
            <div className=' mx-auto mt-3 form-container'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} className='input border-0' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passRef} className='input border-0 text-muted' type="password" placeholder="Password" required />
                    </Form.Group>
                    {error}
                    <p className='text-center text-light'>Forgot Password?<button className='text-decoration-none btn btn-link'>Reset Password</button></p>
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