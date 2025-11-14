const navbarStyles: React.CSSProperties = {
  backgroundColor: '#333',
  color: 'white',
  padding: '1rem 2rem',
  width: '100%',
  position: 'fixed' as const,
  top: 0,
  left: 0,
  zIndex: 1000,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

export default function Navbar() {
  return (
    <nav style={navbarStyles}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Visor de Imágenes</h1>
    </nav>
  );
}
