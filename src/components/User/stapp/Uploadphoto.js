import React, { useState } from "react";
import "./upload.css";
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Uploadphoto = () => {
    const [mainOption, setMainOption] = useState('');
    const [subOption, setSubOption] = useState('');
    const [showSubOptions, setShowSubOptions] = useState(false);

    const handleMainOptionChange = (option) => {
        setMainOption(option);
        setShowSubOptions(option === 'Option 1');
    };

    const handleSubOptionChange = (option) => {
        setSubOption(option);
    };

    const handleFileUpload = async (files) => {
        // Assuming you have an API endpoint for file upload on your backend
        const formData = new FormData();
        formData.append('file', files[0]); // Assuming single file upload

        try {
            const response = await fetch('https://your-backend-api/upload', {
                method: 'POST',
                body: formData,
                // You may need to set headers based on your backend requirements
                // headers: {
                //   Authorization: 'Bearer your_token',
                // },
            });

            if (response.ok) {
                // File upload successful, handle the response from the backend
                console.log('File uploaded successfully');
            } else {
                // Handle errors if the upload fails
                console.error('File upload failed');
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error uploading file:', error);
        }
    };

    return (
        <>
            <Share />
            <form>
                <div className="widget-right1111 window-widget1111">
                    <div className="window-header1">
                        <span className="window-title">رفع الصور</span>
                        <i className="icon fa-regular fa-pen-to-square"></i>
                    </div>
                    <div>
                        <h4 className="qaz">رفع ملف الصور</h4>
                        <div className="search-bar55">
                            <input type="file" onChange={(e) => handleFileUpload(e.target.files)} />
                            <button><h6>رفع الملف</h6></button>
                        </div>

                        <h4 className="wsx1">نقل الصور من ملف مرفوع</h4>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="Option A"
                                    checked={mainOption === 'Option A'}
                                    onChange={() => handleMainOptionChange('Option A')} />
                                برقم الملف
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Option B"
                                    checked={mainOption === 'Option B'}
                                    onChange={() => handleMainOptionChange('Option B')} />
                                بالرقم القومي
                            </label>
                            <div className="widget-left1111">
                                <div className="window-header1">
                                    <i className="icon21 fa-solid fa-share"></i>
                                    <span className="window-title1">رفع الصور  &gt; جامعه حلوان </span>
                                    <i className="icon31 fa-solid fa-house-chimney"></i>
                                </div>
                                <ol className="boom">
                                    <li>رفع مجموعه صور الطلاب في ملف مضغوط بامتداد(zip)</li>
                                    <li>يجب ان يكون اسم الصوره هو الرقم القومي للطالب</li>
                                    <li>يجب ان يكون امتداد الصوره (jpg)</li>
                                    <li>يجب ان يكون أبعاد الصوره (76px عرض)(88px طول)واي اختلاف في الابعاديؤثر علي الكارنيه</li>
                                    <li>يتم ضغط جميع الصور في ملف واحد دون وضعها في مجلد</li>
                                    <li>يتم رفع الملف والضغط علي حفظ الصور سيقوم البرنامج بمراجعه الصور المرفوعه واظهار تقرير النتيجه</li>
                                    <li>بعد رفع الملف يتم اختيار نقل الصور في ملف مرفوع لبدء حفظ الصور مع الطلاب</li>
                                </ol>
                            </div>
                        </div>

                        {showSubOptions && (
                            <div>
                                <h2>Sub Radio Box</h2>
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            value="Sub Option 1"
                                            checked={subOption === 'Sub Option 1'}
                                            onChange={() => handleSubOptionChange('Sub Option 1')} />
                                        Sub Option 1
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="Sub Option 2"
                                            checked={subOption === 'Sub Option 2'}
                                            onChange={() => handleSubOptionChange('Sub Option 2')} />
                                        Sub Option 2
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
};

export default Uploadphoto;
