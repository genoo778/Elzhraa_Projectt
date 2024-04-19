import React from "react";
import  { useState } from 'react';
import Share from "../shared/Share";
import Footer from "../shared/Footer";
import './info.css'

const Bayan1= () => {
  const [selectedOption1, setSelectedOption1] = useState(""); // State for first dropdown
  const [selectedOption2, setSelectedOption2] = useState(""); // State for second dropdown
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [studentInfo, setStudentInfo] = useState(null); // State for student information
  // Function to handle change in selection for first dropdown
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  // Function to handle change in selection for second dropdown
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };


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
  const handleSearch = () => {
    setIsLoading(true); // Set loading to true
    // Simulate API call or data fetching
    setTimeout(() => {
      // Mock student information, replace with actual data retrieval logic
      const mockStudentInfo = {
        name: "John Doe",
        id: "12345",
        // Other student information...
      };
      setStudentInfo(mockStudentInfo);
      setIsLoading(false); // Set loading back to false after fetching data
    }, 2000); // Simulate loading time of 2 seconds
  };     return(
          <>
          <Share/>
          <div className="widget-right window-widget">
    <div style={{ backgroundColor: '#123252', padding: '20px', width: '107%' , marginTop:'-20px',marginRight:'-20px' }}>
    <span className="window-title">بيان حالة-جامعه حلوان</span>
          <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
        </div>
      <div>
      <h2 class="style1">العام الأكاديمي</h2>
      <select value={selectedOption1} onChange={handleChange1}>
        <option value="">Choose</option>
        <option value="option1">2020/2021</option>
        <option value="option2"> 2021/2022</option>
        <option value="option3">2022/2023</option>
        <option value="option4">2023/2024</option>
        <option value="option5">2024/2025</option>
        {/* Add more options as needed */}
      </select>
     
    </div>
    <div>
      <h2 class="style2"> الكلية</h2>
      <select class="lara1" value={selectedOption2} onChange={handleChange2}>
        <option value="">Choose</option>
        <option value="option1">حاسبات ومعلومات </option>
        <option value="option2"> اداب</option>
        <option value="option3">علوم</option>
        <option value="option4">طب</option>
        <option value="option5">هندسه</option>
        <option value="option6">تجاره</option>
        {/* Add more options as needed */}
      </select>

    </div>

    <div>
  <h2 class="style3">بيانات الجدد</h2>
  <div>
    <select value={selectedOptions.group1} onChange={handleChange}>
      <option value="">اختر</option>
      <option value="option1">طلاب الجامعة</option>
      <option value="option1">مصري</option>
      <option value="option2">وافد من الخارج</option>
      <option value="option2">من خارج الجامعة</option>
      <option value="option1">متقدمين</option>
      <option value="option2">محولين</option>
    </select>
  </div>
  
</div>

    <div>
  <h2 class="style4">بيانات السكن </h2>
  <div class="select-options">
    <select value={selectedOptions.group1} onChange={(e) => handleChange(e, "group1")}>
      <option value="">اختر...</option>
      <option value="option1">قدامي</option>
      <option value="option2">جدد</option>
      <option value="option1">ساكنين</option>
      <option value="option2">غير ساكنين</option>
      <option value="option3">إخلاء</option>
      <option value="option1">سكن عادي</option>
      <option value="option2">سكن مميز</option>
    </select>
   
  </div>
  <div className="search-bar">
    <input type="text" placeholder="Search..." />
    <button onClick={handleSearch}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <i className="fas fa-search"></i>
      )}
    </button>
  </div>
</div>   
    </div>
    <Footer/>
          </>
          );
        };
export default Bayan1;