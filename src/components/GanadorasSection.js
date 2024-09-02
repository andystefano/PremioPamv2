import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";

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
          <div>
            <div className="flex w-full">
              <div className="pr-10 pt-4">
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
                <h1 class="titulo_principalGanadoras w-full">ISABEL DEL RIO</h1>
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
            <div className="pt-10">
              <ol>
              <li>Título : Circuitos Híbridos Dimensiones : 410 x 100 cm </li>
              <li>Fecha de creación : 2007</li>
              <li>Técnica : 120 sistemas de audio programado y pregrabados y plancha de acrílico.</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="icons-header-ganadoras">
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
