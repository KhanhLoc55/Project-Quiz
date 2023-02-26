import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import './Login.scss';
import { useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // navigate('/');
        toast.error('Thui mà :< nhiều chức năng quá !!');
    };

    const handleGoHome = () => {
        navigate('/');
    };

    const [isShowPassWord, setIsShowPassWord] = useState(false);

    return (
        <div className="login-container">
            <div className="login-header">
                <p>Don't have an account yet?</p>
                <button onClick={() => navigate('/Register')}>Sign In</button>

                <span>
                    <a href="https://www.behance.net/anhlamot55">help you please?</a>
                </span>
            </div>
            <div className="Title col-4 mx-auto">Abest-KhanhLoc</div>
            <div className="wecome col-4 mx-auto">Hello, Good Morning ?</div>
            <Form className="col-4 mx-auto mt-5">
                <Form.Group className="mb-3  " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">We'll never share your email.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 pass-group" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={isShowPassWord ? 'text' : 'password'} placeholder="Password" />
                    {isShowPassWord ? (
                        <span className="icons-eye" onClick={() => setIsShowPassWord(false)}>
                            <VscEye />
                        </span>
                    ) : (
                        <span className="icons-eye" onClick={() => setIsShowPassWord(true)}>
                            <VscEyeClosed />
                        </span>
                    )}
                    <Form.Text className="text-muted">Forgot password?</Form.Text>
                </Form.Group>
                <Button variant="primary" size="lg" className="col-12" onClick={() => handleLogin()}>
                    <ImSpinner9 className='Spinner-Icon'/>
                    <span> Hỏi T Đi Nè</span>
                </Button>
            </Form>
            <div className="GoTo-Home col-4 mx-auto" onClick={() => handleGoHome()}>
                <span> &#60;&#60; go to home page</span>
            </div>
        </div>
    );
};

export default Login;
