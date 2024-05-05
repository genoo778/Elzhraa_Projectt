import React, { useState } from 'react';
import './rooms.css';
import Share from '../../shared/Share';
import Footer from '../../shared/Footer';
function Rooms() {
  // State variables to manage selected building, role, and role details
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [roleDetails, setRoleDetails] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  // Object to hold building details
  const buildingDetails = {
    'دور 1': {
      name: 'مبنى 1',
      roles: ['دور 1', 'دور 2', 'دور 3', 'دور 4', 'دور 5', 'دور 6']
    },
    'دور 2': {
      name: 'مبنى 2',
      roles: ['دور 1', 'دور 2', 'دور 3', 'دور 4', 'دور 5', 'دور 6']
    },
    'دور 3': {
      name: 'مبنى 3',
      roles: ['دور 1', 'دور 2', 'دور 3', 'دور 4', 'دور 5', 'دور 6']
    },
    'دور 4': {
      name: 'مبنى 4',
      roles: ['دور 1', 'دور 2', 'دور 3', 'دور 4', 'دور 5', 'دور 6']
    }
  };

  // Function to handle gender selection
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
    // Reset building and role details when gender changes
    setSelectedBuilding('');
    setSelectedRole('');
    setRoleDetails('');
  };

  // Function to handle building selection
  const handleBuildingChange = (event) => {
    const selectedBuilding = event.target.value;
    setSelectedBuilding(selectedBuilding);
    // Reset role details when building changes
    setSelectedRole('');
    setRoleDetails('');
  };

  // Function to handle role selection
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    // Generate role details based on selected role
    switch (event.target.value) {
      case 'دور 1':
        setRoleDetails('تفاصيل دور 1: الغرفة 101 - النوع: مزدوجة - السعة: 2 أشخاص - نوع السكن: مشترك');
        break;
      case 'دور 2':
        setRoleDetails('تفاصيل دور 2: الغرفة 201 - النوع: فردي - السعة: 1 شخص - نوع السكن: خاص');
        break;
      case 'دور 3':
        setRoleDetails('تفاصيل دور 3: الغرفة 301 - النوع: مزدوجة - السعة: 2 أشخاص - نوع السكن: مشترك');
        break;
      case 'دور 4':
        setRoleDetails('تفاصيل دور 4: الغرفة 401 - النوع: مفردة - السعة: 1 شخص - نوع السكن: خاص');
        break;
      case 'دور 5':
        setRoleDetails('تفاصيل دور 5: الغرفة 501 - النوع: مزدوجة - السعة: 2 أشخاص - نوع السكن: مشترك');
        break;
      case 'دور 6':
        setRoleDetails('تفاصيل دور 6: الغرفة 601 - النوع: فردي - السعة: 1 شخص - نوع السكن: خاص');
        break;
      default:
        setRoleDetails('');
    }
  };

  // Generate room numbers based on the selected role
  const generateRoomNumbers = () => {
    const roomNumbers = [];
    let startNumber = 0;

    switch (selectedRole) {
      case 'دور 1':
        startNumber = 101;
        break;
      case 'دور 2':
        startNumber = 201;
        break;
      case 'دور 3':
        startNumber = 301;
        break;
      case 'دور 4':
        startNumber = 401;
        break;
      case 'دور 5':
        startNumber = 501;
        break;
      case 'دور 6':
        startNumber = 601;
        break;
      default:
        break;
    }

    for (let i = 0; i < 28; i++) {
      roomNumbers.push(startNumber + i);
    }

    return roomNumbers;
  };

  return (
    <body>
      <Share/>
    <div className="room-containerr">
      
      <form className="room-formm">
      <div style={{ backgroundColor: '#123252', padding: '20px', width: '111.25%' , marginTop:'-40px',marginRight:'-40px' }}>
          <h1 style={{ marginRight: '100px' }}>الغرف - جامعة حلوان</h1>
          <img src="https://th.bing.com/th/id/OIP.wscXCxEte7OAsOtvrQo_tAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Helwan University Logo" className='img' />
        </div>
        {/* Gender selection */}
        <select className="room-selectt" value={selectedGender} onChange={handleGenderChange} style={{marginTop:'50px'}}>
          <option value="">اختر الجنس</option>
          <option value="طلاب">طلاب</option>
          <option value="طالبات">طالبات</option>
        </select>
<br/>
        {/* Building selection */}
        {selectedGender && (
          <div>
            <select className="room-selectt" value={selectedBuilding} onChange={handleBuildingChange} >
              <option value="">اختر مبنى</option>
              {Object.keys(buildingDetails).map((building) => (
                <option key={building} value={building}>
                  {buildingDetails[building].name}
                </option>
              ))}
            </select>
          </div>
        )}
<br/>
        {/* Role selection */}
        {selectedBuilding && (
          <div>
            <select className="room-selectt" value={selectedRole} onChange={handleRoleChange} style={{marginRight:'10px'}}>
              <option value="">اختر دور</option>
              {buildingDetails[selectedBuilding].roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        )}
      </form>

      {/* Display role details */}
      {selectedRole && (
        <div className="role-details">
          <h2>تفاصيل الدور:</h2>
          <p>{roleDetails}</p>

          {/* Display table with room numbers */}
          <table className="room-table">
            <thead>
              <tr>
                <th>رقم الغرفة</th>
              </tr>
            </thead>
            <tbody>
              {generateRoomNumbers().map((roomNumber) => (
                <tr key={roomNumber}>
                  <td>{roomNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      )}
    </div>
    <Footer/>
    </body>
  );
}

export default Rooms;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './rooms.css';
// import Share from '../../shared/Share';
// import Footer from '../../shared/Footer';

// function Rooms() {
//   const [selectedBuilding, setSelectedBuilding] = useState('');
//   const [selectedRole, setSelectedRole] = useState('');
//   const [roleDetails, setRoleDetails] = useState('');
//   const [selectedGender, setSelectedGender] = useState('');
//   const [buildings, setBuildings] = useState([]);
//   const [roles, setRoles] = useState([]);

//   useEffect(() => {
//     // Fetch buildings from the backend API
//     axios.get('/api/buildings')
//       .then(response => {
//         setBuildings(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching buildings:', error);
//       });
//   }, []);

//   const handleGenderChange = (event) => {
//     setSelectedGender(event.target.value);
//     setSelectedBuilding('');
//     setSelectedRole('');
//     setRoleDetails('');
//   };

//   const handleBuildingChange = (event) => {
//     const selectedBuilding = event.target.value;
//     setSelectedBuilding(selectedBuilding);
//     setSelectedRole('');
//     setRoleDetails('');

//     // Fetch roles for the selected building from the backend API
//     axios.get(`/api/buildings/${selectedBuilding}/roles`)
//       .then(response => {
//         setRoles(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching roles:', error);
//       });
//   };

//   const handleRoleChange = (event) => {
//     setSelectedRole(event.target.value);
//     // Fetch role details from the backend API based on the selected role
//     axios.get(`/api/roles/${event.target.value}`)
//       .then(response => {
//         setRoleDetails(response.data.details);
//       })
//       .catch(error => {
//         console.error('Error fetching role details:', error);
//       });
//   };

//   const generateRoomNumbers = () => {
//     // Generate room numbers based on the selected role
//     // This logic can be adjusted based on your backend data structure
//     const roomNumbers = [];
//     // Add your logic here to generate room numbers dynamically
//     return roomNumbers;
//   };

//   return (
//     <body>
//       <Share/>
//       <div className="room-container">
//         <form className="room-form">
//           {/* Gender selection */}
//           <select className="room-select" value={selectedGender} onChange={handleGenderChange}>
//             <option value="">اختر الجنس</option>
//             <option value="طلاب">طلاب</option>
//             <option value="طالبات">طالبات</option>
//           </select>
//           <br/>
//           {/* Building selection */}
//           {selectedGender && (
//             <div>
//               <select className="room-select" value={selectedBuilding} onChange={handleBuildingChange}>
//                 <option value="">اختر مبنى</option>
//                 {buildings.map(building => (
//                   <option key={building.id} value={building.id}>
//                     {building.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}
//           <br/>
//           {/* Role selection */}
//           {selectedBuilding && (
//             <div>
//               <select className="room-select" value={selectedRole} onChange={handleRoleChange}>
//                 <option value="">اختر دور</option>
//                 {roles.map(role => (
//                   <option key={role.id} value={role.id}>
//                     {role.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}
//         </form>
//         {/* Display role details */}
//         {selectedRole && (
//           <div className="role-details">
//             <h2>تفاصيل الدور:</h2>
//             <p>{roleDetails}</p>
//             {/* Display table with room numbers */}
//             <table className="room-table">
//               <thead>
//                 <tr>
//                   <th>رقم الغرفة</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {generateRoomNumbers().map(roomNumber => (
//                   <tr key={roomNumber}>
//                     <td>{roomNumber}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//       <Footer/>
//     </body>
//   );
// }

// export default Rooms;
