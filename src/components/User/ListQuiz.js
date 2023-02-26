import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ListQuiz.scss';
import QuizOne from '../../assets/Quiz-One.png';
import QuizTwo from '../../assets/Quiz-Two.png';
import QuizThere from '../../assets/Quiz-There.png';
import { Navigate, useNavigate } from 'react-router-dom';

const ListQuiz = () => {
    const Navigate = useNavigate();

    return (
        <div className="list-quiz-container">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={QuizOne} style={{ height: '250px' }} />

                    <Card.Title>Quiz</Card.Title>
                    <Card.Text className="text">
                        Liệu bạn có thực sự hiểu rõ con người mình? Cách cư xử hằng ngày liệu có phản ánh đúng con người
                        bạn? Hãy để ZenQuiz tìm ra đâu mới là con người thật của bạn nhé!
                    </Card.Text>
                    <Button variant="primary" onClick={() => Navigate('/quiz/1')}>
                        Start Now
                    </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={QuizTwo} style={{ height: '250px' }} />
                    <Card.Title>Quiz</Card.Title>
                    <Card.Text className="text">
                        Trong cuộc sống hằng ngày, chúng ta phải đối mặt với nhiều vấn đề rất căng thẳng, Stress luôn là
                        một rào cản gây khó khăn trong công việc của chúng ta, hãy thử các cách giảm stress sau để giúp
                        bạn có được một cuộc sống thật thoải mái và gặt hái thành công trong công việc.
                    </Card.Text>
                    <Button variant="primary" onClick={() => Navigate('/quiz/2')}>
                        Start Now
                    </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={QuizThere} style={{ height: '250px' }} />
                    <Card.Title>Quiz</Card.Title>
                    <Card.Text className="text">
                        Cho dù đã đến Nhật Bản hay chưa thì chắc bạn cũng đã từng nghe đến tên gọi của các món ăn như
                        sushi, sashimi hay tempura,... Đây đều là những món ăn tiêu biểu của ẩm thực Nhật Bản nổi tiếng
                        trên toàn thế giới và là những món bạn không thể bỏ qua một khi đặt chân đến đất nước mặt trời
                        mọc. Tuy nhiên, không chỉ có vậy, ẩm thực Nhật Bản còn rất nhiều món ăn đặc sắc khác đang chờ
                        bạn khám phá.
                    </Card.Text>
                    <Button variant="primary" onClick={() => Navigate('/quiz/3')}>
                        Start Now
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ListQuiz;
