import React, { useState  } from "react";
import Modal from 'react-modal';
import { FaPlayCircle } from "react-icons/fa";
import { MetroSpinner } from "react-spinners-kit";

Modal.setAppElement('#root'); // Esto es necesario para accesibilidad

const Lightbox = ({ isOpen, closeLightbox, images, currentImageIndex, nextImage, prevImage, postulacionVideo,loadingImg,setLoadingImg }) => {



  const handleImageLoad = () => {
    console.log('cambiar a false ya se cargo')
    setLoadingImg(false); // Actualiza el estado cuando la imagen se ha cargado
  };

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

      {
      postulacionVideo !=='' && (<>
<div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
<a href={postulacionVideo} target='_blank'>
<div
    className='playButton'
    style={{
      position: 'absolute',
      top: '50%', // Ajusta este valor según donde quieras que esté en la parte superior
      left: '50%',
      transform: 'translate(-50%, -50%)', // Traduce tanto en X como en Y
      zIndex: 1 // Para que esté por encima de la imagen
    }}
  >
    <FaPlayCircle size={240} style={{ color: "white", fontSize: "120px" }} />
  </div>


{loadingImg && <MetroSpinner size={90} color="#F0000C" />}
<img
            src={images[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
            style={{ maxHeight: '80vh', maxWidth: '80vw', margin: '0 20px' }}
            onLoad={() => setLoadingImg(false)} // Llama a setLoadingImg(false) cuando la imagen ha cargado
            />
      </a>
</div>
      </>)
      
      }


{loadingImg && <MetroSpinner size={90} color="#F0000C" />}


      {images.length > 0 && postulacionVideo ==='' && (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          {postulacionVideo === '' && images.length > 1 && (<><button onClick={prevImage} style={navButtonStyle}>‹</button></>)}

         <img
            src={images[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
            style={{ maxHeight: '80vh', maxWidth: '80vw', margin: '0 20px' }}
            onLoad={() => setLoadingImg(false)} // Llama a setLoadingImg(false) cuando la imagen ha cargado
            />

          
          {postulacionVideo === '' && images.length > 1 && (<><button onClick={nextImage} style={navButtonStyle}>›</button></>)}
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
  display: 'none'
};

export default Lightbox;
