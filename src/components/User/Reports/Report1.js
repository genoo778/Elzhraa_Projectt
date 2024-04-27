import React from "react";
import "./report1.css";
import  { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Report1 = () => {
  const [selectedOption1, setSelectedOption1] = useState(""); // State for first dropdown
  const [selectedOption2, setSelectedOption2] = useState(""); // State for second dropdown
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");
  const [selectedOption7, setSelectedOption7] = useState("");
  const [selectedOption8, setSelectedOption8] = useState("");
  const [selectedOption9, setSelectedOption9] = useState("");
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

  const handleChange4 = (event) => {
    setSelectedOption4(event.target.value);
  };

  const handleChange5 = (event) => {
    setSelectedOption5(event.target.value);
  };

  const handleChange6 = (event) => {
    setSelectedOption6(event.target.value);
  };

  const handleChange7 = (event) => {
    setSelectedOption7(event.target.value);
  };

  const handleChange8 = (event) => {
    setSelectedOption8(event.target.value);
  };
  const handleChange9 = (event) => {
    setSelectedOption9(event.target.value);
  };

 

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
          return(
          <>
          <Share/>
    <div className="widget-right11123 window-widget11123">
    <div className="window-header1">
  
        <span className="window-title">قوائم الطلاب</span>
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
      <h2 class="style1122"> :الكلية</h2>
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
      <h2 class="style3">:الفرقه</h2>
      <select value={selectedOption3} onChange={handleChange3}>
        <option value="">Choose</option>
        <option value="option1">اعدادي</option>
        <option value="option2">الاولي</option>
        <option value="option3">الثانيه</option>
        <option value="option4">الثالثه</option>
        <option value="option5">الرابعه</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption1}</p>
    </div>

    <div>
      <h2 class="style444">:الجنسيه</h2>
      <select value={selectedOption4} onChange={handleChange4}>
        <option value="">Choose</option>
        <option value="option1">مصري</option>
        <option value="option2">وافد من الخارج</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption1}</p>
    </div>

    <div>
      <h2 class="style5">:محافظه الميلاد</h2>
      <select value={selectedOption5} onChange={handleChange5}>
        <option value="">Choose</option>
        <option value="option1">القاهرة</option>
        <option value="option2">الاسكندريه</option>
        <option value="option3">منيا</option>
        <option value="option4">الجيزه</option>
        <option value="option5">الفيوم</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption1}</p>
    </div>

    <div>
      <h2 class="style6">:محل الاقامه</h2>
      <select value={selectedOption6} onChange={handleChange6}>
        <option value="">Choose</option>
        <option value="option1">مدينه السلام</option>
        <option value="option2">مدينه الشروق</option>
        <option value="option3">الزاويه الحمراء</option>
        <option value="option4">حلوان</option>
        <option value="option5">المرج</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption1}</p>
    </div>

    <div>
      <h2 class="style8">:نوع السكن</h2>
      <div>
        <label>
          <input
            type="checkbox"
            value="option1"
            checked={selectedOptions.group1 === "option1"}
            onChange={(e) => handleCheckboxChange(e, "group1")}
          />
          ساكني العام السابق
        </label>
        <label>
          <input
            type="checkbox"
            value="option2"
            checked={selectedOptions.group1 === "option2"}
            onChange={(e) => handleCheckboxChange(e, "group1")}
          />
          غير ساكنين
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
          سكن عادي
        </label>
        <label>
          <input
            type="checkbox"
            value="option2"
            checked={selectedOptions.group2 === "option2"}
            onChange={(e) => handleCheckboxChange(e, "group2")}
          />
          سكن مميز فردي طلبه 
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
          مصري
        </label>
        <label>
          <input
            type="checkbox"
            value="option2"
            checked={selectedOptions.group3 === "option2"}
            onChange={(e) => handleCheckboxChange(e, "group3")}
          />
          وافد 
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
          جدد
        </label>
        <label>
          <input
            type="checkbox"
            value="option2"
            checked={selectedOptions.group3 === "option2"}
            onChange={(e) => handleCheckboxChange(e, "group3")}
          />
          قدامي 
        </label>
      </div>

      <div>
      <h2 class="style16">:الطابق</h2>
      <select value={selectedOption8} onChange={handleChange8}>
        <option value="">Choose</option>
        <option value="option1">الارضي</option>
        <option value="option2">الاول</option>
        <option value="option3">الثاني</option>
        <option value="option4">الثالث</option>
        <option value="option5">الرابع</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption1}</p>
    </div>

    <div class="style77">
      <h6 >: تاريخ السكن</h6>  
      <h4>من</h4>
      <input type="date"></input>
      <h4>إلي</h4>
      <input type="date"></input>
    </div>

    <div class="style88">
      <h6>: تاريخ الاخلاء</h6>  
      <h6>من</h6>
      <input type="date"></input>
      <h6>إلي</h6>
      <input type="date"></input>
    </div>

      <div>
      <h2 class="style17">:ذوي احتياجات خاصه</h2>
      <div>
        <label>
          <input
            type="radio"
            name="group1"
            value="option1"
            checked={selectedOptions.group1 === "option1"}
            onChange={handleChange}
          />
          لا 
        </label>
        <label>
          <input
            type="radio"
            name="group1"
            value="option2"
            checked={selectedOptions.group1 === "option2"}
            onChange={handleChange}
          />
          نعم  
        </label>
      </div>

<div class="oop">

      <div>
        <label>
          <input
            type="checkbox"
            value="option1"
            checked={selectedOptions.group3 === "option1"}
            onChange={(e) => handleCheckboxChange(e, "group3")}
          />
          اظهار نوع السكن
        </label>
        </div>
    </div>

    <div>
        <label>
          <input
            type="checkbox"
            value="option1"
            checked={selectedOptions.group3 === "option1"}
            onChange={(e) => handleCheckboxChange(e, "group3")}
          />
          اظهار كود الطالب
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
          اظهار بيانات الاب
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
          اظهار بيانات ولي الامر
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
          اظهار المسافه
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
          اظهار الفئه
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
          تجميع بالفئه
        </label>
        </div>
</div>   
<div>
      <h2 class="style9">:الترتيب</h2>
      <select value={selectedOption7} onChange={handleChange7}>
        <option value="">Choose</option>
        <option value="option1">الاسم</option>
        <option value="option2">الكليه والفرقه</option>
        <option value="option3">مكان السكن</option>
        <option value="option4">تاريخ السكن</option>
        <option value="option5">تاريخ الاخلاء</option>
        <option value="option6">رقم الملف</option>
        <option value="option7">التقدير</option>
        <option value="option8">نسبه الثانويه</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption1}</p>
    </div>

    <div>
      <h2 class="style10">:نوع القبول</h2>
      <select value={selectedOption9} onChange={handleChange9}>
        <option value="">Choose</option>
        <option value="option1">مقبول بالتنسيق</option>
        <option value="option2">منحه الوكاله الامريكيه</option>
        <option value="option3">مقبول تحويل</option>
        <option value="option4">مقبول اجتماعي</option>
        <option value="option5">مقبول في سكن خارجي</option>
        <option value="option1">وافد</option>
        <option value="option2">منحه خارجيه</option>
        <option value="option3">مقبول طبي</option>
        <option value="option4">مناطق نائيه</option>
        <option value="option5">مقبول بحث اجتماعي</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption1}</p>
    </div>

    <div class="oop2">

<div>
  <label>
    <input
      type="checkbox"
      value="option1"
      checked={selectedOptions.group3 === "option1"}
      onChange={(e) => handleCheckboxChange(e, "group3")}
    />
    تجميع بالمدينه الجامعيه
  </label>
  </div>
</div>

<div>
  <label>
    <input
      type="checkbox"
      value="option1"
      checked={selectedOptions.group3 === "option1"}
      onChange={(e) => handleCheckboxChange(e, "group3")}
    />
    اظهار رقم الملف
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
    اظهار رقم الطابق  
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
    اظهار رقم المدينه 
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
    اظهار العنوان
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
    اظهار الغرفه
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
    اظهار البريد الالكتروني 
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
    اظهار  سكن بتغذيه او بدون 
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
    اظهار  السكن في الاعوام السابقه 
  </label>
  </div>

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
export default Report1;