import React from "react";
import "./fassll.css";
import { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Faslall = () => {
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
            <Share />
            <div className="widget-right55 window-widget55">
                <div className="window-header1">


                    <span className="window-title">

                        فصل جماعي
                    </span>
                    <i class="icon fa-regular fa-pen-to-square"></i>
                </div>
                <div>
                    <h2 class="style1123">:العام الأكاديمي</h2>
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
                    <h2 class="style2234"> :نوع الرسوم</h2>
                    <select class="lara1" value={selectedOption2} onChange={handleChange2}>
                        <option value="">Choose</option>
                        <option value="option1">....</option>
                        <option value="option2">رسم السكن والتغذيه لطلاب الجامعه الاهليه</option>
                        <option value="option3">رسم السكن والتغذيه للطالب العادي</option>
                        <option value="option4">رسم السكن والتغذيه للطالب المتميز</option>
                        {/* Add more options as needed */}
                    </select>
                    <p>Selected Option {selectedOption2}</p>
                </div>

                <div>
                    <h2 class="style2"> :الشهر</h2>
                    <select class="lara1" value={selectedOption3} onChange={handleChange3}>
                        <option value="">Choose</option>
                        <option value="option1">يناير</option>
                        <option value="option2">فبراير</option>
                        <option value="option3">مارس</option>
                        <option value="option4">ابريل</option>
                        <option value="option5">مايو</option>
                        <option value="option6">يونيو</option>
                        <option value="option7">يوليو</option>
                        <option value="option8">اغسطس</option>
                        <option value="option9">سيبتمبر</option>
                        <option value="option10">اكتوبر</option>
                        <option value="option11">نوفمبر</option>
                        <option value="option12">ديسمبر</option>
                        {/* Add more options as needed */}
                    </select>

                </div>
                <button >Show Card</button>



                <div className="widget-left55">
                    <div className="window-header1">
                        <i class="icon21 fa-solid fa-share"></i>
                        <span className="window-title1">فصل جماعي  &gt; جامعه حلوان </span>
                        <i class="icon31 fa-solid fa-house-chimney"></i>
                    </div>
                    <ol class="keta1">
                        <li>يتم اختيار العام الاكاديمي ونوع الرسوم وشهر سداد الرسوم</li>
                        <li>ثم الضغط علي زر عرض الطلاب</li>
                        <li>تظهر قائمه باسماء الطلاب الغير مسددين للرسوم المختاره</li>
                        <li>يتم اختيار الاسماء ثم الضغط علي زر فصل الطلاب</li>
                        <li>سيتم فصل الطلاب بتاريخ 18/6/2024</li>
                    </ol>
                </div>

            </div>

            <Footer />

        </>
    );
};
export default Faslall;