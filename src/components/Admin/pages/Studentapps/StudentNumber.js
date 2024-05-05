import React, { useState } from 'react';
import './national.css'; // Import your CSS file for styling
import { Container, Row, Col, Form, Button, Card, Alert,Spinner } from 'react-bootstrap'; // Import Bootstrap components
import Share from '../../../shared/Share';
import Footer from '../../../shared/Footer';

function StudentNumber() {
    const [studentNumber, setStudentNumber] = useState('');
    const [currentStudentNumber, setCurrentStudentNumber] = useState('');
    const [newStudentNumber, setNewStudentNumber] = useState(''); // Define newStudentNumber state variable
    const [showCard, setShowCard] = useState(false); // State to manage the visibility of the card
    const [isUpdated, setIsUpdated] = useState(false); // State to manage the display of the success message
    const [isLoading, setIsLoading] = useState(false); // New state for loading indicator

    const handleSearch = () => {
        // Display loading indicator
        setIsLoading(true);

        // Simulate a delay (you can replace this with your API call)
        setTimeout(() => {
            // Update currentStudentNumber with the value entered in the input field
            setCurrentStudentNumber(studentNumber);

            // Show the card after clicking the search button
            setShowCard(true);

            // Hide loading indicator
            setIsLoading(false);
        }, 2000); // Simulating a 2-second delay (adjust as needed)
    };

    const handleUpdateCurrentStudentNumber = () => {
        // Perform any validation if needed

        // Update the current student number with the new one
        setCurrentStudentNumber(newStudentNumber);

        // Show success message
        setIsUpdated(true);
    };

    return (
        <body>
            <Share/>
        <Container className="mt-5">
            <div className="result-containerr">
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="formYear">
                                <div style={{ backgroundColor: '#123252', padding: '20px', width: '105%', marginTop: '-40px', marginRight: '-21px' }}>
                                    <h1 style={{ marginRight: '100px' }}>تصحيح رقم الطالب  - جامعة حلوان</h1>
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

                            <Form.Group controlId="formStudentNumber">
                                <Form.Label>ادخل رقم الطالب</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="ادخل رقم الطالب"
                                    value={studentNumber}
                                    onChange={(e) => setStudentNumber(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primaryy" className="new" onClick={handleSearch}>
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
                                    <p>رقم الطالب الحالي: {currentStudentNumber}</p>
                                    <p>رقم الطالب الجديد: {newStudentNumber}</p>
                                    <Form.Group controlId="formConfirmStudentNumber">
                                        <Form.Label>تأكيد رقم الطالب الجديد</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="ادخل رقم الطالب الجديد"
                                            value={newStudentNumber}
                                            onChange={(e) => setNewStudentNumber(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" onClick={handleUpdateCurrentStudentNumber}>
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

export default StudentNumber;






// import React, { useState } from 'react';
// import './national.css'; // Import your CSS file for styling
// import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap'; // Import Bootstrap components
// import Share from '../../../shared/Share';
// import Footer from '../../../shared/Footer';
// import axios from 'axios'; // Import axios for HTTP requests

// function StudentNumber() {
//     const [studentNumber, setStudentNumber] = useState('');
//     const [currentStudentNumber, setCurrentStudentNumber] = useState('');
//     const [newStudentNumber, setNewStudentNumber] = useState('');
//     const [showCard, setShowCard] = useState(false);
//     const [isUpdated, setIsUpdated] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSearch = async () => {
//         setIsLoading(true);

//         try {
//             // Replace '/api/searchStudentNumber' with your actual search API endpoint
//             const response = await axios.get(`/api/searchStudentNumber?number=${studentNumber}`);
//             setCurrentStudentNumber(response.data.currentStudentNumber);
//             setShowCard(true);
//         } catch (error) {
//             console.error('Error searching:', error);
//         }

//         setIsLoading(false);
//     };

//     const handleUpdateCurrentStudentNumber = async () => {
//         try {
//             // Replace '/api/updateStudentNumber' with your actual update API endpoint
//             const response = await axios.put('/api/updateStudentNumber', { newStudentNumber });
//             setCurrentStudentNumber(newStudentNumber);
//             setIsUpdated(true);
//         } catch (error) {
//             console.error('Error updating:', error);
//         }
//     };

//     return (
//         <body>
//             <Share />
//             <Container className="mt-5">
//                 <div className="result-containerr">
//                     <Row>
//                         <Col>
//                             <Form>
//                                 <Form.Group controlId="formYear">
//                                     <div style={{ backgroundColor: '#123252', padding: '20px', width: '105%', marginTop: '-40px', marginRight: '-21px' }}>
//                                         <h1 style={{ marginRight: '100px' }}>تصحيح رقم الطالب  - جامعة حلوان</h1>
//                                         <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
//                                     </div>
//                                     <Form.Label style={{ marginTop: '30px' }}>العام الدراسي</Form.Label>
//                                     <Form.Control as="select" defaultValue="">
//                                         <option>2022</option>
//                                         <option>2023</option>
//                                         <option>2024</option>
//                                         {/* Add more options as needed */}
//                                     </Form.Control>
//                                 </Form.Group>

//                                 <Form.Group controlId="formStudentNumber">
//                                     <Form.Label>ادخل رقم الطالب</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="ادخل رقم الطالب"
//                                         value={studentNumber}
//                                         onChange={(e) => setStudentNumber(e.target.value)}
//                                     />
//                                 </Form.Group>
//                                 <Button variant="primaryy" className="new" onClick={handleSearch}>
//                                     {isLoading ? (
//                                         <Spinner animation="border" size="sm" />
//                                     ) : (
//                                         "بحث"
//                                     )}
//                                 </Button>
//                             </Form>
//                         </Col>
//                     </Row>

//                     {showCard && (
//                         <Row className="mt-3">
//                             <Col>
//                                 <Card>
//                                     <Card.Body>
//                                         <p>رقم الطالب الحالي: {currentStudentNumber}</p>
//                                         <p>رقم الطالب الجديد: {newStudentNumber}</p>
//                                         <Form.Group controlId="formConfirmStudentNumber">
//                                             <Form.Label>تأكيد رقم الطالب الجديد</Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 placeholder="ادخل رقم الطالب الجديد"
//                                                 value={newStudentNumber}
//                                                 onChange={(e) => setNewStudentNumber(e.target.value)}
//                                             />
//                                         </Form.Group>

//                                         <Button variant="primary" onClick={handleUpdateCurrentStudentNumber}>
//                                             تحديث
//                                         </Button>

//                                         {isUpdated && (
//                                             <Alert variant="success" className="mt-3">
//                                                 تم التعديل بنجاح
//                                             </Alert>
//                                         )}

//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         </Row>
//                     )}
//                 </div>
//             </Container>
//             <Footer />
//         </body>
//     );
// }

// export default StudentNumber;
