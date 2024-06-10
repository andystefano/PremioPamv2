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
        NOMBRE_APELLLIDO: Yup.string().required('Requerido'),
        EDAD: Yup.number().required('Requerido').min(60, 'Debe tener 60 años o más'),
        EMAIL: Yup.string().email('Dirección de correo inválida').required('Requerido')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
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

              <form action="GuardaFormulario.php" className="FPAM" id="FPAM" method="post" encType="multipart/form-data">
                <fieldset>
                  <h3 className="titulo_ficha">1. Datos personales</h3>
                  <p className="campos-obligatorios mb-6">Campos con asterisco (*) son obligatorios</p>
                  <div className="frow">
                    <div className="c1">
                      <label>Nombre y Apellido*</label>
                      <Field type="text" name="NOMBRE_APELLLIDO" id="NOMBRE_APELLLIDO" required />
                      <span>Error</span>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Edad*</label>
                      <input type="number" name="EDAD" id="EDAD" required min="60" />
                      <span>Error</span>
                    </div>
                    <div className="c2">
                      <label>Fecha de Nacimiento*</label>
                      <input type="hidden" name="FECHA_DE_NACIMIENTO" id="FECHA_DE_NACIMIENTO" className="fecha flatpickr-input" rel="datepicker" placeholder="Seleccione una fecha..." />
                      <input className="fecha form-control input" placeholder="Seleccione una fecha..." tabIndex="0" type="date" />
                      <span>Error</span>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2 edad-tel-desktop">
                      <label>Teléfono*</label>
                      <input type="tel" placeholder="(56 9) 9345 3456" name="TELEFONO" id="TELEFONO" required />
                      <span>Error</span>
                    </div>
                    <div className="c2 fecha-mail-desktop">
                      <label>E-Mail*</label>
                      <Field type="email" name="EMAIL" id="EMAIL" required />
                      <span>Error</span>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Nacionalidad*</label>
                      <input type="text" name="NACIONALIDAD" id="NACIONALIDAD" required />
                      <span>Error</span>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2 residencia-desktop">
                      <label>País de residencia*</label>
                      <input type="text" name="LUGAR_RESIDENCIA" id="LUGAR_RESIDENCIA" required />
                      <span>Error</span>
                    </div>
                    <div className="c2 ciudad-desktop">
                      <label>Ciudad de residencia*</label>
                      <input type="text" name="CIUDAD_RESIDENCIA" id="CIUDAD_RESIDENCIA" required />
                      <span>Error</span>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Biografía de la artista* (máximo 500 palabras)</label>
                      <textarea name="BIOGRAFIA" id="BIOGRAFIA" required></textarea>
                      <span>Error</span>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <div>
                        <label>Redes Sociales (opcional)</label>
                      </div>
                      <input type="text" name="RRSS" id="RRSS" />
                      <span>Error</span>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <div>
                        <label>Postulado por (opcional)</label>
                      </div>
                      <input type="text" name="POSTULADA_POR" id="POSTULADA_POR" />
                      <span>Error</span>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <div>
                        <label>Parentesco (opcional)</label>
                      </div>
                      <input type="text" name="PARENTESCO" id="PARENTESCO" />
                      <span>Error</span>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Fotografía de retrato </label>
                      <p className="w-full">Adjunta un archivo formato jpg con máximo 50mb</p>
                      <input type="file" className="hidden" name="FOTOGRAFIA_RETRATO" id="FOTOGRAFIA_RETRATO" accept="image/jpeg" />
                      <span id="FOTOGRAFIA_RETRATO_ERROR">Error</span>
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
                      <input type="text" name="TITULO_DE_OBRA" id="TITULO_DE_OBRA" required />
                      <span>Error</span>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Dimensiones* (medidas en cm)</label>
                      <input type="text" name="DIMENCIONES" id="DIMENCIONES" required />
                      <span>Error</span>
                    </div>
                    <div className="c2">
                      <label>Año de creación*</label>
                      <input type="number" placeholder="1981" name="FECHA_CREACION" id="FECHA_CREACION" required />
                      <span>Error</span>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Técnica*</label>
                      <input type="text" name="TECNICA" id="TECNICA" required />
                      <span>Error</span>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Descripción de la obra*</label>
                      <p>(máximo 500 palabras)</p>
                      <textarea name="STATMENT" id="STATMENT" required></textarea>
                      <span>Error</span>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c3">
                      <label>Imágenes de la obra postulada*</label>
                      <p style={{ minWidth: '100%' }}>(Adjunta al menos un archivo formato jpg con máximo 5mb)</p>
                    </div>

                    <div className="c3">
                      <div id="FO1">
                        <div>
                          <span className="errorForm"></span>
                        </div>
                        <div>
                          <label htmlFor="FOTOGRAFIA_OBRA_1">
                            <img src="img/upload_select_await.png" className="m-1 upload" id="F01Placeholder" alt="Upload" />
                          </label>
                          <input type="file" className="hidden" id="FOTOGRAFIA_OBRA_1" name="FOTOGRAFIA_OBRA_1" accept="image/jpeg" />
                          <span id="FOTOGRAFIA_OBRA_1_ERROR">Error</span>
                        </div>
                      </div>

                      <div id="FO2">
                        <div>
                          <span className="errorForm"></span>
                        </div>
                        <div>
                          <label htmlFor="FOTOGRAFIA_OBRA_2">
                            <img src="img/upload_select_await.png" className="m-1 upload" id="F02Placeholder" alt="Upload" />
                          </label>
                          <input type="file" className="hidden" id="FOTOGRAFIA_OBRA_2" name="FOTOGRAFIA_OBRA_2" accept="image/jpeg" />
                          <span id="FOTOGRAFIA_OBRA_2_ERROR">Error</span>
                        </div>
                      </div>

                      <div id="FO3">
                        <div>
                          <span className="errorForm"></span>
                        </div>
                        <div>
                          <label htmlFor="FOTOGRAFIA_OBRA_3">
                            <img src="img/upload_select_await.png" className="m-1 upload" id="F03Placeholder" alt="Upload" />
                          </label>
                          <input type="file" className="hidden" id="FOTOGRAFIA_OBRA_3" name="FOTOGRAFIA_OBRA_3" accept="image/jpeg" />
                          <span id="FOTOGRAFIA_OBRA_3_ERROR">Error</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Currículum Vitae* (máximo 5mb)</label>
                      <input type="file" name="CV" id="CV" accept="application/pdf" />
                      <span id="CV_ERROR">Error</span>
                    </div>
                  </div>
                </fieldset>
                <button type="submit" disabled={isSubmitting}>Submit</button>
              </form>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
}

export default SectionFormPostula;
