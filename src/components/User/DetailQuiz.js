import './DetailQuiz.scss';
import quizQuesion from '../../assets/quizQuesion.png';
import { useState } from 'react';
import ModalQuiz from './ModalQuiz';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import RightContent from './RightContent/RightContent';
import { Breadcrumb } from 'react-bootstrap';

const DetailQuiz = () => {
    const Navigate = useNavigate();
    const handleNext = () => {
        toast.error('thôi đừng mà!!');
    };
    const [isShowModalReault, setIsShowModalReault] = useState(false);
    return (
        <>
            <Breadcrumb className="detail-quiz-new-container">
                <Breadcrumb.Item href="#" onClick={() => Navigate('/')}>Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item onClick={() => Navigate('/User')}>
                    Quản lý
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Người dùng</Breadcrumb.Item>
            </Breadcrumb>

            <div className="detail-quiz-container">
                <div className="left-content">
                    <div className="title">Trắc nghiệm Con gái</div>
                    <div className="question-body">
                        <img src={quizQuesion} />
                    </div>
                    <div className="question-content">
                        <div className="question">
                            Câu 1. Câu nói nào của bà Hằng thể hiện thái độ không coi trọng con gái
                            khi mẹ Mơ sinh em bé?
                        </div>
                        <div className="answer">
                            <div className="question-One-Two">
                                <div className="form-check ">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexCheckDefault1"
                                        name="flexRadioDefault"
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                        A. Con gái chẳng được tích sự gì.
                                    </label>
                                </div>
                                <div className="form-check ">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexRadioDefault2"
                                        name="flexRadioDefault"
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        B. Biết cháu tôi chưa? Con gái như nó thì một trăm đứa con
                                        trai cũng không bằng.
                                    </label>
                                </div>
                            </div>
                            <div className="question-Three-Four">
                                <div className="form-check ">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="flexRadioDefault"
                                        id="flexCheckDefault3"
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                                        C. Con gái như vịt trời.{' '}
                                    </label>
                                </div>
                                <div className="form-check ">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="flexRadioDefault"
                                        id="flexCheckDefault4"
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault4">
                                        D. Lại một vịt trời nữa.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button className="btn btn-secondary" onClick={() => Navigate('/User')}>
                            Prev
                        </button>
                        <button className="btn btn-primary" onClick={() => handleNext()}>
                            Next
                        </button>
                        <button
                            className="btn btn-warning"
                            onClick={() => setIsShowModalReault(true)}
                        >
                            Finish
                        </button>
                    </div>
                </div>
                <div className="right-content">
                    <RightContent />{' '}
                </div>
                <ModalQuiz show={isShowModalReault} setShow={setIsShowModalReault} />
            </div>
        </>
    );
};

export default DetailQuiz;
