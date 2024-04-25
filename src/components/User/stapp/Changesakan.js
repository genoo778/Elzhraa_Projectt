import React from "react";
import "./changesa.css";
import { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Changesakan = () => {
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
  return (
    <>
      <Share />
      <div className="widget-right window-widget">
        <div className="window-header1">
        
          <span className="window-title">تغيير نوع السكن</span>
          <i class="icon fa-regular fa-pen-to-square"></i>
        </div>
        <div class="mega">
          <div>
            <label class="nht">
              <input
                type="radio"
                name="group1"
                value="option1"
                checked={selectedOptions.group1 === "option1"}
                onChange={handleChange}
              />
              سكن عادي
            </label>
            <label>
              <input
                type="radio"
                name="group1"
                value="option2"
                checked={selectedOptions.group1 === "option2"}
                onChange={handleChange}
              />
              سكن مميز
            </label>
          </div>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button><i className="fas fa-search"></i></button>
        </div>
        <div className="widget-left">
          <div className="window-header1">
            <i class="icon21 fa-solid fa-share"></i>
            <span className="window-title1">  تغيير نوع السكن للطالب &gt; جامعه حلوان </span>
            <i class="icon31 fa-solid fa-house-chimney"></i>
          </div>
          <ol class="soso">
            <li>التطبيق لتغيير نوع السكن للطلاب الساكنيناو لهم بيانات دون الاضطرار لالغاء القبول وبالتالي</li>
            <li>اما الطلاب المنقولين وليس لهم اي بيانات اخري يمكن الغاء قبولهم </li>
          </ol>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Changesakan;