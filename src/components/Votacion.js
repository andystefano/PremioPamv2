import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Presentadores from "./Presentadores"; // Si es una exportación por defecto
import Lightbox from "./Lightbox"; // Si es una exportación por defecto
import ContactFormLightbox from "./ContactFormLightbox";

import React, { useState, useEffect } from "react";
import Modal from "react-modal";

function Votacion() {
  const repeatTimes = Array.from({ length: 5 });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openLightbox = (images, index = 0) => {
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

  const openContactForm = () => {
    setContactFormOpen(true);
  };

  const closeContactForm = () => {
    setContactFormOpen(false);
  };

  const exampleImages = [
    "https://via.placeholder.com/800x600?text=Imagen+1",
    "https://via.placeholder.com/800x600?text=Imagen+2",
    "https://via.placeholder.com/800x600?text=Imagen+3",
  ];

  const [postulaciones, setPostulaciones] = useState([]);

  const baseUrl = "https://premiopam.cl/media/";

  // Función para obtener los datos
  useEffect(() => {
    fetch("http://v2024.premiopam.cl/lista_preseleccion.php")
      .then((response) => response.json())
      .then((data) => setPostulaciones(data))
      .catch((error) => console.log(error));
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


  const Card = ({ data }) => {
    return (
      <div className="border-[5px] border-[#e9d9fc]    hover:border-[5px] hover:border-[#f0000c] transition-all duration-300 " style={{ backgroundColor: "#fff6e6" }}>
        <div className="w-full">
          <img alt="Imagen Principal Obra"
          onClick={() => openLightbox(exampleImages, 0)}
          class="lazyload PostulacionItemImagen"
          id="ImgPrincipal_<?php echo $ID_POSTULACION; ?>"
          data-id="25"
          data-anterior=""
          data-siguiente=""
          data-actual="52"
          data-ruta="https://premiopam.cl/media/5/1.jpg"
          data-imagenes="<?php echo $fotos; ?>"
          loading="lazy"
          data-src="https://premiopam.cl/media/5/1.jpg"
          src={`${baseUrl}${data.ID_POSTULACION}/${data.FOTOGRAFIA_OBRA_1}.jpg`}
          style={{ width: "432px", height: "438px", objectFit: "cover" }} className="w-full" />
        </div>

        <div className="w-full bg-red-500 text-center py-2" style={{ backgroundColor: "#f0000c" }}>
          <a href="" className="text-white font-semibold text-xl font-roboto" title="Votar" alt="Votar">
            VOTAR POR ESTA OBRA
          </a>
        </div>
        <div className="w-full text-black p-5">
          <h2  className="text-black font-black text-5xl relative top-0 right-0" style={{lineHeight: '46px'}}>/{data.ID_POSTULACION}</h2>
          <p className="text-black text-normal"><span className="font-bold">Año Creacion</span>: {data["YEAR(FECHA_CREACION)"]}.</p>
          <p className="text-black text-normal"><span className="font-bold">Técnica</span>: <span className="">{capitalizeText(data.TECNICA)}</span></p>
          <p className="text-black text-normal"><span className="font-bold">Dimensiones</span>: {(data.DIMENCIONES)}.</p>
          <p className="text-black text-normal"><span className="font-bold">Edad</span>: {data.EDAD}.</p>
          <p className="text-black text-normal"><span className="font-bold">Nacionalidad</span>: {capitalizeText(data.NACIONALIDAD)}</p>
          <p className="text-black text-normal"><span className="font-bold">Ciudad</span>: {capitalizeText(data.REGION_RESIDENCIA)}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="section_votacion" class="flex justify-center">
      <div className="w-full mx-auto  " style={{ backgroundColor: "#e9d9fc" }}>
        <div class="w-full">
          <h1 className="text-center">VOTA POR TU OBRA FAVORITA</h1>
        </div>

        <div className="w-full mx-auto container">
          <ol className="instrucciones">
            <li>
              * Para hacer efectiva tu votación, debes confirmar el link que
              recibirás en tu email.{" "}
            </li>
            <li>** Solo se admite un voto por mail registrado.</li>
          </ol>
        </div>

        <div className="w-full mx-auto container">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {postulaciones.map((postulacion) => (
              <Card key={postulacion.ID_POSTULACION} data={postulacion} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Votacion;
