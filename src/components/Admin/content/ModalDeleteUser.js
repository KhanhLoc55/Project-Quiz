import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDeleteUser = (props) => {
    const { show, setShow } = props;

    const handleClose = () => setShow(false);
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete The User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Are you sure delete user</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDeleteUser;
