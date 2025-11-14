"use client";

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface ZoomableImageProps {
  src: string;
  alt?: string;
}

export default function ZoomableImage({ src, alt = '' }: ZoomableImageProps) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={5}
        centerOnInit
        wheel={{ step: 0.1 }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div style={{ 
              position: 'absolute', 
              top: '10px', 
              right: '10px', 
              zIndex: 10,
              display: 'flex',
              gap: '5px',
              backgroundColor: 'rgba(255,255,255,0.8)',
              padding: '5px',
              borderRadius: '4px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}>
              <button 
                onClick={() => zoomIn()}
                style={buttonStyle}
                aria-label="Acercar"
              >
                +
              </button>
              <button 
                onClick={() => zoomOut()}
                style={buttonStyle}
                aria-label="Alejar"
              >
                -
              </button>
              <button 
                onClick={() => resetTransform()}
                style={buttonStyle}
                aria-label="Restablecer"
              >
                ⟲
              </button>
            </div>
            <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
              <img 
                src={src} 
                alt={alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  cursor: 'grab',
                  userSelect: 'none'
                }}
                draggable={false}
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}

const buttonStyle = {
  width: '30px',
  height: '30px',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#f0f0f0'
  }
};
