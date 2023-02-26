import ReactPaginate from 'react-paginate';

const TabelUserPaginer = (props) => {
    const handlePageClick = (event) => {
        console.log(`User requested page number ${event.selected}`);
    };

    return (
        <>
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
                            <button
                                type="button"
                                className="btn btn-success me-2"
                                onClick={() => props.handleClickDeleteModal()}
                            >
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
                            <button
                                type="button"
                                className="btn btn-success me-2"
                                onClick={() => props.handleClickDeleteModal()}
                            >
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
                            <button
                                type="button"
                                className="btn btn-success me-2"
                                onClick={() => props.handleClickDeleteModal()}
                            >
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
                            <button
                                type="button"
                                className="btn btn-success me-2"
                                onClick={() => props.handleClickDeleteModal()}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="user-ReactPaginate d-flex justify-content-center mt-5">
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={10}
                    marginPagesDisplayed={2}
                    pageCount={100}
                    previousLabel="< Previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    );
};

export default TabelUserPaginer;
