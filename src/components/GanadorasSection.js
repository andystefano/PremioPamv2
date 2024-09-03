import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Ganadoras from "./Ganadora";

function GanadorasSection() {
  const [ano, setAno] = useState(2023);

  return (
    <section id="section_ganadoras" class="flex justify-center">
      <div
        className="w-full mx-auto  container"
        style={{ backgroundColor: "#fff6e6" }}
      >
        <div className="presentanGanadoras" style={{ paddingTop: "4.49rem" }}>
          <ul className="ganadoras_anos">
          <li
        className={`mb-7 ${ano === 2023 ? 'underline' : ''}`}
        onClick={() => setAno(2023)}
      >
        <a>2023</a>
      </li>
      <li
        className={`mb-7 ${ano === 2022 ? 'underline' : ''}`}
        onClick={() => setAno(2022)}
      >
        <a>2022</a>
      </li>
      <li
        className={`mb-7 ${ano === 2021 ? 'underline' : ''}`}
        onClick={() => setAno(2021)}
      >
        <a>2021</a>
      </li>
      <li
        className={`mb-7 ${ano === 2020 ? 'underline' : ''}`}
        onClick={() => setAno(2020)}
      >
        <a>2020</a>
      </li>
          </ul>
        </div>
        <div class="contenidoGanadoras ">
          <Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"AndreaFischer.png"}
            obra={"ObraAndreaFischer.jpeg"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2023}
            anoSeleccion={ano}
          />

<Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"FrancescaColzani.png"}
            obra={"ObraFrancescaColzani.png"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2023}
            anoSeleccion={ano}
          />


<Ganadoras
            nombre={"ISABEL DEL RIO"}
            biografia={
              "Isabel del Río, nacida en 1956, es una artista visual chilena, licenciada en Artes con especialización en grabado por la Pontificia Universidad Católica de Chile y magíster en Artes por la Universidad de Chile. Ha exhibido su trabajo en destacadas instituciones como la Bienal de Praga, el Blanton Museum of Art y el Haus Am Kleist-Park de Berlín."
            }
            retrato={"IsabelDelRio.png"}
            obra={"ObraIsabeldelRio.png"}
            titulo={"Circuitos Híbrido"}
            dimensiones={"410 x 100 cm"}
            fecha={"2007"}
            tecnica={
              "120 sistemas de audio programado y pregrabados y plancha de acrílico"
            }
            ano={2023}
            anoSeleccion={ano}
          />


<Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"XimenaIzquierdo.png"}
            obra={"ObraXimenaIzquierdo.jpg"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2023}
            anoSeleccion={ano}
          />      









<Ganadoras
            nombre={"*****"}
            biografia={
             "*****A"
            }
            retrato={"ClaudiaYagnam.png"}
            obra={"ObraClaudiaYagnam.jpg"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2022}
            anoSeleccion={ano}
          />      



<Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"DeniseBlanchard.png"}
            obra={"ObraDeniseBlanchard.jpeg"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2022}
            anoSeleccion={ano}
          />      



<Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"EstherFierro.png"}
            obra={"ObraEstherFierro.jpeg"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2022}
            anoSeleccion={ano}
          />      



<Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"VirginiaMaluk.png"}
            obra={"ObraVirginiaMaluk.jpeg"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2022}
            anoSeleccion={ano}
          />  


<Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"EugeniaVargas.png"}
            obra={"ObraEugeniaVargas.jpg"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2021}
            anoSeleccion={ano}
          />  


<Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"JavieraMoreira.png"}
            obra={"ObraJavieraMoreira.png"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2021}
            anoSeleccion={ano}
          />


<Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"PazLira.png"}
            obra={"ObraPazLira.png"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2021}
            anoSeleccion={ano}
          />  


<Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"RosaVelasco.png"}
            obra={"ObraRosaVelasco.jpg"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2021}
            anoSeleccion={ano}
          /> 



<Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"CarmenPiemonte.png"}
            obra={"ObraCarmenPiemonte.jpg"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2020}
            anoSeleccion={ano}
          />            




<Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"CorneliaVargas.png"}
            obra={"ObraCorneliaVargas.jpg"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2020}
            anoSeleccion={ano}
          />            



<Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"ElsaBolivar.png"}
            obra={"ObraElsaBolivar.jpg"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2020}
            anoSeleccion={ano}
          />


<Ganadoras
            nombre={"*****"}
            biografia={
             "*****"
            }
            retrato={"JuliaToro.png"}
            obra={"ObraJuliaToro.jpg"}
            titulo={"*****"}
            dimensiones={"*****"}
            fecha={"*****"}
            tecnica={
              "*****"
            }
            ano={2020}
            anoSeleccion={ano}
          />                      


 

        </div>

        <div class="icons-header-ganadoras ">
          <div>
            <a
              href="https://www.instagram.com/antennaorg/?hl=es-la"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={32} color="#F0000C" />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/antennaorg"
              target="_blank"
              rel="noreferrer"
            >
              <ImFacebook size={24} color="#F0000C" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/company/antennaorg/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin size={35} color="#F0000C" />
            </a>
          </div>
          <div>
            <a
              href="https://www.premiopam.cl/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                width="18"
                style={{ marginLeft: "7px" }}
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
