// SidebarWithButton.js

import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './home.css';

const Home= () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar-rtl">
        <Container>
         
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleSidebar} />
        </Container>
      </Navbar>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </div>

      <div className={`overlay ${isSidebarOpen ? 'visible' : ''}`} onClick={toggleSidebar}></div>

      <div className={`content ${isSidebarOpen ? 'shift' : ''}`}>
        <Container>
          <h1>Main Content</h1>
          <Button onClick={toggleSidebar}>Toggle Sidebar</Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
