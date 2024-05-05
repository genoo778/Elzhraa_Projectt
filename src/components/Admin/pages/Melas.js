import React, { useState } from 'react';
import { FaSpinner, FaPlus } from 'react-icons/fa';
import './collaget.css';
import Share from '../../shared/Share';
import Footer from '../../shared/Footer';

function Melas() {
  const [selectedType, setSelectedType] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [mealDetails, setMealDetails] = useState({
    'رمضان': {
      mealType: 'رمضان',
      mealName: 'غداء',
      startTime: '12:00 PM',
      endTime: '3:00 PM',
      createdAt: new Date(),
      updatedAt: null
    },
    'غير رمضان': {
      mealType: 'غير رمضان',
      mealName: 'غداء',
      startTime: '12:00 PM',
      endTime: '3:00 PM',
      createdAt: new Date(),
      updatedAt: null
    }
  });
  const [newMealDetails, setNewMealDetails] = useState({
    mealType: '',
    mealName: '',
    startTime: '',
    endTime: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setShowDetails(false); 
  };

  const handleSaveClick = () => {
    setButtonClicked(true);
    setLoading(true); 
    setTimeout(() => {
      setShowDetails(true); 
      setLoading(false); 
    }, 2000);
  };

  const handleAddOption = () => {
    setShowModal(true); 
  };

  const handleModalClose = () => {
    setShowModal(false); 
  };

  const handleAddOptionAndCloseModal = () => {
    if (newTitle && !mealDetails[newTitle]) {
      setMealDetails(prevState => ({
        ...prevState,
        [newTitle]: {
          ...newMealDetails,
          createdAt: new Date(), 
          updatedAt: new Date() 
        }
      }));
      setNewMealDetails({
        mealType: '',
        mealName: '',
        startTime: '',
        endTime: ''
      });
    }
    setNewTitle('');
    setShowModal(false);
  };

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setNewMealDetails(prevState => ({
      ...prevState,
      [field]: value,
      updatedAt: new Date() 
    }));
  };

  return (
    <div>
      <Share />
      <div className="col-lg-11">
        <div className={`card shadow-lg p-5 mb-5 bg-body rounded border-0`}>
        <div style={{ backgroundColor: '#123252', padding: '20px', width: '117%' , marginTop:'-48px',marginRight:'-48px' }}>
          <h1 style={{ marginRight: '100px' }}>وجبات - جامعة حلوان</h1>
          <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
        </div>
          <h3 className="card-title text-center mb-4" style={{marginTop:'30px'}}>
            أنواع الوجبات
          </h3>
          <div className="form-group">
            <label className="mb-2"></label>
            <select
              className="form-select form-control-lg"
              value={selectedType}
              onChange={handleTypeChange}
            >
              <option value="" disabled>--اختر--</option>
              {Object.keys(mealDetails).map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          {showDetails && (
  <div className="card p-4 mt-4">
  <div className="card-body">
    <h4 className="card-title">تفاصيل الوجبات:</h4>
    <form>
      <div className="form-group">
        <label>نوع الوجبة:</label>
        <input type="text" value={mealDetails[selectedType]?.mealName} readOnly />
      </div>
      <div className="form-group">
        <label>وقت بداية الوجبة:</label>
        <input type="text" value={mealDetails[selectedType]?.startTime} readOnly />
      </div>
      <div className="form-group">
        <label>وقت نهاية الوجبة:</label>
        <input type="text" value={mealDetails[selectedType]?.endTime} readOnly />
      </div>
      <div className="form-group">
        <label>آخر تعديل:</label>
        <input type="text" value={mealDetails[selectedType]?.updatedAt?.toLocaleString()} readOnly />
      </div>
    </form>
    <button className="btn btn-secondary mt-3" onClick={() => setShowDetails(false)}>Close</button>
  </div>
</div>
          )}

          <div className="text-center mt-4">
            <button
              className={`btn btn-lg ${buttonClicked ? 'btn-secondary' : ' #235787'} custom-button`}
              onClick={handleSaveClick}
              disabled={!selectedType || loading} 
            >
              {loading ? <FaSpinner className="spinner" /> : (buttonClicked ? 'تم العرض ' : 'عرض المواعيد')}
            </button>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn" onClick={handleAddOption} style={{backgroundColor:'white',marginTop:'-400px',marginRight:'500px'}}>
              <FaPlus />
            </button>
          </div>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleModalClose}>&times;</span>
                <h2>اضافة وجبة جديدة</h2>
                <form>
                  <div className="form-group">
                    <label>نوع الوجبة</label>
                    <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>وقت بداية الوجبة</label>
                    <input type="text" value={newMealDetails.startTime} onChange={(e) => handleInputChange(e, 'startTime')} />
                  </div>
                  <div className="form-group">
                    <label>وقت نهاية الوجبة</label>
                    <input type="text" value={newMealDetails.endTime} onChange={(e) => handleInputChange(e, 'endTime')} />
                  </div>
                </form>
                <button onClick={handleAddOptionAndCloseModal}>اضافة</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Melas;


// import React, { useState, useEffect } from 'react';
// import { FaSpinner, FaPlus } from 'react-icons/fa';
// import axios from 'axios';
// import './collaget.css';
// import Share from '../../shared/Share';
// import Footer from '../../shared/Footer';

// function Melas() {
//   const [selectedType, setSelectedType] = useState('');
//   const [buttonClicked, setButtonClicked] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);
//   const [newTitle, setNewTitle] = useState('');
//   const [mealDetails, setMealDetails] = useState({});
//   const [newMealDetails, setNewMealDetails] = useState({
//     mealType: '',
//     mealName: '',
//     startTime: '',
//     endTime: ''
//   });
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     // Fetch meal data from the backend when the component mounts
//     axios.get('http://your-backend-url/api/meals')
//       .then(response => {
//         setMealDetails(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching meal data:', error);
//       });
//   }, []); 

//   const handleTypeChange = (event) => {
//     setSelectedType(event.target.value);
//     setShowDetails(false);
//   };

//   const handleSaveClick = () => {
//     setButtonClicked(true);
//     setLoading(true);
//     setTimeout(() => {
//       setShowDetails(true);
//       setLoading(false);
//     }, 2000);
//   };

//   const handleAddOption = () => {
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//   };

//   const handleAddOptionAndCloseModal = () => {
//     axios.post('http://your-backend-url/api/meals', newMealDetails)
//       .then(response => {
//         setMealDetails(response.data);
//         setNewMealDetails({
//           mealType: '',
//           mealName: '',
//           startTime: '',
//           endTime: ''
//         });
//         setNewTitle('');
//         setShowModal(false);
//       })
//       .catch(error => {
//         console.error('Error adding new meal:', error);
//       });
//   };

//   const handleInputChange = (event, field) => {
//     const value = event.target.value;
//     setNewMealDetails(prevState => ({
//       ...prevState,
//       [field]: value
//     }));
//   };

//   return (
//     <div>
//       <Share />
//       <div className="col-lg-11">
//         <div className={`card shadow-lg p-5 mb-5 bg-body rounded border-0`}>
//           <div style={{ backgroundColor: '#123252', padding: '20px', width: '117%' , marginTop:'-48px',marginRight:'-48px' }}>
//             <h1 style={{ marginRight: '100px' }}>وجبات - جامعة حلوان</h1>
//             <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
//           </div>
//           <h3 className="card-title text-center mb-4" style={{marginTop:'30px'}}>
//             أنواع الوجبات
//           </h3>
//           <div className="form-group">
//             <label className="mb-2"></label>
//             <select
//               className="form-select form-control-lg"
//               value={selectedType}
//               onChange={handleTypeChange}
//             >
//               <option value="" disabled>--اختر--</option>
//               {Object.keys(mealDetails).map((type, index) => (
//                 <option key={index} value={type}>{type}</option>
//               ))}
//             </select>
//           </div>
//           {showDetails && (
//             <div className="card p-4 mt-4">
//               <div className="card-body">
//                 <h4 className="card-title">تفاصيل الوجبات:</h4>
//                 <form>
//                   <div className="form-group">
//                     <label>نوع الوجبة:</label>
//                     <input type="text" value={mealDetails[selectedType]?.mealName} readOnly />
//                   </div>
//                   <div className="form-group">
//                     <label>وقت بداية الوجبة:</label>
//                     <input type="text" value={mealDetails[selectedType]?.startTime} readOnly />
//                   </div>
//                   <div className="form-group">
//                     <label>وقت نهاية الوجبة:</label>
//                     <input type="text" value={mealDetails[selectedType]?.endTime} readOnly />
//                   </div>
//                 </form>
//                 <button className="btn btn-secondary mt-3" onClick={() => setShowDetails(false)}>Close</button>
//               </div>
//             </div>
//           )}

//           <div className="text-center mt-4">
//             <button
//               className={`btn btn-lg ${buttonClicked ? 'btn-secondary' : ' #235787'} custom-button`}
//               onClick={handleSaveClick}
//               disabled={!selectedType || loading} 
//             >
//               {loading ? <FaSpinner className="spinner" /> : (buttonClicked ? 'تم العرض ' : 'عرض المواعيد')}
//             </button>
//           </div>
//           <div className="text-center mt-4">
//             <button className="btn btn" onClick={handleAddOption} style={{backgroundColor:'white',marginTop:'-400px',marginRight:'500px'}}>
//               <FaPlus />
//             </button>
//           </div>
//           {showModal && (
//             <div className="modal">
//               <div className="modal-content">
//                 <span className="close" onClick={handleModalClose}>&times;</span>
//                 <h2>اضافة وجبة جديدة</h2>
//                 <form>
//                   <div className="form-group">
//                     <label>نوع الوجبة</label>
//                     <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
//                   </div>
//                   <div className="form-group">
//                     <label>وقت بداية الوجبة</label>
//                     <input type="text" value={newMealDetails.startTime} onChange={(e) => handleInputChange(e, 'startTime')} />
//                   </div>
//                   <div className="form-group">
//                     <label>وقت نهاية الوجبة</label>
//                     <input type="text" value={newMealDetails.endTime} onChange={(e) => handleInputChange(e, 'endTime')} />
//                   </div>
//                 </form>
//                 <button onClick={handleAddOptionAndCloseModal}>اضافة</button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Melas;
