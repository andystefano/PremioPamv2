import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Esto es necesario para accesibilidad

const ContactFormLightbox = ({ isOpen, closeLightbox }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    closeLightbox();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeLightbox}
      contentLabel="Formulario de Contacto"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          position: 'relative',
          background: 'white',
          borderRadius: '4px',
          padding: '20px',
          maxWidth: '500px',
          width: '90%',
        },
      }}
      className="lightbox-overlay"
    >
      <button onClick={closeLightbox} style={closeButtonStyle}>✕</button>
      <h3 className='subtituloVotar'>VOTO DEL PÚBLICO PREMIO PAM 2024</h3>
      <h2 class="tituloVotar">PARA COMPLETAR SU VOTO <br/> REGISTRE SUS DATOS</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Nombre:
            <input type="text" name="name" required style={inputStyle} />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Apellido:
            <input type="text" name="apellido" required style={inputStyle} />
          </label>
        </div>        
        <div style={{ marginBottom: '10px' }}>
          <label>
            Correo Electrónico:
            <input type="email" name="email" required style={inputStyle} />
          </label>
        </div>

        <ul>
            <li>* Solo se admite un voto por mail registrado.</li>
            <li>* Para hacer efectiva tu votación, debes confirmar el link que recibirás en tu mail.</li>
        </ul>
        <br/>
        <button type="submit" id='BtnEnviar'  >Enviar</button>
      </form>
    </Modal>
  );
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginBottom: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  width: '100%',
  padding: '8px',
  height: '100px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const submitButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default ContactFormLightbox;
