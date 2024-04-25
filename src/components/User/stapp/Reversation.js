import React from "react";
import "./Rever.css";
import { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";
const Reversation = () => {
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
      <div className="widget-right1088 window-widget1088">
        <div className="window-header1">

          <span className="window-title">حجز الوجبات </span>
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
          <h2 class="style2"> :الوجبه</h2>
          <select class="lara1" value={selectedOption2} onChange={handleChange2}>
            <option value="">Choose</option>
            <option value="option1">....</option>
            {/* Add more options as needed */}
          </select>
          <p>Selected Option {selectedOption2}</p>
        </div>
        <div>
          <h2 class="style3334">:تاريخ الحجز</h2>
          <input type="date"></input>
        </div>

        <div className="search-bar8">
          <input type="text" />
          <button><h6>اختر الملف</h6></button>
        </div>
        <div className="widget-left1088">
          <div className="window-header1">
            <i class="icon21 fa-solid fa-share"></i>
            <span className="window-title1">  حجز الوجبات بالاكسل&gt; جامعه حلوان </span>
            <i class="icon31 fa-solid fa-house-chimney"></i>
          </div>
          <ol class="nmb">
            <li>يجب التاكد من تاريخ تسجيل حجز الوجبات</li>
            <li>يجب اختيار حجز الوجبه الجاري حجزها</li>
            <li>الامتداد المسموحبه لملف الاكسل هو (xlsx)</li>
            <li>يجب ان يحتوي الملف علي الارقام القوميه للطلابفي اول عمود في اول صفحه في الملف</li>
            <li>بعد رفع الملف يتم ضغط علي زر تسجيل الوجبات</li>
            <li>ثم يظهر تقرير بعدد الطلابالمستحقين للوجبه وفد تم تسجيل حجزهم للوجبه</li>
            <li>ويظهر تقرير بالاخطاء</li>
          </ol>
        </div>
      </div>


      <Footer />
    </>
  );
};
export default Reversation;