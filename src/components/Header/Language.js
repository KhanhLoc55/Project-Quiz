import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation, Trans } from 'react-i18next';

function Language(props) {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (Language) => {
        i18n.changeLanguage(Language)
    }
    return (
        <>
            <NavDropdown title={i18n.language === 'vi' ? 'Việt Nam' : 'English'} id="basic-nav-dropdown2">
                <NavDropdown.Item onClick={() => handleChangeLanguage('en')}>
                    English
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item onClick={() => handleChangeLanguage('vi')}>
                    Việt Nam
                </NavDropdown.Item>
            </NavDropdown>{' '}
        </>
    );
}

export default Language;
