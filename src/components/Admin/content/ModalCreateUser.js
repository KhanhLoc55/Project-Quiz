import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FcPlus } from 'react-icons/fc';

const ModalCreateUser = (props) => {
    const { show, setShow } = props;

    const handleClose = () => setShow(false);
    const [previewImage, setPrivewImage] = useState('');

    const handleUpLoadImage = (event) => {
        if (event.target && event.target && event.target.files && event.target.files[0]) {
            setPrivewImage(URL.createObjectURL(event.target.files[0]));
        } else {
            setPrivewImage('');
        }
    };

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Modal User
            </Button> */}

            <Modal show={show} onHide={handleClose} size="lg" backdrop="static" className="modal-new-user">
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Role</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option value="USER">USER</option>
                                    <option value="ADMIN">ADMIN</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-12">
                            <Form.Group className="position-relative mb-3">
                                <Form.Label className="form-FileImage" htmlFor="labelUpLoad">
                                    <FcPlus className="icon-fcplus" />
                                    File Image
                                </Form.Label>
                                <Form.Control
                                    type="file"
                                    required
                                    name="file"
                                    id="labelUpLoad"
                                    hidden
                                    onChange={(event) => handleUpLoadImage(event)}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-12 img-preview">
                            {previewImage ? <img src={previewImage} /> : <span>img-preview</span>}
                        </Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCreateUser;
