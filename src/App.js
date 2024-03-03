import Home from './components/outpages/home/Home';
import Login from './components/Admin/Main/Login';
import {
  Routes,
  Route
} from "react-router-dom";
import UniversityTimetableForm from './components/outpages/UniversityTimetableForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/outpages/Registration';
import Loginst from './components/outpages/Loginst';
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





function App() {
  return (

    <Routes>
      <Route path="/" element={<Loginst />} />
      <Route path="/hh" element={<Home />} />
      <Route path="/tt" element={<UniversityTimetableForm />} />
      <Route path='/r' element={<Registration/>}/>
      <Route path='/l' element={<Login/>}/>
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



    </Routes>


  );
}

export default App;
