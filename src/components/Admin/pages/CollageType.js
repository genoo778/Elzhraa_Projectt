import React, { useState } from 'react';
import { FaSpinner, FaPlus } from 'react-icons/fa';
import './collaget.css';
import Share from '../../shared/Share';
import Footer from '../../shared/Footer';

function YourComponent() {
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [universityDetails, setUniversityDetails] = useState({
    'سكن مميز فردى طلبه': {
      housingModel: 'سكن مميز فردى طلبه',
      housingType: 'طلبة',
      pathway: '1',
      studentType: 'نعم',
      createdAt: new Date(),
      updatedAt: null // Initially null until updated
    },
    'سكن مميز فردي طالبات': {
      housingModel: 'سکن مميز فردي طالبات',
      housingType: 'طالبات',
      pathway: '1',
      studentType: 'نعم',
      createdAt: new Date(),
      updatedAt: null // Initially null until updated
    }
  });
  const [newOptionDetails, setNewOptionDetails] = useState({
    housingModel: '',
    housingType: '',
    pathway: '',
    studentType: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleUniversityChange = (event) => {
    setSelectedUniversity(event.target.value);
    setShowDetails(false); // Reset the form visibility when the university changes
  };

  const handleSaveClick = () => {
    setButtonClicked(true);
    setShowDetails(true); // Show the form when the button is clicked
  };

  const handleAddOption = () => {
    setShowModal(true); // Display modal when "Add Option" button is clicked
  };

  const handleModalClose = () => {
    setShowModal(false); // Close modal
  };

  const handleAddOptionAndCloseModal = () => {
    if (newTitle && !universityDetails[newTitle]) {
      setUniversityDetails(prevState => ({
        ...prevState,
        [newTitle]: {
          ...newOptionDetails,
          createdAt: new Date(), // Set the createdAt field
          updatedAt: null // Initially null until updated
        }
      }));
      setNewOptionDetails({
        housingModel: '',
        housingType: '',
        pathway: '',
        studentType: ''
      });
    }
    setNewTitle('');
    setShowModal(false);
  };

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setNewOptionDetails(prevState => ({
      ...prevState,
      [field]: value,
      updatedAt: new Date() // Update the updatedAt field
    }));
  };


  return (
    <div>
      <Share />
      <div className="col-lg-11">
        <div className={`card shadow-lg p-5 mb-5 bg-body rounded border-0`}>
        <div style={{ backgroundColor: '#123252', padding: '20px', width: '117%', marginTop: '-40px', marginRight: '-48px' }}>
              <h1 style={{ marginRight: '100px' }}>السكن - جامعة حلوان</h1>
              <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
            </div>

          <h3 className="card-title text-center mb-4" style={{marginTop:'30px'}}>
            انواع السكن المميز
          </h3>
          <div className="form-group">
            <label className="mb-2"></label>
            <select
              className="form-select form-control-lg"
              value={selectedUniversity}
              onChange={handleUniversityChange}
            >
              <option value="" disabled>--اختر--</option>
              {Object.keys(universityDetails).map((university, index) => (
                <option key={index} value={university}>{university}</option>
              ))}
            </select>
          </div>
          {/* Display university details form */}
          {showDetails && (
            <div className="university-details">
              <h4>تفاصيل السكن:</h4>
              <form>
                <div className="form-group">
                  <label>اسم التميز :</label>
                  <input type="text" value={universityDetails[selectedUniversity]?.housingModel} onChange={(e) => handleInputChange(e, 'housingModel')} />
                </div>
                <div className="form-group">
                  <label>نوع السكن:</label>
                  <input type="text" value={universityDetails[selectedUniversity]?.housingType} onChange={(e) => handleInputChange(e, 'housingType')} />
                </div>
                <div className="form-group">
                  <label>السعه:</label>
                  <input type="text" value={universityDetails[selectedUniversity]?.pathway} onChange={(e) => handleInputChange(e, 'pathway')} />
                </div>
                <div className="form-group">
                  <label>فعال:</label>
                  <input type="text" value={universityDetails[selectedUniversity]?.studentType} onChange={(e) => handleInputChange(e, 'studentType')} />
                </div>
              </form>
              <button onClick={() => setShowDetails(false)}>Close</button>
            </div>
          )}

          <div className="text-center mt-4">
            <button
              className={`btn btn-lg ${buttonClicked ? 'btn-secondary' : ' #235787'} custom-button`}
              onClick={handleSaveClick}
              disabled={!selectedUniversity}
            >
              {loading ? <FaSpinner className="spinner" /> : (buttonClicked ? 'تم العرض ' : 'عرض المواعيد')}
            </button>
          </div>
          {/* Icon button for adding new options */}
          <div className="text-center mt-4">
            <button className="btn btn" onClick={handleAddOption} style={{ backgroundColor: 'white', marginTop: '-400px', marginRight: '500px' }}>
              <FaPlus />
            </button>
          </div>
          {/* Modal for adding new option */}
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleModalClose}>&times;</span>
                <h2>اضافه خبار جديد</h2>
                <form>
                  <div className="form-group">
                    <label>اسم التميز :</label>
                    <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>نوع السكن:</label>
                    <input type="text" value={newOptionDetails.housingModel} onChange={(e) => handleInputChange(e, 'housingModel')} />
                  </div>
                  <div className="form-group">
                    <label>السعه:</label>
                    <input type="text" value={newOptionDetails.housingType} onChange={(e) => handleInputChange(e, 'housingType')} />
                  </div>
                  <div className="form-group">
                    <label>نوع الطلاب:</label>
                    <input type="text" value={newOptionDetails.studentType} onChange={(e) => handleInputChange(e, 'studentType')} />
                  </div>
                </form>
                <button onClick={handleAddOptionAndCloseModal}>اضافه</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default YourComponent;


// const [universities, setUniversities] = useState([]);

// useEffect(() => {
//   // Fetch universities from backend when component mounts
//   axios.get('/api/universities')
//     .then(response => {
//       setUniversities(response.data);
//     })
//     .catch(error => {
//       console.error('Error fetching universities:', error);
//     });
// }, []);