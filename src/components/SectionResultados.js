 
import React  from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Presentadores from './Presentadores'; // Si es una exportación por defecto


function SectionResultados() {

  return (
    <section id="section_1" class="flex justify-center">
      <div className="w-full mx-auto  container" style={{backgroundColor: "#e9d9fc"}}>
        <div className="presentan" style={{paddingTop: '4.49rem'}}>
         <Presentadores/>                        
        </div>
        <div class="contenido">
          <h2 class="contenido__titulo">PREMIO PAM 2024:</h2>
          <h1 className='titulo_principal'>
            CONOCE LAS GANADORAS
          </h1>

          <p class="texto__principal font-bold">
          Con más de 330 postulaciones y 20,000 votos del público, la quinta edición del Premio Artista Mujer (PAM) ha sido un hito.
          </p>

          <p class="texto__principal mb-5">
          Fundación Antenna y Bank of America han premiado a cuatro destacadas artistas visuales en un evento que reafirma su compromiso con la promoción de las mujeres en el arte.Con una participación que duplicó la del año anterior, el Premio PAM sigue consolidándose como un referente en el panorama artístico nacional e internacional. Desde su creación, más de 980 artistas han participado, enriqueciendo el tejido cultural con una diversidad de voces y estilos.
          </p>
  
      <div className="ganadora" style={{marginTop:'4.5rem'}} >
        <div>
          <div className="flex flex-col md:flex-row w-full">
            <div className="pr-0 sm:pr-7 zona_foto">

            <hr/>
              <img
                src={`https://premiopam.cl/img/ganadoras/2023/IsabelDelRio.png`}
                alt={`Retrato`}
              />
            </div>
            <div>
              <h2 class="contenido__tituloGanadorasActual w-full ">
              Primer lugar Premio PAM 2024
              </h2>
              <h1 class="titulo_principalGanadorasActual w-full ">
              Alicia Villarreal
              </h1>
              <p class="text-black w-full text-justify text-sm sm:text-sm " style={{color:' #F0000C',fontSize:'18px'}}>
              Licenciada en Arte y reconocida por sus instalaciones, Villarreal fue galardonada por su obra Grabar el Territorio, una instalación de 43 bancos escolares intervenidos que crea una cartografía simbólica del centro y sur de Chile. Su obra explora la memoria, la educación y el arte, contribuyendo a la identidad nacional.
              </p>
            </div>
          </div>
          <div className="w-full">
            <img
              src={`https://premiopam.cl/img/ganadoras/2023/ObraIsabeldelRio.png`}
              style={{ width: "100%" , maxWidth:"100%" }}
              alt="Obra"
              className="pt-6 fotoObra"
            />
          </div>
        </div>
        <div className="w-full ">
          <div className="pt-4 text-black w-full text-justify text-xs sm:text-sm "  style={{color:' #F0000C'}}>
            <ol>
              <li>
                <strong>Título</strong> : Grabar el territorio.
              </li>
              <li><strong>Fecha de creación</strong>: Fecha</li>
              <li>
              <strong>Dimensiones</strong>: La instalación ocupa un espacio aproximado de 350 cm de ancho x 840 cm de largo x 62 cm de altura.
              </li>
            </ol>
          </div>
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

export default SectionResultados;
