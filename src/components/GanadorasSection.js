import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Ganadoras from "./Ganadora"

function GanadorasSection() {
  return (
    <section id="section_ganadoras" class="flex justify-center">
      <div
        className="w-full mx-auto  container"
        style={{ backgroundColor: "#fff6e6" }}
      >
        <div className="presentanGanadoras" style={{ paddingTop: "4.49rem" }}>
          <ul className="ganadoras_anos">
            <li className="mb-7 underline">2023</li>
            <li className="mb-7">2022</li>
            <li className="mb-7">2020</li>
            <li className="mb-7">2019</li>
          </ul>
        </div>
        <div class="contenidoGanadoras ">





          <Ganadoras nombre={'ISABEL DEL RIORIO'} biografia={"Isabel del Río, nacida en 1956, es una artista visual chilena, licenciada en Artes con especialización en grabado por la Pontificia Universidad Católica de Chile y magíster en Artes por la Universidad de Chile. Ha exhibido su trabajo en destacadas instituciones como la Bienal de Praga, el Blanton Museum of Art y el Haus Am Kleist-Park de Berlín."} retrato={"isabel.png"} obra={"isabel.png"}  titulo={"Circuitos Híbrido"} dimensiones={"410 x 100 cm"} fecha={"2007"} tecnica={"120 sistemas de audio programado y pregrabados y plancha de acrílico"} ano={2023}  />
        
          <div className="ganadora  mt-14">
            <div>
              <div className="flex w-full">
                <div className="pr-10 pt-4" style={{minWidth:'355px'}}>
                  <img
                    src="/img/ganadoras/isabel.png"
                    style={{ width: "345px" }}
                    alt="Isabel"
                  />
                </div>
                <div>
                  <h2 class="contenido__tituloGanadoras w-full">
                    GANADORAS PAM 2023
                  </h2>
                  <h1 class="titulo_principalGanadoras w-full">
                    ISABEL DEL RIO
                  </h1>
                  <p class="text-black w-full">
                    Fundación Antenna y Bank of America presentan la quinta
                    versión del Premio PAM Artista Mujer, que invita a artistas
                    visuales mujeres desde los 60 años.
                  </p>
                </div>
              </div>
              <div className="w-full">
                <img
                  src="/img/ganadoras/isabel_obra.png"
                  style={{ width: "100%" }}
                  alt="Isabel"
                  className="pt-10"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="pt-4">
                <ol>
                  <li>
                    Título : Circuitos Híbridos Dimensiones : 410 x 100 cm{" "}
                  </li>
                  <li>Fecha de creación : 2007</li>
                  <li>
                    Técnica : 120 sistemas de audio programado y pregrabados y
                    plancha de acrílico.
                  </li>
                </ol>
              </div>
            </div>
          </div>                              

        </div>

        <div class="icons-header-ganadoras ">
          <div>
            <a
              href="https://www.instagram.com/antennaorg/?hl=es-la"
              target="_blank"
            >
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
