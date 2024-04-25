import React from "react";
import "./takepar.css";
import  { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Takepar = () => {

  const[isChecked,setIsChecked] = useState(false);
  const colleges = ['مبني1','مبني3','مبني5','مبني9','مبني المطرية']
  
          return(
          <>
          <Share/>
    <div className="widget-right16 window-widget16">
    <div className="window-header1">
        <i class="icon2 fa-solid fa-share"></i>
        <span className="window-title">استلام الوجبات باركود</span>
        <i class="icon fa-regular fa-pen-to-square"></i>
      </div>

      <div>
      <label class="first1">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        جامعة حلوان
      </label>

      <label class="second2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        المدينه الجامعيه بجامعه حلوان طلبه
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
export default Takepar;