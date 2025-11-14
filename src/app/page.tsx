import Navbar from './components/Navbar';
import CommentsSection from './components/CommentsSection';
import ZoomableImage from './components/ZoomableImage';

const pageStyles: React.CSSProperties = {
  backgroundColor: '#808080',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  paddingTop: '80px',
  paddingBottom: '20px',
  boxSizing: 'border-box' as const
};

const contentStyles: React.CSSProperties = {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
};

const containerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto'
};

const imageContainerStyles = {
  flex: '2',
  minWidth: 0
};

const frameStyles: React.CSSProperties = {
  border: '8px solid white',
  boxShadow: '0 0 15px rgba(0,0,0,0.2)',
  backgroundColor: 'white',
  borderRadius: '8px',
  overflow: 'hidden',
  height: '80vh',
  position: 'relative',
  width: '100%'
};

const commentsContainerStyles = {
  flex: '1',
  minWidth: '300px',
  height: '80vh',
  overflow: 'hidden',
  borderRadius: '8px',
  boxShadow: '0 0 15px rgba(0,0,0,0.1)'
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={pageStyles}>
        <div style={contentStyles}>
          <div style={containerStyles}>
            <div style={imageContainerStyles}>
              <div style={frameStyles}>
                <ZoomableImage 
                  src="/image.png"
                  alt="Imagen de la prenda"
                />
              </div>
            </div>
            <div style={commentsContainerStyles}>
              <CommentsSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}