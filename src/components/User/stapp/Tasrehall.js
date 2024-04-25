import React, { useState } from "react";
import "./Tasre.css";
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Tasrehall = () => {
    const [selectedOption1, setSelectedOption1] = useState(""); // State for first dropdown
    const [selectedOption2, setSelectedOption2] = useState(""); // State for second dropdown
    const [showCard, setShowCard] = useState(false); // State to toggle card display

    // Function to handle change in selection for first dropdown
    const handleChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };

    // Function to handle change in selection for second dropdown
    const handleChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    // Function to toggle display of the card and widget-left22 section
    const toggleCard = () => {
        setShowCard(!showCard);
    };

    return (
        <>
            <Share />
            <div className="widget-right222 window-widget222">
                <div className="window-header1">

                    <span className="window-title">تصريح جماعي</span>
                    <i className="icon fa-regular fa-pen-to-square"></i>
                </div>
                <div>
                    <h2 className="style2">الكلية</h2>
                    <select className="lara1" value={selectedOption2} onChange={handleChange2}>
                        <option value="">Choose</option>
                        {/* Add options */}
                    </select>
                    <p>Selected Option {selectedOption2}</p>
                </div>

                <div>
                    <h2 className="style1111">نوع التصريح</h2>
                    <select value={selectedOption1} onChange={handleChange1}>
                        <option value="">Choose</option>
                        {/* Add options */}
                    </select>
                    <p>Selected Option {selectedOption1}</p>
                </div>

                <div className="style7">
                    <h6 >تاريخ التصريح</h6>
                    <h6>من</h6>
                    <input type="date"></input>
                    <h6>إلي</h6>
                    <input type="date"></input>
                </div>

                <div>
                    <h6 className="style7334">السبب</h6>
                    <input type="text"></input>
                </div>

                {/* Button to toggle display of the card */}
                <button onClick={toggleCard}>Show Card</button>

                {/* Card to display student names */}
                {showCard && (
                    <div className="card">
                        {/* Display student names here */}
                    </div>
                )}

                <div className="widget-left22">
                    <div className="window-header1">
                        <i className="icon21 fa-solid fa-share"></i>
                        <span className="window-title1">تصريح جماعي  &gt; جامعه حلوان </span>
                        <i className="icon31 fa-solid fa-house-chimney"></i>
                    </div>
                    <ol>
                        <li class="oooh1">يتم اختيار نوع التصريح وادخال تاريخ البدايه والنهايه</li>
                        <li class="oooh2">ثم كتابه الملاحظات او السبب</li>
                        <li class="oooh3">ثم الظغط علي زر عرض الطلاب</li>
                        <li>تظهر قائمه باسماء الطلاب الساكنين</li>
                        <li class="oooh4">يتم اختيار الاسماء ثم الضغط علي زر تسجيل التصريح</li>

                    </ol>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Tasrehall;
