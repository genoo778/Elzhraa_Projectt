import React, { useState } from "react";
import "./sahb.css"; // Assuming sahb.css contains Arabic styles
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Removephoto = () => {
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
            <div className="widget-right44 window-widget44">
                <div className="window-header1">
                    <span className="window-title">سحب الصور</span>
                    <i className="icon fa-regular fa-pen-to-square"></i>
                </div>

                <div className="search-container">
                    <label htmlFor="searchInput" className="search-label">البحث:</label>
                    <input type="text" id="searchInput" className="search-input" placeholder="أدخل مصطلح البحث" />
                    <button className="search-button">بحث</button>
                </div>

                <div className="df">
                    <label>
                        <input
                            type="radio"
                            name="group1"
                            value="option1"
                            checked={selectedOptions.group1 === "option1"}
                            onChange={handleChange}
                        />
                        برقم شئون الطلاب
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="group1"
                            value="option2"
                            checked={selectedOptions.group1 === "option2"}
                            onChange={handleChange}
                        />
                        بالرقم القومي
                    </label>
                </div>

                <div className="cf">
                    <label>
                        <input
                            type="checkbox"
                            value="option1"
                            checked={selectedOptions.group1 === "option1"}
                            onChange={(e) => handleCheckboxChange(e, "group1")}
                        />
                        قدامي
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="option2"
                            checked={selectedOptions.group1 === "option2"}
                            onChange={(e) => handleCheckboxChange(e, "group1")}
                        />
                        جدد
                    </label>
                </div>
                <div className="widget-left44">
                    <div className="window-header44">
                        <i class="icon21 fa-solid fa-share"></i>
                        <span className="window-title1">سحب الصور  &gt; جامعه حلوان </span>
                        <i class="icon31 fa-solid fa-house-chimney"></i>
                    </div>
                    <ol class="pepo1">
                        <li>سحب صور الطلاب الساكنين وليس لهم صور في شئون الطلاب</li>
                        <li>يجب ان يكون امتداد الوصوره (jbg)</li>
                        <li>يجب ان تكون ابعاد الصوره(76px عرض) و (88px طول) واي اختلاف في الابعاد يوثر علي الكارنيه</li>
                        <li>يتم سحب الصور بحد اقصي 90 صوره في المره</li>
                    </ol>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Removephoto;
