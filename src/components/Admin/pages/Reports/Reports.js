import React, { useState } from 'react';
import { FaSpinner, FaPlus } from 'react-icons/fa';
import './reports.css';
import Share from '../../../shared/Share';
import Footer from '../../../shared/Footer';

function Reports() {
  const [selectedReport, setSelectedReport] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [reportDetails, setReportDetails] = useState({
    'تقرير 1': {
      reportName: 'تقرير 1',
      reportType: 'نوع التقرير 1',
      createdAt: new Date(),
      updatedAt: null 
    },
    'تقرير 2': {
        reportName: 'تقرير 2',
        reportType: 'نوع التقرير 2',
        createdAt: new Date(),
        updatedAt: null 
    },
    'تقرير 3': {
        reportName: 'تقرير 3',
        reportType: 'نوع التقرير 3',
        createdAt: new Date(),
        updatedAt: null 
    }
  });
  const [newReportDetails, setNewReportDetails] = useState({
    reportName: '',
    reportType: '',
  });
  const [showModal, setShowModal] = useState(false);

  const handleReportChange = (event) => {
    setSelectedReport(event.target.value);
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

  const handleAddReport = () => {
    setShowModal(true); 
  };

  const handleModalClose = () => {
    setShowModal(false); 
  };

  const handleAddReportAndCloseModal = () => {
    if (newTitle && !reportDetails[newTitle]) {
      setReportDetails(prevState => ({
        ...prevState,
        [newTitle]: {
          ...newReportDetails,
          createdAt: new Date(), 
          updatedAt: new Date() 
        }
      }));
      setNewReportDetails({
        reportName: '',
        reportType: '',
      });
    }
    setNewTitle('');
    setShowModal(false);
  };

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setNewReportDetails(prevState => ({
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
        <div style={{ backgroundColor: '#123252', padding: '20px', width: '117%', marginTop: '-48px', marginRight: '-48px' }}>
              <h1 style={{ marginRight: '100px' }}>التقارير - جامعة حلوان</h1>
              <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
            </div>
          <h3 className="card-title text-center mb-4" style={{marginTop:'30px'}}>
            أنواع التقارير
          </h3>
          <div className="form-group">
            <label className="mb-2"></label>
            <select
              className="form-select form-control-lg"
              value={selectedReport}
              onChange={handleReportChange}
            >
              <option value="" disabled>--اختر--</option>
              {Object.keys(reportDetails).map((report, index) => (
                <option key={index} value={report}>{report}</option>
              ))}
            </select>
          </div>
          {showDetails && (
  <div className="card report-details">
    <div className="card-body">
      <h4 className="card-title">تفاصيل التقرير:</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>اسم التقرير :</label>
            <input type="text" value={reportDetails[selectedReport]?.reportName} onChange={(e) => handleInputChange(e, 'reportName')} className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>نوع التقرير :</label>
            <input type="text" value={reportDetails[selectedReport]?.reportType} onChange={(e) => handleInputChange(e, 'reportType')} className="form-control" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <h5>تفاصيل عن التقرير المختار:</h5>
            <p>
              {/* Display details about the selected report */}
              Add your details about the selected report here...
            </p>
          </div>
        </div>
      </div>
      <button className="btn btn-secondary" onClick={() => setShowDetails(false)}>اغلاق</button>
    </div>
  </div>
)}

          <div className="text-center mt-4">
            <button
              className={`btn btn-lg ${buttonClicked ? 'btn-secondary' : ' #235787'} custom-button`}
              onClick={handleSaveClick}
              disabled={!selectedReport || loading} 
            >
              {loading ? <FaSpinner className="spinner" /> : (buttonClicked ? 'تم العرض ' : 'عرض التقرير')}
            </button>
          </div>

          <div className="text-center mt-4">
            <button className="btn btn" onClick={handleAddReport} style={{backgroundColor:'white',marginTop:'-400px',marginRight:'500px'}}>
              <FaPlus />
            </button>
          </div>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleModalClose}>&times;</span>
                <h2>اضافه تقرير جديد</h2>
                <form>
                  <div className="form-group">
                    <label>اسم التقرير</label>
                    <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>نوع التقرير</label>
                    <input type="text" value={newReportDetails.reportType} onChange={(e) => handleInputChange(e, 'reportType')} />
                  </div>
                </form>
                <button onClick={handleAddReportAndCloseModal}>اضافه</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Reports;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaSpinner, FaPlus } from 'react-icons/fa';
// import './reports.css';
// import Share from '../../../shared/Share';
// import Footer from '../../../shared/Footer';

// function Reports() {
//   const [selectedReport, setSelectedReport] = useState('');
//   const [buttonClicked, setButtonClicked] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);
//   const [newTitle, setNewTitle] = useState('');
//   const [reportDetails, setReportDetails] = useState({});
//   const [newReportDetails, setNewReportDetails] = useState({
//     reportName: '',
//     reportType: '',
//   });
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     // Fetch reports from the backend when the component mounts
//     fetchReports();
//   }, []);

//   const fetchReports = async () => {
//     try {
//       const response = await axios.get('http://your-backend-api/reports');
//       setReportDetails(response.data);
//     } catch (error) {
//       console.error('Error fetching reports:', error);
//     }
//   };

//   // Other code remains the same...

//   const handleSaveClick = async () => {
//     setButtonClicked(true);
//     setLoading(true);
//     try {
//       // Send a request to save the selected report
//       const response = await axios.post('http://your-backend-api/save-report', {
//         reportName: selectedReport,
//         // Add other data you want to save
//       });
//       setShowDetails(true);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error saving report:', error);
//       setLoading(false);
//     }
//   };

//   const handleAddReportAndCloseModal = async () => {
//     try {
//       // Send a request to add a new report
//       const response = await axios.post('http://your-backend-api/add-report', newReportDetails);
//       setNewReportDetails({
//         reportName: '',
//         reportType: '',
//       });
//       setNewTitle('');
//       setShowModal(false);
//       // Fetch updated reports after adding a new one
//       fetchReports();
//     } catch (error) {
//       console.error('Error adding report:', error);
//     }
//   };

//   // Other code remains the same...

//   return (
//     // JSX code remains the same...
//   );
// }

// export default Reports;
