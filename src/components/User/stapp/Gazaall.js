import React from "react";
import "./gazzaa.css";
import { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Gazaall = () => {
    const [selectedOption1, setSelectedOption1] = useState(""); // State for first dropdown
    const [selectedOption2, setSelectedOption2] = useState(""); // State for second dropdown
    const [selectedOption3, setSelectedOption3] = useState("");
    // Function to handle change in selection for first dropdown
    const handleChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };

    // Function to handle change in selection for second dropdown
    const handleChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };
    const handleChange3 = (event) => {
        setSelectedOption3(event.target.value);
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
            <div className="widget-right33 window-widget33">
                <div className="window-header1">
             
                    <span className="window-title">جزاء جماعي</span>
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

                <div>
                    <h2 class="style3">:نوع الجزاء</h2>
                    <select class="lara1" value={selectedOption2} onChange={handleChange2}>
                        <option value="">Choose</option>
                        <option value="option1">إنذار بالحرمان</option>
                        <option value="option2">حجب النتيجه الدراسيه لعدم سداد المصروفات</option>
                        <option value="option3">تجاوز مده التصاريح</option>
                        <option value="option4">جزاء اداري</option>
                        <option value="option5">مجلس تاديب</option>
                        <option value="option6">لفت نظر</option>
                        <option value="option7">تجاوز مده الغياب</option>
                        <option value="option8">حرمان مؤقت</option>
                        <option value="option9">حرمان نهائي</option>
                        <option value="option10">تأخير</option>
                        <option value="option11">فصل شهر</option>
                        <option value="option12">فصل اسبوع</option>

                        {/* Add more options as needed */}
                    </select>
                    <p>Selected Option {selectedOption2}</p>
                </div>

                <div class="style7">
                    <h2 >:تاريخ الجزاء</h2>
                    <h4>من</h4>
                    <input type="date"></input>
                    <h4>إلي</h4>
                    <input type="date"></input>
                </div>
                <div>
                    <h2 class="style334">:السبب</h2>
                    <input type="text"></input>
                    <button >Show Card</button>
                </div>
                <div className="widget-left33">
                    <div className="window-header1">
                        <i class="icon21 fa-solid fa-share"></i>
                        <span className="window-title1">جزاء جماعي  &gt; جامعه حلوان </span>
                        <i class="icon31 fa-solid fa-house-chimney"></i>
                    </div>
                    <ol class="moon">
                        <li>يتم اختيار نوع الجزاء وادخال تاريخ الجزاء</li>
                        <li>ثم كتابه السبب او الملاحظات</li>
                        <li>ثم الضغط علي زر عرض الطلاب</li>
                        <li>تظهر قائمه باسماء الطلاب الساكنين</li>
                        <li>يتم اختيار الاسماء ثم الضغط علي زر تسجيل الجزاء</li>

                    </ol>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default Gazaall;