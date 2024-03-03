import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import './collage.css';
import Share from '../../shared/Share';
import Footer from '../../shared/Footer';

const ContactForm = () => {
    // State for editable text
    const [editableText, setEditableText] = useState(localStorage.getItem('editableText') || "يجب أن يكون امتداد الصورة jpg يجب أن تكون أبعاد الصورة 82px * 102px");
    // State for university logo and card format
    const [universityLogoText, setUniversityLogoText] = useState("شعار الجامعة");
    const [cardFormatText, setCardFormatText] = useState(localStorage.getItem('cardFormatText') || " يجب أن يكون امتداد الصورة gif يفضل أن تكون المال الصورة 284px 82px");

    // State for edit modal
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedContent, setEditedContent] = useState('');
    const [editField, setEditField] = useState('');

    useEffect(() => {
        localStorage.setItem('editableText', editableText);
        localStorage.setItem('cardFormatText', cardFormatText);
    }, [editableText, cardFormatText]);

    // Function to handle opening edit modal
    const handleEdit = (field) => {
        setEditField(field);
        if (field === 'text') {
            setEditedContent(editableText);
        } else if (field === 'logo') {
            setEditedContent(universityLogoText);
        } else if (field === 'card') {
            setEditedContent(cardFormatText);
        }
        setShowEditModal(true);
    };

    // Function to handle closing edit modal
    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setEditField('');
        setEditedContent('');
    };

    // Function to handle saving edited content
    const handleSaveChanges = () => {
        if (editField === 'text') {
            setEditableText(editedContent);
        } else if (editField === 'logo') {
            setUniversityLogoText(editedContent);
        } else if (editField === 'card') {
            setCardFormatText(editedContent);
        }
        setShowEditModal(false);
    };

    return (
        <body>
            <Share />
            <Container className="contact-form">
                <div style={{backgroundColor:'#123252',padding:'49px'}}>
                    <h1>صور الجامعة - جامعة حلوان</h1>
                    <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
                </div>


                <Form>
                    {/* University Logo Text */}
                    <Form.Group style={{ marginLeft: '500px', marginTop: '10px' }}>
                        <p className='pp'>شعار الجامعة</p>
                        <Form.Label>{editableText}</Form.Label>
                        <img src="https://th.bing.com/th/id/R.5ac465941798a5dfdeb143f7bdc17b4f?rik=YKRWOPxNQ9wLFw&pid=ImgRaw&r=0" className='imag' alt="Helwan University Logo" />
                        <Button className='btnn' variant="primary" onClick={() => handleEdit('text')}>تعديل</Button>
                    </Form.Group>
                    <Form.Group style={{ marginRight: '500px', marginTop: '-340px' }}>
                        <p className='pp'>توقيع الكارنيه</p>
                        <Form.Label>{cardFormatText}</Form.Label>
                        <img src="https://th.bing.com/th/id/R.7bb736ce293eafd480aaaa067ca6bb71?rik=OqyynssUyjBr%2bw&pid=ImgRaw&r=0" className='imag' alt="Helwan University Logo" />
                        <Button variant="primary" className='btnn' onClick={() => handleEdit('card')}>تعديل</Button>
                    </Form.Group>
                    <p className='aaa'>اختلاف الابعاد عن المطلوب يؤثر على جودة وانضباط الصورة على النظام</p>
                </Form>
                {/* Edit Modal */}
                <Modal show={showEditModal} onHide={handleCloseEditModal} dir="rtl">
                    <Modal.Header closeButton>
                        <Modal.Title>تعديل المحتوى</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control
                            as="textarea"
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                            placeholder="أدخل المحتوى المعدل"
                            dir="rtl"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseEditModal}>إلغاء</Button>
                        <Button variant="primary" onClick={handleSaveChanges}>حفظ التغييرات</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            <Footer />
        </body>
    );
};

export default ContactForm;
