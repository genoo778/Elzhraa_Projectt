import React, { useState } from 'react';
import { Button, Navbar, Nav  } from 'react-bootstrap';
import {  Link } from 'react-router-dom'
import './homee.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faFemale,
  faUserTie,
  faTimes,
  faClock, faBook, faUniversity, faHome, faUtensils, faMoneyBill, faBed, faGlobe,  faMobile, faChartBar, faFileAlt
} from '@fortawesome/free-solid-svg-icons';

export default function Homee() {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const closeSidebar = () => {
    setSelectedButton('');
  };

  const renderSidebar = () => {
    switch (selectedButton) {
      case 'boy-user':
        return (
          <div className="sidebar">
            <h3>بيانات الطلاب</h3>

          </div>
        );
      case 'girl-user':
        return (
          <div className="sidebar">
            <h3>بيانات الطالبات</h3>
            {/* Add Girl User specific content here */}
          </div>
        );
      case 'admin':
        return (
          <div className="sidebar" style={{color:'white'}}>
            <h5 style={{marginRight:'10px'}}>الاشراف علي النظام </h5>
            
            <Nav className="flex-column" style={{textAlign:'center'}}>
            <Link to="/ss" className="fantastic-button">
                <FontAwesomeIcon icon={faClock} /> مواعيد التقدم
            </Link>
            <Link to="/ip" className="fantastic-button">
                <FontAwesomeIcon icon={faBook} /> تعليمات التقدم
            </Link>
            <Link to="/c" className="fantastic-button">
                <FontAwesomeIcon icon={faUniversity} /> صور الجامعه
            </Link>
            <Link to="/ct" className="fantastic-button">
                <FontAwesomeIcon icon={faHome} /> انواع السكن المميز
            </Link>
            <Link to="/me" className="fantastic-button">
                <FontAwesomeIcon icon={faUtensils} /> الوجبات
            </Link>
            <Link to="/rs" className="fantastic-button">
                <FontAwesomeIcon icon={faMoneyBill} /> الرسوم
            </Link>
            <Link to="/ro" className="fantastic-button">
                <FontAwesomeIcon icon={faBed} /> الغرف
            </Link>
            
            <Link to="/cr" className="fantastic-button">
                <FontAwesomeIcon icon={faGlobe} /> البلاد
            </Link>
            <Link to="/u" className="fantastic-button">
                <FontAwesomeIcon icon={faUser} /> المستخدمين
            </Link>
            <Link to="/link11" className="fantastic-button">
        <FontAwesomeIcon icon={faMobile} /> تطبيقات الطلاب
        <div className="additional-links">
          <Link to="/na">تصحيح الرقم القومي </Link>
          <Link to="/st">تغير رقم الطالب</Link>
          <Link to="/ca">الغاء قبول طالب </Link>
          <Link to="/sn">تغير اسم الطالب</Link>
          <Link to="/link5">نقب طالب من الجامعه</Link>
          <Link to="/sp">تغير كلمه مرور الطالب</Link>
        </div>
      </Link>
            <Link to="/link12" className="fantastic-button">
                <FontAwesomeIcon icon={faChartBar} /> احصاءيات عامه
            </Link>
            <Link to="/re" className="fantastic-button">
                <FontAwesomeIcon icon={faFileAlt} /> تقارير
            </Link>
        </Nav>

          </div>
        );
      default:
        return null;
    }
  };
  
  return (
  
    <div>
      <Navbar bg="" variant="" style={{ background: '#123252',padding:'15px' }}>
        <div className="logo">
          <span>الزهراء</span>
          <div className="subtitle">لإدارة المدن الجامعية</div>
        </div>

        {/* Back Button */}

        <Button
          variant=""
          onClick={() => handleButtonClick('boy-user')}
          style={{ background: '#123252', color: 'white', marginRight: '15px',marginTop:'15px' }}
          className="nav-button"
        >
          <FontAwesomeIcon icon={faUser} className="button-icon" />
          بيانات الطلاب
        </Button>

        <Button
          variant=""
          onClick={() => handleButtonClick('girl-user')}
          style={{ background: '#123252', color: 'white', marginRight: '15px',marginTop:'15px' }}
          className="nav-button"
        >
          <FontAwesomeIcon icon={faFemale} className="button-icon" />
          بيانات الطالبات
        </Button>

        <Button
          variant=""
          onClick={() => handleButtonClick('admin')}
          style={{ background: '#123252', color: 'white', marginRight: '15px',marginTop:'15px' }}
          className="nav-button"
        >
          <FontAwesomeIcon icon={faUserTie} className="button-icon" />
          الاشراف علي النظام
        </Button>


        {/* Close Sidebar Button */}
        {selectedButton && (
          <Button
            variant=""
            onClick={closeSidebar}
            style={{ background: '#123252', color: 'white', marginTop:'15px',marginRight: '620px' }}
            className="nav-button"
          >
            <FontAwesomeIcon icon={faTimes} className="button-icon" />
          </Button>
        )}
      </Navbar>

      {renderSidebar()}

    </div>
  );
}
