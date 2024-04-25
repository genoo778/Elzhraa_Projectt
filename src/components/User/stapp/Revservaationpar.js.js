import React from "react";
import "./revpar.css";
import { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Revservaationpar = () => {
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
      <div className="widget-right17 window-widget17">
        <div className="window-header1">
          <i class="icon2 fa-solid fa-share"></i>
          <span className="window-title">حجز الوجبات بالباركود</span>
          <i class="icon fa-regular fa-pen-to-square"></i>
        </div>
        <div>
          <h2 class="style171">:العام الأكاديمي</h2>
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

        <div class="style7">
          <h2 >:تاريخ الوجبات</h2>
          <h4>من</h4>
          <input type="date"></input>
          <h4>إلي</h4>
          <input type="date"></input>
        </div>

        <div>
          <h2 class="style333">:الوجبات</h2>
          <input type="text"></input>
        </div>


        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button><i className="fas fa-search"></i></button>
        </div>
        <div className="widget-left">
          <div className="window-header1">
            <i class="icon21 fa-solid fa-share"></i>
            <span className="window-title1"> حجز الوجبات بالباركود &gt; جامعه حلوان </span>
            <i class="icon31 fa-solid fa-house-chimney"></i>
          </div>
          <ol class="beka">
            <li>يجب التاكد من ان المؤشر يقف في مربع البحث</li>
            <li>يجب التاكد من اتصال قارئ الباركود بجهاز الكمبيوتر</li>
            <li>يتم تمرير بطاقه الطالب امام القاري ليظهر الرقم القومي في مربع البحث</li>
            <li>يقوم البرنامج بفحص البيانات الطالب صاحب الرقم والتاكد من احقيته في الحصول علي الوجبه</li>
            <li>في حاله عدم احقيه الطالب في الحصول علي الوجبه تظهر رساله بالسبب</li>
            <li>في حاله احقيه الطالب في الحصول علي الوجبه يتم تسجيل الحجز </li>
            <li>ملحوظه: يرجي ضبط قاري الباركود لاضافه enterواحده بعد قراءه الرقم القومي</li>
          </ol>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Revservaationpar;