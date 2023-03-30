import './DashBoard.scss';
import { BarChart, XAxis, YAxis, Bar, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Breadcrumb, Card } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
const DashBoard = (props) => {
    const Navigate = useNavigate();

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
        },
    ];
    return (
        <>
            <Breadcrumb className="detail-dashboard-container">
                <Breadcrumb.Item href="#" onClick={() => Navigate('/')}>
                    Trang chủ
                </Breadcrumb.Item>
                <Breadcrumb.Item active>DashBoard</Breadcrumb.Item>
            </Breadcrumb>
            <div className="dashboard-container">
                <div className="title">Analytics DashBoard</div>
                <div className="content">
                    <div className="content-left">
                        <div className="content-child">
                            <Card border="secondary" style={{ width: '17rem' }}>
                                <Card.Body style={{ textAlign: 'center' }}>
                                    <Card.Title style={{ textAlign: 'center' }}>
                                        Tolal User
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>13</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="content-child">
                            <Card border="secondary" style={{ width: '17rem' }}>
                                <Card.Body style={{ textAlign: 'center' }}>
                                    <Card.Title style={{ textAlign: 'center' }}>
                                        Tolal Answers
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>9</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="content-child">
                            <Card border="secondary" style={{ width: '17rem' }}>
                                <Card.Body style={{ textAlign: 'center' }}>
                                    <Card.Title style={{ textAlign: 'center' }}>
                                        Tolal Quizz
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>0</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="content-child">
                            <Card border="secondary" style={{ width: '17rem' }}>
                                <Card.Body style={{ textAlign: 'center' }}>
                                    <Card.Title style={{ textAlign: 'center' }}>
                                        Tolal Question
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: 'center' }}>47</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="content-right">
                        <ResponsiveContainer width="95%" height={400}>
                            <BarChart
                                data={data}
                                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                            >
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Legend />

                                <Bar dataKey="pv" fill="#0000CD" />
                                <Bar dataKey="uv" fill="#87CEFA" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashBoard;
