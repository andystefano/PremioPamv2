import React, { useState  } from 'react';
import Presentadores from './Presentadores';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const SUPPORTED_FORMATS = ['image/jpeg','image/png'];

const regionesChilenas = [
  'Arica y Parinacota',
  'Tarapacá',
  'Antofagasta',
  'Atacama',
  'Coquimbo',
  'Valparaíso',
  'Metropolitana de Santiago',
  'Libertador General Bernardo O\'Higgins',
  'Maule',
  'Ñuble',
  'Biobío',
  'La Araucanía',
  'Los Ríos',
  'Los Lagos',
  'Aysén del General Carlos Ibáñez del Campo',
  'Magallanes y de la Antártica Chilena',
  'Otra Fuera de Chile',
];

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
        REGION_RESIDENCIA:'',
        LUGAR_RESIDENCIA: '',
        CIUDAD_RESIDENCIA: '',
        BIOGRAFIA: '',
        RRSS: '',
        POSTULADA_POR: '',
        PARENTESCO: '',
        TITULO_DE_OBRA: '',
        DIMENCIONES: '',
        FECHA_CREACION: '',
        TECNICA: '',
        STATMENT: '',
        LINK_WEB: '',
        FOTOGRAFIA_RETRATO: null,
        FOTOGRAFIA_OBRA_1: null,
        FOTOGRAFIA_OBRA_2: null,
        FOTOGRAFIA_OBRA_3: null,
        FOTOGRAFIA_RETRATO_X: null,
        FOTOGRAFIA_OBRA_1_X: null,
        FOTOGRAFIA_OBRA_2_X: null,
        FOTOGRAFIA_OBRA_3_X: null,
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
        REGION_RESIDENCIA : Yup.string().required('Campo obligatorio'),
        BIOGRAFIA: Yup.string().required('Campo obligatorio'),
        RRSS: Yup.string().required('Campo obligatorio'),
        POSTULADA_POR: Yup.string().required('Campo obligatorio'),
        PARENTESCO: Yup.string().required('Campo obligatorio'),
        TITULO_DE_OBRA: Yup.string().required('Campo obligatorio'),
        DIMENCIONES: Yup.string().required('Campo obligatorio'),
        TECNICA: Yup.string().required('Campo obligatorio'),
        STATMENT: Yup.string().required('Campo obligatorio'),
        FOTOGRAFIA_RETRATO_X: Yup.mixed()
        .test('fileSize', 'Máximo 10 MB', function (value) {
          if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
          const imgElement = document.getElementById('IMG_FOTOGRAFIA_RETRATO');
          imgElement.src = '/img/boton_adjuntado.png';       
          return value.size <= FILE_SIZE;
        })
        .test('fileFormat', 'Formato de archivo debe ser JPG', function (value) {
          if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
          return SUPPORTED_FORMATS.includes(value.type);
        }).required('El campo de fotografía retrato es requerido'),
        FOTOGRAFIA_OBRA_1_X: Yup.mixed()
        .test('fileSize', 'Máximo 10 MB', function (value) {
          if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
          const imgElement = document.getElementById('IMG_FOTOGRAFIA_OBRA_1');
          imgElement.src = '/img/boton_adjuntado.png';      
          return value.size <= FILE_SIZE;
        })
        .test('fileFormat', 'Formato de archivo debe ser JPG', function (value) {
          if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
          return SUPPORTED_FORMATS.includes(value.type);
        }).required('El campo de fotografía de obra es requerido'),
        FOTOGRAFIA_OBRA_2_X: Yup.mixed()
        .test('fileSize', 'Máximo 10 MB', function (value) {
          if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
          const imgElement = document.getElementById('IMG_FOTOGRAFIA_OBRA_2');
          imgElement.src = '/img/boton_adjuntado.png';      
          return value.size <= FILE_SIZE;
        })
        .test('fileFormat', 'Formato de archivo debe ser JPG', function (value) {
          if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
          return SUPPORTED_FORMATS.includes(value.type);
        }).nullable().notRequired(),
        FOTOGRAFIA_OBRA_3_X: Yup.mixed()
        .test('fileSize', 'Máximo 10 MB', function (value) {
          if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
          const imgElement = document.getElementById('IMG_FOTOGRAFIA_OBRA_3');
          imgElement.src = '/img/boton_adjuntado.png';      
          return value.size <= FILE_SIZE;
        })
        .test('fileFormat', 'Formato de archivo debe ser JPG', function (value) {
          if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
          return SUPPORTED_FORMATS.includes(value.type);
        }).nullable().notRequired(),
        LINK_WEB: Yup.string().nullable().notRequired(),
      })}

        onSubmit={(values, { setSubmitting }) => {
        // Aquí manejar el envío del formulario por AJAX
        console.log('Intentando enviar')

        const formData = new FormData();
        Object.keys(values).forEach(key => {
          formData.append(key, values[key]);
        });

        fetch('/GuardaFormulario.php', {
          method: 'POST',
          body: formData,
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
      {({ isSubmitting,setFieldValue, handleSubmit }) => (
        <section id="section_1" className="flex justify-center">
          <div className="w-full mx-auto container" style={{backgroundColor: "#e9d9fc"}}>
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
                      <div className='ErrorMessage'>
                        <ErrorMessage name="NOMBRE_APELLLIDO" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Edad*</label>
                      <Field type="number" name="EDAD" id="EDAD" min="60" />
                      <div className='ErrorMessage'>
                      <ErrorMessage className='ErrorMessage' name="EDAD" component="div" />
                      </div>
                    </div>
                    <div className="c2">
                      <label>Fecha de Nacimiento*</label>
                      <Field type="date" name="FECHA_DE_NACIMIENTO" id="FECHA_DE_NACIMIENTO" className="fecha flatpickr-input" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="FECHA_DE_NACIMIENTO" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2 edad-tel-desktop">
                      <label>Teléfono*</label>
                      <Field type="tel" name="TELEFONO" id="TELEFONO" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="TELEFONO" component="div" />
                      </div>
                    </div>
                    <div className="c2 fecha-mail-desktop">
                      <label>E-Mail*</label>
                      <Field type="email" name="EMAIL" id="EMAIL" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="EMAIL" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Nacionalidad*</label>
                      <Field type="text" name="NACIONALIDAD" id="NACIONALIDAD" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="NACIONALIDAD" component="div" />
                      </div>
                    </div>
                    <div className="c2 ">
                      <label>País de residencia*</label>
                      <Field type="text" name="LUGAR_RESIDENCIA" id="LUGAR_RESIDENCIA" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="LUGAR_RESIDENCIA" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="frow">

                    <div className="c2">
                      <label>Region residencia*</label>
                      <Field as="select" id="REGION_RESIDENCIA" name="REGION_RESIDENCIA">
                        <option value="">Selecciona una región</option>
                        {regionesChilenas.map((region) => (
                          <option key={region} value={region}>
                            {region}
                          </option>
                        ))}
                      </Field>
                      <div className='ErrorMessage'>
                      <ErrorMessage name="REGION_RESIDENCIA" component="div" />
                      </div>
                    </div>

                    <div className="c2">
                      <label>Ciudad de residencia*</label>
                      <Field type="text" name="CIUDAD_RESIDENCIA" id="CIUDAD_RESIDENCIA" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="CIUDAD_RESIDENCIA" component="div" />
                      </div>
                    </div>

                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Biografía de la artista* (máximo 500 palabras)</label>
                      <Field as="textarea" name="BIOGRAFIA" id="BIOGRAFIA" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="BIOGRAFIA" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Redes Sociales</label>
                      <Field type="text" name="RRSS" id="RRSS" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="RRSS" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Postulado por </label>
                      <Field type="text" name="POSTULADA_POR" id="POSTULADA_POR" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="POSTULADA_POR" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Parentesco</label>
                      <Field type="text" name="PARENTESCO" id="PARENTESCO" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="PARENTESCO" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Fotografía de retrato (*)</label>
                      <Field
                      type="file"
                      className="hidden"
                      name="FOTOGRAFIA_RETRATO"
                      id="FOTOGRAFIA_RETRATO"
                      
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        setFieldValue('FOTOGRAFIA_RETRATO_X', file); // Guarda el archivo en el campo de Formik
                      }}

                    />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="FOTOGRAFIA_RETRATO" component="div" />
                      <ErrorMessage name="FOTOGRAFIA_RETRATO_X" component="div" />
                      </div>

                      <label htmlFor="FOTOGRAFIA_RETRATO">
                        <img src="img/boton_adjuntar_retrato.png" className="my-1 upload" id="IMG_FOTOGRAFIA_RETRATO" alt="Upload" />
                      </label>
                    </div>

                    <div className="c2">
                      {/* Espacio vacío */}
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <h3 className="titulo_ficha">2. Ficha técnica</h3>
                  <p className="campos-obligatorios mb-6">Campos con asterisco (*) son obligatorios</p>
                  <div className="frow">
                    <div className="c1">
                      <label>Título de la obra*</label>
                      <Field type="text" name="TITULO_DE_OBRA" id="TITULO_DE_OBRA" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="TITULO_DE_OBRA" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Dimensiones* (medidas en cm)</label>
                      <Field type="text" name="DIMENCIONES" id="DIMENCIONES" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="DIMENCIONES" component="div" />
                      </div>
                    </div>
                    <div className="c2">
                      <label>Fecha de creación*</label>
                      <Field type="date" name="FECHA_CREACION" id="FECHA_CREACION" className="fecha flatpickr-input" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="FECHA_CREACION" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Técnica*</label>
                      <Field type="text" name="TECNICA" id="TECNICA" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="TECNICA" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c1">
                      <label>Descripción de la obra * (máximo 500 palabras)</label>
                      <Field as="textarea" name="STATMENT" id="STATMENT" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="STATMENT" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Fotografía de la obra 1* </label>
                      <Field  type="file"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        setFieldValue('FOTOGRAFIA_OBRA_1_X', file); // Guarda el archivo en el campo de Formik
                      }}
                      className="hidden" name="FOTOGRAFIA_OBRA_1" id="FOTOGRAFIA_OBRA_1" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="FOTOGRAFIA_OBRA_1" component="div" />
                      <ErrorMessage name="FOTOGRAFIA_OBRA_1_X" component="div" />
                      </div>
                      <label htmlFor="FOTOGRAFIA_OBRA_1">
                        <img src="img/boton_adjuntar_obra.png" className="my-1 upload" id="IMG_FOTOGRAFIA_OBRA_1" alt="Upload" />
                      </label>
                    </div>
                    <div className="c2">
                      <label>Fotografía de la obra 2 </label>
                      <Field  type="file"

onChange={(event) => {
  const file = event.currentTarget.files[0];
  setFieldValue('FOTOGRAFIA_OBRA_2_X', file); // Guarda el archivo en el campo de Formik
}}
                      className="hidden" name="FOTOGRAFIA_OBRA_2" id="FOTOGRAFIA_OBRA_2" />
                  <div className='ErrorMessage'>
                      <ErrorMessage name="FOTOGRAFIA_OBRA_2" component="div" />
                      <ErrorMessage name="FOTOGRAFIA_OBRA_2_X" component="div" />
                  </div>

                      <label htmlFor="FOTOGRAFIA_OBRA_2">
                        <img src="img/boton_adjuntar_obra.png" className="my-1 upload" id="IMG_FOTOGRAFIA_OBRA_2" alt="Upload" />
                      </label>
                    </div>
                  </div>

                  <div className="frow">
                    <div className="c2">
                      <label>Fotografía de la obra 3 </label>
                      <Field type="file"             
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        setFieldValue('FOTOGRAFIA_OBRA_3_X', file); // Guarda el archivo en el campo de Formik
                      }}
                      className="hidden" name="FOTOGRAFIA_OBRA_3" id="FOTOGRAFIA_OBRA_3"  />
                    <div className='ErrorMessage'>
                      <ErrorMessage name="FOTOGRAFIA_OBRA_3" component="div" />
                      <ErrorMessage name="FOTOGRAFIA_OBRA_3_X" component="div" />
                    </div>
                      <label htmlFor="FOTOGRAFIA_OBRA_3">
                        <img src="img/boton_adjuntar_obra.png" className="my-1 upload" id="IMG_FOTOGRAFIA_OBRA_3" alt="Upload" />
                      </label>
                    </div>
                    <div className="c2">
                      {/* Espacio vacío */}
                    </div>
                  </div>


                  
                  <div className="frow">
                    <div className="c1">
                      <label>Para obras audiovisuales escribir link (*)</label>
                      <Field type="text" name="LINK_WEB" id="LINK_WEB" />
                      <div className='ErrorMessage'>
                      <ErrorMessage name="LINK_WEB" component="div" />
                      </div>
                    </div>
                  </div> 
  
                </fieldset>

                <div className="flex justify-center my-2">
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
