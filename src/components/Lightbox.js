import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Esto es necesario para accesibilidad

const Lightbox = ({ isOpen, closeLightbox, images, currentImageIndex, nextImage, prevImage, postulacionItem }) => {
  const handleClickOutside = (event) => {
    if (event.target.className.includes('lightbox-overlay')) {
      closeLightbox();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeLightbox}
      contentLabel="Lightbox"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          position: 'relative',
          background: 'transparent',
          border: 'none',
          padding: '0',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
      className="lightbox-overlay"
      onClick={handleClickOutside}
    >
      ||{postulacionItem.VIDEO_LINK}||
      {images.length > 0 && (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <button onClick={prevImage} style={navButtonStyle}>‹</button>
          <img
            src={images[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
            style={{ maxHeight: '80vh', maxWidth: '80vw', margin: '0 20px' }}
          />
          <button onClick={nextImage} style={navButtonStyle}>›</button>
          <button onClick={closeLightbox} style={closeButtonStyle}>✕</button>
        </div>
      )}
    </Modal>
  );
};

const navButtonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  fontSize: '4rem',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '0px',
  right: '0px',
  background: 'none',
  border: 'none',
  color: 'white',
  fontSize: '1.5rem',
  display: 'none',
};

export default Lightbox;
