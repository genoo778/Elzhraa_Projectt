import React, { useState } from 'react';
import './country.css';
import Share from '../../shared/Share';
import Footer from '../../shared/Footer';

const citiesData = {
  cairo: {
    name: 'القاهرة',
    details: 'عاصمة مصر وأكبر مدينة فيها، تعتبر مركزًا حضريًا رئيسيًا في العالم العربي.',
    distanceFromHelwanUniversity: 'قريبة',
    acceptanceStatusInCoordination: 'مقبولة',
    latitude: '30.0444',
    longitude: '31.2357',
    roadDistance: '100 كم',
    calculatedDistance: '120 كم'
  },
  alexandria: {
    name: 'الإسكندرية',
    details: 'تعتبر الإسكندرية مدينة ساحلية هامة في مصر، وتشتهر بمتحفها القومي ومكتبتها القديمة.',
    distanceFromHelwanUniversity: 'بعيدة',
    acceptanceStatusInCoordination: 'مقبولة',
    latitude: '31.2001',
    longitude: '29.9187',
    roadDistance: '200 كم',
    calculatedDistance: '220 كم'
  },
  luxor: {
    name: 'الأقصر',
    details: 'تشتهر الأقصر بمعابدها وآثارها الفرعونية الهامة، وهي واحدة من أهم وجهات السياحة في مصر.',
    distanceFromHelwanUniversity: 'بعيدة',
    acceptanceStatusInCoordination: 'مقبولة',
    latitude: '25.6872',
    longitude: '32.6396',
    roadDistance: '300 كم',
    calculatedDistance: '320 كم'
  },
  // Add more cities here...
};

const Countrys = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCitySelect = (event) => {
    setIsLoading(true);
    setSelectedCity(event.target.value);

    // Simulate loading with a delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <body>
      <Share />
      <div className={`form-container ${selectedCity ? 'active' : ''}`}>

        <div style={{ backgroundColor: '#123252', padding: '20px', width: '115.75%' , marginTop:'-60px',marginRight:'-59px' }}>
          <h1 style={{ marginRight: '100px' }}>البلاد - جامعة حلوان</h1>
          <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
        </div>
        <form className="city-form" style={{marginTop:'40px'}}>
          <label htmlFor="citySelect" style={{ color: '#123252' }}>اختر مدينة:</label>
          <select id="citySelect" value={selectedCity} onChange={handleCitySelect}>
            <option value="">اختر مدينة</option>
            {Object.keys(citiesData).map((cityKey) => (
              <option key={cityKey} value={cityKey}>{citiesData[cityKey].name}</option>
            ))}
          </select>
          {isLoading && <div className="loading-icon">Loading...</div>}
          <div className="city-details" style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
            {selectedCity && !isLoading && (
              <>
                <h2>{citiesData[selectedCity].name}</h2>
                <p>{citiesData[selectedCity].details}</p>
                <p><strong>البعد عن جامعة حلوان:</strong> {citiesData[selectedCity].distanceFromHelwanUniversity}</p>
                <p><strong>حالة القبول في التنسيق:</strong> {citiesData[selectedCity].acceptanceStatusInCoordination}</p>
                <p><strong>خط العرض:</strong> {citiesData[selectedCity].latitude}</p>
                <p><strong>خط الطول:</strong> {citiesData[selectedCity].longitude}</p>
                <p><strong>مسافة الطريق:</strong> {citiesData[selectedCity].roadDistance}</p>
                <p><strong>البعد المحسوب:</strong> {citiesData[selectedCity].calculatedDistance}</p>
              </>
            )}
          </div>
          <button className="btn-primary" onClick={() => setSelectedCity(null)} style={{marginRight:'300px'}}>اختر مدينة أخرى</button>
        </form>
      </div>
      <Footer />
    </body>
  );
};

export default Countrys;
