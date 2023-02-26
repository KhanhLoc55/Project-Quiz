import ModalCreateUser from './ModalCreateUser';
import { useState } from 'react';
import TabelUser from './TabelUser';

import './ManageUser.scss';
import ModalDeleteUser from './ModalDeleteUser';
import TabelUserPaginer from './TabelUserPaginer';

const ManageUser = () => {
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const handleClickDeleteModal = () => {
        setShowModalDelete(true);
    };

    return (
        <div className="ManageUser-container ">
            <div className="ManageUser-title">Manage User</div>

            <div className="ManageUser-content">
                <div className="d-flex justify-content-center ">
                    <button className="btn btn-primary mb-4 " onClick={() => setShowModalCreate(true)}>
                        {' '}
                        Manage User
                    </button>
                </div>
                <div>
                    {/* <TabelUser handleClickDeleteModal={handleClickDeleteModal} /> */}
                    <TabelUserPaginer handleClickDeleteModal={handleClickDeleteModal} />
                </div>
                <ModalCreateUser show={showModalCreate} setShow={setShowModalCreate} />
                <ModalDeleteUser show={showModalDelete} setShow={setShowModalDelete} />
            </div>
        </div>
    );
};

export default ManageUser;
