// Add the necessary imports

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { FaTimes } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa';
import Share from '../shared/Share';
import Footer from '../shared/Footer';
import './uni.css'

const UniversityTimetableForm = () => {
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [timetableData, setTimetableData] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUniversityChange = (event) => {
    setSelectedUniversity(event.target.value);
  };

  const handleSaveClick = () => {
    setLoading(true);

    setTimeout(() => {
      const staticTimetableData = [
        { id: 1, day: 'الاثنين', timeSlot1: '9:00 صباحًا - 11:00 صباحًا', timeSlot2: '1:00 ظهرًا - 3:00 مساءً' },
        { id: 2, day: 'الثلاثاء', timeSlot1: '10:00 صباحًا - 12:00 ظهرًا', timeSlot2: '2:00 مساءً - 4:00 مساءً' },
      ];

      setTimetableData(staticTimetableData);
      setButtonClicked(true);
      setLoading(false);
    }, 1000);
  };

  const handleTimetableClose = () => {
    setTimetableData([]);
    setButtonClicked(false);
    setSelectedUniversity('');
  };

  return (
    <body style={{ background: '#BCC9FD' }}>
      <Share />
      <div className="container mt-4 rtl">
        <div className="row justify-content-center" style={{ marginTop: '-100px', marginLeft: '600px', width: '150%' }}>
          <div className="col-lg-11">
            <div className={`card shadow-lg p-5 mb-5 bg-body rounded border-0 larger-card`} style={{ width: '150%' }}>
              <div style={{ backgroundColor: '#123252', padding: '20px', width: '111%',marginTop:'-45px',marginRight:'-45px' }}>
                <h1 style={{ marginRight: '20px' }}>مواعيد التقديم  - جامعة حلوان</h1>
                <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
              </div>
              <h3 className="card-title text-center mb-4" style={{marginTop:"30px"}}>
                اختر الجامعة لعرض المواعيد الخاصة بها لعام 2023-2024
              </h3>
              <div className="form-group">
                <label className="mb-2"></label>
                <select
                  className="form-select form-control-lg"
                  value={selectedUniversity}
                  onChange={handleUniversityChange}
                >
                  <option value="" disabled>--اختر--</option>
                  <option value="جامعه حلوان"> جامعه حلوان</option>
                  <option value="جامعه حلوان الاهليه ">جامعه حلوان الاهليه </option>
                </select>
              </div>
              <div className="text-center mt-4">
                <button
                  className={`btn btn-lg ${buttonClicked ? 'btn-secondary' : ' #235787'} custom-button`}
                  onClick={handleSaveClick}
                  disabled={!selectedUniversity}
                >
                  {loading ? <FaSpinner className="spinner" /> : (buttonClicked ? 'تم العرض ' : 'عرض المواعيد')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {timetableData.length > 0 && (
        <div className="container mt-4 rtl">
          <div className="row mt-4 justify-content-center">
            <div className="col-lg-12">
              <div className="card shadow-lg p-5 mb-5 bg-body rounded larger-card" style={{ marginTop: '-550px', position: 'relative' }}>
                <h2 className="card-title text-center mb-4">الجدول الزمني لـ {selectedUniversity}</h2>
                <button
                  className="btn btn-white position-absolute top-0 end-0 m-3"
                  style={{ marginTop: "15px" }}
                  onClick={handleTimetableClose}
                >
                  <FaTimes />
                </button>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">اليوم</th>
                      <th scope="col">الفترة الزمنية 1</th>
                      <th scope="col">الفترة الزمنية 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetableData.map(item => (
                      <tr key={item.id}>
                        <td>{item.day}</td>
                        <td>{item.timeSlot1}</td>
                        <td>{item.timeSlot2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </body>
  );
};

export default UniversityTimetableForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaTimes, FaSpinner } from 'react-icons/fa';
// import Share from '../shared/Share';
// import Footer from '../shared/Footer';
// import './uni.css';

// const UniversityTimetableForm = () => {
//   const [selectedUniversity, setSelectedUniversity] = useState('');
//   const [timetableData, setTimetableData] = useState([]);
//   const [buttonClicked, setButtonClicked] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Fetch timetable data when selectedUniversity changes
//     if (selectedUniversity) {
//       setLoading(true);
//       axios.get(`http://your-backend-url/api/timetable/${selectedUniversity}`)
//         .then(response => {
//           setTimetableData(response.data);
//           setButtonClicked(true);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching timetable:', error);
//           setLoading(false);
//         });
//     }
//   }, [selectedUniversity]);

//   const handleUniversityChange = (event) => {
//     setSelectedUniversity(event.target.value);
//   };

//   const handleSaveClick = () => {
//     // This function is handled by useEffect when selectedUniversity changes
//   };

//   const handleTimetableClose = () => {
//     setTimetableData([]);
//     setButtonClicked(false);
//     setSelectedUniversity('');
//   };

//   return (
//     <body style={{ background: '#BCC9FD' }}>
//       <Share />
//       <div className="container mt-4 rtl">
//         <div className="row justify-content-center" style={{ marginTop: '-100px', marginLeft: '600px', width: '150%' }}>
//           <div className="col-lg-11">
//             <div className={`card shadow-lg p-5 mb-5 bg-body rounded border-0 larger-card`} style={{ width: '150%' }}>
//               {/* Your existing content */}
//               <h3 className="card-title text-center mb-4" style={{marginTop:"30px"}}>
//                 اختر الجامعة لعرض المواعيد الخاصة بها لعام 2023-2024
//               </h3>
//               <div className="form-group">
//                 <label className="mb-2"></label>
//                 <select
//                   className="form-select form-control-lg"
//                   value={selectedUniversity}
//                   onChange={handleUniversityChange}
//                 >
//                   <option value="" disabled>--اختر--</option>
//                   <option value="جامعه حلوان"> جامعه حلوان</option>
//                   <option value="جامعه حلوان الاهليه ">جامعه حلوان الاهليه </option>
//                 </select>
//               </div>
//               <div className="text-center mt-4">
//                 <button
//                   className={`btn btn-lg ${buttonClicked ? 'btn-secondary' : ' #235787'} custom-button`}
//                   onClick={handleSaveClick}
//                   disabled={!selectedUniversity}
//                 >
//                   {loading ? <FaSpinner className="spinner" /> : (buttonClicked ? 'تم العرض ' : 'عرض المواعيد')}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {timetableData.length > 0 && (
//         <div className="container mt-4 rtl">
//           <div className="row mt-4 justify-content-center">
//             <div className="col-lg-12">
//               <div className="card shadow-lg p-5 mb-5 bg-body rounded larger-card" style={{ marginTop: '-550px', position: 'relative' }}>
//                 <h2 className="card-title text-center mb-4">الجدول الزمني لـ {selectedUniversity}</h2>
//                 <button
//                   className="btn btn-white position-absolute top-0 end-0 m-3"
//                   style={{ marginTop: "15px" }}
//                   onClick={handleTimetableClose}
//                 >
//                   <FaTimes />
//                 </button>
//                 <table className="table table-bordered">
//                   <thead>
//                     <tr>
//                       <th scope="col">اليوم</th>
//                       <th scope="col">الفترة الزمنية 1</th>
//                       <th scope="col">الفترة الزمنية 2</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {timetableData.map(item => (
//                       <tr key={item.id}>
//                         <td>{item.day}</td>
//                         <td>{item.timeSlot1}</td>
//                         <td>{item.timeSlot2}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       <Footer />
//     </body>
//   );
// };

// export default UniversityTimetableForm;
