function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(90deg, #182848, #4b6cb7)',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      marginTop: '40px'
    }}>
      <p>© 2025 My Favorite Cities</p>
      <p style={{ marginTop: '5px', fontSize: '14px' }}>
        Follow us:
        <span style={{ margin: '0 10px', cursor: 'pointer' }}>🌐</span>
        <span style={{ margin: '0 10px', cursor: 'pointer' }}>🐦</span>
        <span style={{ margin: '0 10px', cursor: 'pointer' }}>📸</span>
      </p>
    </footer>
  );
}

export default Footer;
