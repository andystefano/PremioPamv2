import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import Presentadores from "./Presentadores"; // Si es una exportación por defecto
import Lightbox from "./Lightbox"; // Si es una exportación por defecto
import ContactFormLightbox from "./ContactFormLightbox";
import Swal from "sweetalert2";
//import { LoaderContext } from './LoaderContext';
import { LoadingContext } from './LoadingContext';




import React, { useState, useEffect, useContext  } from "react";
import Modal from "react-modal";

function Votacion({ votar = true }) {
  const repeatTimes = Array.from({ length: 5 });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [idPostulacion, setIdPostulacion] = useState(0);
  const [ postulacionItem, setPostulacionItem ] = useState('');
  const [ postulacionVideo, setPostulacionVideo ] = useState('');
  const [loadingImg, setLoadingImg] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPostulaciones, setFilteredPostulaciones] = useState([]);

  //  const { setLoading } = useContext(LoaderContext);

  const { loading, setLoading } = useContext(LoadingContext);

 

  const openLightbox = (images, index = 0, link) => {
    setPostulacionVideo(link);
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % lightboxImages.length);
    setLoadingImg(true);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length
    );
    setLoadingImg(true);
  };

  const openContactForm = (idPostulacion, postulacion) => {
    setPostulacionItem(postulacion);
    setIdPostulacion(idPostulacion);
    setContactFormOpen(true);
  };

  const closeContactForm = () => {
    setContactFormOpen(false);
  };

  const [postulaciones, setPostulaciones] = useState([]);

  
  const [votacionActiva, setVotacionActiva] = useState(false);

  useEffect(() => {
    if(process.env.REACT_APP_VOTACION_ACTIVA===0 || process.env.REACT_APP_VOTACION_ACTIVA==='0'){
      setVotacionActiva(false)
      Swal.fire({
        html: `
        <div className="w-full mx-auto">
        <div className="w-full">
          <h1 className="titulo_principal_votacion">VOTACIONES CERRADAS</h1>
        </div>
        <div className="w-full mx-auto container">
            <ol className="instrucciones text-center">
              <li>*No puedes votar en este momento, el periodo de votaciones actualmente se encuentra cerrado.</li>
            </ol>
          </div>
        </div>
      `,
      customClass: {
        popup: 'bg_yellow',
        confirmButton: 'bg_purple'
      }
      });
    }else{
      setVotacionActiva(true)
    }
  }, [process.env.REACT_APP_VOTACION_ACTIVA]);

  const baseUrl = "https://premiopam.cl/media/";

  // Función para obtener los datos
  useEffect(() => {
   // setLoading(false);
   //setLoading(true)

    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const token = urlParams.get('token')
      const numeroParam = urlParams.get('numero')
      
      if (token) {
      console.log('se confirma el voto aquiii');
      fetch("https://premiopam.cl/confirma.php?token=" + token)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

      Swal.fire({
        html: `
        <div className="w-full mx-auto">
        <div className="w-full">
          <h1 className="titulo_principal_votacion">¡FELICITACIONES!</h1>
        </div>
        <div className="w-full mx-auto container">
            <ol className="instrucciones text-center">
              <li>*Su voto esta registrado y confirmado.</li>
            </ol>
          </div>
        </div>
      `,
      customClass: {
        popup: 'bg_yellow',
        confirmButton: 'bg_purple'
      },
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false
      });

      }else{
        //Cargar Lista de preseleccionados
        setLoading(true)

        fetch("https://v2024.premiopam.cl/lista_preseleccion.php")
        .then((response) => response.json())
        .then((data) => {
          // Mezclar aleatoriamente el array de postulaciones
          const shuffledData = [...data].sort(() => Math.random() - 0.5);
          setPostulaciones(shuffledData);
          setFilteredPostulaciones(shuffledData);
          
          // Si hay parámetro numero en la URL, establecerlo en el buscador
          if (numeroParam) {
            setSearchTerm(numeroParam);
          }
        })
        .catch((error) => console.log(error));

        setLoading(false)

      }
    }

  }, []);

  // Función para filtrar postulaciones
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPostulaciones(postulaciones);
    } else {
      const filtered = postulaciones.filter(postulacion => 
        postulacion.NUMERO.toString().includes(searchTerm.trim())
      );
      setFilteredPostulaciones(filtered);
    }
  }, [searchTerm, postulaciones]);

  const capitalizeText = (str) => {
    let formattedText = str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    if (formattedText.charAt(formattedText.length - 1) !== ".") {
      formattedText += ".";
    }
    return formattedText;
  };

  async function verificarYAgregarURL(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        // Si la respuesta es 200 OK
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(`Error al verificar la URL: ${url}`);
    }
  }

  const Card = ({ data }) => {
    //{`${baseUrl}${data.ID_POSTULACION}/${data.FOTOGRAFIA_OBRA_1}.jpg`}

    let obraImages = [];

    if (
      data.FOTOGRAFIA_OBRA_1 !== "0" &&
      data.FOTOGRAFIA_OBRA_1 !== "null" &&
      data.FOTOGRAFIA_OBRA_1 !== null
    ) {
      // Puedes cambiar 'true' por la condición que desees
      obraImages.push(
        `${baseUrl}${data.ID_POSTULACION}/${data.FOTOGRAFIA_OBRA_1}.jpg`
      );
    }

    if (
      data.FOTOGRAFIA_OBRA_2 !== "0" &&
      data.FOTOGRAFIA_OBRA_2 !== "null" &&
      data.FOTOGRAFIA_OBRA_2 !== null
    ) {
      // Puedes cambiar 'true' por la condición que desees
      obraImages.push(
        `${baseUrl}${data.ID_POSTULACION}/${data.FOTOGRAFIA_OBRA_2}.jpg`
      );
    }

    if (
      data.FOTOGRAFIA_OBRA_3 !== "0" &&
      data.FOTOGRAFIA_OBRA_3 !== "null" &&
      data.FOTOGRAFIA_OBRA_3 !== null
    ) {
      // Puedes cambiar 'true' por la condición que desees
      obraImages.push(
        `${baseUrl}${data.ID_POSTULACION}/${data.FOTOGRAFIA_OBRA_3}.jpg`
      );
    }

    return (
      <div
        className="border-[5px] border-[#e9d9fc]    hover:border-[5px] hover:border-[#f0000c] transition-all duration-300 "
        style={{ backgroundColor: "#fff6e6" }}
      >
        <div className="w-full">
          <img
            alt="Imagen Principal Obra"
            onClick={() => openLightbox(obraImages, 0, data.VIDEO_LINK)  }
            className="w-full lazyload PostulacionItemImagen"
            id={`ImgPrincipal_${data.ID_POSTULACION}`}
            data-anterior=""
            data-siguiente=""
            loading="lazy"
            data-src={`${baseUrl}${data.ID_POSTULACION}/${data.FOTOGRAFIA_OBRA_1}.jpg`}
            src={`${baseUrl}${data.ID_POSTULACION}/${data.FOTOGRAFIA_OBRA_1}.jpg`}
            style={{ width: "432px", height: "438px", objectFit: "cover" }}
          />
        </div>

        {votar && (votacionActiva===true) && (
          <div
            className="w-full bg-red-500 text-center py-2"
            style={{ backgroundColor: "#f0000c" }}
          >
            <a
              onClick={() => openContactForm(data.ID_POSTULACION, data)}
              className="text-white font-semibold text-xl font-roboto"
              title="Votar"
              alt="Votar"
            >
              VOTAR POR ESTA OBRA
            </a>
          </div>
        )}     

        <div className="w-full text-black p-5">
          <h2
            className="text-black font-black text-4xl relative top-0 right-0"
            style={{ lineHeight: "36px",float: "right" }}
          >
            /{data.NUMERO}
          </h2>
          <p className="text-black text-normal text-caracteristicas break-words">
            <span className="font-bold">Título</span>: {data.TITULO_DE_OBRA}.
          </p>
          <p className="text-black text-normal text-caracteristicas">
            <span className="font-bold">Año Creacion</span>: {data["YEAR(FECHA_CREACION)"]}.
          </p>
          <p className="text-black text-normal text-caracteristicas">
            <span className="font-bold">Técnica</span>: <span className="">{capitalizeText(data.TECNICA)}</span>
          </p>
          <p className="text-black text-normal text-caracteristicas">
            <span className="font-bold">Dimensiones</span>: {data.DIMENCIONES}.
          </p>
          <p className="text-black text-normal text-caracteristicas">
            <span className="font-bold">Edad</span>: {data.EDAD}.
          </p>
          <p className="text-black text-normal text-caracteristicas">
            <span className="font-bold">Nacionalidad</span>: {capitalizeText(data.NACIONALIDAD)}
          </p>
          <p className="text-black text-normal text-caracteristicas">
            <span className="font-bold">Residencia</span>: {capitalizeText(data.REGION_RESIDENCIA)}
          </p>
          
          {/* Botón de compartir en esquina inferior derecha de cada tarjeta */}
          <div className="flex justify-end mt-4">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: `Obra: ${data.TITULO_DE_OBRA}`,
                    text: `Mira esta obra del Premio PAM: ${data.TITULO_DE_OBRA} - Número ${data.NUMERO}`,
                    url: window.location.href
                  });
                } else {
                  // Fallback para navegadores que no soportan Web Share API
                  navigator.clipboard.writeText(window.location.href);
                  // Aquí podrías mostrar un toast o alert de confirmación
                }
              }}
              className="bg-[#f0000c] hover:bg-[#d0000a] text-white p-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              title="Compartir obra"
            >
              <FaShare className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    );
  };

  return (
    <section id="section_votacion" className="flex justify-center">
      <div className="w-full mx-auto  " style={{ backgroundColor: "#e9d9fc" }}>
        <div className="w-full">
          
       {votar ? (
        <h1 className="titulo_principal_votacion">VOTA POR TU <br />OBRA FAVORITA</h1>
      ) : (
        <h1 className="titulo_principal_votacion">SELECCION JURADO</h1>
      )}

       </div>

       {votar && (<div className="w-full mx-auto container">
          <ol className="instrucciones text-center">
            <li>
              * Para hacer efectiva tu votación, debes confirmar el link que
              recibirás en tu email.
            </li>
            <li>** Solo se admite un voto por mail registrado.</li>
          </ol>
        </div>)}

        {/* Buscador */}
        <div className="w-full mx-auto container mb-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar por número de postulación..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-[#f0000c] focus:border-[#f0000c] transition-all duration-200 shadow-sm"
                style={{
                  backgroundColor: "#fff6e6",
                  borderColor: "#e9d9fc",
                  fontFamily: "'Roboto Mono', monospace"
                }}
              />
            </div>
            {searchTerm && (
              <div className="mt-2 text-center">
                <span className="text-sm text-gray-600 font-roboto">
                  {filteredPostulaciones.length === 0 
                    ? "No se encontraron postulaciones con ese número" 
                    : `Se encontraron ${filteredPostulaciones.length} postulación${filteredPostulaciones.length !== 1 ? 'es' : ''}`
                  }
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="w-full mx-auto container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredPostulaciones.map((postulacion) => {
          // Llamas a setPostulacionItem con el postulacion actual
          
          
          // Retornas el componente JSX correspondiente
          return (
            <Card key={postulacion.ID_POSTULACION} data={postulacion} />
          );
        })}
                  
          </div>
        </div>
      </div>
      
      <Lightbox
          postulacionVideo={postulacionVideo}
          isOpen={lightboxOpen}
          closeLightbox={closeLightbox}
          images={lightboxImages}
          currentImageIndex={currentImageIndex}
          nextImage={nextImage}
          prevImage={prevImage}
          loadingImg={loadingImg}
          setLoadingImg={setLoadingImg}
        />
      <ContactFormLightbox
          isOpen={contactFormOpen}
          closeLightbox={closeContactForm}
          idPostulacion={idPostulacion}
                          />
      </section>
   );
 }

export default Votacion;
