import React, { useState } from 'react';
import './users.css';
import Share from '../../shared/Share';
import Footer from '../../shared/Footer';

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state variable for loading indicator

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchLabelClick = () => {
    // Here you can implement your search functionality
    alert('Implement your search functionality here!');
  };

  const handleAddButtonClick = () => {
    setIsLoading(true); // Set loading state to true
    // Simulate loading for 2 seconds (you can replace it with actual asynchronous task)
    setTimeout(() => {
      setIsLoading(false); // Reset loading state after 2 seconds
      setShowSearch(true);
    }, 2000);
  };

  return (
    <body>
      <Share />
      <div className="containerrr">
        <div className="carddd">
          <div className="carddd-body">
            <div style={{ backgroundColor: '#123252', padding: '20px', width: '108%', marginTop: '-19px', marginRight: '-19px' }}>
              <h1 style={{ marginRight: '80px' }}>المستخدمين - جامعة حلوان</h1>
              <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
            </div>
            <form>
              <div className="custom-form-group">
                <select
                  className="custom-form-control"
                  value={selectedOption}
                  onChange={handleOptionChange}
                  style={{ marginLeft: '400px', marginTop: '50px' }}
                >
                  <option value="">اختر الخيار</option>
                  <option value="withAuthority">لهم صلاحيه</option>
                  <option value="withoutAuthority">ليس لهم صلاحيه</option>
                </select>
              </div>
              <div className="custom-form-group">
                <button type="button" className="custom-btn btn-primary" onClick={handleAddButtonClick}>
                  {isLoading ? 'Loading...' : 'Add'}
                </button>
              </div>
              {showSearch && (
                <div className="custom-form-group search-bar">
                  <input type="text" className="custom-form-control" placeholder="Search..." />
                  <button className="custom-btn btn-primary" onClick={handleSearchLabelClick} style={{ marginTop: '5px' }}>Search</button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default App;
