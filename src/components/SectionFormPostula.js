 
import React  from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Presentadores from './Presentadores'; // Si es una exportación por defecto




function SectionFormPostula() {

  return (
    <section id="section_1" class="flex justify-center">
      <div className="w-full mx-auto  container">
      <div className="presentan">
         <Presentadores/>                        
        </div>
        <div class="contenido">
          <h1 className='!mb-0'>POSTULACIÓN PREMIO PAM 2024</h1>
          <h2 class="!mt-1 !mb-12 contenido__titulo" style={{lineHeight: 'normal'}}>COMPLETE LA SIGUIENTE INFORMACIÓN:</h2>




    <form action="GuardaFormulario.php" class="FPAM" id="FPAM" method="post" enctype="multipart/form-data">
     


    <fieldset>
        <h3 className='titulo_ficha'>1. Datos personales</h3>
        <p class="campos-obligatorios mb-6">Campos con asterisco (*) son obligatorios</p>
        <div class="frow">
            <div class="c1">
                <label>Nombre y Apellido*</label>
                <input type="text" name="NOMBRE_APELLLIDO" id="NOMBRE_APELLLIDO" required="" />
                <span>Error</span>
            </div>
        </div>

        <div class="frow">
            <div class="c2">
                <label>Edad*</label>
                <input type="number" name="EDAD" id="EDAD" required="" min="60" />
                <span>Error</span>
            </div>
            <div class="c2">
                <label>Fecha de Nacimiento*</label>
                <input type="hidden" name="FECHA_DE_NACIMIENTO" id="FECHA_DE_NACIMIENTO" class="fecha flatpickr-input" rel="datepicker" placeholder="Seleccione una fecha..." />
                <input class="fecha form-control input" placeholder="Seleccione una fecha..." tabindex="0" type="date" />
                <span>Error</span>
            </div>
        </div>

        <div class="frow">
            <div class="c2 edad-tel-desktop">
                <label>Teléfono*</label>
                <input type="tel" placeholder="(56 9) 9345 3456" name="TELEFONO" id="TELEFONO" required="" />
                <span>Error</span>
            </div>
            <div class="c2 fecha-mail-desktop">
                <label>E-Mail*</label>
                <input type="email" name="EMAIL" id="EMAIL" required="" />
                <span>Error</span>
            </div>
        </div>

        <div class="frow">
            <div class="c1">
                <label>Nacionalidad*</label>
                <input type="text" name="NACIONALIDAD" id="NACIONALIDAD" required="" />
                <span>Error</span>
            </div>
        </div>

        <div class="frow">
            <div class="c2 residencia-desktop">
                <label>País de residencia*</label>
                <input type="text" name="LUGAR_RESIDENCIA" id="LUGAR_RESIDENCIA" required="" />
                <span>Error</span>
            </div>
            <div class="c2 ciudad-desktop">
                <label>Ciudad de residencia*</label>
                <input type="text" name="LUGAR_RESIDENCIA" id="LUGAR_RESIDENCIA" required="" />
                <span>Error</span>
            </div>
        </div>

        <div class="frow">
            <div class="c1">
                <label>Biografía de la artista* (máximo 500 palabras)</label>
                <textarea name="BIOGRAFIA" id="BIOGRAFIA" required=""></textarea>
                <span>Error</span>
            </div>
        </div>

        <div class="frow">
            <div class="c1">
            <div >
            <label>Redes Sociales (opcional)</label>
                </div>
                <input type="text" name="RRSS" id="RRSS" />
                <span>Error</span>
            </div>
        </div>

        <div class="frow">
            <div class="c1">
                <div>
                    <label>Postulado por (opcional)</label>
                </div>
                <input type="text" name="POSTULADA_POR" id="POSTULADA_POR" />
                <span>Error</span>
            </div>
        </div>

        <div class="frow">
            <div class="c1">
                <div>
                    <label>Parentesco (opcional)</label>
                </div>
                <input type="text" name="PARENTESCO" id="PARENTESCO" />
                <span>Error</span>
            </div>
        </div>

        <div class="frow">
            <div class="c2">
                <label>Fotografía de retrato </label>
                <p className='w-full'>Adjunta un archivo formato jpg con máximo 50mb</p>
                <input type="file" className='hidden' name="FOTOGRAFIA_RETRATO" id="FOTOGRAFIA_RETRATO" accept="image/jpeg" />
                <span id="FOTOGRAFIA_RETRATO_ERROR">Error</span>
                <label for="FOTOGRAFIA_RETRATO">
                    <img src="img/upload_select_await.png"  className='m-1 upload' id="IMG_FOTOGRAFIA_RETRATO" />
                </label>
            </div>

            <div class="c2">
                
            </div>
        </div>
    </fieldset>


    <fieldset>
        <h3 className='titulo_ficha'>2. Ficha técnica </h3>
        <p class="campos-obligatorios">Campos con asterisco (*) son obligatorios</p>
        <div class="frow">
            <div class="c1">
                <label>Título de la obra*</label>
                <input type="text" name="TITULO_DE_OBRA" id="TITULO_DE_OBRA" required="" />
                <span>Error</span>
            </div>
        </div>

        <div class="frow">
            <div class="c2">
                <label >Dimensiones* (medidas en cm)</label>
                <input type="text" name="DIMENCIONES" id="DIMENCIONES" required="" />
                <span>Error</span>
            </div>
            <div class="c2">
                <label >Año de creación*</label>
                <input type="number" placeholder="1981" name="FECHA_CREACION" id="FECHA_CREACION" required="" />
                <span>Error</span>
            </div>
        </div>
 

        <div class="frow">
            <div class="c1">
                <label>Técnica*</label>
                <input type="text" name="TECNICA" id="TECNICA" required="" />
                <span>Error</span>
            </div>
        </div>

        <div class="frow">
            <div class="c1">
                <label >Descripción de la obra*</label>
                <p >(máximo 500 palabras)</p>
                <textarea name="STATMENT" id="STATMENT" required=""></textarea>
                <span>Error</span>
            </div>
        </div>

        <div class="frow">
            <div class="c3">
                <label>Imágenes de la obra postulada*</label>
                <p style={{minWidth:'100%'}}>(Adjunta al menos un archivo formato jpg con máximo 5mb)</p>
            </div>

            <div class="c3">
                <div id="FO1">
                    <div>
                        <span class="errorForm"></span>
                    </div>
                    <div>
                        <label for="FOTOGRAFIA_OBRA_1">
                            <img  src="img/upload_select_await.png"  className='m-1 upload' id="F01Placeholder" />
                        </label>
                        <input type="file"  className='hidden' id="FOTOGRAFIA_OBRA_1" name="FOTOGRAFIA_OBRA_1" required="" accept="image/jpeg" />
                    </div>
                </div>

                <div id="FO2">
                    <div>
                        <span class="errorForm"></span>
                    </div>
                    <div>
                        <label for="FOTOGRAFIA_OBRA_2">
                            <img src="img/upload_select_await.png"  className='m-1 upload' id="F02Placeholder" />
                        </label>
                        <input type="file"  className='hidden' id="FOTOGRAFIA_OBRA_2" name="FOTOGRAFIA_OBRA_2" accept="image/jpeg" />
                    </div>
                </div>

                <div id="FO3">
                    <div>
                        <span class="errorForm"></span>
                    </div>
                    <div>
                        <label for="FOTOGRAFIA_OBRA_3">
                            <img  src="img/upload_select_await.png"   className='m-1 upload'  id="F03Placeholder" />
                        </label>
                        <input type="file"  className='hidden' id="FOTOGRAFIA_OBRA_3" name="FOTOGRAFIA_OBRA_3" accept="image/jpeg" />
                    </div>
                </div>
            </div>

            <span id="ErrorFotografiasObra" class="errorForm"></span>
        </div>

<br/>
        <div class="frow">
            <div class="c1">
            <div >
            <label>Para obras audiovisuales escribir link</label>
                    <p >&nbsp;(opcional)</p>
                </div>
                <input type="text" name="LINK_WEB" id="LINK_WEB" />
                <span>Error</span>
            </div>
        </div>

        <input type="submit" value="Enviar postulación" class="btn-submit" />
    </fieldset>


</form>



          
 
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

export default SectionFormPostula;
