import React from "react";
import "./check.css";
import { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Checktalabat = () => {
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
    <Share/>
      <div className="widget-right7 window-widget7">
        <div className="window-header1">
      
          <span className="window-title">مراجعة الطلبات



          </span>
          <i class="icon fa-regular fa-pen-to-square"></i>
        </div>
        <div>
          <h2 class="beso">:الفرقة</h2>
          <select value={selectedOption1} onChange={handleChange1}>
            <option value="">Choose</option>
            <option value="option1">إعدادي</option>
            <option value="option2">الفرقة الاولي</option>
            <option value="option3">الفرقه الثانيه</option>
            <option value="option4">الفرقه الثالثه</option>
            <option value="option5">الفرقه الرابعه</option>
            {/* Add more options as needed */}
          </select>
          <p>Selected Option {selectedOption1}</p>
        </div>
        <div className="mego">
  <div>
    <label>الحالة:</label>
    <select value={selectedOption1} onChange={handleChange1} name="group1">
      <option value="">Choose</option>
      <option value="option1">الطلبات المرفوضة</option>
      <option value="option2">الطلبات الجديدة</option>
    </select>
  </div>
  <div>
    <label>الجنسية:</label>
    <select value={selectedOption2} onChange={handleChange2} name="group2">
      <option value="">Choose</option>
      <option value="option1">مصري</option>
      <option value="option2">وافد من الخارج</option>
    </select>
  </div>
  <div>
    <label>النوع:</label>
    <select value={selectedOptions.group1} onChange={(e) => handleCheckboxChange(e, "group1")} name="group1">
      <option value="option1">قدامي</option>
      <option value="option2">جدد</option>
    </select>
  </div>
  <div>
    <label>نوع السكن:</label>
    <select value={selectedOptions.group2} onChange={(e) => handleCheckboxChange(e, "group2")} name="group2">
      <option value="option1">سكن عادي</option>
      <option value="option2">سكن مميز</option>
    </select>
  </div>
</div>


        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button><i className="fas fa-search"></i></button>
        </div>

        <div className="widget-left77">
          <div className="window-header1">
            <i class="icon21 fa-solid fa-share"></i>
            <span className="window-title1"> مراجعه طلبات الانترنت &gt; جامعه حلوان </span>
            <i class="icon31 fa-solid fa-house-chimney"></i>
          </div>
          <ol>
            <li class="ballo1">مراجعه البيانات المتقدمين عن طريق الانترنت بالرجوع الي بيانات شئون الطلاب</li>
            <li class="ballo2">قبول طلب الالتحاق يعني تاكيد صحه البيانات التي ادخلهاالطالب وليس قبوله في المدينه</li>
            <li class="ballo3">في حاله القبول سيتم حفظ اسم الطالب ورقمه وصورته ونوع الدراسه كما في بيانات شئون الطلاب</li>
          </ol>
        </div>
      </div>

      <Footer/>
    </>
  );
};
export default Checktalabat;