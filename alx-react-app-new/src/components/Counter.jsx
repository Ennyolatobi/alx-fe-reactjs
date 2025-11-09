import { useState } from 'react';

function Counter() {
  // Step 2: Initialize state
  const [count, setCount] = useState(0);

  // Step 3: Return JSX with display and buttons
  return (
    <div style={{
      textAlign: 'center',
      margin: '40px auto',
      padding: '20px',
      maxWidth: '300px',
      border: '2px solid #2a9df4',
      borderRadius: '12px',
      backgroundColor: '#f0f8ff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#2a9df4' }}>Simple Counter</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 15px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: '10px 15px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#f44336',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{
            padding: '10px 15px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#2196F3',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
