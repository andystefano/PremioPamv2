import React, { useState } from 'react';
import Modal from 'react-modal';
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

Modal.setAppElement('#root'); // Esto es necesario para accesibilidad

const ContactFormLightbox = ({ isOpen, closeLightbox, idPostulacion }) => {
  const [errorName, setErrorName] = useState('')
  const [errorLastname, setErrorLastname] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [captchaValue, setCaptchaValue] = useState(null);

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value); // Este valor lo enviarías al backend para validarlo.
  };
  
  const checkEmail = async (email) => {
    const url = "http://v2024.premiopam.cl/consultaSiVoto.php";
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `email=${encodeURIComponent(email)}`
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error:', error);
      return false; // En caso de error, retornamos false
    }
  };



  const registraVoto = async (name,lastname,email,idPostulacion,captchaValue) => {
    const url = "http://v2024.premiopam.cl/registraVoto.php";
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          nombre: name,
          apellido: lastname,
          email: email,
          idPostulacion: idPostulacion,
          captchaValue: captchaValue
        }).toString()
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('result bruto:::' + response)
      console.table(response)


      const result = await response.json();

      console.log('result json:::' + result)

      return result;
    } catch (error) {
      console.error('Error:', error);
      return false; // En caso de error, retornamos false
    }
  };

  const validarEmail = (email) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.length === 0) {
      return "Debe ingresar su email.";
    } else if (!regexEmail.test(email)) {
      return "El formato del email es incorrecto.";
    }
    return ""; // No hay errores
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('click en enviar');
    let numErrores = 0;
    setErrorName("");
    setErrorLastname("");
    setErrorEmail("");
    //nombre
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    if (name.length===0){
      numErrores++;
      setErrorName("Debe ingresar su nombre.");
    }

    if (lastname.length===0){
      numErrores++;
      setErrorLastname("Debe ingresar su apellido.");
    }

    const emailError = validarEmail(email);

    if (emailError) {
      numErrores++;
      setErrorEmail(emailError);
    } else {
      setErrorEmail("");
      checkEmail(email).then(result => {
        
        if (result) {
          setErrorEmail('Usted ya votó, solo se permite un voto por cada email.');
        } else {
          console.log('Su voto se está enviando');
          if (!captchaValue) {
            setErrorEmail("Por favor, completa el reCAPTCHA.");
            numErrores++;
          }


          registraVoto(name,lastname,email,idPostulacion,captchaValue).then(result => {
        
            console.log('registraVoto res:::' + registraVoto)
            
            if (result.estado==='1' || result.estado===1) {
              Swal.fire("Su voto fue registrado correctamente, ahora solo debes confirmar desde el link que recibirás en tu mail.");
              closeLightbox();
              console.log('Voto registrado correctamente');
            } else {
              console.log('Ocurrio un error ');        
            }
      
          });
    



          if((numErrores===0)){

            //captchaValue
            /*
            const name = document.getElementById('name').value;
            const lastname = document.getElementById('lastname').value;
            const email = document.getElementById('email').value;
            idPostulacion
            */
          }
        }
  
      });

    }

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
      <h3 className='subtituloVotar select-none'>VOTO DEL PÚBLICO PREMIO PAM 2024</h3>
      <h2 className="tituloVotar select-none">PARA COMPLETAR SU VOTO <br/> REGISTRE SUS DATOS</h2>
      {idPostulacion}
      <form onSubmit={handleSubmit} className='select-none'>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Nombre:
            <input type="text" name="name" id="name" style={inputStyle} />
          </label>
          <span className='mt-2 text-sm text-red-600 semifont-bold' id='error_nombre'>{ errorName }</span>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Apellido:
            <input type="text" name="lastname" id="lastname" style={inputStyle} />
          </label>
          <span className='mt-2 text-sm text-red-600 semifont-bold' id='error_apellido'>{ errorLastname }</span>
        </div>        
        <div style={{ marginBottom: '10px' }}>
          <label>
            Correo Electrónico:
            <input type="text" name="email" id="email" style={inputStyle} />
          </label>
          <span className='mt-2 text-sm text-red-600 semifont-bold' id='error_email'>{ errorEmail }</span>
        </div>

        <ReCAPTCHA
        sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
        onChange={onCaptchaChange}
      />

        <ul>
            <li>* Solo se admite un voto por mail registrado.</li>
            <li>* Para hacer efectiva tu votación, debes confirmar haciendo click en el link que recibirás en tu mail.</li>
        </ul>
        <br/>
        <button type="submit" id='BtnEnviar'>Enviar</button>
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
