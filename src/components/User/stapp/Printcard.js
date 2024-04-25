import React from "react";
import "./prc.css";
import { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Printcard = () => {
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
            <div className="widget-right window-widget">
                <div className="window-header1">
          
                    <span className="window-title">طباعه البطاقات</span>
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
                    <label>
                        <input
                            type="radio"
                            name="group1"
                            value="option1"
                            checked={selectedOptions.group1 === "option1"}
                            onChange={handleChange}
                        />
                        طباعه مفرده
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="group1"
                            value="option2"
                            checked={selectedOptions.group1 === "option2"}
                            onChange={handleChange}
                        />
                        طباعه مجمعه
                    </label>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button><i className="fas fa-search"></i></button>
                </div>
                <div className="widget-left">
                    <div className="window-header1">
                        <i class="icon21 fa-solid fa-share"></i>
                        <span className="window-title1">طباعه البطاقات  &gt; جامعه حلوان </span>
                        <i class="icon31 fa-solid fa-house-chimney"></i>
                    </div>
                    <ol class="beka">
                        <li>الاسماء المعروضه بالقائمه هي:</li>
                        <ol>
                            <li>الطلاب الساكنين</li>
                            <li>لهم صور</li>
                            <li>لم يتم طباعه بطاقاتهم بعد وتم اختيارهم في اعاده الطباعه</li>
                        </ol>
                        <li>يتم اختيار الاسماء المراد طباعه البطاقات لها ثم الضغط علي العرض</li>
                        <li>يتم مراجعه شكل البطاقات ثم الضغط علي طباعه</li>
                        <li>بعد التاكد من طباعه البطاقات المختاره بشكل صحيح يجب الضغط علي زر الاخفاء ليتم تسجيل العمليه</li>
                    </ol>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default Printcard;