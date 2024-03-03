import './navv.css';
import React, { useState } from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function Share() {



  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <Navbar bg="" variant="" style={{ background: '#123252',padding:'10px' }}>
        <div className="logo">
          <span>الزهراء</span>
          <div className="subtitle">لإدارة المدن الجامعية</div>
        </div>

  
        {/* Back Button */}
        <Button
          variant=""
          onClick={goBack}
          style={{ background: '#123252', color: 'white' ,marginRight:'1050px'}}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
      </Navbar>
    </div>
  );
}
