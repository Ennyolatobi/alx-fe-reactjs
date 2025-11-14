import { useContext } from 'react';
import UserContext from '../UserContext'; // make sure the path is correct

function UserDetails() {
  // Get userData directly from Context
  const userData = useContext(UserContext);

  return (
    <div style={{
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      maxWidth: '300px',
      margin: '10px auto',
      backgroundColor: '#f9f9f9'
    }}>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
