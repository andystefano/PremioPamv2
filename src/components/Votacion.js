import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
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
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length
    );
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
        <div class="w-full mx-auto">
        <div class="w-full">
          <h1 class="titulo_principal_votacion">VOTACIONES CERRADAS</h1>
        </div>
        <div class="w-full mx-auto container">
            <ol class="instrucciones text-center">
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
      if (token) {
      console.log('se confirma el voto aquiii');
      fetch("https://v2024.premiopam.cl/confirma.php?token=" + token)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

      Swal.fire({
        html: `
        <div class="w-full mx-auto">
        <div class="w-full">
          <h1 class="titulo_principal_votacion">¡FELICITACIONES!</h1>
        </div>
        <div class="w-full mx-auto container">
            <ol class="instrucciones text-center">
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
        .then((data) => setPostulaciones(data))
        .catch((error) => console.log(error));

        setLoading(false)

      }
    }

  }, []);

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
            data-id={`25`}
            data-anterior=""
            data-siguiente=""
            data-actual={`52`}
            data-ruta={`https://premiopam.cl/media/5/1.jpg`}
            data-imagenes="<?php echo $fotos; ?>"
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
            <span className="font-bold">Título</span>:{" "}
            {data.TITULO_DE_OBRA}.
          </p>
          <p className="text-black text-normal text-caracteristicas">
            <span className="font-bold">Año Creacion</span>:{" "}
            {data["YEAR(FECHA_CREACION)"]}.
          </p>
          <p className="text-black text-normal text-caracteristicas">
            <span className="font-bold">Técnica</span>:{" "}
            <span className="">{capitalizeText(data.TECNICA)}</span>
          </p>
          <p className="text-black text-normal text-caracteristicas">
            <span className="font-bold">Dimensiones</span>: {data.DIMENCIONES}.
          </p>
          <p className="text-black text-normal text-caracteristicas">
            <span className="font-bold">Edad</span>: {data.EDAD}.
          </p>
          <p className="text-black text-normal text-caracteristicas">
            <span className="font-bold">Nacionalidad</span>:{" "}
            {capitalizeText(data.NACIONALIDAD)}
          </p>
          <p className="text-black text-normal text-caracteristicas">
            <span className="font-bold">Residencia</span>:{" "}
            {capitalizeText(data.REGION_RESIDENCIA)}
          </p>
          
        </div>

        <Lightbox
          postulacionVideo={postulacionVideo}
          isOpen={lightboxOpen}
          closeLightbox={closeLightbox}
          images={lightboxImages}
          currentImageIndex={currentImageIndex}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      </div>
    );
  };

  return (
    <section id="section_votacion" className="flex justify-center">
      <div className="w-full mx-auto  " style={{ backgroundColor: "#e9d9fc" }}>
        <div className="w-full">
          <h1 className="titulo_principal_votacion">VOTA POR TU <br/>OBRA FAVORITA</h1>
        </div>

        <div className="w-full mx-auto container">
          <ol className="instrucciones text-center">
            <li>
              * Para hacer efectiva tu votación, debes confirmar el link que
              recibirás en tu email.
            </li>
            <li>** Solo se admite un voto por mail registrado.</li>
          </ol>
        </div>

        <div className="w-full mx-auto container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {postulaciones.map((postulacion) => {
          // Llamas a setPostulacionItem con el postulacion actual
          
          
          // Retornas el componente JSX correspondiente
          return (
            <Card key={postulacion.ID_POSTULACION} data={postulacion} />
          );
        })}
                  
          </div>
        </div>
      </div>
      <ContactFormLightbox
          isOpen={contactFormOpen}
          closeLightbox={closeContactForm}
          idPostulacion={idPostulacion}
        />
    </section>
  );
}

export default Votacion;
