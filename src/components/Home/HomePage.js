import VideoHomePage from '../../assets/video-HomePage.mp4';
import './homepage.scss';
import { Navigate, useNavigate } from 'react-router-dom';

const HomePage = (props) => {
    const Navigate = useNavigate();
    return (
        <div className="homepage-container">
            <div className="homepage-video">
                <video autoPlay muted loop>
                    <source src={VideoHomePage} type="video/mp4" />
                </video>
            </div>
            <div className="homepage-content">
                <h1 className="heading-text">There's a better way to ask</h1>
                <p className="tilte-text">
                    You don't want to make a boring form. And your audience won't answer one. Create a typeform
                    instead—and make everyone happy.
                </p>
                <button className="btn-Signin" onClick={() => Navigate('./User')}> Get started - Quiz</button>
            </div>
        </div>
    );
};

export default HomePage;
