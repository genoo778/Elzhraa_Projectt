import React from 'react';
import "./login.css";

const Login = () => {
  return (
    <div className="center-fixed-container">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <h1>
              <img src="R.png" style={{ width: "90px", marginTop: "50px", marginRight: "500px" }} alt="" />
            </h1>
            <form className="login" style={{ marginTop: "-170px" }}>
              <div className="login__field">
                <i className="login__icon fas fa-user" style={{marginRight:'360px',fontSize:'15px',marginTop:'5px'}}></i>
                <input type="password" className="login__input" placeholder="الرقم القومي " />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"style={{marginRight:'360px',fontSize:'15px',marginTop:'5px'}}></i>
                <input type="password" className="login__inputt" placeholder="كلمه المرور" />
              </div>
              <a href="/hh" className="button login__submit">
                <span className="button__text" style={{ marginLeft: "150px", whiteSpace: "nowrap",textDecorationLine:'none' }}>تسجيل الدخول</span>
                <i className="button__icon fas fa-chevron-left" style={{ marginRight: "-17px", textDecorationLine:'none', whiteSpace: "nowrap" }}></i>
              </a>
              <butto className="button login__submit" href="/r">
                <span className="button__text " style={{ marginLeft: "150px", whiteSpace: "nowrap" }} href="/r">
                  تقديم طلب
                </span>
                <i className="button__icon fas fa-chevron-left"></i>
              </butto>
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
