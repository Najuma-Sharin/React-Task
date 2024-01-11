import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../components/logo.jpg';

const Header = () => {

    const buttonStyle = {
        color: 'black',
        backgroundColor: '#ffffff',
        border: 'none',
        marginRight: '10px',
    };

    return (
        <Navbar style={{ backgroundColor: '#808080' }} expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    style={{ borderRadius: '20px' }}
                    alt="Logo"
                />
                <div className="d-inline-flex flex-column align-items-center m-2">
                    <span className="font-weight-bold">
                        <span className="name" style={{ color: 'black', }}>FOODIE</span>
                        <span className="name" style={{ transition: 'color 0.3s', color: 'white' }}>SPOT</span>
                    </span>
                </div>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end p-1 m-1">
                <Nav className="ml-auto">
                    <Button href="#home" className="mr-2" style={buttonStyle}>Home</Button>
                    <Button href="#about" className="mr-2" style={buttonStyle}>About Us</Button>
                    <Button href="#Menu" className="mr-2" style={buttonStyle}>Menu</Button>
                    <Button href="#contact" className="mr-2" style={buttonStyle}>Contact Us</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
