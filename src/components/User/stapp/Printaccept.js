import React from "react";
import "./printacc.css";
import  { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Printaccept = () => {
  const [isChecked, setIsChecked] = useState(false);
  const colleges = ['كلية الهندسة', 'كلية حاسبات ومعلومات ', 'كلية الطب', 'كلية الزراعة', 'كلية الحقوق', 'كليه التجاره', 'كليه فنون جميله ', 'كليه فنون تطبيقيه', 'كليه علوم', 'كليه صيدله', 'كليه خدمه اجتماعيه', 'كلية المعلوماتيه التكنولوجيه', 'كليه سياحه وفنادق', 'كليه الاداب ', 'كليه اقتصاد منزلي', 'كليه تربيه بنين رياضي']; // أضف المزيد من الكليات هنا



          return(
          <>
          <Share/>
    <div className="widget-right1313 window-widget1313">
    <div className="window-header1">
        <i class="icon2 fa-solid fa-share"></i>
        <span className="window-title"> طباعه اخطار القبول</span>
        <i class="icon fa-regular fa-pen-to-square"></i>
        </div>

        <div>
      <label class="first">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        جامعة حلوان
      </label>

      {isChecked && (
        <div>
          {colleges.map((college, index) => (
            <label key={index} class="second">
              <input type="checkbox" />
              {college}
            </label>
          ))}
        </div>
      )}
    </div>



        </div> 
     <Footer/>
          </>
          );
        };
export default Printaccept;