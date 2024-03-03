import React, { useState } from 'react';
import { Button, Container, Navbar, Nav, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faCalendarAlt,
  faSignInAlt,
  faCheckCircle,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../shared/Footer';
import MyCarousel from '../../shared/MyCarousel';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedNavLink, setSelectedNavLink] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleNavLinkClick = (index) => {
    setSelectedNavLink(index);
  };
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div style={{ background: '#BCC9FD', minHeight: '100vh', color: '#333' }}>
      <Navbar  style={{ background: '#123252', color: '#fff',padding:'20px' }}>
      <div className="logo">
  <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '30px', fontWeight: 'bold', textShadow: '2px 2px 4px #000000' }}>الزهراء</span>
  <div className="subtitle" style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', fontWeight: 'bold', textShadow: '2px 2px 4px #000000' }}>لإدارة المدن الجامعية</div>
</div>

        <div style={{ marginRight: '1040px' }}>
          <Container fluid>
            <Button
              variant=""
              onClick={toggleSidebar}
              style={{ background: '#123252', color: 'white' }}
            >
              {showSidebar ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </Button>
          </Container>
        </div>
      </Navbar>
      {!showSidebar && (
        <div>
          <div>
            <MyCarousel />
          </div>
          <div className="row" style={{ marginTop: '-120px', background: '#fff', padding: '20px' }}>
            <div className="container">
              <div className="jumbotron text-center col-mid-6">
                <h1 className="inline-heading" style={{ color: '#123252' }}>رسالة جامعة حلوان</h1>
                <p>جامعة حلوان إحدى الجامعات الحكومية المصرية تعمل على : تقديم برامج أكاديمية ذات جودة عالية ،تحكمها المعايير المحلية والعالميه؛ لإعداد خريج متميز قادر على المنافسة والإبداع..</p>
                <button className="btn btn pull-right" onClick={openModal} style={{ color: '#fff', background: '#123252', marginLeft: '400px' }}>معلومات إضافية</button>
              </div>

              <div className="jumbotron text-center col-mid-6">
                <h1 className="inline-heading" style={{ color: '#123252' }}>رؤية جامعة حلوان</h1>
                <p>تقديم برامج أكاديمية ذات جودة عالية ،تحكمها المعايير المحلية والعالميه؛ لإعداد خريج متميز قادر على المنافسة والإبداع، وتلبية حاجات المجتمع، والإسهام في تطوره ورفاهيته.</p>
                <button className="btn btn pull-right" onClick={openModal} style={{ color: '#fff', background: '#123252', marginLeft: '300px' }}>معلومات إضافية</button>
              </div>
            </div>
          </div>
          <div className="jumbotron text-center" style={{ marginTop: '-150px', background: '#f8f9fa', padding: '20px' }}>
            <div className="icon-text-container">
              <div className="icon-text-item">
                <i className="fas fa-university"></i>
                <p>24</p>
                <p className='oo'>عدد الكليات والمعاهد</p>
              </div>
              <div className="icon-text-item">
                <i className="fas fa-user-graduate"></i>
                <p>198,000</p>
                <p className='oo'>عدد طلاب الجامعة المقيدين بمرحلة البكالوريوس</p>
              </div>
              <div className="icon-text-item">
                <i className="fas fa-chalkboard-teacher"></i>
                <p>6,631</p>
                <p className='oo'>عدد أعضاء هيئة التدريس والهيئة المعاونة</p>
              </div>
              <div className="icon-text-item">
                <i className="fas fa-user-graduate"></i>
                <p>1,610</p>
                <p className='oo'>عدد الطلاب الوافدين بمرحلة</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Container fluid>
        <div className={`content ${showSidebar ? 'open' : ''}`}>
        </div>

        {showSidebar && (
          <Navbar className="sidebar" style={{ marginRight: '-14px', marginTop: '0px' }}>
            <Nav className="flex-column" style={{ marginTop: '-430px' }}>
              <h6 className="bold" style={{ marginRight: '10px', color: 'white' }}>
                القائمة
              </h6>
              <div>
                {/* Continue adding your NavLinks here */}
                <Nav.Link
                  href="/tt"
                  style={{
                    color: selectedNavLink === 1 ? '#000' : '#f5f5f5',
                    fontWeight: 'bold',
                    background: selectedNavLink === 1 ? ' white' : 'transparent',
                  }}
                  onClick={() => handleNavLinkClick(1)}
                >
                  <FontAwesomeIcon icon={faCalendarAlt} /> مواعيد التقديم للمدن الجامعية
                </Nav.Link>
                <Nav.Link
                  href="/r"
                  style={{
                    color: selectedNavLink === 2 ? '#000' : '#f5f5f5',
                    fontWeight: 'bold',
                    background: selectedNavLink === 2 ? ' white' : 'transparent',
                  }}
                  onClick={() => handleNavLinkClick(2)}
                >
                  <FontAwesomeIcon icon={faSignInAlt} /> تقديم طلب التحاق بالمدينة الجامعيه
                </Nav.Link>
                <Nav.Link
                  href="/"
                  style={{
                    color: selectedNavLink === 3 ? '#000' : '#f5f5f5',
                    fontWeight: 'bold',
                    background: selectedNavLink === 3 ? ' white' : 'transparent',
                  }}
                  onClick={() => handleNavLinkClick(3)}
                >
                  <FontAwesomeIcon icon={faSignInAlt} /> تسجيل دخول الطلاب
                </Nav.Link>
                <Nav.Link
                  href="/s"
                  style={{
                    color: selectedNavLink === 4 ? '#000' : '#f5f5f5',
                    fontWeight: 'bold',
                    background: selectedNavLink === 4 ? ' white' : 'transparent',
                  }}
                  onClick={() => handleNavLinkClick(4)}
                >
                  <FontAwesomeIcon icon={faCheckCircle} /> الاستعلام عن القبول بالمدن الجامعي
                </Nav.Link>
                <Nav.Link
                  href="/i"
                  style={{
                    color: selectedNavLink === 5 ? '#000' : '#f5f5f5',
                    fontWeight: 'bold',
                    background: selectedNavLink === 5 ? ' white' : 'transparent',
                  }}
                  onClick={() => handleNavLinkClick(5)}
                >
                  <FontAwesomeIcon icon={faBookOpen} /> إرشادات التقدم والإقرارت
                </Nav.Link>
              </div>
            </Nav>
          </Navbar>
        )}
      </Container>

      <Footer />
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>مزيد من المعلومات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
