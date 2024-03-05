import React, { useState } from 'react';
import './national.css'; // Import your CSS file for styling
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'; // Import Bootstrap components
import Share from '../../../shared/Share';
import Footer from '../../../shared/Footer';
function NationalId() {
    const [nationalId, setNationalId] = useState('');
    const [currentNationalId, setCurrentNationalId] = useState('');
    const [newNationalId, setNewNationalId] = useState(''); // Define newNationalId state variable
    const [showCard, setShowCard] = useState(false); // State to manage the visibility of the card
    const [isUpdated, setIsUpdated] = useState(false); // State to manage the display of the success message

    const handleSearch = () => {
        // Update currentNationalId with the value entered in the input field
        setCurrentNationalId(nationalId);

        // Show the card after clicking the search button
        setShowCard(true);
    };

    const handleUpdateCurrentNationalId = () => {
        // Perform any validation if needed

        // Update the current national ID with the new one
        setCurrentNationalId(newNationalId);

        // Show success message
        setIsUpdated(true);
    };

    return (
        <body>
            <Share/>
        <Container className="mt-5">
            <div className="result-container">
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="formYear">
                                <div style={{ backgroundColor: '#123252', padding: '20px', width: '105%', marginTop: '-40px', marginRight: '-21px' }}>
                                    <h1 style={{ marginRight: '100px' }}>تصحيح الرقم القومي  - جامعة حلوان</h1>
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

                            <Form.Group controlId="formNationalId">
                                <Form.Label>ادخل الرقم القومي</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="ادخل الرقم القومي"
                                    value={nationalId}
                                    onChange={(e) => setNationalId(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" onClick={handleSearch}>
                                بحث
                            </Button>
                        </Form>
                    </Col>
                </Row>

                {showCard && (
                    <Row className="mt-3">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <p>الرقم القومي الحالي: {currentNationalId}</p>
                                    <p>الرقم القومي الجديد: {newNationalId}</p>
                                    <Form.Group controlId="formConfirmNationalId">
                                        <Form.Label>تأكيد الرقم القومي الجديد</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="ادخل الرقم القومي الجديد"
                                            value={newNationalId}
                                            onChange={(e) => setNewNationalId(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" onClick={handleUpdateCurrentNationalId}>
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
        <Footer/>
        </body>
    );
}

export default NationalId;
