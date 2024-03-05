import React, { useState } from 'react';
import './national.css'; // Import your CSS file for styling
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap'; // Import Bootstrap components
import Share from '../../../shared/Share';
import Footer from '../../../shared/Footer';

function StudentPassword() {
    const [password, setPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState(''); // Define newPassword state variable
    const [showCard, setShowCard] = useState(false); // State to manage the visibility of the card
    const [isUpdated, setIsUpdated] = useState(false); // State to manage the display of the success message
    const [isLoading, setIsLoading] = useState(false); // New state for loading indicator

    const handleSearch = () => {
        // Display loading indicator
        setIsLoading(true);

        // Simulate a delay (you can replace this with your API call)
        setTimeout(() => {
            // Update currentPassword with the value entered in the input field
            setCurrentPassword(password);
            // Show the card after clicking the search button
            setShowCard(true);

            // Hide loading indicator
            setIsLoading(false);
        }, 2000); // Simulating a 2-second delay (adjust as needed)
    };

    const handleUpdateCurrentPassword = () => {
        // Perform any validation if needed

        // Update the current password with the new one
        setCurrentPassword(newPassword);

        // Show success message
        setIsUpdated(true);
    };

    return (
        <body>
            <Share />
            <Container className="mt-5">
                <div className="result-container">
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="formYear">
                                    <div style={{ backgroundColor: '#123252', padding: '20px', width: '105%', marginTop: '-40px', marginRight: '-21px' }}>
                                        <h1 style={{ marginRight: '100px' }}>تغيير كلمة مرور الطالب - جامعة حلوان</h1>
                                        <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
                                    </div>
                                    <Form.Label style={{ marginTop: '30px' }}>العام الدراسي</Form.Label>
                                    <Form.Control as="select" defaultValue="">
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                        {/* Add more options as needed */}
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>ادخل كلمة مرور الطالب</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="ادخل كلمة مرور الطالب"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="primary" onClick={handleSearch}>
                                    {isLoading ? (
                                        <Spinner animation="border" size="sm" />
                                    ) : (
                                        "بحث"
                                    )}
                                </Button>
                            </Form>
                        </Col>
                    </Row>

                    {showCard && (
                        <Row className="mt-3">
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <p>كلمة مرور الطالب الحالية: {currentPassword}</p>
                                        <p>كلمة مرور الطالب الجديدة: {newPassword}</p>
                                        <Form.Group controlId="formConfirmPassword">
                                            <Form.Label>تأكيد كلمة مرور الطالب الجديدة</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="ادخل كلمة مرور الطالب الجديدة"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Button variant="primary" onClick={handleUpdateCurrentPassword}>
                                            تحديث
                                        </Button>

                                        {isUpdated && (
                                            <Alert variant="success" className="mt-3">
                                                تم التعديل بنجاح
                                            </Alert>
                                        )}
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

export default StudentPassword;
