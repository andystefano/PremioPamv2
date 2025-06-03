import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Ganadoras from "./Ganadora";

function GanadorasSection() {
  const [ano, setAno] = useState(2024);

  return (
    <section id="section_ganadoras" className="flex justify-center">
      <div
        className="w-full mx-auto  container"
        style={{ backgroundColor: "#fff6e6" }}
      >
        <div className="presentanGanadoras">
          <ul className="ganadoras_anos">
        <li
        className={`mb-7 ${ano === 2024 ? 'underline' : ''}`}
        onClick={() => setAno(2024)}
      >
        <a href='#2024'>2024</a>
      </li>
          <li
        className={`mb-7 ${ano === 2023 ? 'underline' : ''}`}
        onClick={() => setAno(2023)}
      >
        <a href="#2023">2023</a>
      </li>
      <li
        className={`mb-7 ${ano === 2022 ? 'underline' : ''}`}
        onClick={() => setAno(2022)}
      >
        <a href="#2022">2022</a>
      </li>
      <li
        className={`mb-7 ${ano === 2021 ? 'underline' : ''}`}
        onClick={() => setAno(2021)}
      >
        <a href="#2021">2021</a>
      </li>
      <li
        className={`mb-7 ${ano === 2020 ? 'underline' : ''}`}
        onClick={() => setAno(2020)}
      >
        <a href="#2020">2020</a>
      </li>
          </ul>
        </div>
        <div className="contenidoGanadoras ">


        <Ganadoras
            nombre={"Alicia Villarreal"}
            biografia={
              "Licenciada en Arte y reconocida por sus instalaciones, Villarreal, artista representada por la Galería Patricia Ready, fue galardonada por su obra Grabar el Territorio, una instalación de 43 bancos escolares intervenidos que crea una cartografía simbólica del centro y sur de Chile. Su obra explora la memoria, la educación y el arte, contribuyendo a la identidad nacional."
            }
            retrato={"Alicia.png"}
            obra={"ObraAlicia.jpg"}
            titulo={"Grabar el Territorio"}
            dimensiones={"La instalación ocupa un espacio aproximado de 350 cm de ancho x 840 cm de largo x 62 cm de altura"}
            fecha={"-"}
            tecnica={
              "Intervención de objetos con corte, ensamblaje y serigrafía para construir una instalación"
            }
            ano={2024}
            anoSeleccion={ano}
          />


<Ganadoras
            nombre={"Ester Chacón-Ávila"}
            biografia={
              "Artista textil de gran trayectoria, Chacón-Ávila desarrolló su carrera en París y fue reconocida por Criatura Textil (Avatar), una obra que combina fibras naturales y representa la conexión entre técnicas ancestrales y contemporáneas, explorando la transformación y el ciclo de la vida."
            }
            retrato={"Ester.png"}
            obra={"ObraEster.png"}
            titulo={"Criatura Textil (Avatar), 2023-2024"}
            dimensiones={"230 x 200 x 100 cm"}
            fecha={"-"}
            tecnica={
              "Nudos y cordeles"
            }
            ano={2024}
            anoSeleccion={ano}
          />

<Ganadoras
            nombre={"Ángela Wilson"}
            biografia={
              "Magíster en Historia del Arte y docente, Wilson fue destacada por Telón de Fondo, una instalación compuesta por lienzos y un video, que reflexiona sobre la fugacidad del tiempo y la experiencia humana a través de imágenes en tinta que evocan los ritos y las experiencias íntimas."
            }
            retrato={"Angela.png"}
            obra={"ObraAngela.jpg"}
            titulo={"Telón de Fondo"}
            dimensiones={"Instalación medidas variables - 10 lienzos de 350 x 280 cm cada uno y un video"}
            fecha={"-"}
            tecnica={
              "Dibujo tinta china sobre gaza de lino"
            }
            ano={2024}
            anoSeleccion={ano}
          />          



<Ganadoras
            nombre={"Alejandrina Valderrama"}
            biografia={
              "Nacida en la ex oficina salitrera Victoria, Valderrama se convierte en la primera artista autodidacta en recibir este premio. Su obra Frutas de Pica, una monumental escultura en hormigón armado que representa las frutas típicas del oasis de Pica, es un ícono cultural de la zona y deja un legado tangible para su comunidad."
            }
            retrato={"Alejandrina.png"}
            obra={"ObraAlejandrina.jpeg"}
            titulo={"Frutas de Pica"}
            dimensiones={"220-130-110-160-130 cm"}
            fecha={"-"}
            tecnica={
              "Hormigón armado-cimiento-sobrecimiento-fierros-mallas metalicas hexagonales-concreto-mortero"
            }
            ano={2024}
            anoSeleccion={ano}
          />




        <Ganadoras
            nombre={"Isabel del Río"}
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
            nombre={"Andrea Fischer"}
            biografia={
             "Es artista visual textil y ha dedicado gran parte de su carrera a promover y fomentar el arte textil contemporáneo tanto en Chile como en el extranjero. Formó parte del equipo directivo del Grupo Arte Textil Contemporáneo y ha representado a Chile en eventos internacionales como la Bienal de La Habana (1996), la 9ª Trienal Internacional de Tapicería en Polonia (1998) y la Bienal WTA “Woman in Textile Art” en San José de Costa Rica (2006). Fue vicepresidenta de la Asociación de Artistas Textiles Iberoamericanos y presidió la Corporación Chile Crea Textil."
            }
            retrato={"AndreaFischer.png"}
            obra={"ObraAndreaFischer.jpeg"}
            titulo={"Origen"}
            dimensiones={"160 x 300 cm."}
            fecha={"2022"}
            tecnica={
              "Fibras encoladas con estructura de fierro."
            }
            ano={2023}
            anoSeleccion={ano}
          />

<Ganadoras
            nombre={"Francesca Colzani"}
            biografia={
             "Es psicóloga graduada de la Universidad Católica, con especialización en psicoanálisis, y artista autodidacta. Desde temprana edad mostró un gran interés por el arte, lo que la llevó a tomar diversos cursos para perfeccionarse y participar en talleres de pintura con Lazo, Duclós, Gumucio y Bavarovic. Su trabajo ha sido exhibido en exposiciones individuales en galerías como G. Arte Actual, G. Patricia Ready y G. Artium, así como en exposiciones bipersonales en el Centro de Extensión UC y G. StuArt, y en exposiciones colectivas en MBA, MAVI, MAC Valdivia, Collahuasi y el Centro Cultural de Las Condes."
            }
            retrato={"FrancescaColzani.png"}
            obra={"ObraFrancescaColzani.png"}
            titulo={"Flotante Radiante"}
            dimensiones={"130 x 300 cm"}
            fecha={"2020"}
            tecnica={
              "Óleo sobre lino"
            }
            ano={2023}
            anoSeleccion={ano}
          />


<Ganadoras
            nombre={"Ximena Izquierdo"}
            biografia={
             "Es artista visual, diseñadora gráfica y docente. Estudió diseño en la Universidad Católica de Valparaíso, Artes Aplicadas en la Universidad de Estrasburgo, Francia, y obtuvo un magíster en Artes Visuales en la Universidad de Chile. Fue fundadora y directora de Izquierdo Diseño y Ojo Izquierdo. Ha sido galardonada en varias ocasiones en Diseño Gráfico en Estados Unidos, Brasil, Australia y Chile. Su obra ha sido expuesta en Chile y España, donde realizó una residencia y mostró su trabajo en Mallorca, en espacios como la Galería Patricia Ready, el MNBA, MAVI, la Universidad de Talca y la Bienal SACO."
            }
            retrato={"XimenaIzquierdo.png"}
            obra={"ObraXimenaIzquierdo.jpg"}
            titulo={"Geocromía"}
            dimensiones={"600  x 240 cm."}
            fecha={"2022"}
            tecnica={
              "Mixta"
            }
            ano={2023}
            anoSeleccion={ano}
          />      


<Ganadoras
            nombre={"Denise Blanchard"}
            biografia={
             "Artista visual, especializada en arte textil y con experiencia docente, es licenciada en pedagogía en Artes Plásticas por la Pontificia Universidad Católica de Chile. Nacida en Viña del Mar, actualmente reside en Santiago. Su obra ha sido exhibida en eventos como SOFA Chicago en Estados Unidos, la Red Textil Iberoamericana en Costa Rica, y en las Bienales Internacionales de Arte Textil WTA en México, Argentina y Uruguay. Sus creaciones se encuentran en hoteles como el Enjoy en Antofagasta, el Hotel Noi y el Sheraton San Cristóbal en Santiago, y forman parte de la colección de arte CCU."
            }
            retrato={"DeniseBlanchard.png"}
            obra={"ObraDeniseBlanchard.jpeg"}
            titulo={"Penélope"}
            dimensiones={"1,5 x 2 mts"}
            fecha={"2018"}
            tecnica={
              "Bolsas de té usadas, cosidas a mano."
            }
            ano={2022}
            anoSeleccion={ano}
          />   

<Ganadoras
            nombre={"Claudia Yagnam"}
            biografia={
             "Artista visual nacida en Ovalle en 1962, actualmente vive y trabaja en Santiago de Chile. Formada en fotografía, grabado y pintura, es una figura destacada de la generación de los ochenta de la Pontificia Universidad Católica de Chile. Ha sido parte de un selecto grupo de artistas geométricos en el país, con numerosas exposiciones tanto en Santiago como en regiones y el extranjero, muchas de ellas patrocinadas por el Gobierno de Chile a través de la Dirección de Asuntos Culturales del Ministerio de Relaciones Exteriores. "
            }
            retrato={"ClaudiaYagnam.png"}
            obra={"ObraClaudiaYagnam.jpg"}
            titulo={"Burka"}
            dimensiones={"80 x 80 cm"}
            fecha={"2017"}
            tecnica={
              "Acrílico sobre tela "
            }
            ano={2022}
            anoSeleccion={ano}
          />      

 


<Ganadoras
            nombre={"Esther Fierro"}
            biografia={
             "Ester Fierro Pedreros, grabadora y fotógrafa nacida en Tomé en 1952, inició su formación artística en 1974 en el Taller La Cascada del Centro Cultural de la Municipalidad de Concepción. Influenciada por su padre, el fotógrafo Enrique Fierro Ramírez, aprendió fotografía, desempeñándose como su ayudante. Estudió Licenciatura en Artes Plásticas en la Universidad de Concepción entre 1975 y 1977, estudios que retomó en 1984 con una especialización en grabado, siendo alumna de Eduardo Meissner y Pedro Millar. Entre 1998 y 2000, organizó cursos de arte en recintos carcelarios de Concepción, culminando con una exposición en la sala de la Intendencia de la ciudad en 2000."
            }
            retrato={"EstherFierro.png"}
            obra={"ObraEstherFierro.jpeg"}
            titulo={"Yo soy el tiempo"}
            dimensiones={"50 x 60 cm"}
            fecha={"1980"}
            tecnica={
              "Fotografía ByN"
            }
            ano={2022}
            anoSeleccion={ano}
          />      



<Ganadoras
            nombre={"Virginia Maluk"}
            biografia={
             "Virginia Maluk Manzano, residente en Viña del Mar, Chile, estudió diseño en la Universidad Técnica Federico Santa María de Valparaíso y luego trabajó en fotografía en Guayaquil, Ecuador. No fue sino hasta los 42 años que comenzó a incursionar en el arte a través de la pintura, y desde 2003, en el grabado, el cual estudió en la Escuela de Bellas Artes de Viña del Mar. Aborda el grabado combinando técnicas tradicionales con enfoques experimentales, explorando su carácter de original múltiple y variable en cada etapa, desde la creación de la matriz hasta la edición. Forma parte del Centro del Grabado de Valparaíso, el colectivo Graphos, el Colectivo La Bora, Estampa Valparaíso, e Instantes Gráficos de Buenos Aires."
            }
            retrato={"VirginiaMaluk.png"}
            obra={"ObraVirginiaMaluk.jpeg"}
            titulo={"Cartografía del deterioro"}
            dimensiones={"3 x 3 x 3 m"}
            fecha={"2021"}
            tecnica={
              " xilografía, monotipia, Litopoliester, Collage, textiles y papel con fibras vegetales"
            }
            ano={2022}
            anoSeleccion={ano}
          />  


<Ganadoras
            nombre={"Eugenia Vargas"}
            biografia={
             "Eugenia Vargas-Pereira, nacida en 1949, es una artista visual de origen chileno y que posteriormente se trasladó a Estados Unidos para cursar estudios de arte en el Montana Institute of Arts. A lo largo de su carrera, Vargas-Pereira ha recorrido diversos países, continuando con su práctica artística. Se ha especializado principalmente en performance y fotografía, y ha desarrollado su obra en lugares como Estados Unidos, México, Canadá y Puerto Rico."
            }
            retrato={"EugeniaVargas.png"}
            obra={"ObraEugeniaVargas.jpg"}
            titulo={"Sin Título"}
            dimensiones={"50 x 60 cm"}
            fecha={"1977"}
            tecnica={
              "Registro de performance Plata/Gelatina Blanco y negro"
            }
            ano={2021}
            anoSeleccion={ano}
          />  


<Ganadoras
            nombre={"Javiera Moreira"}
            biografia={
             "Nacida en Santiago, Chile, en 1956, se formó en Pedagogía en Artes Plásticas con especialización en Grabado en la Universidad de Santiago. Su carrera abarca una vasta experiencia tanto en el campo del grabado como en la enseñanza, habiendo trabajado en diversas universidades y colegios. Ha exhibido su obra en numerosas muestras, tanto individuales como colectivas, a nivel nacional e internacional, y ha recibido reconocimientos en Chile, Eslovenia y Polonia (Cracovia). Actualmente, es socia honoraria del Taller 99 y dirige CasaPlan."
            }
            retrato={"JavieraMoreira.png"}
            obra={"ObraJavieraMoreira.png"}
            titulo={"Sombra en rojo"}
            dimensiones={"58 x 38 cm"}
            fecha={"2020"}
            tecnica={
              "Aguafuerte"
            }
            ano={2021}
            anoSeleccion={ano}
          />


<Ganadoras
            nombre={"Paz Lira"}
            biografia={
             "Paz Lira Campino, nacida el 26 de febrero de 1955 en Santiago, Chile, es una artista que se formó en la Licenciatura en Arte con mención en Pintura en la Universidad de Chile entre 1974 y 1977, complementando su formación en fotografía con Enrique Zamudio. Su trabajo, que abarca pintura, grabado e instalación, se enfoca en explorar el paisaje y la naturaleza a través de una rica diversidad de formas, colores, texturas y materiales. En sus obras más recientes, utiliza materiales orgánicos desechados, como fieltro, alquitrán, hojas de celulosa y paneles de abejas en desuso, para crear piezas de gran formato que no solo estimulan múltiples sentidos, sino que también invitan a reflexionar sobre la transformación de la materia con el tiempo. Reside en Santiago, Chile."
            }
            retrato={"PazLira.png"}
            obra={"ObraPazLira.png"}
            titulo={"Transparencia Sonora"}
            dimensiones={"70 x 50 cm"}
            fecha={"2017"}
            tecnica={
              "Mixta"
            }
            ano={2021}
            anoSeleccion={ano}
          />  


<Ganadoras
            nombre={"Rosa Velasco"}
            biografia={
             "Rosa Velasco, es una artista chilena nacida en 1951. Entre 1986 y 1993, se formó en el Taller de Color con Eduardo Vilches, en escultura con Francisco Gazitúa, y en color, dibujo y pintura con Eugenio Dittborn. Su proceso creativo es instintivo, guiado por una red personal de percepciones y conocimientos que le permite explorar y desafiar diferentes temáticas y territorios artísticos. Ha exhibido su obra en museos, galerías e instituciones públicas en América y Europa, y sus piezas forman parte de colecciones privadas y museos. Además, es fundadora y Directora Ejecutiva del Centro ARC en el Desierto de Atacama, Chile."
            }
            retrato={"RosaVelasco.png"}
            obra={"ObraRosaVelasco.jpg"}
            titulo={"Cosmo"}
            dimensiones={"201 x 170 cm"}
            fecha={"2020"}
            tecnica={
              "Acrílico Sobre Tela"
            }
            ano={2021}
            anoSeleccion={ano}
          /> 



<Ganadoras
            nombre={"Carmen Piemonte"}
            biografia={
             "Carmen Piemonte Miani, nacida en 1930, es una pintora y académica chilena de origen italiano, vinculada al Movimiento Forma y Espacio, centrado en la abstracción geométrica. Es una de las pocas mujeres que integraron el Grupo Rectángulo. Estudió en la Universidad de Chile, donde fue discípula de Ramón Vergara Grez, fundador de dicho grupo, y en 1955 regresó a la universidad como profesora de artes plásticas. Su obra explora la comunicación y la existencia humana a través de formas geométricas, como esferas encerradas en cubos herméticos"
            }
            retrato={"CarmenPiemonte.png"}
            obra={"ObraCarmenPiemonte.jpg"}
            titulo={"Solealum II"}
            dimensiones={"146 x 126 cm"}
            fecha={"2008"}
            tecnica={
              "óleo sobre tela lino"
            }
            ano={2020}
            anoSeleccion={ano}
          />            




<Ganadoras
            nombre={"Cornelia Vargas"}
            biografia={
             "Cornelia Vargas, nacida en 1933, es una artista alemano-chilena que ha desarrollado su obra visual en el campo del arte concreto, experimentando con la composición visual en torno a las matemáticas y los colores por medio de variaciones. Estudió en la Hochschule für Gestaltung en Ulm, donde realizó el curso preliminar con la profesora Helene Nonné-Schmidt, asistente de Paul Klee en la Bauhaus. En 1960, se trasladó a Chile, donde trabajó como diseñadora y arquitecta. Cornelia realiza trabajos de diseño interior, textil, fotografía y pintura, e investiga temas como los patrones. Ha sido profesora universitaria en distintas ciudades de Chile como Valparaíso y Concepción."
            }
            retrato={"CorneliaVargas.png"}
            obra={"ObraCorneliaVargas.jpg"}
            titulo={"Superposición de 3 y 2 cuadrados"}
            dimensiones={"497 mm x 397 mm"}
            fecha={"2013"}
            tecnica={
              "Gouache sobre papel"
            }
            ano={2020}
            anoSeleccion={ano}
          />            



<Ganadoras
            nombre={"Elsa Bolívar"}
            biografia={
             "Elsa Bolívar Bravo, nacida en 1929 en Santiago, es una artista visual chilena. En 1947 ingresó a la Escuela de Bellas Artes, donde estudió bajo la guía de profesores como Carlos Pedraza, Israel Roa, Jorge Caballero y Jorge Letelier. Entre 1949 y 1952 cursó Pedagogía en artes plásticas, y entre 1953 y 1956 completó la Licenciatura en pintura en la Universidad de Chile. Tras su formación académica, Bolívar continuó perfeccionándose, destacando su participación en un taller de pintura con el renombrado artista argentino Emilio Pettoruti, lo que despertó su interés en el arte geométrico."
            }
            retrato={"ElsaBolivar.png"}
            obra={"ObraElsaBolivar.jpg"}
            titulo={"Objetos con tablero de Ajedrez"}
            dimensiones={"56 x 89,5"}
            fecha={" 1954"}
            tecnica={
              "Óleo"
            }
            ano={2020}
            anoSeleccion={ano}
          />


<Ganadoras
            nombre={"Julia Toro"}
            biografia={
             "Julia Toro es una fotógrafa y artista visual chilena autodidacta, nacida en 1933. A sus 32 años empezó a estudiar pintura y dibujo junto a Adolfo Couve, pero no es sino a los 38 que comienza a tomar fotografías. Su trabajo se enfoca en fotografíar la vida cotidiana, incursionando también en el erotismo y el retrato hecho retratos a grandes figuras de la historia chilena, tales como Pedro Lemebel, Diamela Eltit, Raúl Zurita, entre otros. Su obra ha sido expuesta en Chile y distintos países de Europa, y ha sido galardonada con distintos premios a nivel nacional. "
            }
            retrato={"JuliaToro.png"}
            obra={"ObraJuliaToro.jpg"}
            titulo={"38A"}
            dimensiones={"60X34 cm"}
            fecha={"2000"}
            tecnica={
              "Fotografía análoga , Cámara Nikon Lente 50 mm Película KODAKISO 400"
            }
            ano={2020}
            anoSeleccion={ano}
          />                      


 

        </div>

        <div className="icons-header-ganadoras ">
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

export default GanadorasSection;
