import React from "react";
import "./report7.css";
import  { useState } from 'react';
import Footer from "../../shared/Footer";
import Share from "../../shared/Share";

const Report7 = () => {
  const [selectedOption1, setSelectedOption1] = useState(""); // State for first dropdown
  const [selectedOption2, setSelectedOption2] = useState(""); // State for second dropdown

  // Function to handle change in selection for first dropdown
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  // Function to handle change in selection for second dropdown
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const [selectedOptions3, setSelectedOptions3] = useState({
    group1: "",
    group2: "",
    group3: ""
  });

  // Function to handle change in selection
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions({ ...selectedOptions, [name]: value });
  };
  
  const [selectedOptions, setSelectedOptions] = useState({
    group1: "",
    group2: "",
    group3: ""
  });

  // Function to handle change in selection
  const handleCheckboxChange = (event, groupName) => {
    const { value, checked } = event.target;
    setSelectedOptions(prevState => {
      // Clear the other checkbox in the same group
      const updatedState = Object.keys(prevState).reduce((acc, key) => {
        if (key === groupName) {
          acc[key] = checked ? value : "";
        } else if (prevState[key] === value) {
          acc[key] = "";
        } else {
          acc[key] = prevState[key];
        }
        return acc;
      }, {});
      return updatedState;
    });
  };
          return(
          <>
          <Share/>
    <div className="widget-right1177 window-widget1177">
    <div className="window-header1">
        <i class="icon2 fa-solid fa-share"></i>
        <span className="window-title">طلاب بدون صور</span>
        <i class="icon fa-regular fa-pen-to-square"></i>
      </div> 
    <div>
      <h2 class="style00"> :الترتيب</h2>
      <select class="lara1" value={selectedOption2} onChange={handleChange2}>
        <option value="">Choose</option>
        <option value="option1">الاسم</option>
        <option value="option2">الكليه والفرقه</option>
        <option value="option3">رقم الملف</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption2}</p>
    </div>
 <div class="boda"  > 
      <div >
        <label class="martin1">
          <input
            type="checkbox"
            value="option1"
            checked={selectedOptions.group1 === "option1"}
            onChange={(e) => handleCheckboxChange(e, "group1")}
          />
          قدامي
        </label>
        <label class="martin1">
          <input
            type="checkbox"
            value="option2"
            checked={selectedOptions.group1 === "option2"}
            onChange={(e) => handleCheckboxChange(e, "group1")}
          />
          جدد
        </label>
      </div>
           
      <div>
        <label class="martin2">
          <input
            type="checkbox"
            value="option1"
            checked={selectedOptions.group2 === "option1"}
            onChange={(e) => handleCheckboxChange(e, "group2")}
          />
    إظهار رقم الملف
        </label>
    </div>
    </div> 
    <div>
        <h3 class="pepo10">:عدد السطور</h3>
        <input class="we" type="text"></input>
      </div>
      <div className="button-container">
                    <button>عرض التقرير</button>
                    <button>توقعيات التقرير</button>
                </div>
    </div>
    <Footer/>
          </>
          );
        };
export default Report7;