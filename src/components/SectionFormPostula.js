import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Presentadores from './Presentadores';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function SectionFormPostula() {
  return (
    <Formik
      initialValues={{ 
        NOMBRE_APELLLIDO: '',
        EDAD: '',
        FECHA_DE_NACIMIENTO: '',
        TELEFONO: '',
        EMAIL: '',
        NACIONALIDAD: '',
        LUGAR_RESIDENCIA: '',
        CIUDAD_RESIDENCIA: '',
        BIOGRAFIA: '',
        RRSS: '',
        POSTULADA_POR: '',
        PARENTESCO: '',
        FOTOGRAFIA_RETRATO: '',
        TITULO_DE_OBRA: '',
        DIMENCIONES: '',
        FECHA_CREACION: '',
        TECNICA: '',
        STATMENT: '',
        FOTOGRAFIA_OBRA_1: '',
        FOTOGRAFIA_OBRA_2: '',
        FOTOGRAFIA_OBRA_3: '',
        CV: ''
      }}
      validationSchema={Yup.object({
        NOMBRE_APELLLIDO: Yup.string().required('Campo obligatorio'),
        EDAD: Yup.number().required('Campo obligatorio').min(60, 'Debe tener 60 años o más'),
        EMAIL: Yup.string().email('Dirección de correo inválida').required('Campo obligatorio'),
        FECHA_DE_NACIMIENTO: Yup.string().required('Campo obligatorio'),
        TELEFONO: Yup.string().required('Campo obligatorio'),

        NACIONALIDAD: Yup.string().required('Campo obligatorio'),
        LUGAR_RESIDENCIA: Yup.string().required('Campo obligatorio'),
        CIUDAD_RESIDENCIA: Yup.string().required('Campo obligatorio'),
        BIOGRAFIA: Yup.string().required('Campo obligatorio'),

        RRSS: Yup.string().required('Campo obligatorio'),
        POSTULADA_POR: Yup.string().required('Campo obligatorio'),
        PARENTESCO: Yup.string().required('Campo obligatorio'),

        FOTOGRAFIA_RETRATO: Yup.string().required('Campo obligatorio'),
        TITULO_DE_OBRA: Yup.string().required('Campo obligatorio'),
        DIMENCIONES: Yup.string().required('Campo obligatorio'),
        TECNICA: Yup.string().required('Campo obligatorio'),
        STATMENT: Yup.string().required('Campo obligatorio'),
        FOTOGRAFIA_OBRA_1: Yup.string().required('Campo obligatorio'),
        FOTOGRAFIA_OBRA_2: Yup.string().required('Campo obligatorio'),
        FOTOGRAFIA_OBRA_3: Yup.string().required('Campo obligatorio'),
        CV: Yup.string().required('Campo obligatorio'),

        
      })}
      onSubmit={(values, { setSubmitting }) => {
        // Aquí manejar el envío del formulario por AJAX
        console.log('Intentando enviar')
        fetch('https://premiopam.cl/GuardaFormulario.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          alert('Formulario enviado con éxito');
          setSubmitting(false);
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Hubo un error al enviar el formulario');
          setSubmitting(false);
        });
      }}
    >
      {({ isSubmitting, handleSubmit }) => (
        <section id="section_1" className="flex justify-center">
          <div className="w-full mx-auto container">
            <div className="presentan">
              <Presentadores />
            </div>
            <div className="contenido">
              <h1 className="!mb-0">POSTULACIÓN PREMIO PAM 2024</h1>
              <h2 className="!mt-1 !mb-12 contenido__titulo" style={{ lineHeight: 'normal' }}>
                COMPLETE LA SIGUIENTE INFORMACIÓN:
              </h2>

              <form className="FPAM" id="FPAM" onSubmit={handleSubmit} encType="multipart/form-data">
                <fieldset>
                  <h3 className="titulo_ficha">1. Datos personales</h3>
                  <p className="campos-obligatorios mb-6">Campos con asterisco (*) son obligatorios</p>
                  <div className="frow">
                    <div className="c1">
                      <label>Nombre y Apellido*</label>
                      <Field type="text" name="NOMBRE_APELLLIDO" id="NOMBRE_APELLLIDO" />
                      <ErrorMessage name="NOMBRE_APELLLIDO" component="div" />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Edad*</label>
                      <Field type="number" name="EDAD" id="EDAD" min="60" />
                      <ErrorMessage className='ErrorMessage' name="EDAD" component="div" />
                    </div>
                    <div className="c2">
                      <label>Fecha de Nacimiento*</label>
                      <Field type="date" name="FECHA_DE_NACIMIENTO" id="FECHA_DE_NACIMIENTO" className="fecha flatpickr-input" />
                      <ErrorMessage name="FECHA_DE_NACIMIENTO" component="div" />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2 edad-tel-desktop">
                      <label>Teléfono*</label>
                      <Field type="tel" name="TELEFONO" id="TELEFONO" />
                      <ErrorMessage name="TELEFONO" component="div" />
                    </div>
                    <div className="c2 fecha-mail-desktop">
                      <label>E-Mail*</label>
                      <Field type="email" name="EMAIL" id="EMAIL" />
                      <ErrorMessage name="EMAIL" component="div" />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Nacionalidad*</label>
                      <Field type="text" name="NACIONALIDAD" id="NACIONALIDAD" />
                      <ErrorMessage name="NACIONALIDAD" component="div" />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2 residencia-desktop">
                      <label>País de residencia*</label>
                      <Field type="text" name="LUGAR_RESIDENCIA" id="LUGAR_RESIDENCIA" />
                      <ErrorMessage name="LUGAR_RESIDENCIA" component="div" />
                    </div>
                    <div className="c2 ciudad-desktop">
                      <label>Ciudad de residencia*</label>
                      <Field type="text" name="CIUDAD_RESIDENCIA" id="CIUDAD_RESIDENCIA" />
                      <ErrorMessage name="CIUDAD_RESIDENCIA" component="div" />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Biografía de la artista* (máximo 500 palabras)</label>
                      <Field as="textarea" name="BIOGRAFIA" id="BIOGRAFIA" />
                      <ErrorMessage name="BIOGRAFIA" component="div" />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Redes Sociales (opcional)</label>
                      <Field type="text" name="RRSS" id="RRSS" />
                      <ErrorMessage name="RRSS" component="div" />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Postulado por (opcional)</label>
                      <Field type="text" name="POSTULADA_POR" id="POSTULADA_POR" />
                      <ErrorMessage name="POSTULADA_POR" component="div" />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Parentesco (opcional)</label>
                      <Field type="text" name="PARENTESCO" id="PARENTESCO" />
                      <ErrorMessage name="PARENTESCO" component="div" />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Fotografía de retrato </label>
                      <p className="w-full">Adjunta un archivo formato jpg con máximo 50mb</p>
                      <input type="file" className="hidden" name="FOTOGRAFIA_RETRATO" id="FOTOGRAFIA_RETRATO" accept="image/jpeg" />
                      <ErrorMessage name="FOTOGRAFIA_RETRATO" component="div" />
                      <label htmlFor="FOTOGRAFIA_RETRATO">
                        <img src="img/upload_select_await.png" className="m-1 upload" id="IMG_FOTOGRAFIA_RETRATO" alt="Upload" />
                      </label>
                    </div>

                    <div className="c2">
                      {/* Espacio vacío */}
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <h3 className="titulo_ficha">2. Ficha técnica</h3>
                  <p className="campos-obligatorios">Campos con asterisco (*) son obligatorios</p>
                  <div className="frow">
                    <div className="c1">
                      <label>Título de la obra*</label>
                      <Field type="text" name="TITULO_DE_OBRA" id="TITULO_DE_OBRA" />
                      <ErrorMessage name="TITULO_DE_OBRA" component="div" />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Dimensiones* (medidas en cm)</label>
                      <Field type="text" name="DIMENCIONES" id="DIMENCIONES" />
                      <ErrorMessage name="DIMENCIONES" component="div" />
                    </div>
                    <div className="c2">
                      <label>Fecha de creación*</label>
                      <Field type="date" name="FECHA_CREACION" id="FECHA_CREACION" className="fecha flatpickr-input" />
                      <ErrorMessage name="FECHA_CREACION" component="div" />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Técnica*</label>
                      <Field type="text" name="TECNICA" id="TECNICA" />
                      <ErrorMessage name="TECNICA" component="div" />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Statement* (máximo 500 palabras)</label>
                      <Field as="textarea" name="STATMENT" id="STATMENT" />
                      <ErrorMessage name="STATMENT" component="div" />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Fotografía de la obra 1* </label>
                      <p>Adjunta un archivo formato jpg con máximo 50mb</p>
                      <input type="file" className="hidden" name="FOTOGRAFIA_OBRA_1" id="FOTOGRAFIA_OBRA_1" accept="image/jpeg" />
                      <ErrorMessage name="FOTOGRAFIA_OBRA_1" component="div" />
                      <label htmlFor="FOTOGRAFIA_OBRA_1">
                        <img src="img/upload_select_await.png" className="m-1 upload" id="IMG_FOTOGRAFIA_OBRA_1" alt="Upload" />
                      </label>
                    </div>
                    <div className="c2">
                      <label>Fotografía de la obra 2 </label>
                      <p>Adjunta un archivo formato jpg con máximo 50mb</p>
                      <input type="file" className="hidden" name="FOTOGRAFIA_OBRA_2" id="FOTOGRAFIA_OBRA_2" accept="image/jpeg" />
                      <ErrorMessage name="FOTOGRAFIA_OBRA_2" component="div" />
                      <label htmlFor="FOTOGRAFIA_OBRA_2">
                        <img src="img/upload_select_await.png" className="m-1 upload" id="IMG_FOTOGRAFIA_OBRA_2" alt="Upload" />
                      </label>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Fotografía de la obra 3 </label>
                      <p>Adjunta un archivo formato jpg con máximo 50mb</p>
                      <input type="file" className="hidden" name="FOTOGRAFIA_OBRA_3" id="FOTOGRAFIA_OBRA_3" accept="image/jpeg" />
                      <ErrorMessage name="FOTOGRAFIA_OBRA_3" component="div" />
                      <label htmlFor="FOTOGRAFIA_OBRA_3">
                        <img src="img/upload_select_await.png" className="m-1 upload" id="IMG_FOTOGRAFIA_OBRA_3" alt="Upload" />
                      </label>
                    </div>
                    <div className="c2">
                      {/* Espacio vacío */}
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Currículum vitae</label>
                      <p>Adjunta un archivo en formato pdf con máximo 10mb</p>
                      <input type="file" className="hidden" name="CV" id="CV" accept=".pdf" />
                      <ErrorMessage name="CV" component="div" />
                      <label htmlFor="CV">
                        <img src="img/upload_select_await.png" className="m-1 upload" id="IMG_CV" alt="Upload" />
                      </label>
                    </div>
                    <div className="c2">
                      {/* Espacio vacío */}
                    </div>
                  </div>
                </fieldset>

                <div className="flex justify-center">
                  <button type="submit" disabled={isSubmitting} className="btn-enviar">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
}

export default SectionFormPostula;
