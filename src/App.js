import Home from './components/outpages/home/Home';
import {
  Routes,
  Route
} from "react-router-dom";
import UniversityTimetableForm from './components/outpages/UniversityTimetableForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/outpages/Registration';
import SearchForm from './components/outpages/SearchForm';
import Instruct from './components/outpages/Instruct';
import Homee from './components/Admin/Main/Homee';
import SemesterForm from './components/Admin/pages/SemesterForm';
import InstructionsPage from './components/Admin/pages/InstructionsPage';
import CollegeInfo from './components/Admin/pages/CollegeInfo';
import CollageType from './components/Admin/pages/CollageType';
import Rsoom from './components/Admin/pages/Rsoom';
import Countrys from './components/Admin/pages/Countrys';
import Rooms from './components/Admin/pages/Rooms';
import Login from './components/outpages/home/Login';
import Loginst from './components/Admin/Main/Loginst';
import Users from './components/Admin/pages/Users';
import NationalId from './components/Admin/pages/Studentapps/NationalId';
import StudentNumber from './components/Admin/pages/Studentapps/StudentNumber';
import StudentName from './components/Admin/pages/Studentapps/StudenName';
import StudentPassword from './components/Admin/pages/Studentapps/StudentPassword';
import CancelledForm from './components/Admin/pages/Studentapps/CancelledForm';





function App() {
  return (

    <Routes>
      <Route path="/" element={ <Login/>} />
      <Route path="/hh" element={<Home />} />
      <Route path="/tt" element={<UniversityTimetableForm />} />
      <Route path='/r' element={<Registration/>}/>
      <Route path='/l' element={<Loginst/>}/>
      <Route path='/s' element={<SearchForm/>}/>
      <Route path='/i' element={<Instruct/>}/>
      <Route path='/h' element={<Homee/>}/>
      <Route path='/ss' element={<SemesterForm/>}/>
      <Route path='/ip' element={<InstructionsPage/>}/>
      <Route path='/c' element={<CollegeInfo/>}/>
      <Route path='/ct' element={<CollageType/>}/>
      <Route path='/rs' element={<Rsoom/>}/>
      <Route path='/cr' element={<Countrys/>}/>
      <Route path='/ro' element={<Rooms/>}/>
      <Route path='/u' element={<Users/>}/>
      <Route path='/na' element={<NationalId/>}/>
      <Route path='/st' element={<StudentNumber/>}/>
      <Route path='/sn' element={<StudentName/>}/>
      <Route path='/sp' element={<StudentPassword/>}/>
      <Route path='/ca' element={<CancelledForm/>}/>
    </Routes>


  );
}

export default App;
