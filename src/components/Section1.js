 
import React  from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Presentadores from './Presentadores'; // Si es una exportación por defecto


function Section1() {

  return (
    <section id="section_1" class="flex justify-center">
      <div className="w-full mx-auto  " style={{backgroundColor: "#e9d9fc"}}>
        <div className="presentan" style={{paddingTop: '4.49rem'}}>
         <Presentadores/>                        
        </div>
        <div class="contenido">
          <h2 class="contenido__titulo">PREMIO PAM 2024</h2>
          <h1 className='titulo_principal'>
            CINCO AÑOS RECONOCIENDO <br /> ARTISTAS MUJERES
          </h1>

          <p class="texto__principal">
            Fundación Antenna y Bank of America presentan la quinta versión del
            Premio PAM Artista Mujer, que invita a artistas visuales mujeres
            desde los 60 años.
          </p>

          <p class="texto__principal">
            Un jurado de expertos escogerá a la artista ganadora y a dos
            menciones honrosas a través de un proceso ciego, es decir, teniendo
            únicamente la obra como referente.
          </p>

          <p class="texto__principal">
            Además, el público votará y seleccionará a una artista ganadora, lo
            cual permite democratizar este reconocimiento y difundir más
            ampliamente a las participantes.
          </p>

          <div class="texto__premios">
            <h2 id="premios_titulo">PREMIOS</h2>
            <div class="premio__container">
              <p class="premio__medium">
                Primer lugar:&nbsp;<strong>$5.000.000 </strong>{" "}
              </p>
            </div>
            <div class="premio__container">
              <p class="premio__medium">
                Premio del público:&nbsp;<strong>$2.000.000</strong>{" "}
              </p>
            </div>
            <div class="premio__container">
              <p class="premio__medium">
                Mención honrosa (2):&nbsp;<strong>$1.500.000</strong>{" "}
              </p>
            </div>
            <div class="postular-btns">


        { (process.env.REACT_APP_POSTULACION_ACTIVA === 1 ||  process.env.REACT_APP_POSTULACION_ACTIVA === '1') && (<a
                className="btn__bases"
                href="/postulacion"
              >
                POSTULA TU OBRA AQUÍ
              </a>
        )} 

        <a class="btn__bases" href="bases_pam_2024.pdf" target="_blank">
                BASES 2024
              </a>

        { (process.env.REACT_APP_VOTACION_ACTIVA === 1 ||  process.env.REACT_APP_VOTACION_ACTIVA === '1') && (
            <a
                className="btn__bases"
                href="/votacion"
              >
                VOTAR AQUÍ
              </a>
        )}   
    
            </div>
           
          </div>
        </div>

        <div class="icons-header">
          <div>
            <a href="https://www.instagram.com/antennaorg/?hl=es-la" target="_blank">
              <FaInstagram size={32} color="#F0000C" />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/antennaorg" target="_blank">
              <ImFacebook size={24} color="#F0000C" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/company/antennaorg/"
              target="_blank"
            >
              <AiOutlineLinkedin size={35} color="#F0000C" />
            </a>
          </div>
          <div>
            <a href="https://www.premiopam.cl/" target="_blank">
              <img  width="18" style={{marginLeft:'7px'}}
                class="icons__hastag"
                src="img/icons/hashtag_vertical.png"
                alt="premio-pam"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
