import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { useState } from 'react';

import './Register.scss';

const Register = () => {
    const navigate = useNavigate();
    const [isShowPassWord, setIsShowPassWord] = useState(false);

    const handleLogin = () => {
        navigate('/Login');
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <p>Don't have an account yet?</p>
                <button onClick={() => navigate('/Login')}>Log In</button>

                <span>
                    <a href="https://www.behance.net/anhlamot55" target="_blank">
                        help you please?
                    </a>
                </span>
            </div>
            <div className="Title col-4 mx-auto">Abest - Khánh Lộc</div>
            <div className="wecome col-4 mx-auto">Hello, Good Afternoon ?</div>
            <Form className="col-4 mx-auto mt-5">
                <Form.Group className="mb-3  " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">We'll never share your email.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 pass-group" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type={isShowPassWord ? 'text' : 'password'}
                        placeholder="Password"
                    />
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

                <Form.Group className="mb-3  " controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">^.^!</Form.Text>
                </Form.Group>
                <Button
                    variant="primary"
                    size="lg"
                    className="col-12"
                    onClick={() => handleLogin()}
                >
                    &#60;&#60; Hỏi Log-In Đi Nè
                </Button>
            </Form>
        </div>
    );
};

export default Register;
