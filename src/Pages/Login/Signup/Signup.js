import React from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        console.log(user)
    }

    const handleSignup = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPass = event.target.confirmPass.value;


        if (password === confirmPass) {
            if (password.length > 6) {
                createUserWithEmailAndPassword(email, password)
            }
            else {
                alert('Password must be 6 characters')
            }
        }
        else {
            alert('Two password did not matched')
            return;
        }

    }
    return (
        <div>
            <h2 className='text-center mt-5 font-weight-bold'>Create Account</h2>
            <div className='mx-auto mt-3 form-container'>
                <Form onSubmit={handleSignup}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control className='bg-dark border-0' type="text" name='name' placeholder="Enter Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='bg-dark border-0' type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='bg-dark border-0 text-muted' type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Control className='bg-dark border-0 text-muted' name='confirmPass' type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <p className='text-center text-muted'>Forgot Password?<button className='text-decoration-none btn btn-link'>Reset Password</button></p>
                    <button className='w-100 submit-btn py-2' type="submit">
                        Signup
                    </button>
                    <p className='text-center mt-3'>Already have an account? <br /><Link to='/login'>Login</Link ></p>
                    <Social></Social>
                </Form>
            </div>
        </div>
    );
};

export default Signup;