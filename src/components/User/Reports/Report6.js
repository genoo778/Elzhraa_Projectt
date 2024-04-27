
/* eslint-disable no-undef */
import React from "react";
import "./report6.css";
import { useState } from 'react';
import Footer from "../../shared/Footer";
import Share from "../../shared/Share";

const Report6 = () => {
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
            <div className="widget-right1166 window-widget1166">
                <div className="window-header1">
                    <i class="icon2 fa-solid fa-share"></i>
                    <span className="window-title">البطاقات المطبعة</span>
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
                <h2 class="style4"> :بيانات السكن </h2>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="option1"
                            checked={selectedOptions.group1 === "option1"}
                            onChange={(e) => handleCheckboxChange(e, "group1")}
                        />
                        مصري
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="option2"
                            checked={selectedOptions.group1 === "option2"}
                            onChange={(e) => handleCheckboxChange(e, "group1")}
                        />
                        وافد
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="option1"
                            checked={selectedOptions.group2 === "option1"}
                            onChange={(e) => handleCheckboxChange(e, "group2")}
                        />
                        قدامي
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="option2"
                            checked={selectedOptions.group2 === "option2"}
                            onChange={(e) => handleCheckboxChange(e, "group2")}
                        />
                        جدد
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="option1"
                            checked={selectedOptions.group3 === "option1"}
                            onChange={(e) => handleCheckboxChange(e, "group3")}
                        />
                        ساكنين
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="option2"
                            checked={selectedOptions.group3 === "option2"}
                            onChange={(e) => handleCheckboxChange(e, "group3")}
                        />
                        غير ساكنين
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="option3"
                            checked={selectedOptions.group3 === "option3"}
                            onChange={(e) => handleCheckboxChange(e, "group3")}
                        />
                        إخلاء
                    </label>
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
                        غير مطبوع
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="group1"
                            value="option2"
                            checked={selectedOption1.group1 === "option2"}
                            onChange={handleChange1}
                        />
                        مطبوع
                    </label>
                </div>
                <div class="style7">
                    <h2 >:الفتره</h2>
                    <h4>من</h4>
                    <input type="date"></input>
                    <h4>إلي</h4>
                    <input type="date"></input>
                </div>
                <div>
                    <h2 class="style55"> :نوع القبول</h2>
                    <select class="lara3" value={selectedOption2} onChange={handleChange2}>
                        <option value="">Choose</option>
                        <option value="option1">مقبول التنسيق</option>
                        <option value="option2">منحه الوكاله الامريكيه</option>
                        <option value="option3">مقبول تحويل</option>
                        <option value="option4">مقبول اجتماعي</option>
                        <option value="option5">مقبول في سكن خارجي</option>
                        <option value="option6">وافد</option>
                        <option value="option7">منحه خارجيه</option>
                        <option value="option8">مقبول طبي</option>
                        <option value="option6">مناطق نائيه</option>
                        <option value="option7">مقبول بحث اجتماعي</option>
                        {/* Add more options as needed */}
                    </select>
                    <p>Selected Option {selectedOption2}</p>
                </div>
                <div>
                    <h2 class="style99"> :الترتيب </h2>
                    <select class="lara4" value={selectedOption2} onChange={handleChange2}>
                        <option value="">Choose</option>
                        <option value="option1">الاسم</option>
                        <option value="option2">الكلية والفرقه</option>
                        <option value="option3">تاريخ الطباعه</option>
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
            <Footer />
        </>
    );
};
export default Report6;