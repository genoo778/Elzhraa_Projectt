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
import Reports from './components/Admin/pages/Reports/Reports';
import Melas from './components/Admin/pages/Melas';
import Info from './components/User/Info';
import Sakan from './components/User/Sakan';
import Fasll from './components/User/Fasll';
import Gazaat from './components/User/Gazaat';
import Rsom from './components/User/Rsom';
import Tasreh from './components/User/Tasreh';
import Bayan1 from './components/User/Bayan1';
import Bayan2 from './components/User/Bayan2';
import Wagabat from './components/User/Wagabat';
import Uploadphoto from './components/User/stapp/Uploadphoto';
import Tasrehall from './components/User/stapp/Tasrehall';
import Gazaall from './components/User/stapp/Gazaall';
import Removephoto from './components/User/stapp/Removphoto';
import Faslall from './components/User/stapp/Faslall';
import Tanseq from './components/User/stapp/Tanseq';
import Checktalabat from './components/User/stapp/Checktalabat';
import Reversation from './components/User/stapp/Reversation';
import Returnprint from './components/User/stapp/Returnprint';
import Accept from './components/User/stapp/Accept';
import Printcard from './components/User/stapp/Printcard';
import Changesakan from './components/User/stapp/Changesakan';
import Printaccept from './components/User/stapp/Printaccept';
import Returnacc from './components/User/stapp/Returnacc';
import Takewagba from './components/User/stapp/Takewagba.js';
import Takepar from './components/User/stapp/Takepar.js';
import Revservaationpar from './components/User/stapp/Revservaationpar.js.js';







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
      <Route path='/re' element={<Reports/>}/>
      <Route path='/me' element={<Melas/>}/>
      <Route path='/if' element={<Info/>}/>
      <Route path='/sk' element={<Sakan/>}/>
      <Route path='/fl' element={<Fasll/>}/>
      <Route path='/ga' element={<Gazaat/>}/>
      <Route path='/rm' element={<Rsom/>}/>
      <Route path='/tr' element={<Tasreh/>}/>
      <Route path='/by' element={<Bayan1/>}/>
      <Route path='/byy' element={<Bayan2/>}/>
      <Route path='/wa' element={<Wagabat/>}/>
      <Route path='/up' element={<Uploadphoto/>}/>
      <Route path='/ta' element={<Tasrehall/>}/>
      <Route path='/gal' element={<Gazaall/>}/>
      <Route path='/rem' element={<Removephoto/>}/>
      <Route path='/fas' element={<Faslall/>}/>
      <Route path='/tan' element={<Tanseq/>}/>
      <Route path='/che' element={<Checktalabat/>}/>
      <Route path='/rev' element={<Reversation/>}/>
      <Route path='/ret' element={<Returnprint/>}/>
      <Route path='/acc' element={<Accept/>}/>
      <Route path='/prc' element={<Printcard/>}/>
      <Route path='/chs' element={<Changesakan/>}/>
      <Route path='/praa' element={<Printaccept/>}/>
      <Route path='/rea' element={<Returnacc/>}/>
      <Route path='/taw' element={<Takewagba/>}/>
      <Route path='/tap' element={<Takepar/>}/>
      <Route path='/rep' element={<Revservaationpar/>}/>
    </Routes>


  );
}

export default App;
