import React from 'react';

const Loginst = () => {
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
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{ marginTop: "-20px", color: '#235787', marginRight: "30px" }}>
                                    الزهراء لإدارة المدن الجامعية<br />

                                </h3>
                                <form className="px-md-2" style={{ marginTop: '-30px' }}>
                                    <div className="form-outline mb-4 bold">
                                        <label className="form-label" htmlFor="form3Example1q">لرقم القومى</label>
                                        <input type="text" id="form3Example1q" className="form-control" />

                                    </div>

                                    <div className="form-outline mb-4 bold">
                                        <label className="form-label" htmlFor="form3Example1q" >كلمة المرور</label>
                                        <input type="text" id="form3Example1q" className="form-control" />


                                    </div>


                                    <button type="button" className="custom-button" dir="rtl">
                                        <a href="/h">دخول</a>
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
