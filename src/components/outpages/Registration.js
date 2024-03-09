import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Share from '../shared/Share';
import Footer from '../shared/Footer';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    nationalId: '',
    studentCode: '',
    name: '',
    arabicFullName: '',
    birthDate: '',
    birthPlace: '',
    gender: '',
    religion: 'مسلم,مسيحي',
    residencePlace: 'مصر',
    detailedAddress: '',
    email: '',
    phone: '',
    mobile: '',
    fatherName: '',
    fatherFullName: '',
    fatherNationalId: '',
    fatherOccupation: '',
    fatherPhone: '',
    guardianName: '',
    guardianFullName: '',
    guardianRelationship: '',
    guardianNationalId: '',
    guardianPhone: '',
  });

  const [isPrimaryForm, setIsPrimaryForm] = useState(true);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      birthDate: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic or API call here
    console.log('Form Data:', formData);
  };

  const handleToggleForm = () => {
    setIsPrimaryForm((prevIsPrimaryForm) => !prevIsPrimaryForm);
  };
  return (
    <body style={{ background: '#BCC9FD' }}>
      <Share />
      <Container>

        <section className="text-center">
          {/* Background image */}
          <div
            className="p-5 bg-image"
            style={{
              backgroundImage:
                "url('')",
              height: '300px',
            }}
          ></div>
          {/* Background image */}

          <div
            className="card mx-4 mx-md-5 shadow-5-strong"
            style={{
              marginTop: '-250px',
              background: 'hsla(0, 0%, 100%, 0.8)',
              backdropFilter: 'blur(60px)',
            }}
          >
            <div className="card-body py-5 px-md-5">
              <Button
                type="button"
                className={isPrimaryForm ? 'btn btn-primary mb-4 mx-2' : 'btn btn-success mb-4 mx-2'}
                onClick={handleToggleForm}
              >
                {isPrimaryForm ? 'وافد' : 'مصري'}
              </Button>
              <Button
                type="button"
                className={isPrimaryForm ? 'btn btn-secondary mb-4 mx-2' : 'btn btn-warning mb-4 mx-2'}
                onClick={handleToggleForm}
              >
                {isPrimaryForm ? 'مصري' : 'وافد'}
              </Button>
              {isPrimaryForm ? (
                <Form onSubmit={handleSubmit}>
                  <div className="card-body py-5 px-md-5">
                    <div className="row d-flex justify-content-center">
                      <div className="col-lg-8">
                        <h2 className="fw-bold mb-5">سجل الآن</h2>
                        <Form onSubmit={handleSubmit}>
                          <Row>
                            {/* National ID */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formNationalId">
                                <Form.Label>الرقم القومى</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="nationalId"
                                  value={formData.nationalId}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>

                            {/* Student Code */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formStudentCode">
                                <Form.Label>كود الطالب</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="studentCode"
                                  value={formData.studentCode}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>

                            {/* Name */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formName">
                                <Form.Label>الاسم</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>



                            {/* Birth Date */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formBirthDate">
                                <Form.Label>تاريخ الميلاد</Form.Label>
                                <Form.Control
                                  type="date"
                                  name="birthDate"
                                  value={formData.birthDate}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>

                            {/* Birth Place */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formBirthPlace">
                                <Form.Label>محل الميلاد</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="birthPlace"
                                  value={formData.birthPlace}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>

                            {/* Gender */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formGender">
                                <Form.Label>النوع</Form.Label>
                                <Form.Control
                                  as="select"
                                  name="gender"
                                  value={formData.gender}
                                  onChange={handleChange}
                                >
                                  <option value="">اختر</option>
                                  <option value="ذكر">ذكر</option>
                                  <option value="أنثى">أنثى</option>
                                </Form.Control>
                              </Form.Group>
                            </Col>

                            {/* Religion */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formReligion">
                                <Form.Label>الديانة</Form.Label>
                                <Form.Control
                                  as="select"
                                  name="religion"
                                  value={formData.religion}
                                  onChange={handleChange}
                                >
                                  <option value="مسلم">مسلم</option>
                                  <option value="مسيحي">مسيحي</option>
                                  {/* Add more religion options if needed */}
                                </Form.Control>
                              </Form.Group>
                            </Col>

                            {/* Residence Place */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formResidencePlace">
                                <Form.Label>محل الإقامة</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="residencePlace"
                                  value={formData.residencePlace}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>

                            {/* Detailed Address */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formDetailedAddress">
                                <Form.Label>العنوان بالتفصيل</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="detailedAddress"
                                  value={formData.detailedAddress}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>

                            {/* Email */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formEmail">
                                <Form.Label>البريد الإلكترونى</Form.Label>
                                <Form.Control
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formPhone">
                                <Form.Label>التليفون</Form.Label>
                                <Form.Control
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formMobile">
                                <Form.Label>الموبايل</Form.Label>
                                <Form.Control
                                  type="tel"
                                  name="mobile"
                                  value={formData.mobile}
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Col>
                            {/* Father's Information */}
                            <Col md={12} className="mb-4">
                              <h3 className="mb-3">معلومات الأب</h3>
                            </Col>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formFatherName">
                                <Form.Label>اسم الأب</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="fatherName"
                                  value={formData.fatherName}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>

                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formFatherNationalId">
                                <Form.Label>الرقم القومى للأب</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="fatherNationalId"
                                  value={formData.fatherNationalId}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formFatherOccupation">
                                <Form.Label>وظيفة الأب</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="fatherOccupation"
                                  value={formData.fatherOccupation}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formFatherPhone">
                                <Form.Label>تليفون الأب</Form.Label>
                                <Form.Control
                                  type="tel"
                                  name="fatherPhone"
                                  value={formData.fatherPhone}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>

                            {/* Guardian's Information */}
                            <Col md={12} className="mb-4">
                              <h3 className="mb-3">معلومات ولى الأمر</h3>
                            </Col>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formGuardianName">
                                <Form.Label>اسم ولى الأمر</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="guardianName"
                                  value={formData.guardianName}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>


                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formGuardianRelationship">
                                <Form.Label>صلة ولي الأمر</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="guardianRelationship"
                                  value={formData.guardianRelationship}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formGuardianNationalId">
                                <Form.Label>الرقم القومى لولي الأمر</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="guardianNationalId"
                                  value={formData.guardianNationalId}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formGuardianPhone">
                                <Form.Label>تليفون ولي الأمر</Form.Label>
                                <Form.Control
                                  type="tel"
                                  name="guardianPhone"
                                  value={formData.guardianPhone}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                            <Row>
                              {/* ... (previous form fields) ... */}

                              {/* Parents' Status */}
                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formParentsStatus">
                                  <Form.Label>حالة تخص الوالدين</Form.Label>
                                  <Form.Control
                                    as="select"
                                    name="parentsStatus"
                                    value={formData.parentsStatus}
                                    onChange={handleChange}
                                    required
                                  >
                                    <option value="">اختر</option>
                                    {/* Add options based on your requirements */}
                                  </Form.Control>
                                </Form.Group>
                              </Col>

                              <Col md={12} className="mb-4">
                                <h3 className="mb-3">معلومات الأمر</h3>
                              </Col>
                              {/* College and Year */}
                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formCollegeAndYear">
                                  <Form.Label>الكلية والفرقة</Form.Label>
                                  <Form.Control
                                    as="select"
                                    name="collegeAndYear"
                                    value={formData.collegeAndYear}
                                    onChange={handleChange}
                                    required
                                  >
                                    <option v alue="">اختر</option>
                                  </Form.Control>
                                </Form.Group>
                              </Col>

                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formLastYearGPA">
                                  <Form.Label>تقدير العام الماضى</Form.Label>
                                  <Form.Control
                                    as="select"
                                    name="lastYearGPA"
                                    value={formData.lastYearGPA}
                                    onChange={handleChange}
                                  >
                                    <option value="">اختر</option>
                                  </Form.Control>
                                </Form.Group>
                              </Col>

                              {/* نسبة التقدير (%) */}
                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formGpaPercentage">
                                  <Form.Label>نسبة التقدير (%)</Form.Label>
                                  <Form.Control
                                    type="number"
                                    name="gpaPercentage"
                                    value={formData.gpaPercentage}
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Col>

                              {/* Previous Housing */}
                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formPreviousHousing">
                                  <Form.Label>السكن في الأعوام السابقة</Form.Label>
                                  <Form.Control
                                    as="select"
                                    name="previousHousing"
                                    value={formData.previousHousing}
                                    onChange={handleChange}

                                  >
                                    <option value="">اختر</option>
                                  </Form.Control>
                                </Form.Group>
                              </Col>

                              {/* Housing Type */}
                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formHousingType">
                                  <Form.Label>نوع السكن</Form.Label>
                                  <Form.Control
                                    as="select"
                                    name="housingType"
                                    value={formData.housingType}
                                    onChange={handleChange}
                                  >
                                    <option value="">اختر</option>
                                    <option value="سكن عادى">سكن عادى</option>
                                    <option value="سكن بدون تغذية">سكن بدون تغذية</option>
                                  </Form.Control>
                                </Form.Group>
                              </Col>


                              {/* Password */}
                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formPassword">
                                  <Form.Label>كلمة المرور</Form.Label>
                                  <Form.Control
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>

                              {/* Password Confirmation */}
                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formConfirmPassword">
                                  <Form.Label>تأكيد كلمة المرور</Form.Label>
                                  <Form.Control
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </Row>
                          <Row>
                            {/* ... (previous form fields) ... */}

                            {/* سكن بدون تغذية */}
                            <Col md={6} className="mb-4 d-flex align-items-center">
                              <Form.Check
                                type="checkbox"
                                id="housingWithoutMeals"
                                name="housingWithoutMeals"
                                checked={formData.housingWithoutMeals}
                                onChange={handleChange}
                                className="mr-2"
                              />
                              <Form.Label htmlFor="housingWithoutMeals">سكن بدون تغذية</Form.Label>
                            </Col>

                            <Col md={6} className="mb-6 d-flex align-items-center">
                              <Form.Check
                                type="checkbox"
                                id="familyAbroad"
                                name="familyAbroad"
                                checked={formData.familyAbroad}
                                onChange={handleChange}
                                className="mr-2"
                              />
                              <Form.Label htmlFor="familyAbroad">الأسرة بالخارج</Form.Label>
                            </Col>

                            <Col md={6} className="mb-4 d-flex align-items-center">
                              <Form.Check
                                type="checkbox"
                                id="specialNeeds"
                                name="specialNeeds"
                                checked={formData.specialNeeds}
                                onChange={handleChange}
                                className="mr-2"
                              />
                              <Form.Label htmlFor="specialNeeds">ذوى احتياجات خاصة</Form.Label>
                            </Col>

                            {/* ... (continue with other form fields) ... */}

                          </Row>
                          <Button
                            variant="primary"
                            type="submit"
                            className="btn-block mb-4"
                          >
                            سجل
                          </Button>


                        </Form>
                      </div>
                    </div>
                  </div>
                </Form>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <div className="card-body py-5 px-md-5">
                    <div className="row d-flex justify-content-center">
                      <div className="col-lg-8">
                        <h2 className="fw-bold mb-5">سجل الآن</h2>
                        <Form onSubmit={handleSubmit}>
                          <Row>
                            {/* National ID */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formNationalId">
                                <Form.Label>رقم جواز السفر</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="nationalId"
                                  value={formData.nationalId}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>

                            {/* Student Code */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formStudentCode">
                                <Form.Label>جهة صدوره</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="studentCode"
                                  value={formData.studentCode}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formStudentCode">
                                <Form.Label>الجنسيه</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="studentCode"
                                  value={formData.studentCode}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formStudentCode">
                                <Form.Label>كود الطالب</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="studentCode"
                                  value={formData.studentCode}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                            {/* Name */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formName">
                                <Form.Label>الاسم</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>



                            {/* Birth Date */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formBirthDate">
                                <Form.Label>تاريخ الميلاد</Form.Label>
                                <Form.Control
                                  type="date"
                                  name="birthDate"
                                  value={formData.birthDate}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>

                            {/* Birth Place */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formBirthPlace">
                                <Form.Label>محل الميلاد</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="birthPlace"
                                  value={formData.birthPlace}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>

                            {/* Gender */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formGender">
                                <Form.Label>النوع</Form.Label>
                                <Form.Control
                                  as="select"
                                  name="gender"
                                  value={formData.gender}
                                  onChange={handleChange}
                                >
                                  <option value="">اختر</option>
                                  <option value="ذكر">ذكر</option>
                                  <option value="أنثى">أنثى</option>
                                </Form.Control>
                              </Form.Group>
                            </Col>

                            {/* Religion */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formReligion">
                                <Form.Label>الديانة</Form.Label>
                                <Form.Control
                                  as="select"
                                  name="religion"
                                  value={formData.religion}
                                  onChange={handleChange}
                                >
                                  <option value="مسلم">مسلم</option>
                                  <option value="مسيحي">مسيحي</option>
                                  {/* Add more religion options if needed */}
                                </Form.Control>
                              </Form.Group>
                            </Col>

                            {/* Residence Place */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formResidencePlace">
                                <Form.Label>محل الإقامة</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="residencePlace"
                                  value={formData.residencePlace}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>

                            {/* Detailed Address */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formDetailedAddress">
                                <Form.Label>العنوان بالتفصيل</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="detailedAddress"
                                  value={formData.detailedAddress}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>

                            {/* Email */}
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formEmail">
                                <Form.Label>البريد الإلكترونى</Form.Label>
                                <Form.Control
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formPhone">
                                <Form.Label>التليفون</Form.Label>
                                <Form.Control
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} className="mb-4">
                              <Form.Group controlId="formMobile">
                                <Form.Label>الموبايل</Form.Label>
                                <Form.Control
                                  type="tel"
                                  name="mobile"
                                  value={formData.mobile}
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Col>


                            <Row>
                              {/* ... (previous form fields) ... */}


                              <Col md={12} className="mb-4">
                                <h3 className="mb-3">معلومات الامر</h3>
                              </Col>
                              {/* College and Year */}
                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formCollegeAndYear">
                                  <Form.Label>الكلية والفرقة</Form.Label>
                                  <Form.Control
                                    as="select"
                                    name="collegeAndYear"
                                    value={formData.collegeAndYear}
                                    onChange={handleChange}
                                    required
                                  >
                                    <option v alue="">اختر</option>
                                  </Form.Control>
                                </Form.Group>
                              </Col>

                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formLastYearGPA">
                                  <Form.Label>تقدير العام الماضى</Form.Label>
                                  <Form.Control
                                    as="select"
                                    name="lastYearGPA"
                                    value={formData.lastYearGPA}
                                    onChange={handleChange}
                                  >
                                    <option value="">اختر</option>
                                  </Form.Control>
                                </Form.Group>
                              </Col>

                              {/* نسبة التقدير (%) */}
                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formGpaPercentage">
                                  <Form.Label>نسبة التقدير (%)</Form.Label>
                                  <Form.Control
                                    type="number"
                                    name="gpaPercentage"
                                    value={formData.gpaPercentage}
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Col>

                              {/* Previous Housing */}
                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formPreviousHousing">
                                  <Form.Label>السكن في الأعوام السابقة</Form.Label>
                                  <Form.Control
                                    as="select"
                                    name="previousHousing"
                                    value={formData.previousHousing}
                                    onChange={handleChange}

                                  >
                                    <option value="">اختر</option>
                                  </Form.Control>
                                </Form.Group>
                              </Col>

                              {/* Housing Type */}
                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formHousingType">
                                  <Form.Label>نوع السكن</Form.Label>
                                  <Form.Control
                                    as="select"
                                    name="housingType"
                                    value={formData.housingType}
                                    onChange={handleChange}
                                  >
                                    <option value="">اختر</option>
                                    <option value="سكن عادى">سكن عادى</option>
                                    <option value="سكن بدون تغذية">سكن بدون تغذية</option>
                                  </Form.Control>
                                </Form.Group>
                              </Col>


                              {/* Password */}
                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formPassword">
                                  <Form.Label>كلمة المرور</Form.Label>
                                  <Form.Control
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>

                              {/* Password Confirmation */}
                              <Col md={6} className="mb-4">
                                <Form.Group controlId="formConfirmPassword">
                                  <Form.Label>تأكيد كلمة المرور</Form.Label>
                                  <Form.Control
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </Row>
                          <Row>
                            {/* ... (previous form fields) ... */}

                            {/* سكن بدون تغذية */}
                            <Col md={6} className="mb-4 d-flex align-items-center">
                              <Form.Check
                                type="checkbox"
                                id="housingWithoutMeals"
                                label="سكن بدون تغذية"
                                name="housingWithoutMeals"
                                checked={formData.housingWithoutMeals}
                                onChange={handleChange}
                              />
                            </Col>



                            {/* ... (continue with other form fields) ... */}

                          </Row>
                          <Button
                            variant="primary"
                            type="submit"
                            className="btn-block mb-4"
                          >
                            سجل
                          </Button>


                        </Form>
                      </div>
                    </div>
                  </div>

                </Form>
              )}
            </div>

          </div>
        </section>

      </Container>
      <Footer />
    </body>
  );
};

export default SignupForm;
