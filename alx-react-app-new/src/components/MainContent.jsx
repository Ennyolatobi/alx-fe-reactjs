function MainContent() {
  const cities = ['Paris', 'Tokyo', 'New York'];

  return (
    <main style={{
      padding: '40px 20px',
      backgroundColor: '#eef2f5',
      minHeight: '300px',
      fontFamily: 'Verdana, sans-serif'
    }}>
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '28px', color: '#333' }}>Welcome!</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
          Explore some of the most beautiful cities around the world. Learn what makes them unique and plan your next adventure.
        </p>
      </section>
      <section>
        <h3 style={{ fontSize: '22px', color: '#2a9df4', marginBottom: '15px' }}>Favorite Cities</h3>
        <div style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center'  // centers the cards
        }}>
          {cities.map((city, index) => (
            <div key={index} style={{
              flex: '0 1 150px',
              padding: '15px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '16px',
              color: '#333'
            }}>
              {city}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MainContent;
