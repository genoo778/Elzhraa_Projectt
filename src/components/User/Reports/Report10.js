import React from "react";
import "./report10.css";
import { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Report10 = () => {
  const [selectedOption1, setSelectedOption1] = useState(""); // State for first dropdown

  // Function to handle change in selection for first dropdown
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  return (
    <>
    <Share/>
      <div className="widget-right1110 window-widget1110">
        <div className="window-header1">
          <i class="icon2 fa-solid fa-share"></i>
          <span className="window-title">أمر تسكين</span>
          <i class="icon fa-regular fa-pen-to-square"></i>
        </div>
        <div>
          <h2 class="style1">:العام الأكاديمي</h2>
          <select value={selectedOption1} onChange={handleChange1}>
            <option value="">Choose</option>
            <option value="option1">2020/2021</option>
            <option value="option2"> 2021/2022</option>
            <option value="option3">2022/2023</option>
            <option value="option4">2023/2024</option>
            <option value="option5">2024/2025</option>
            {/* Add more options as needed */}
          </select>
          <p>Selected Option {selectedOption1}</p>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button><i className="fas fa-search"></i></button>
        </div>

        <div className="button-container">
          <button>عرض التقرير</button>
          <button>توقعيات التقرير</button>
        </div>
      
    </div >    
     <Footer/>
          </>
          );
        };
export default Report10;