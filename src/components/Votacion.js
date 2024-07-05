 
import React  from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Presentadores from './Presentadores'; // Si es una exportación por defecto


function Votacion() {

  const repeatTimes = Array.from({ length: 5 });

  return (
    <section id="section_1" class="flex justify-center">
      <div className="w-full mx-auto  container" style={{backgroundColor: "#e9d9fc"}}>
        <div class="w-full">
            
                Aca usar swr
                {repeatTimes.map((_, index) => (

                  <div className='PostulacionContenedor bg-white'>
                    <div className='PostulacionItem'>
                      <table className='w-full pl-[5%] pr-[5%] mb-[2%]'><tr><td><h1 className='titulo_ficha'>01</h1></td><td className='text-right'><a className='btn_botar' onclick="votar('1');">VOTAR POR ESTA OBRA</a></td></tr></table>
                      <div class="">
                        <img alt='' class="lazyload " id="ImgPrincipal_<?php echo $ID_POSTULACION; ?>" data-id="25" data-anterior="" data-siguiente="" data-actual="52" data-ruta="https://premiopam.cl/media/5/1.jpg"  data-imagenes="<?php echo $fotos; ?>" loading="lazy" data-src="https://premiopam.cl/media/5/1.jpg" src="https://premiopam.cl/media/5/1.jpg" />
                      </div>

                      <h3><b>Año Creación</b>: 2021.</h3>
                      <h3><b>Técnica</b>: ACUARELA.</h3>
                      <h3><b>Dimensiones</b>: 25cmx36cm.</h3>
                      <h3><b>Edad</b>: 66</h3>

                      <h3><b>Nacionalidad</b>: Chilena.</h3>
                      <h3><b>Ciudad</b>: Santiago.</h3>
                      <br/>

                    </div> 
                  </div>
                ))}


        </div>

      </div>
    </section>
  );
}

export default Votacion;
