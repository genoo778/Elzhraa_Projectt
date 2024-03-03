import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import {
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
   
  <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/hh" element={<Home />} />
   </Routes> 
  
  
  );
}

export default App;
