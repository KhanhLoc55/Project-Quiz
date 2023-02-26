import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalQuiz = (props) => {
    const { show, setShow } = props;
    
    const handleClose = () => setShow(false);
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Your Result...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Total Question: 10</div>
                    <div>Total Correct Answer: 9</div>
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

export default ModalQuiz;
