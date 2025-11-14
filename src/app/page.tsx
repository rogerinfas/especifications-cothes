export default function Home() {
  return (
    <div style={{
      backgroundColor: '#808080',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        border: '8px solid white',
        boxShadow: '0 0 15px rgba(0,0,0,0.2)'
      }}>
        <img 
          src="/image.png" 
          alt="" 
          style={{ 
            display: 'block',
            maxWidth: '100%',
            maxHeight: '90vh',
            width: 'auto',
            height: 'auto'
          }} 
        />
      </div>
    </div>
  );
}