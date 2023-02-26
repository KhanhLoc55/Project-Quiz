import { Routes, Route } from 'react-router-dom';
import App from './App';

import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/content/ManageUser';
import DashBoard from './components/Admin/content/DashBoard';
import Login from './components/Auth/Login';
import { ToastContainer } from 'react-toastify';
import Register from './components/Auth/Register';
import DetailQuiz from './components/User/DetailQuiz';
import DetailQuizTwo from './components/User/DetailQuizTwo';
import DetailQuizThree from './components/User/DetailQuizThree';
import ManageQuiz from './components/User/Quiz/ManageQuiz';
import Question from './components/User/Question/Question';

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path="/User" element={<User />} />
                </Route>
                <Route path="/quiz/1" element={<DetailQuiz />} />

                <Route path="/quiz/2" element={<DetailQuizTwo />} />
                <Route path="/quiz/3" element={<DetailQuizThree />} />

                <Route path="Admin" element={<Admin />}>
                    <Route index element={<DashBoard />}></Route>

                    <Route path="Manage-User" element={<ManageUser />} />
                    <Route path="Manage-quizzes" element={<ManageQuiz />} />
                    <Route path="Manage-question" element={<Question />} />

                </Route>
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
};
export default Layout;
