import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './sem.css';
import Share from '../../shared/Share';
import Footer from '../../shared/Footer';

const Timetable = ({ title, events, onUpdateEvents, onUpdateTitle }) => {
    const [editableTitle, setEditableTitle] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [editMode, setEditMode] = useState(false);
    const [editedStartDate, setEditedStartDate] = useState('');
    const [editedEndDate, setEditedEndDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');

    const handleEditTitle = () => {
        setEditableTitle(true);
    };

    const handleSaveTitle = () => {
        onUpdateTitle(newTitle);
        setEditableTitle(false);
    };

    const handleTitleChange = (event) => {
        setNewTitle(event.target.value);
    };

    const handleEditAll = () => {
        if (!editMode) {
            // Enter edit mode
            setEditMode(true);
            // Initialize edited start and end dates with the first event's values
            setEditedStartDate(events[0].startDate);
            setEditedEndDate(events[0].endDate);
        } else {
            // Exit edit mode and save changes
            setEditMode(false);
            setLoading(true); // Show loading message
            const updatedEvents = events.map(event => ({
                ...event,
                startDate: editedStartDate,
                endDate: editedEndDate
            }));
            setTimeout(() => {
                onUpdateEvents(updatedEvents);
                setLoading(false); // Hide loading message after some delay
                setSaveMessage(`تم حفظ التغييرات بتاريخ: ${new Date().toLocaleDateString()}, الساعة: ${new Date().toLocaleTimeString()}`);
            }, 2000); // Simulate async operation with setTimeout
        }
    };

    const handleStartDateChange = (event) => {
        setEditedStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEditedEndDate(event.target.value);
    };

    return (
        <Container className="rtl">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan="5">
                            {editableTitle ?
                                <input
                                    type="text"
                                    value={newTitle}
                                    onChange={handleTitleChange}
                                    onBlur={handleSaveTitle}
                                    autoFocus
                                />
                                :
                                <span onClick={handleEditTitle}>{title}</span>
                            }
                        </th>
                    </tr>
                    <tr>
                        <th>تاريخ  بدء التقديم</th>
                        <th>تاريخ انتهاء التقديم </th>
                        <th>الحدث</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event, index) => (
                        <tr key={index}>
                            <td>{editMode ?
                                <input type="date" value={editedStartDate} onChange={handleStartDateChange} />
                                :
                                event.startDate
                            }</td>
                            <td>{editMode ?
                                <input type="date" value={editedEndDate} onChange={handleEndDateChange} />
                                :
                                event.endDate
                            }</td>
                            <td>{event.eventName}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="5" style={{ textAlign: 'center' }}>
                            <Button variant={editMode ? "success" : "primary"} onClick={handleEditAll}>
                                {editMode ? "حفظ" : "تعديل"}
                            </Button>
                            {loading && <FontAwesomeIcon icon={faSpinner} spin style={{ marginLeft: '10px' }} />}
                        </td>
                    </tr>
                    {saveMessage && (
                        <tr>
                            <td colSpan="5" style={{ textAlign: 'center' }}>
                                <p>{saveMessage}</p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};
const App = () => {
    const [title, setTitle] = useState('العام الاكاديمي 2025-2024');
    const [events, setEvents] = useState([
        { startDate: '2024-02-10', endDate: '2024-02-15', eventName: 'الطلاب الجدد' },
        { startDate: '2024-02-20', endDate: '2024-02-25', eventName: 'الطلاب القدامي' },
        { startDate: '2024-03-01', endDate: '2024-03-05', eventName: 'الطالبات الجدد' },
        { startDate: '2024-03-01', endDate: '2024-03-05', eventName: 'الطالبات القدامي' }
    ]);

    const handleUpdateEvents = (updatedEvents) => {
        setEvents(updatedEvents);
    };

    const handleUpdateTitle = (newTitle) => {
        setTitle(newTitle);
    };

    return (
        <div>
        
            <Share/>
            <>

            <Timetable
                title={title}
                events={events}
                onUpdateEvents={handleUpdateEvents}
                onUpdateTitle={handleUpdateTitle}
            />
            </>
            <Timetable
                title={title}
                events={events}
                onUpdateEvents={handleUpdateEvents}
                onUpdateTitle={handleUpdateTitle}
            />
            <Footer/>
        </div>
    );
};

export default App;



// const App = () => {
//     const [title, setTitle] = useState('الجدول الزمني');
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         fetchTimetableData();
//     }, []);

//     const fetchTimetableData = async () => {
//         try {
//             const response = await axios.get('/api/timetable');
//             setEvents(response.data);
//         } catch (error) {
//             console.error('Error fetching timetable data:', error);
//         }
//     };

//     const handleUpdateEvents = async (updatedEvents) => {
//         try {
//             await axios.put('/api/timetable', updatedEvents);
//             setEvents(updatedEvents);
//         } catch (error) {
//             console.error('Error updating timetable events:', error);
//         }
//     };

//     const handleUpdateTitle = async (newTitle) => {
//         try {
//             await axios.put('/api/timetable/title', { title: newTitle });
//             setTitle(newTitle);
//         } catch (error) {
//             console.error('Error updating timetable title:', error);
//         }
//     };

//     return (
//         <div>
//             <Share/>
//             <Timetable
//                 title={title}
//                 events={events}
//                 onUpdateEvents={handleUpdateEvents}
//                 onUpdateTitle={handleUpdateTitle}
//             />
//             <Footer/>
//         </div>
//     );
// };

// export default App;
