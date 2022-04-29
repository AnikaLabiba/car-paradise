import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../../Images/bg-none.png'
import { Link } from 'react-router-dom';
import { RiUserHeartLine } from 'react-icons/ri';
import { AiOutlineLogout } from 'react-icons/ai';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <Navbar
                collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" >
                        <div className='d-flex align-items-center'>
                            <img height={'70px'} src={logo} alt="" />
                            <h4>Car Paradise</h4>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Cars Stock</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {
                                user ? <Nav.Link onClick={() => signOut(auth)} className='fs-5'><span>Logout</span> <AiOutlineLogout /></Nav.Link>

                                    : <Nav.Link as={Link} to="/login" className='d-flex align-items-center fs-5'><RiUserHeartLine /> <span className='ms-1'>Login</span></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;