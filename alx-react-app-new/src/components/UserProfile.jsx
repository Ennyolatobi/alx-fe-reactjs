function UserProfile({ name, age, bio, city, occupation }) {
  return (
    <div style={{
      border: '1px solid gray',
      borderRadius: '12px',
      padding: '10px',
      margin: '10px',
      width: '300px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p>City: <span style={{ fontStyle: 'italic' }}>{city}</span></p>
      <p>Occupation: {occupation}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
