import React, { useState } from 'react';
import './national.css'; // Import your CSS file for styling
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap'; // Import Bootstrap components
import Share from '../../../shared/Share';
import Footer from '../../../shared/Footer';

function CancellationForm() {
    const [studentId, setStudentId] = useState('');
    const [admissionType, setAdmissionType] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleCancel = () => {
        setIsLoading(true);
        // Simulate cancellation request
        setTimeout(() => {
            setShowConfirmation(true);
            setIsLoading(false);
        }, 2000);
    };

    return (
        <body>
            <Share />
            <Container className="mt-5">
                <div className="result-container">
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="formStudentId">
                                    {/* Student ID Input */}
                                    <div style={{ backgroundColor: '#123252', padding: '20px', width: '105%', marginTop: '-40px', marginRight: '-21px' }}>
                                        <h1 style={{ marginRight: '100px' }}>الغاء قبول طالب  - جامعة حلوان</h1>
                                        <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
                                    </div>
                                    <Form.Label style={{ marginTop: '30px' }}>رقم الطالب</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="ادخل رقم الطالب"
                                        value={studentId}
                                        onChange={(e) => setStudentId(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formAdmissionType">
                                    {/* Admission Type Dropdown */}
                                    <Form.Label>نوع القبول</Form.Label>
                                    <Form.Control as="select" onChange={(e) => setAdmissionType(e.target.value)}>
                                        <option value="regular">مقبول تحويل</option>
                                        <option value="conditional">وافد ملحة خارجية</option>
                                        <option value="transfer">نقل</option>
                                        <option value="social">مقبول اجتماعي</option>
                                        <option value="external-residence">مقبول في سكن خارجي (بمصاريف)</option>
                                        <option value="foreign-scholarship">منحة الوكالة الأمريكية</option>
                                        <option value="medical">مقبول طبي</option>
                                        <option value="remote-areas">مناطق نائية مقبول بحث اجتماعي</option>
                                        <option value="remote-areas">مقبول تنسيق</option>
                                        <option value="remote-areas">الطلاب المقبولين</option>
                                        <option value="remote-areas">طالب بعيد</option>
                                        <option value="remote-areas">بيانات الجزاءات.</option>
                                        {/* Add more options as needed */}
                                    </Form.Control>
                                </Form.Group>

                                <Button variant="danger" onClick={handleCancel} style={{ marginTop: '10px' }}>
                                    {isLoading ? <Spinner animation="border" size="sm" /> : 'إلغاء'}
                                </Button>

                                {/* Additional Notes */}
                                <Form.Text className="text-muted" style={{color: '#123252',fontSize:'17px',fontWeight:'bold',marginTop:'27px'}}>
                                    ملاحظات إضافية:
                                    <ul>
                                        <li>1-البحث في الطلاب المقبولين وغير ساكنين</li>
                                        <li>2-لا يتم حّذف بيانات الجزاءات</li>
                                        {/* Add more notes as needed */}
                                    </ul>
                                </Form.Text>
                            </Form>
                        </Col>
                    </Row>

                    {showConfirmation && (
                        <Row className="mt-3">
                            <Col>
                                <Card>
                                    <Card.Body>
                                        {/* Cancellation Confirmation */}
                                        <p>تم إلغاء تسجيل الطالب رقم: {studentId}</p>
                                        <p>نوع القبول: {admissionType}</p>
                                        <Alert variant="success" className="mt-3">
                                            تم الإلغاء بنجاح
                                        </Alert>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}
                </div>
            </Container>
            <Footer />
        </body>
    );
}

export default CancellationForm;
