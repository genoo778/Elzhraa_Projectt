/* eslint-disable no-undef */
import React from "react";
import "./report3.css";
import  { useState } from 'react';
import Footer from "../../shared/Footer";
import Share from "../../shared/Share";

const Report3 = () => {
  const [selectedOption1, setSelectedOption1] = useState(""); // State for first dropdown
  const [selectedOption2, setSelectedOption2] = useState(""); // State for second dropdown
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  // Function to handle change in selection for first dropdown
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  // Function to handle change in selection for second dropdown
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };
  // Function to handle change in selection for second dropdown
  const handleChange3 = (event) => {
    setSelectedOption3(event.target.value);
  };
  // Function to handle change in selection for second dropdown
  const handleChange4 = (event) => {
    setSelectedOption4(event.target.value);
  };
  // Function to handle change in selection for second dropdown
  const handleChange5 = (event) => {
    setSelectedOption5(event.target.value);
  };
          return(
          <>
          <Share/>
    <div className="widget-right1133 window-widget1133">
    <div className="window-header1">
   
        <span className="window-title">الغياب والتصاريح</span>
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
      <h2 class="style2"> :الكلية</h2>
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
      <p>Selected Option {selectedOption2}</p>
    </div>
    <div class="style7">
      <h2 >: تاريخ التصريح</h2>  
      <h4>من</h4>
      <input type="date"></input>
      <h4>إلي</h4>
      <input type="date"></input>
      </div>
    <div>
      <h2 class="style77"> :الطابق</h2>
      <select class="lara3" value={selectedOption2} onChange={handleChange2}>
        <option value="">Choose</option>
        <option value="option1">دور رقم 2</option>
        <option value="option2">دور رقم 3</option>
        <option value="option3">دور رقم 4</option>
        <option value="option4">دور رقم 5</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption2}</p>
    </div>
    <div>
      <h2 class="style74"> :نوع التصريح</h2>
      <select class="lara4" value={selectedOption2} onChange={handleChange2}>
        <option value="">Choose</option>
        <option value="option1">تصريح مفاجئ</option>
        <option value="option2">تصريح بدون بونات </option>
        <option value="option3">غياب</option>
        <option value="option4">تصريح</option>
        <option value="option5">مرضي</option>
        <option value="option6">رحله/معسكر</option>
        <option value="option8">تأخير</option>
        <option value="option7">اجازه</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption2}</p>
    </div>
    <div>
      <h2 class="style52"> :الترتيب</h2>
      <select class="lara5" value={selectedOption2} onChange={handleChange2}>
        <option value="">Choose</option>
        <option value="option1">الاسم</option>
        <option value="option2">الكلية والفرقه</option>
        <option value="option3">تاريخ الجزاء</option>
        <option value="option4">رقم الملف</option>
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
            checked={selectedOption1.group1 === "option1"}
            onChange={handleChange1}
          />
          تصاعدي  
        </label>
        <label>
          <input
            type="radio"
            name="group1"
            value="option2"
            checked={selectedOption1.group1 === "option2"}
            onChange={handleChange1}
          />
          تنازلي
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
export default Report3;