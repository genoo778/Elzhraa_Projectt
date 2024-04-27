/* eslint-disable no-undef */
import React from "react";
import "./report2.css";
import { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Report2 = () => {
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
    return (
        <>
            <Share />
            <div>
                <div className="widget-right1122 window-widget1122">
                    <div className="window-header1">

                        <span className="window-title">الجزاءات</span>
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
                        <h2 >: تاريخ الجزاء</h2>
                        <h4>من</h4>
                        <input type="date"></input>
                        <h4>إلي</h4>
                        <input type="date"></input>
                    </div>
                    <div>
                        <h2 class="style69"> :نوع الجزاء</h2>
                        <select class="lara3" value={selectedOption2} onChange={handleChange2}>
                            <option value="">Choose</option>
                            <option value="option1">انذار بالحرمان</option>
                            <option value="option2">حجب النتيجه الدراسيه لعدم دفع المصروفات</option>
                            <option value="option3">تجاوز مده التصريح</option>
                            <option value="option4">جزاء الاداري</option>
                            <option value="option5">مجلس تاديب</option>
                            <option value="option6">لفت نظر</option>
                            <option value="option7">تجاوز مده الغياب</option>
                            <option value="option8">حرمان نهائي</option>
                            <option value="option9">حرمان موقت</option>
                            <option value="option10">تاخير</option>
                            <option value="option11">فصل شهر</option>
                            <option value="option12">انهاء الاقامه</option>
                            {/* Add more options as needed */}
                        </select>
                        <p>Selected Option {selectedOption2}</p>
                    </div>
                    <div>
                        <h2 class="style70"> :نوع القبول</h2>
                        <select class="lara4" value={selectedOption2} onChange={handleChange2}>
                            <option value="">Choose</option>
                            <option value="option1">مقبول تنسيق</option>
                            <option value="option2">منحه الوكاله الامريكيه</option>
                            <option value="option3">مقبول تحويل</option>
                            <option value="option4">مقبول اجتماعي</option>
                            <option value="option5">مقبول في سكن خارجي</option>
                            <option value="option6">وافد</option>
                            <option value="option1">منحه خارجيه </option>
                            <option value="option2">مقبول طبي</option>
                            <option value="option3">مناطق نائيه</option>
                            <option value="option4">مقبول بحث اجتماعي</option>
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

            </div>

            <Footer />
        </>
    );
};
export default Report2;