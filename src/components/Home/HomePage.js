import VideoHomePage from '../../assets/video-HomePage.mp4';
import './homepage.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const HomePage = (props) => {
    const Navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="homepage-container">
            <div className="homepage-video">
                <video autoPlay muted loop>
                    <source src={VideoHomePage} type="video/mp4" />
                </video>
            </div>
            <div className="homepage-content">
                <h1 className="heading-text">{t('homepage.headingText')}</h1>
                <p className="tilte-text">{t('homepage.TitleText')}</p>
                <button className="btn-Signin" onClick={() => Navigate('./User')}>
                    {' '}
                    {t('homepage.BtnSignin')}
                </button>
            </div>
        </div>
    );
};

export default HomePage;
