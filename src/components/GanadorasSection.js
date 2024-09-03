import React, {useState} from "react";
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Ganadoras from "./Ganadora";

function GanadorasSection() {

  const [ano, setAno] = useState('2023');

  return (
    <section id="section_ganadoras" class="flex justify-center">
      <div
        className="w-full mx-auto  container"
        style={{ backgroundColor: "#fff6e6" }}
      >
        <div className="presentanGanadoras" style={{ paddingTop: "4.49rem" }}>
          <ul className="ganadoras_anos">
          <li className="mb-7 underline" onClick={() => setAno(2023)}><a>2023</a></li>
          <li className="mb-7" onClick={() => setAno(2022)}><a>2022</a></li>
          <li className="mb-7" onClick={() => setAno(2020)}><a>2020</a></li>
          <li className="mb-7" onClick={() => setAno(2019)}><a>2019</a></li>
          </ul>
        </div>
        <div class="contenidoGanadoras ">
          <Ganadoras
            nombre={"ISABEL DEL RIORIO"}
            biografia={
              "Isabel del Río, nacida en 1956, es una artista visual chilena, licenciada en Artes con especialización en grabado por la Pontificia Universidad Católica de Chile y magíster en Artes por la Universidad de Chile. Ha exhibido su trabajo en destacadas instituciones como la Bienal de Praga, el Blanton Museum of Art y el Haus Am Kleist-Park de Berlín."
            }
            retrato={"isabel.png"}
            obra={"isabel.png"}
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
            nombre={"ISABEL DEL RIORIO"}
            biografia={
              "Isabel del Río, nacida en 1956, es una artista visual chilena, licenciada en Artes con especialización en grabado por la Pontificia Universidad Católica de Chile y magíster en Artes por la Universidad de Chile. Ha exhibido su trabajo en destacadas instituciones como la Bienal de Praga, el Blanton Museum of Art y el Haus Am Kleist-Park de Berlín."
            }
            retrato={"isabel.png"}
            obra={"isabel.png"}
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
            nombre={"ISABEL DEL RIORIO"}
            biografia={
              "Isabel del Río, nacida en 1956, es una artista visual chilena, licenciada en Artes con especialización en grabado por la Pontificia Universidad Católica de Chile y magíster en Artes por la Universidad de Chile. Ha exhibido su trabajo en destacadas instituciones como la Bienal de Praga, el Blanton Museum of Art y el Haus Am Kleist-Park de Berlín."
            }
            retrato={"isabel.png"}
            obra={"isabel.png"}
            titulo={"Circuitos Híbrido"}
            dimensiones={"410 x 100 cm"}
            fecha={"2007"}
            tecnica={
              "120 sistemas de audio programado y pregrabados y plancha de acrílico"
            }
            ano={2022}
            anoSeleccion={ano}
          /> 
        </div>

        <div class="icons-header-ganadoras ">
          <div>
            <a
              href="https://www.instagram.com/antennaorg/?hl=es-la"
              target="_blank" rel="noreferrer"
            >
              <FaInstagram size={32} color="#F0000C" />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/antennaorg" target="_blank" rel="noreferrer">
              <ImFacebook size={24} color="#F0000C" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/company/antennaorg/"
              target="_blank" rel="noreferrer"
            >
              <AiOutlineLinkedin size={35} color="#F0000C" />
            </a>
          </div>
          <div>
            <a href="https://www.premiopam.cl/" target="_blank" rel="noreferrer">
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
