import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.scss';
import Language from './Language';
import { useTranslation, Trans } from 'react-i18next';
import logo from '../../assets/KL-textLogo.png';
const Header = () => {
    const navigate = useNavigate();

    const handleOnClickLogin = () => {
        navigate('/login');
    };
    const { t } = useTranslation();

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/" className="navbar-brand">
                    {' '}
                    <img src={logo} />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">
                            {' '}
                            {t('header.NavLinkHome')}
                        </NavLink>
                        <NavLink to="/admin" className="nav-link">
                            {' '}
                            {t('header.NavLinkAdmin')}
                        </NavLink>
                        <NavLink to="/user" className="nav-link">
                            {' '}
                            {t('header.NavLinkUser')}
                        </NavLink>
                    </Nav>

                    <Nav>
                        <button className="btn-login" onClick={() => handleOnClickLogin()}>
                            {t('header.NavLinkLogIn')}
                        </button>
                        <button className="btn-Signin" onClick={() => navigate('/Register')}>
                            {t('header.NavLinkSignIn')}
                        </button>
                        <Language />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
