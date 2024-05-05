import React, { useState } from 'react';
import './search.css';
import Share from '../shared/Share';
import Footer from '../shared/Footer';
import { FaTimes } from 'react-icons/fa';

const Instruct= () => {
  const [selectedUniversity, setSelectedUniversity] = useState(0);
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);

  const handleUniversityChange = (event) => {
    setSelectedUniversity(parseInt(event.target.value, 10));
  };

  const handleSearch = () => {
    if (selectedUniversity === 0) {
      alert('يرجى اختيار الجامعة أولاً.');
      return;
    }

    // Set loading state to true
    setIsLoading(true);

    // Simulate an asynchronous search request
    setTimeout(() => {
      // Implement your actual search logic here using the selectedUniversity state
      // For demonstration purposes, let's assume a simple search result
      const fakeSearchResult = `
      المستندات والأوراق المطلوبة:
      - صورة بطاقة الرقم القومى للطالب (والأصل للإطلاع).
      - شهادة ضمان إجتماعى معتمدة من مكتب الشئون الإجتماعية التابع لها محل إقامة الطالب.
      - إقرار الضامن للطالب معتمد من الجهة التى يعمل بها الضامن.
      - عدد (8) صور شخصية للطالب (مقاس 4×6).
      
      شروط وتعليمات:
      - الطلبة المتزوجون غير مصرح لهم دخول المدينة الجامعية
      - طلبة الانتساب الموجه غير مصرح لهم دخول المدينة الجامعية إلا بالسكن المميز
      - الطلاب الجدد الحاصلون على شهادات معادله من داخل مصر
      وكذلك لكل الاقسام الخاصة بكل كلية لا يحق لهم السكن الا بالمدن المميزة
    `;
    setSearchResult(fakeSearchResult);

      // Set loading state back to false after receiving the result
      setIsLoading(false);

      // Show the table
      setIsTableVisible(true);
    }, 1500); // Simulating a delay of 1.5 seconds for the sake of demonstration
  };

  const handleCloseTable = () => {
    // Hide the table
    setIsTableVisible(false);
  };

  return (
    <body>
      <Share />
      <div className="container mt-6">
        <div className="row d-flex justify-content-center">
          <div className="col-md-17">
            <div className="card p-4">
              <div style={{ backgroundColor: '#123252', padding: '15px', width: '105.5%', marginTop: '-24px', marginRight:'-24px' }}>
                <h1 style={{ marginRight: '80px' }}>إرشادات التقدم والإقرارت  - جامعة حلوان</h1>
                <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
              </div>
              <h5 style={{marginTop:"30px",fontSize:'30px'}}>قم باختيار الجامعه لمعرفه الارشادات</h5>
              <div className="row g-3 mt-2">
                <div className="col-md-3">
                  {/* University Selection Dropdown */}
                  <select
                    className="form-control"
                    onChange={handleUniversityChange}
                    value={selectedUniversity}
                    style={{ marginRight: '190px', width: '500px', marginTop: '9px' }}
                  >
                    <option value={0}>اختر الجامعة</option>
                    <option value={1}>جامعة حلوان </option>
                    <option value={2}>جامعة حلوان الاهليه</option>
              
                  </select>
                </div>
                
                <div className="col-md-3">
                  <button className="btn btn-secondary btn-block" onClick={handleSearch} disabled={isLoading} style={{marginTop:'80px',marginRight:"120px"}}>
                    {isLoading ? 'جاري البحث...' : 'استعلام'}
                  </button>
                </div>
              </div>
              {isLoading && (
                <div className="mt-3">
                  {/* Loading Indicator */}
                  <p>جاري التحميل...</p>
                </div>
              )}
              {isTableVisible && searchResult && !isLoading && (
                <div className="mt-3">
                  <h6>نتائج البحث:</h6>
                  <button className="btn btn" style={{ marginRight: '240px' }} onClick={handleCloseTable}>
                    <FaTimes style={{ marginRight: '5px' }} />
                  </button>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>الجامعة</th>
                        <th>المعلومات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{selectedUniversity}</td>
                        <td>{searchResult}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default Instruct;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import Axios
// import Share from '../shared/Share';
// import Footer from '../shared/Footer';
// import { FaTimes } from 'react-icons/fa';

// const Instruct = () => {
//   const [selectedUniversity, setSelectedUniversity] = useState(0);
//   const [searchResult, setSearchResult] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isTableVisible, setIsTableVisible] = useState(false);

//   const handleUniversityChange = (event) => {
//     setSelectedUniversity(parseInt(event.target.value, 10));
//   };

//   const handleSearch = async () => {
//     if (selectedUniversity === 0) {
//       alert('يرجى اختيار الجامعة أولاً.');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await axios.get(`http://your-backend-url/api/instructions/${selectedUniversity}`);
//       setSearchResult(response.data.instructions);
//       setIsTableVisible(true);
//     } catch (error) {
//       console.error('Error fetching instructions:', error);
//       alert('حدث خطأ أثناء جلب التعليمات.');
//     }

//     setIsLoading(false);
//   };

//   const handleCloseTable = () => {
//     setIsTableVisible(false);
//   };

//   return (
//     <body>
//       <Share />
//       <div className="container mt-6">
//         <div className="row d-flex justify-content-center">
//           <div className="col-md-17">
//             <div className="card p-4">
//               {/* Your JSX code */}
//               <h5 style={{ marginTop: "30px", fontSize: '30px' }}>قم باختيار الجامعه لمعرفه الارشادات</h5>
//               <div className="row g-3 mt-2">
//                 <div className="col-md-3">
//                   {/* University Selection Dropdown */}
//                   <select
//                     className="form-control"
//                     onChange={handleUniversityChange}
//                     value={selectedUniversity}
//                     style={{ marginRight: '190px', width: '500px', marginTop: '9px' }}
//                   >
//                     {/* Options */}
//                   </select>
//                 </div>
//                 {/* Search Button */}
//                 <div className="col-md-3">
//                   <button className="btn btn-secondary btn-block" onClick={handleSearch} disabled={isLoading} style={{ marginTop: '80px', marginRight: "120px" }}>
//                     {isLoading ? 'جاري البحث...' : 'استعلام'}
//                   </button>
//                 </div>
//               </div>
//               {/* Loading Indicator */}
//               {isLoading && (
//                 <div className="mt-3">
//                   <p>جاري التحميل...</p>
//                 </div>
//               )}
//               {/* Table */}
//               {isTableVisible && searchResult && !isLoading && (
//                 <div className="mt-3">
//                   {/* Table Content */}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </body>
//   );
// };

// export default Instruct;
