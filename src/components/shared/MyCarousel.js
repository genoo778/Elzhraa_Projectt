import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const containerStyle = {
  border: '9px solid #f5f5f5', // Add your preferred border style
  borderRadius: '10px', // Add border-radius for rounded corners if desired
  overflow: 'hidden',
  width: '90%',
  marginTop: '50px',
  marginRight: '60px' ,
  boxShadow: '30px'// Center the container
};
const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center', // Center the background image
  height: '400px',
  width: '100%', // Set width to cover the entire sidebar
};


const slideImages = [
  
  {
    url: '../4.jpg',
  },{
    url: '../401790412_302486209295255_4793129039275778934_n.jpg',
  },
  {
    url: '../2.png',
  },

  {
    url: '../5.png',
  },

];

const MyCarousel = () => {
  return (
    <div style={containerStyle} >
      <div className="slide-container">
        <Slide
          duration={1000} // Switch every 5 seconds
          prevArrow={<div />} // Hide the previous arrow
          nextArrow={<div />} // Hide the next arrow
        >
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default MyCarousel;
