import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import './InstructionsPage.css'; // Custom CSS for styling
import Share from '../../shared/Share';
import Footer from '../../shared/Footer';
const InstructionsPage = () => {
 
        const [instructions, setInstructions] = useState([
            { id: 1, step: 'الخطوة 1', content: 'تقدم الطلبات خلال المواعيد المحددة لذلك والتي يعلن عنها بمقر المدن الجامعية أو بموقع الجامعة على الإنترنت ولا يلتفت للطلبات التي ترد بعد الميعاد.' },
            { id: 2, step: 'الخطوة 2', content:'يكون القبول للإقامة بالمدينة الجامعية مقصوراً على عام جامعي واحد وتجدد الطلبات في أول كل عام جامعي مع إرفاق إيصال كهرباء او غاز او تليفون او مياه حديث.' },
            { id: 3, step: 'الخطوة 3', content: 'في حالة عدم سداد رسوم التسكين خلال عشرة أيام من تاريخ إعلان نتيجة القبول يعتبر الطالب متنازلاً عن حقه في الإقامة طبقا للائحة المدن الجامعية' },
            { id: 4, step: 'الخطوة 4', content: ' يجوز للطالب التقدم بطلب لإعادة قيده خلال عشرة أيام بعد قرار فصله لعدم التسكين وذلك في حالة وجود أماكن بالمدينة بعد دفع الغرامة المحددة بمعرفة مجلس المدن في كل عام.' },
            { id: 5, step: 'الخطوة 5', content: 'يحرم الطالب من الإقامة بالمدن الجامعية إذا لم يسدد الرسوم المستحقة عليه خلال العشرة أيام الأولى من كل شهر ، ويتم إعادة قيد الطالب إذا قدم أسباب قوية تبرر ذلك وبشرط وجود أماكن تسمح بإعادة قيده.' },
            { id: 6, step: 'الخطوة 6', content: 'يفصل الطالب نهائياً من الإقامة بالمدن الجامعية إذا تجاوزت مدة غيابه خمسة عشر يوماً متصلة أو ثلاثون يوماً منفصلة، ولا يسمح له بالدخول إلا بعد عذر تقبله الإدارة' },
            { id: 7, step: 'الخطوة 7', content: 'عند ملء الاستمارة و توقيع الطالب على استمارة طلب الإقامة يلزمه بإتباع لوائح وتعليمات مجلس المدن وإدارة المدينة الجامعية والتي تنشر في لوحة الإعلانات' },
            { id: 8, step: 'الخطوة 8', content: 'أن يكون خاتم شعار الجمهورية واضح البيانات، وكذلك كتابة البيانات بخط واضح ومطابقة للمستند الأصلي، وعدم الكشط أو الشطب أو استخدام مزيل' },
            { id: 9, step: 'الخطوة 8', content: ' إحضار بحث اجتماعي حديث ومعتمد بختم شعار الجمهورية .' },

            // Add the rest of the instructions here
        ]);
    
    const [editMode, setEditMode] = useState(false);
    const [editedInstructions, setEditedInstructions] = useState([...instructions]);
    const [showModal, setShowModal] = useState(false);
    const [newContent, setNewContent] = useState('');
    const [deleteRowId, setDeleteRowId] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    const handleSave = () => {
        setEditMode(false);
        setInstructions([...editedInstructions]);
    };

    const handleInputChange = (index, content) => {
        const updatedInstructions = [...editedInstructions];
        updatedInstructions[index].content = content;
        setEditedInstructions(updatedInstructions);
    };

    const handleAddRow = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setNewContent('');
    };

    const handleAddContent = () => {
        if (newContent.trim() !== '') {
            const newId = editedInstructions.length + 1;
            setEditedInstructions([...editedInstructions, { id: newId, step: `الخطوة ${newId}`, content: newContent }]);
            setShowModal(false);
            setNewContent('');
        }
    };

    const handleDeleteRow = () => {
        setShowConfirmation(true);
    };

    const confirmDeleteRow = () => {
        const rowId = parseInt(deleteRowId);
        if (!isNaN(rowId)) {
            const updatedInstructions = editedInstructions.filter(instruction => instruction.id !== rowId);
            setEditedInstructions(updatedInstructions);
            setDeleteRowId('');
            setShowConfirmation(false);
        } else {
            alert('يرجى إدخال رقم صحيح للصف المراد حذفه.');
        }
    };

    return (
        <body>
            <Share/>
        <Container className="instructions-container">
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>الخطوة</th>
                    </tr>
                </thead>
                <tbody>
                    {editedInstructions.map((instruction, index) => (
                        <tr key={instruction.id}>
                            <td>{instruction.id}</td>
                            <td>
                                {editMode ?
                                    <input
                                        type="text"
                                        value={instruction.content}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                    />
                                    : instruction.content}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            <Button onClick={handleAddRow} className="add-button" style={{marginLeft:'20px'}} >إضافة صف جديد</Button>
                            <Button onClick={handleEdit} className="edit-button">{editMode ? 'حفظ' : 'تعديل'}</Button>
                            <Button onClick={handleDeleteRow} className="delete-button"style={{marginRight:'20px'}}>حذف صف بالرقم</Button>
                        </td>
                    </tr>
                </tfoot>
            </Table>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>إضافة صف جديد</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        placeholder="أدخل المحتوى هنا"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        إلغاء
                    </Button>
                    <Button variant="primary" onClick={handleAddContent}>
                        إضافة
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>تأكيد الحذف</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        placeholder="أدخل رقم الصف المراد حذفه"
                        value={deleteRowId}
                        onChange={(e) => setDeleteRowId(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
                        إلغاء
                    </Button>
                    <Button variant="danger" onClick={confirmDeleteRow}>
                        تأكيد الحذف
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
        <Footer/>
        </body>
    );
};

export default InstructionsPage;
