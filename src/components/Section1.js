 
import React  from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Presentadores from './Presentadores'; // Si es una exportación por defecto
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


function Section1() {

  return (
    <section id="section_1" class="flex justify-center pb-5">
      <div className="w-full mx-auto  mt-[8.7rem]" style={{backgroundColor: "#e9d9fc"}}>
        <div className="presentan h-full flex flex-col justify-start pl-8 ">
         <Presentadores/>                        
        </div>
        <div class="contenido">
          <h2 class="contenido__titulo">PREMIO PAM 2025 <b>|</b> <span>SEIS AÑOS, SEIS RAZONES</span></h2>
          <h1 className='titulo_principal'>
          SEIS EDICIONES CELEBRANDO<br/>
          A LAS MUJERES ARTISTAS EN CHILE.
          </h1>

          <p className="font-inter text-[#F0000C] text-md md:text-[1.8rem] md:leading-[2.1rem]  lg:text-[1.8rem] lg:leading-[2.1rem]  xl:text-[1.8rem] xl:leading-[2.1rem]    font-semibold	md:mt-[4.4rem] lg:mt-[4.4rem] xl:mt-[4.4rem] max-w-[100%] md:max-w-[80%] lg:max-w-[80%]  xl:max-w-[80%]  px-4 md:px-0 lg:px-0 xl:px-0 ">
          Reconocemos a mujeres artistas visuales sobre los 60 años,
          en plena vigencia creativa.
          </p>

          <p className="font-inter text-[#F0000C]  text-md md:text-3xl lg:text-3xl xl:text-3xl font-ligth mt-5 max-w-[100%] md:max-w-[80%] lg:max-w-[80%]  xl:max-w-[80%] px-4 md:px-0 lg:px-0 xl:px-0 tracking-[-1px] [word-spacing:3px]">
          Si eres artista, o conoces a una creadora que merezca este
          reconocimiento, este es tu momento.
          </p>



          <div class="texto__premios">
        
           
            
            <div class="postular-btns">



        { (process.env.REACT_APP_VOTACION_ACTIVA === 1 ||  process.env.REACT_APP_VOTACION_ACTIVA === '1') && (
            <a
                className="btn__bases"
                href="/votacion"
              >
                VOTAR AQUÍ
              </a>
        )}   


    

          <div className="md:flex md:items-start mt-[6.5rem] text-[#F0000C] ml-0 ">
  <HiOutlineArrowNarrowRight className="hidden md:block lg:block xl:block mr-1 flex-shrink-0" size={65} />
  <h3 className="font-roboto text-xl mx-4 md:text-2xl lg:text-2xl xl:text-2xl  font-black mt-3">
    ¿POR QUÉ PREMIAR A MUJERES ARTISTAS SOBRE LOS 60 AÑOS?
  </h3>
</div>



        <ol  className="font-inter text-[#F0000C] text-xl md:text-2xl font-extraligth list-decimal list-inside space-y-2 md:pl-5 max-w-[90%] md:max-w-[75%] lg:max-w-[75%] xl:max-w-[75%] md:ml-12">
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
