import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

const ManageQuiz = () => {
    return (
        <div className="ManageQuiz-container p-5">
            <div className="Tile-Heading display-6 text-center">Manage Quizzes</div>

            <div className="mt-4">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mt-3">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <div className="mt-5">
                        <table className="table table-bordered table-hover ">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">UserName</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Row</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td className="d-flex justify-content-center">
                                        {' '}
                                        <button type="button" className="btn btn-warning me-2">
                                            New
                                        </button>
                                        <button type="button" className="btn btn-success me-2">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td className="d-flex justify-content-center">
                                        {' '}
                                        <button type="button" className="btn btn-warning me-2">
                                            New
                                        </button>
                                        <button type="button" className="btn btn-success me-2">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td className="d-flex justify-content-center">
                                        {' '}
                                        <button type="button" className="btn btn-warning me-2">
                                            New
                                        </button>
                                        <button type="button" className="btn btn-success me-2">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td className="d-flex justify-content-center">
                                        {' '}
                                        <button type="button" className="btn btn-warning me-2">
                                            New
                                        </button>
                                        <button type="button" className="btn btn-success me-2">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Accordion>
            </div>
        </div>
    );
};

export default ManageQuiz;
