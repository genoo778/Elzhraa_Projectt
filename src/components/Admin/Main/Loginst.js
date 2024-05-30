import React, { useState } from 'react';
import axios from 'axios';


const Loginst = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://your-backend-url/api/login', { username, password });
      localStorage.setItem('token', response.data.token); // Store the token in localStorage
      window.location.href = '/h'; // Redirect to the dashboard or home page
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <section className="h-100 h-custom" style={{ background: '#BCC9FD' }} dir="rtl">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img
                src="https://th.bing.com/th/id/R.91f0375839a364ddd0f41a94ad14d358?rik=Br658qaFHepdlA&riu=http%3a%2f%2fwww.helwan.edu.eg%2fwp-content%2fuploads%2f2021%2f09%2fWhatsApp-Image-2021-09-08-at-14.25.07-1000x400.jpeg&ehk=5y6qZJoTYsi3yLnSijDNqlUrdYqu9BHdmcNCaUYLj1I%3d&risl=&pid=ImgRaw&r=0"
                className="w-100"
                style={{ borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem' }}
                alt="صورة عينة"
              />
              <div className="card-body p-4 p-md-5 text-center">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{ color: '#235787', marginTop: "-20px" }}>
                  الزهراء لإدارة المدن الجامعية<br />
                </h3>
                <form className="px-md-2" style={{ marginTop: '-30px', marginRight:"20px" }} onSubmit={handleLogin}>
                  <div className="form-outline mb-4"style={{ width:"100%"}}>
                    <label className="form-labell" htmlFor="username" style={{ display: 'block', textAlign: 'center'}}>اسم المستخدم</label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      
                    />
                  </div>
                  <div className="form-outline mb-4"style={{ width:"100%"}}>
                    <label className="form-label" htmlFor="password" style={{ display: 'block', textAlign: 'center' }}>كلمة المرور</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && <div className="error">{error}</div>}
                  <button type="submiit" className="custom-buttonn " style={{width: "50%",marginRight:'100px'}}>
                    دخول
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loginst;
