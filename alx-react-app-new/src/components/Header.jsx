function Header() {
  return (
    <header style={{
      padding: '30px 20px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
      borderRadius: '0 0 10px 10px'
    }}>
      <h1 style={{ margin: '0', fontSize: '36px', fontFamily: 'Arial, sans-serif', backgroundColor: 'navy', color: 'white', textAlign: 'center' }}>
        My Favorite Cities
      </h1>
      <p style={{ margin: '5px 0 0', fontSize: '18px', fontStyle: 'italic', opacity: 0.8 }}>
        Discover, Explore, Enjoy
      </p>
    </header>
  );
}

export default Header;
