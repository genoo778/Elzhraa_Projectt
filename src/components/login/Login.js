import React from 'react'
import "./login.css"
export default function Login() {
	return (
		<div>
			<body style={{ marginLeft: "-200px", background: 'linear-gradient(20deg, #fdfdff, #235787)' }}>
				<div className="container">

					<div className="screen">

						<div className="screen__content">
							<h1>
								<img src="R.png" style={{ width: "90px", marginTop: "50px", marginRight: "225px" }} alt="" />
							</h1>
							<form className="login" style={{ marginTop: "-150px" }}>
								<div className="login__field">
									<i className="login__icon fas fa-user"></i>
									<input type="text" className="login__input" placeholder="الرقم القومي " />
								</div>
								<div className="login__field">
									<i className="login__icon fas fa-lock"></i>
									<input type="password" className="login__input" placeholder="كلمه المرور" />
								</div>
								<button className="button login__submit">
									<span className="button__text " style={{ marginLeft: "150px" }}>تسجيل الدخول </span>
									<i className="button__icon fas fa-chevron-left"></i>
								</button>
								<a className="button login__submit" href="/hh">
									<span className="button__text " style={{ marginLeft: "150px" }} href="/h">
										تقديم طلب
									</span>
									<i className="button__icon fas fa-chevron-left"></i>
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
			</body>
		</div>
	)
}
