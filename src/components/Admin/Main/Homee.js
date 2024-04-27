import React, { useState } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './homee.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faFemale,
  faUserTie,
  faTimes,
  faClock, faBook, faUniversity, faHome, faUtensils, faMoneyBill, faBed, faGlobe, faMobile, faChartBar, faFileAlt
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
      case 'girl-user':
        return (
          <div className="sidebar" style={{ color: 'white' }}>
            {selectedButton === 'boy-user' ? (
              <h5 style={{ marginRight: '10px' }}>بيانات الطلاب</h5>
            ) : (
              <h5 style={{ marginRight: '10px' }}>بيانات الطالبات</h5>
            )}

            <Nav className="flex-column" style={{ textAlign: 'center' }}>
              <Link to="/if" className="fantastic-button">
                <FontAwesomeIcon icon={faHome} />البيانات الأساسيه
              </Link>
              <Link to="/sk" className="fantastic-button">
                <FontAwesomeIcon icon={faHome} />السكن
              </Link>
              <Link to="/fl" className="fantastic-button">
                <FontAwesomeIcon icon={faUniversity} /> فصل الطلاب
              </Link>
              <Link to="/ga" className="fantastic-button">
                <FontAwesomeIcon icon={faHome} /> الجزاءات
              </Link>
              <Link to="/tr" className="fantastic-button">
                <FontAwesomeIcon icon={faHome} /> الغياب والتصاريح
              </Link>
              <Link to="/rm" className="fantastic-button">
                <FontAwesomeIcon icon={faMoneyBill} /> الرسوم
              </Link>
              <Link to="/by" className="fantastic-button">
                <FontAwesomeIcon icon={faHome} /> ابيان حاله
              </Link>

              <Link to="/byy" className="fantastic-button">
                <FontAwesomeIcon icon={faGlobe} /> بيان بالرسوم
              </Link>
              <Link to="/wa" className="fantastic-button">
                <FontAwesomeIcon icon={faHome} /> حجب وجبات
              </Link>
              <Link to="/link11" className="fantastic-button">
                <FontAwesomeIcon icon={faMobile} /> تطبيقات الطلاب
                <div className="additional-links">
                  <div>
                  <div className="link-group">
                    <Link to="/rem">سحب الصور</Link>
                    <Link to="/up">رفع الصور </Link>
                    <Link to="/ta">تصريح جماعي</Link>
                  </div>
                  <div className="link-group">
                    <Link to="/gal"> جزاء جماعي </Link>
                    <Link to="">اخلاء جماعي </Link>
                    <Link to="/fas"> فصل جماعي</Link>
                    <Link to="/taw">استلام الوجبات اكسيل </Link>
                  </div>
                  <div className="link-group">
                    <Link to="/che"> مراجعة الطلبات </Link>
                    <Link to="/rev">حجز الوجبات </Link>
                    <Link to="/tan">التنسيق</Link>
                    <Link to="/tap">استلام الوجبات باركود</Link>
                  </div>
              
                  <div className="link-group">
                    <Link to="/praa">طباعه اخطار القبول</Link>
                    <Link to="/acc">قبول الحالات</Link>
                    <Link to="/prc">طباعه البطاقات </Link>
                    <Link to="/ret">اعاده الطباعه</Link>
                  </div>
              

                  <div className="link-group">
                    <Link to="/chs">تغير نوع السكن</Link>
                    <Link to="/rea">اعاده اخطار القبول</Link>
                    <Link to="/sp">حالات البحث الاجتماعي </Link>
                    <Link to="/rep">حجز الوجبات باركود</Link>
                  </div>
            
                  </div>
                </div>
              </Link>

              <Link to="/" className="fantastic-button">
                <FontAwesomeIcon icon={faChartBar} /> احصاءيات عامه
              </Link>
              <Link to="/" className="fantastic-button">
                <FontAwesomeIcon icon={faFileAlt} /> تقارير
                <div className="additional-links">
                  <div>
                  <div className="link-group">
                    <Link to="/r1">قوائم الطلاب</Link>
                    <Link to="/r2">الجزاءات </Link>
                    <Link to="/r3">الغياب و التصاريح </Link>
                  </div>
                  <div className="link-group">
                    <Link to="/r4"> الرسوم </Link>
                    <Link to="/r5">حالة الغرف </Link>
                    <Link to="/r6"> البطاقات المطبعة</Link>
                    <Link to="/7">طلاب بدون صور </Link>
                  </div>
                  <div className="link-group">
                    <Link to="/r8"> وجبات الطلاب  </Link>
                    <Link to="/r9">قوائم البحث الاجتماع</Link>
                    <Link to="/r10">امر تسكين </Link>
                    <Link to="/r11">المحرومين الوجبات</Link>
                  </div>
              
                  <div className="link-group">
                    <Link to="/r12">الطلاب المفصولين </Link>
                    <Link to="/r13">اخطار بالقبول </Link>
                    <Link to="/r14">بيان استلام الوجبات</Link>

                  </div>
              

       
                  </div>
                </div>
              </Link>
            </Nav>

          </div>
        );
      case 'admin':
        return (
          <div className="sidebar" style={{ color: 'white' }}>
            <h5 style={{ marginRight: '10px' }}>الاشراف علي النظام </h5>

            <Nav className="flex-column" style={{ textAlign: 'center' }}>
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
      <Navbar bg="" variant="" style={{ background: '#123252', padding: '15px' }}>
        <div className="logo">
          <span>الزهراء</span>
          <div className="subtitle">لإدارة المدن الجامعية</div>
        </div>

        {/* Back Button */}

        <Button
          variant=""
          onClick={() => handleButtonClick('boy-user')}
          style={{ background: '#123252', color: 'white', marginRight: '15px', marginTop: '15px' }}
          className="nav-button"
        >
          <FontAwesomeIcon icon={faUser} className="button-icon" />
          بيانات الطلاب
        </Button>

        <Button
          variant=""
          onClick={() => handleButtonClick('girl-user')}
          style={{ background: '#123252', color: 'white', marginRight: '15px', marginTop: '15px' }}
          className="nav-button"
        >
          <FontAwesomeIcon icon={faFemale} className="button-icon" />
          بيانات الطالبات
        </Button>

        <Button
          variant=""
          onClick={() => handleButtonClick('admin')}
          style={{ background: '#123252', color: 'white', marginRight: '15px', marginTop: '15px' }}
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
            style={{ background: '#123252', color: 'white', marginTop: '15px', marginRight: '620px' }}
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
