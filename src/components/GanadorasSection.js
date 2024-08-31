 
import React  from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";


function GanadorasSection() {

  return (
    <section id="section_1" class="flex justify-center">
      <div className="w-full mx-auto  container" style={{backgroundColor: "#e9d9fc"}}>
        <div className="presentanGanadoras" style={{paddingTop: '4.49rem'}}>
         <ul className='ganadoras_anos'>
          <li>2023</li>
          <li>2022</li>          
          <li>2020</li> 
          <li>2019</li> 
         </ul>                     
        </div>
        <div class="contenidoGanadoras grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div>          <img src="public/img/ganadoras/isabel.png" />
          </div>
          
         <div>
          <h2 class="contenido__tituloGanadoras">GANADOARS PAM 2023</h2>
          <h1 className='titulo_principalGanadoras'>
            ISABEL DEL RIO
          </h1>


          <p class="texto__principal">
            Fundación Antenna y Bank of America presentan la quinta versión del
            Premio PAM Artista Mujer, que invita a artistas visuales mujeres
            desde los 60 años.
          </p>
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

export default GanadorasSection;
