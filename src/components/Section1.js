 
import React  from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Presentadores from './Presentadores'; // Si es una exportación por defecto
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


function Section1() {

  return (
    <section id="section_1" class="flex justify-center pb-5">
      <div className="w-full mx-auto  " style={{backgroundColor: "#e9d9fc"}}>
        <div className="presentan h-full flex flex-col justify-end pl-8 ">
         <Presentadores/>                        
        </div>
        <div class="contenido">
          <h2 class="contenido__titulo">PREMIO PAM 2024 <b>|</b> <span>SEIS AÑOS, SEIS RAZONES</span></h2>
          <h1 className='titulo_principal'>
          SEIS EDICIONES CELEBRANDO<br/>
          A LAS MUJERES ARTISTAS EN CHILE.
          </h1>

          <p className="text-[#F0000C] text-2xl font-black mt-[4.9rem] max-w-[80%]">
          Reconocemos a mujeres artistas visuales sobre los 60 años,
          en plena vigencia creativa.
          </p>

          <p className="text-[#F0000C] text-3xl font-ligth mt-5 max-w-[80%]">
          Si eres artista, o conoces a una creadora que merezca este
          reconocimiento, este es tu momento.
          </p>



          <div class="texto__premios">
        
           
            
            <div class="postular-btns">


        { (process.env.REACT_APP_POSTULACION_ACTIVA === 1 ||  process.env.REACT_APP_POSTULACION_ACTIVA === '1') && (<a
                className="btn__bases"
                href="/postulacion"
              >
                POSTULA AQUÍ
              </a>
        )} 

        <a class="btn__bases" href="bases_pam_2024.pdf" target="_blank">
                BASES 2025
              </a>

        { (process.env.REACT_APP_VOTACION_ACTIVA === 1 ||  process.env.REACT_APP_VOTACION_ACTIVA === '1') && (
            <a
                className="btn__bases"
                href="/votacion"
              >
                VOTAR AQUÍ
              </a>
        )}   


    

          <div className="flex items-start mt-[6.5rem] text-[#F0000C] ml-0">
  <HiOutlineArrowNarrowRight className="mr-1 flex-shrink-0" size={65} />
  <h3 className="text-2xl font-black mt-3">
    ¿POR QUÉ PREMIAR A MUJERES ARTISTAS SOBRE LOS 68 AÑOS?
  </h3>
</div>



        <ol  className="text-[#F0000C] text-2xl font-extraligth list-decimal list-inside space-y-2 pl-5 max-w-[75%] ml-12">
  <li className='pt-4'><span className='font-bold'>Porque</span> son nuestro presente, no el pasado.</li>
  <li className='pt-4'><span className='font-bold'>Porque</span> hay historias que todavía no se han contado y obras que aún esperan ser vistas.</li>
  <li className='pt-4'><span className='font-bold'>Porque</span> su camino inspira a quienes están comenzando.</li>
  <li className='pt-4'><span className='font-bold'>Porque</span> la trayectoria merece ser reconocida en vida.</li>
  <li className='pt-4'><span className='font-bold'>Porque</span> cada obra es una declaración de libertad y vigencia.</li>
  <li className='pt-4'><span className='font-bold'>Porque</span> ya son seis ediciones y seguimos encontrando razones para visibilizarlas.</li>
</ol>
    
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
