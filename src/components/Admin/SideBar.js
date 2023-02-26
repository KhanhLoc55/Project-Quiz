import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem } from 'react-icons/fa';
import { AiFillBehanceCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import sidebarBg from '../../assets/OnePieceSiBar.jpg';

import logo from '../../assets/Untitled-1.png';

import './SideBar.scss';
import 'react-pro-sidebar/dist/css/styles.css';

const SideBar = ({ collapsed, toggled, handleToggleSidebar }) => {
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <img src={logo} alt="logo" />
                        <span>Khánh Lộc</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">Main</span>}
                        >
                            dashboard
                            <Link to="/Admin" />
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu title="Features" icon={<FaGem />}>
                            <MenuItem>
                                Quản Lý Users
                                <Link to="/Admin/Manage-User" />
                            </MenuItem>
                            <MenuItem>
                                Quản Lý Bài Quit
                                <Link to="/Admin/Manage-quizzes" />
                            </MenuItem>
                            <MenuItem>
                                Quản Lý Bài Câu Hỏi
                                <Link to="/Admin/Manage-question" />
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://www.behance.net/anhlamot55"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <AiFillBehanceCircle className="icon-behance" />
                            <span
                                style={{
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                }}
                            >
                                behance anhlamot55
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    );
};

export default SideBar;
