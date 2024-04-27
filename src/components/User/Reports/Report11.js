import React from "react";
import "./report11.css";
import  { useState } from 'react';
import Footer from "../../shared/Footer";
import Share from "../../shared/Share";

const Report11= () => {
  const [selectedOption1, setSelectedOption1] = useState(""); // State for first dropdown
  const [selectedOption2, setSelectedOption2] = useState(""); // State for second dropdown
  const [selectedOption3, setSelectedOption3] = useState("");
  // Function to handle change in selection for first dropdown
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  // Function to handle change in selection for second dropdown
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleChange3 = (event) => {
    setSelectedOption3(event.target.value);
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
    <div className="widget-right1111 window-widget1111">
    <div className="window-header1">
        <i class="icon2 fa-solid fa-share"></i>
        <span className="window-title">المحرومين  الوجبات</span>
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


    <div>
      <h2 class="style2">:الوجبة</h2>
      <select value={selectedOption1} onChange={handleChange1}>
        <option value="">Choose</option>
        <option value="option1">....</option>

        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption1}</p>
    </div>

    <div>
      <h2 class="style3"> :الترتيب</h2>
      <select class="lara1" value={selectedOption2} onChange={handleChange2}>
        <option value="">Choose</option>
        <option value="option1">الاسم</option>
        <option value="option2">الكليه والفرقه</option>
        <option value="option3">رقم الملف</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption2}</p>
    </div>

      <div>
        <label>
          <input
            type="radio"
            name="group1"
            value="option1"
            checked={selectedOptions.group1 === "option1"}
            onChange={handleChange}
          />
          تنازلي 
        </label>
        <label>
          <input
            type="radio"
            name="group1"
            value="option2"
            checked={selectedOptions.group1 === "option2"}
            onChange={handleChange}
          />
          تصاعدي  
        </label>
      </div>
  
      
    <div>
        <h3 class="pepo">:عدد السطور</h3>
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
export default Report11;