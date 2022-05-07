import axios from 'axios';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Social from '../Social/Social';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        loginUser,
        loading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetPassError] = useSendPasswordResetEmail(
        auth
    );

    const [user] = useAuthState(auth)
    const location = useLocation()
    const navigate = useNavigate()

    const emailRef = useRef('')
    const passRef = useRef('')

    let error;
    if (loginError || resetPassError) {
        error = <p className='text-danger'>{loginError?.message} {resetPassError?.message}</p>
    }
    if (loading || sending) {
        return <Loading></Loading>
    }

    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
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

    //reset password
    const handleResetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast.info('Sent email', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            toast.error('Please enter your email address', {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }
    return (
        <div className='fixed-height'>
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
                    <p className='text-center text-light'>Forgot Password?<button onClick={handleResetPassword} className='text-decoration-none btn btn-link'>Reset Password</button></p>
                    <button className='w-100 submit-btn py-2' type="submit">
                        Login
                    </button>
                    <p className='text-center mt-3'>Don't have an account? <br /><Link to='/signup'>Create Account</Link ></p>
                    <Social></Social>
                </Form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;