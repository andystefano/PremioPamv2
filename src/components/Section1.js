
import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Presentadores from './Presentadores'; // Si es una exportación por defecto
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


function Section1() {

  return (
    <section id="section_1" className="flex justify-center pb-5">
      <div className="w-full mx-auto mt-12 md:mt-[4.7rem] lg:mt-[4.7rem] xl:mt-[4.7rem] xs:px-6 px-6 md:px-0  lg:px-0  xl:px-0  md:mt-[8.7rem] lg:mt-[8.7rem] xl:mt-[8.7rem]" style={{ backgroundColor: "#e9d9fc" }}>
        <div className="presentan h-full flex flex-col justify-start hidden md:block lg:block xl:block">
          <Presentadores />
        </div>
        <div className="contenido">






          <div className="ganadoras-btn-presentan mt-0 md:mt-16 lg:mt-16 xl:mt-16  block md:hidden lg:hidden xl:hidden">
            <a
              className=""
              target='_blank'
              href="https://drive.google.com/file/d/1KxT2mQTMT2AL8v8kAMFeRMlGx0eC9oPm/view?usp=sharing"
            >
              BASES 2025
            </a>
          </div>

          <div className="ganadoras-btn-presentan mb-12 md:mb-28  lg:mb-28  xl:mb-28  mt-16  block md:hidden lg:hidden xl:hidden">
            <a id='postula_btn_desk'
              className=""
              href="/postulacion"
            >
              POSTULA AQUÍ
            </a>
          </div>



          <div className='promo block md:hidden lg:hidden xl:hidden'>
            <HiOutlineArrowNarrowRight className="hidden text-[#f0000c]  md:block lg:block xl:block mr-1 flex-shrink-0" size={65} />
            <h4>Primer lugar:</h4>
            <h3>$5.000.000</h3>
            <h4>Premio del público:</h4>
            <h3>$2.000.000</h3>
            <h4>Menciones honrosas (2):</h4>
            <h3>$1.500.000</h3>
          </div>


          <h2 className="contenido__titulo">PREMIO PAM 2025 <b>|</b> <span>SEIS AÑOS, SEIS RAZONES</span></h2>
          <h1 className='titulo_principal'>
            SEIS EDICIONES CELEBRANDO<br />
            A LAS MUJERES ARTISTAS EN CHILE.
          </h1>

          <p className="font-inter text-[#F0000C] text-xl md:text-2xl md:leading-[2.1rem]  lg:text-2xl lg:leading-[2.1rem]  xl:text-2xl xl:leading-[2.1rem]    font-semibold	md:mt-[4.4rem] lg:mt-[4.4rem] xl:mt-[4.4rem] max-w-[100%] md:max-w-[700px] lg:max-w-[700px]  xl:max-w-[700px]  px-0 md:px-0 lg:px-0 xl:px-0 ">
            Reconocemos a mujeres artistas visuales sobre los 60 años,
            en plena vigencia creativa.
          </p>

          <p className="font-inter text-[#F0000C] text-xl md:text-2xl lg:text-2xl xl:text-2xl font-ligth mt-5 max-w-[100%] md:max-w-[700px] lg:max-w-[700px]  xl:max-w-[700px] px-0 md:px-0 lg:px-0 xl:px-0 [word-spacing:3px]">
            Si eres artista, o conoces a una creadora que merezca este
            reconocimiento, este es tu momento.
          </p>



          <div className="texto__premios">



            <div className="postular-btns">



              {(process.env.REACT_APP_VOTACION_ACTIVA === 1 || process.env.REACT_APP_VOTACION_ACTIVA === '1') && (
                <a
                  className="btn__bases"
                  href="/votacion"
                >
                  VOTAR AQUÍ
                </a>
              )}



              <HiOutlineArrowNarrowRight className="mt-0 text-[#f0000c] mr-2 flex-shrink-0 self-start  block md:hidden lg:hidden xl:hidden" size={65} />

              <div className="md:flex md:items-start md:mt-[6.5rem] lg:mt-[6.5rem] xl:mt-[6.5rem] text-[#F0000C] ml-0 w-full">
                <HiOutlineArrowNarrowRight className="hidden md:block lg:block xl:block mr-1 flex-shrink-0" size={65} />
                <h3 className="font-roboto text-xl mx-0 md:mx-4 lg:mx-4 xl:mx-4 md:text-2xl lg:text-2xl xl:text-2xl  font-black mt-3">
                  ¿POR QUÉ PREMIAR A MUJERES ARTISTAS SOBRE LOS 60 AÑOS?
                </h3>
              </div>



              <ol className="font-inter text-[#F0000C] text-xl md:text-2xl font-extraligth list-decimal list-inside space-y-2 md:pl-5 max-w-[100%] md:max-w-[75%] lg:max-w-[75%] xl:max-w-[75%] md:ml-12">
                <li className='pt-4'><span className='font-bold'>Porque</span> son nuestro presente, no el pasado.</li>
                <li className='pt-4'><span className='font-bold'>Porque</span> hay historias que todavía no se han contado y obras que aún esperan ser vistas.</li>
                <li className='pt-4'><span className='font-bold'>Porque</span> su camino inspira a quienes están comenzando.</li>
                <li className='pt-4'><span className='font-bold'>Porque</span> la trayectoria merece ser reconocida en vida.</li>
                <li className='pt-4'><span className='font-bold'>Porque</span> cada obra es una declaración de libertad y vigencia.</li>
                <li className='pt-4 pb-8 md:pb-12 lg:pb-12 xl:pb-12'><span className='font-bold'>Porque</span> ya son seis ediciones y seguimos encontrando razones para visibilizarlas.</li>
              </ol>

            </div>




          </div>
        </div>

        <div className="icons-header">
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
              <img width="18" style={{ marginLeft: '7px' }}
                className="icons__hastag"
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
