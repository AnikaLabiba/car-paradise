import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../../../Images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { RiUserHeartLine } from 'react-icons/ri';
import { AiOutlineLogout } from 'react-icons/ai';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Fade from 'react-reveal/Fade';

const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
        navigate('/')
    }
    return (
        <>
            <Fade top>
                <Navbar
                    collapseOnSelect expand="lg" className='header' variant="light">
                    <Container>
                        <Navbar.Brand as={Link} to="/" >
                            <div className='d-flex align-items-center'>
                                <img height={'70px'} src={logo} alt="" />
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                {
                                    user && <>
                                        <Nav.Link as={Link} to="/cars">Manage Cars</Nav.Link>
                                        <Nav.Link as={Link} to="/addItem">Add Cars</Nav.Link>
                                        <Nav.Link as={Link} to="/myOrders">My items</Nav.Link>
                                    </>
                                }
                                <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                                <Nav.Link as={Link} to="/carAdvice">Car Advice</Nav.Link>
                                <Nav.Link as={Link} to="/reviews">Customer Reviews</Nav.Link>
                            </Nav>
                            <Nav>
                                {
                                    user ? <Nav.Link onClick={handleSignOut} className='fs-5'><span>Logout</span> <AiOutlineLogout /></Nav.Link>

                                        : <Nav.Link as={Link} to="/login" className='d-flex align-items-center fs-5'><RiUserHeartLine /> <span className='ms-1'>Login</span></Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fade>

        </>
    );
};

export default Header;