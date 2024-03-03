import React, { useState } from 'react';
import './rooms.css';

function Rooms() {
  // State variables to manage selected building, role, and role details
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [roleDetails, setRoleDetails] = useState('');

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
    const selectedRole = event.target.value;
    setSelectedRole(selectedRole);

    // Generate role details based on selected role
    switch (selectedRole) {
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
    <div className="room-container">
      <form className="room-form">
        {/* Building selection */}
        <select className="room-select" value={selectedBuilding} onChange={handleBuildingChange}>
          <option value="">اختر مبنى</option>
          <option value="دور 1">مبنى 1</option>
          <option value="دور 2">مبنى 2</option>
          <option value="دور 3">مبنى 3</option>
          <option value="دور 4">مبنى 4</option>
        </select>

        {/* Role selection */}
        {selectedBuilding && (
          <div>
            <select className="room-select" value={selectedRole} onChange={handleRoleChange}>
              <option value="">اختر دور</option>
              <option value="دور 1">دور 1</option>
              <option value="دور 2">دور 2</option>
              <option value="دور 3">دور 3</option>
              <option value="دور 4">دور 4</option>
              <option value="دور 5">دور 5</option>
              <option value="دور 6">دور 6</option>
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
  );
}

export default Rooms;
