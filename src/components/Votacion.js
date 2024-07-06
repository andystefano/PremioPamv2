 
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Presentadores from './Presentadores'; // Si es una exportación por defecto
import Lightbox from './Lightbox'; // Si es una exportación por defecto
import ContactFormLightbox from './ContactFormLightbox';

import React, { useState } from 'react';
import Modal from 'react-modal';


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
    setCurrentImageIndex((currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length);
  };


  const openContactForm = () => {
    setContactFormOpen(true);
  };

  const closeContactForm = () => {
    setContactFormOpen(false);
  };


  const exampleImages = [
    'https://via.placeholder.com/800x600?text=Imagen+1',
    'https://via.placeholder.com/800x600?text=Imagen+2',
    'https://via.placeholder.com/800x600?text=Imagen+3',
  ];  

 

  return (
    <section id="section_1" class="flex justify-center">
      <div className="w-full mx-auto  container" style={{backgroundColor: "#e9d9fc"}}>
        
      <div class="w-full">
      Aca usar swr
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {repeatTimes.map((_, index) => (

                  <div className=''>
                    <div className='PostulacionItem'>
                      <table className='w-full pl-[5%] pr-[5%] '><tr><td><h1 className='titulo_ficha' style={{marginTop:'0px',marginBottom:'0px'}}>01</h1></td><td className='text-right'><a className='btn_botar' onClick={openContactForm}>VOTAR POR ESTA OBRA</a></td></tr></table>
                      <div class="mb-5">
                        <img alt='' onClick={() => openLightbox(exampleImages, 0)} class="lazyload PostulacionItemImagen" id="ImgPrincipal_<?php echo $ID_POSTULACION; ?>" data-id="25" data-anterior="" data-siguiente="" data-actual="52" data-ruta="https://premiopam.cl/media/5/1.jpg"  data-imagenes="<?php echo $fotos; ?>" loading="lazy" data-src="https://premiopam.cl/media/5/1.jpg" src="https://premiopam.cl/media/5/1.jpg" />
                      </div>
                      <h3><b>Año Creación</b>: 2021.</h3>
                      <h3><b>Técnica</b>: ACUARELA.</h3>
                      <h3><b>Dimensiones</b>: 25cmx36cm.</h3>
                      <h3><b>Edad</b>: 66</h3>
                      <h3><b>Nacionalidad</b>: Chilena.</h3>
                      <h3><b>Ciudad</b>: Santiago.</h3>
                      <br/>
                      <Lightbox
                        isOpen={lightboxOpen}
                        closeLightbox={closeLightbox}
                        images={lightboxImages}
                        currentImageIndex={currentImageIndex}
                        nextImage={nextImage}
                        prevImage={prevImage}
                      />
                      <ContactFormLightbox
                        isOpen={contactFormOpen}
                        closeLightbox={closeContactForm}
                      />
                    </div> 
                  </div>
                ))}


        </div>

      </div>
    </section>
  );
}

export default Votacion;
