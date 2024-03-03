import React, { useState } from 'react';
import './search.css';
import Share from '../shared/Share';
import Footer from '../shared/Footer';
import { FaTimes } from 'react-icons/fa';

const SearchForm = () => {
  const [searchNumber, setSearchNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);

  const handleSearch = () => {
    if (searchNumber.trim() === '') {
      alert('يرجى إدخال رقم قومي صالح للبحث.');
      return;
    }

    // Set loading state to true
    setIsLoading(true);

    // Simulate an asynchronous search request
    setTimeout(() => {
      // Implement your actual search logic here using the searchNumber state
      // For demonstration purposes, let's assume a simple search result
      const fakeSearchResult = `Information about the number ${searchNumber}`;
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
      
      <div className="container mt-6" style={{ width:'100%' }}>
        
        <div className="row d-flex justify-content-center" style={{ marginTop: '-70px' }}>
          <div className="col-md-10"style={{ width:'100%' }}>
            
            <div className="card p-3 py-4" style={{ width:'100%' }}>
            <div style={{ backgroundColor: '#123252', padding: '15px', width: '103.5%',marginTop:'-25px',marginRight:'-16px' }}>
                <h1 style={{ marginRight: '35px' }}>الاستعلام عن القبول  - جامعة حلوان</h1>
                <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
              </div>
              <h5 style={{ marginTop: '30px',marginLeft:'10px',fontSize:'25px'}}>قم بإدخال الرقم القومى المراد الاستعلام عنه لعام 2023-2024</h5>
              <div className="row g-3 mt-2">
                <div className="col-md-3"></div>
                <div className="col-md-6" style={{ marginRight: '-30px', width: '500px', marginTop: '20px' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ادخل الرقم"
                    value={searchNumber}
                    onChange={(e) => setSearchNumber(e.target.value)}
                  />
                </div>
                <div className="col-md-3">
                  <button className="btn btn-secondary btn-block" onClick={handleSearch} disabled={isLoading} style={{ marginRight: '360px',  marginTop: '20px' }}>
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
                        <th>الرقم القومي</th>
                        <th>المعلومات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{searchNumber}</td>
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

export default SearchForm;
