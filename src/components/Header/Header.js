import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const navigate = useNavigate();

    const handleOnClickLogin = () => {
        navigate('/login');
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/" className="navbar-brand">
                    {' '}
                    Home Basic
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">
                            {' '}
                            Home
                        </NavLink>
                        <NavLink to="/admin" className="nav-link">
                            {' '}
                            Admin
                        </NavLink>
                        <NavLink to="/user" className="nav-link">
                            {' '}
                            User
                        </NavLink>
                    </Nav>

                    <Nav>
                        <button className="btn-login" onClick={() => handleOnClickLogin()}>
                            Log in
                        </button>
                        <button className="btn-Signin" onClick={() => navigate('/Register')}>
                            Sign in
                        </button>
                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item>Log in</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item>Log out</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item>Project</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
