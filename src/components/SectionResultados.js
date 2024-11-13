 
import React  from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Presentadores from './Presentadores'; // Si es una exportación por defecto


function SectionResultados() {

  const ganadores = [
    {
      lugar: "Primer lugar Premio PAM 2024",
      nombre: "Alicia Villarreal",
      descripcion: "Licenciada en Arte y reconocida por sus instalaciones, Villarreal fue galardonada por su obra Grabar el Territorio, una instalación de 43 bancos escolares intervenidos que crea una cartografía simbólica del centro y sur de Chile. Su obra explora la memoria, la educación y el arte, contribuyendo a la identidad nacional.",
      tituloObra: "Grabar el Territorio",
      dimensiones: "La instalación ocupa un espacio aproximado de 350 cm de ancho x 840 cm de largo x 62 cm de altura",
      fotoArtista: "/img/ganadoras/2024/Alicia.png",
      fotoObra: "/img/ganadoras/2024/ObraAlicia.jpg"
    },
    {
      lugar: "Mención Honrosa Premio PAM 2024",
      nombre: "Ester Chacón-Ávila",
      descripcion: "Artista textil de gran trayectoria, Chacón-Ávila desarrolló su carrera en París y fue reconocida por Criatura Textil (Avatar), una obra que combina fibras naturales y representa la conexión entre técnicas ancestrales y contemporáneas, explorando la transformación y el ciclo de la vida.",
      tituloObra: "Criatura Textil (Avatar), 2023-2024",
      dimensiones: "230 x 200 x 100 cm",
      fotoArtista: "/img/ganadoras/2024/Ester.png",
      fotoObra: "/img/ganadoras/2024/ObraEster.png"
    },
    {
      lugar: "Mención Honrosa Premio PAM 2024",
      nombre: "Ángela Wilson",
      descripcion: "Magíster en Historia del Arte y docente, Wilson fue destacada por Telón de Fondo, una instalación compuesta por lienzos y un video, que reflexiona sobre la fugacidad del tiempo y la experiencia humana a través de imágenes en tinta que evocan los ritos y las experiencias íntimas.",
      tituloObra: "Telón de Fondo",
      dimensiones: "Instalación medidas variables - 10 lienzos de 350 x 280 cm cada uno y un video",
      fotoArtista: "/img/ganadoras/2024/Angela.png",
      fotoObra: "/img/ganadoras/2024/ObraAngela.jpg"
    },
    {
      lugar: "Voto del Público Premio PAM 2024",
      nombre: "Alejandrina Valderrama",
      descripcion: "Nacida en la ex oficina salitrera Victoria, Valderrama se convierte en la primera artista autodidacta en recibir este premio. Su obra Frutas de Pica, una monumental escultura en hormigón armado que representa las frutas típicas del oasis de Pica, es un ícono cultural de la zona y deja un legado tangible para su comunidad.",
      tituloObra: "Frutas de Pica",
      dimensiones: "220-130-110-160-130 cm",
      fotoArtista: "/img/ganadoras/2024/Alejandrina.png",
      fotoObra: "/img/ganadoras/2024/ObraAlejandrina.jpeg"
    }
  ];
  

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
  
    

     {/* Itera sobre los ganadores y renderiza cada uno */}
     {ganadores.map((ganador, index) => (
            <div className="ganadora_actual" key={index}>
              <div>
                <div className="flex flex-col md:flex-row sd:flex-row xs:flex-row w-full">
                  <div className="pr-0 sm:pr-7 zona_fotoActual">
                    <hr />
                    <img src={ganador.fotoArtista} alt={`Retrato de ${ganador.nombre}`} />
                  </div>
                  <div>
                    <h2 className="contenido__tituloGanadorasActual">{ganador.lugar}</h2>
                    <h1 className="titulo_principalGanadorasActual w-full">{ganador.nombre}</h1>
                    <p className="text-black w-full  contenidoGanadorasActual" style={{ color: '#F0000C', fontSize: '16px' }}>
                      {ganador.descripcion}
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <img src={ganador.fotoObra} style={{ width: "100%", maxWidth: "100%" }} alt={`Obra de ${ganador.nombre}`} className="pt-6 fotoObra" />
                </div>
              </div>
              <div className="w-full ">
                <div className="pt-4 text-black w-full text-justify text-xs sm:text-sm"
                  style={{
                    color: '#F0000C',
                    marginBottom: window.innerWidth <= 640 ? '0' : '6rem'
                  }}
                >
                  <ol style={{maxWidth:'330px'}}>
                    <li><strong>Título</strong> : {ganador.tituloObra}</li>
                    <li><strong>Dimensiones</strong> : {ganador.dimensiones}</li>
                  </ol>
                </div>
              </div>


            </div>
          ))}




<div class="ganadoras-btns2" style={{marginTop:'0px',padding:'5rem'}}><a class="btn__ganadoras2Movil" href="/ganadoras">GANADORAS ANTERIORES</a></div>




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
