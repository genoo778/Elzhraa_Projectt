import React from "react";
import "./tanseq.css";
import  { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Tanseq = () => {
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

    <div className="widget-right window-widget">
    <div className="window-header1">
        <span className="window-title">التنسيق</span>
        <i class="icon fa-regular fa-pen-to-square"></i>
      </div> 
      <div>
      <h2 class="style101">:العام الأكاديمي</h2>
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
        <h3 class="pepo">:عدد السطور</h3>
        <input class="we" type="text"></input>
      </div>
      <div class="text">
        <a class="a11">تنسيق طلبه مصريين قدامى</a>
        <a class="a22">تنسيق طلبه مصريين جدد كل الشعب</a>
        <a class="a33">تنسيق طلبه مصريين كل الشعب (سكن مميز)</a>
        <a class="a44">تنسيق طلبه مصريين قدامي (سكن مميز)</a>
        
        
      </div>

      <div className="widget-left">
<div className="window-header1">
        <i class="icon21 fa-solid fa-share"></i>
        <span className="window-title1">التنسيق  &gt; جامعه حلوان </span>
        <i class="icon31 fa-solid fa-house-chimney"></i>
      </div> 
      <ol class="nm">
          <li>يمكن ترتيب البنود بتغيير الرقم امام كل بند</li>
          <li>في حالة الرغبه في الغاء اي بند يمكن تفريغ الخانة الخاصه به</li>
        </ol>
    </div>
    </div>
    <Footer/>
          </>
          );
        };
export default Tanseq;