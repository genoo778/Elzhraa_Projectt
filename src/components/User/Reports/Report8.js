import React from "react";
import "./report8.css";
import { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Report8 = () => {
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
            <div className="widget-right1188 window-widget1188">
                <div className="window-header1">
                    <i class="icon2 fa-solid fa-share"></i>
                    <span className="window-title">وجبات الطلاب</span>
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
                    <h2 >:الفتره</h2>
                    <h4>من</h4>
                    <input type="date"></input>
                    <h4>إلي</h4>
                    <input type="date"></input>
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
                        وجبات تخلف عنها الطالب
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="group2"
                            value="option1"
                            checked={selectedOptions.group2 === "option1"}
                            onChange={handleChange}
                        />
                        وجبات يستحقها الطالب
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="group3"
                            value="option1"
                            checked={selectedOptions.group3 === "option1"}
                            onChange={handleChange}
                        />
                        وجبات استلمها الطالب
                    </label>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button><i className="fas fa-search"></i></button>
                </div>
                <div className="button-container">
                    <button>عرض التقرير</button>
                    <button>توقعيات التقرير</button>
                </div>

            </div>

            <Footer />
        </>
    );
};
export default Report8;