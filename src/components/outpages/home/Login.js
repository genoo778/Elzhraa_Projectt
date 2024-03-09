import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform authentication logic here
    if (username.trim() === 'genoo' && password.trim() === 'gen') {
      // If authentication is successful, you can redirect the user to another page
      window.location.href = '/hh';
    } else {
      setError('Invalid username or password');
    }
  };

  const handleCloseTooltip = () => {
    setError('');
  };

  return (
    <div className="center-fixed-container">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <h1>
              <img src="R.png" style={{ width: "90px", marginTop: "50px", marginRight: "500px" }} alt="" />
            </h1>
            <form className="login" style={{ marginTop: "-170px" }} onSubmit={handleLogin}>
              <div className="login__field">
                <i className="login__icon fas fa-user" style={{ marginRight: '360px', fontSize: '15px', marginTop: '5px' }}></i>
                <input type="password" className="login__input" placeholder="الرقم القومي " value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock" style={{ marginRight: '360px', fontSize: '15px', marginTop: '5px' }}></i>
                <input type="password" className="login__inputt" placeholder="كلمه المرور" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="tooltip-top">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span>{error}</span>
                      <i className="fas fa-times" style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={handleCloseTooltip}></i>
                    </div>
                  </Tooltip>
                }
                show={error !== ''}
              >
                <button type="submit" className="button login__submit">
                  <span className="button__text" style={{ marginLeft: "150px", whiteSpace: "nowrap" }}>تسجيل دخول</span>
                  <i className="button__icon fas fa-chevron-left" style={{ marginRight: "-17px", whiteSpace: "nowrap" }}></i>
                </button>
              </OverlayTrigger>
              <a href="/r" className="button login__submit" style={{ textDecoration: "none" }}>
                <span className="button__text" style={{ marginLeft: "150px", whiteSpace: "nowrap" }}>تقديم طلب</span>
                <i className="button__icon fas fa-chevron-left" style={{ marginRight: "-17px", whiteSpace: "nowrap" }}></i>
              </a>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
