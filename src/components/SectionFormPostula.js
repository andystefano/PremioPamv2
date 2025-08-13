import React, { useState, useEffect } from "react";
import Presentadores from "./Presentadores";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Modal } from "keep-react";
import { BiErrorAlt } from "react-icons/bi";
import Swal from "sweetalert2";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const SUPPORTED_FORMATS = ["image/jpeg", "image/png"];

const regionesChilenas = [
  "Arica y Parinacota",
  "Tarapacá",
  "Antofagasta",
  "Atacama",
  "Coquimbo",
  "Valparaíso",
  "Metropolitana de Santiago",
  "Libertador General Bernardo O'Higgins",
  "Maule",
  "Ñuble",
  "Biobío",
  "La Araucanía",
  "Los Ríos",
  "Los Lagos",
  "Aysén del General Carlos Ibáñez del Campo",
  "Magallanes y de la Antártica Chilena",
  "Otra Fuera de Chile",
];

const nacionalidades = [
  "Afgana",
  "Albanesa",
  "Alemana",
  "Andorrana",
  "Angoleña",
  "Antiguana",
  "Saudí",
  "Argelina",
  "Argentina",
  "Armenia",
  "Australiana",
  "Austríaca",
  "Azerbaiyana",
  "Bahameña",
  "Bangladesí",
  "Barbadense",
  "Bareiní",
  "Belga",
  "Beliceña",
  "Beninesa",
  "Bielorrusa",
  "Birmana",
  "Boliviana",
  "Bosnia",
  "Botswanesa",
  "Brasileña",
  "Británica",
  "Bruneana",
  "Búlgara",
  "Burkinesa",
  "Burundesa",
  "Butanesa",
  "Caboverdiana",
  "Camboyana",
  "Camerunesa",
  "Canadiense",
  "Catarí",
  "Centroafricana",
  "Chadiana",
  "Checa",
  "Chilena",
  "China",
  "Chipriota",
  "Colombiana",
  "Comorense",
  "Congoleña",
  "Congoleña (Rep. Dem.)",
  "Costarricense",
  "Croata",
  "Cubana",
  "Danesa",
  "Dominicana",
  "Ecuatoriana",
  "Egipcia",
  "Salvadoreña",
  "Emiratí",
  "Eslovaca",
  "Eslovena",
  "Española",
  "Estadounidense",
  "Estonia",
  "Etíope",
  "Filipina",
  "Finlandesa",
  "Fiyiana",
  "Francesa",
  "Gabonesa",
  "Gambiana",
  "Georgiana",
  "Ghanesa",
  "Granadina",
  "Griega",
  "Guatemalteca",
  "Guineana",
  "Guineana-Bisáu",
  "Guyanesa",
  "Haitiana",
  "Hondureña",
  "Húngara",
  "India",
  "Indonesia",
  "Iraquí",
  "Iraní",
  "Irlandesa",
  "Islandesa",
  "Israelí",
  "Italiana",
  "Jamaiquina",
  "Japonesa",
  "Jordana",
  "Kazaja",
  "Keniana",
  "Kirguís",
  "Kiribatiana",
  "Kuwaití",
  "Laosiana",
  "Lesotense",
  "Letona",
  "Libanesa",
  "Liberiana",
  "Libia",
  "Liechtensteiniana",
  "Lituana",
  "Luxemburguesa",
  "Macedonia",
  "Malgache",
  "Malasia",
  "Malauí",
  "Maldiva",
  "Maliense",
  "Maltés",
  "Marfileña",
  "Marroquí",
  "Marshallina",
  "Mauriciana",
  "Mauritana",
  "Mexicana",
  "Micronesia",
  "Moldava",
  "Monegasca",
  "Mongola",
  "Montenegrina",
  "Mozambiqueña",
  "Namibia",
  "Nauruana",
  "Nepalí",
  "Nicaragüense",
  "Nigeriana",
  "Norcoreana",
  "Noruega",
  "Neozelandesa",
  "Omán",
  "Neerlandesa",
  "Pakistani",
  "Palauana",
  "Panameña",
  "Papú",
  "Paraguaya",
  "Peruana",
  "Polaca",
  "Portuguesa",
  "Ruandesa",
  "Rumano",
  "Rusa",
  "Samoana",
  "Sancristobaleña",
  "Sanvicentina",
  "Santotomense",
  "Senegalesa",
  "Serbia",
  "Seychellense",
  "Sierraleonesa",
  "Singapurense",
  "Siria",
  "Somalí",
  "Sri Lanka",
  "Sudafricana",
  "Sudanesa",
  "Sudanesa del Sur",
  "Sueca",
  "Suiza",
  "Surinamés",
  "Suazi",
  "Tailandesa",
  "Tanzana",
  "Tayika",
  "Timorense",
  "Togolesa",
  "Tongana",
  "Trinitense",
  "Tunecina",
  "Turca",
  "Turkmena",
  "Tuvaluana",
  "Ucraniana",
  "Ugandesa",
  "Uruguaya",
  "Uzbekistana",
  "Vanuatuense",
  "Venezolana",
  "Vietnamita",
  "Yemení",
  "Yibutiana",
  "Zambiana",
  "Zimbabuense",
];

const paises = [
  "Afganistán",
  "Albania",
  "Alemania",
  "Andorra",
  "Angola",
  "Antigua y Barbuda",
  "Arabia Saudita",
  "Argelia",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaiyán",
  "Bahamas",
  "Bangladés",
  "Barbados",
  "Baréin",
  "Bélgica",
  "Belice",
  "Benín",
  "Bielorrusia",
  "Birmania",
  "Bolivia",
  "Bosnia y Herzegovina",
  "Botsuana",
  "Brasil",
  "Brunéi",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Bután",
  "Cabo Verde",
  "Camboya",
  "Camerún",
  "Canadá",
  "Catar",
  "Chad",
  "Chile",
  "China",
  "Chipre",
  "Ciudad del Vaticano",
  "Colombia",
  "Comoras",
  "Corea del Norte",
  "Corea del Sur",
  "Costa de Marfil",
  "Costa Rica",
  "Croacia",
  "Cuba",
  "Dinamarca",
  "Dominica",
  "Ecuador",
  "Egipto",
  "El Salvador",
  "Emiratos Árabes Unidos",
  "Eritrea",
  "Eslovaquia",
  "Eslovenia",
  "España",
  "Estados Unidos",
  "Estonia",
  "Esuatini",
  "Etiopía",
  "Filipinas",
  "Finlandia",
  "Fiyi",
  "Francia",
  "Gabón",
  "Gambia",
  "Georgia",
  "Ghana",
  "Granada",
  "Grecia",
  "Guatemala",
  "Guyana",
  "Guinea",
  "Guinea-Bisáu",
  "Guinea Ecuatorial",
  "Haití",
  "Honduras",
  "Hungría",
  "India",
  "Indonesia",
  "Irak",
  "Irán",
  "Irlanda",
  "Islandia",
  "Israel",
  "Italia",
  "Jamaica",
  "Japón",
  "Jordania",
  "Kazajistán",
  "Kenia",
  "Kirguistán",
  "Kiribati",
  "Kuwait",
  "Laos",
  "Lesoto",
  "Letonia",
  "Líbano",
  "Liberia",
  "Libia",
  "Liechtenstein",
  "Lituania",
  "Luxemburgo",
  "Macedonia",
  "Madagascar",
  "Malasia",
  "Malaui",
  "Maldivas",
  "Malí",
  "Malta",
  "Marruecos",
  "Mauricio",
  "Mauritania",
  "México",
  "Micronesia",
  "Moldavia",
  "Mónaco",
  "Mongolia",
  "Montenegro",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Nicaragua",
  "Níger",
  "Nigeria",
  "Noruega",
  "Nueva Zelanda",
  "Omán",
  "Países Bajos",
  "Pakistán",
  "Palaos",
  "Panamá",
  "Papúa Nueva Guinea",
  "Paraguay",
  "Perú",
  "Polonia",
  "Portugal",
  "Reino Unido",
  "República Centroafricana",
  "República Checa",
  "República del Congo",
  "República Democrática del Congo",
  "República Dominicana",
  "Ruanda",
  "Rumanía",
  "Rusia",
  "Samoa",
  "San Cristóbal y Nieves",
  "San Marino",
  "San Vicente y las Granadinas",
  "Santa Lucía",
  "Santo Tomé y Príncipe",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leona",
  "Singapur",
  "Siria",
  "Somalia",
  "Sri Lanka",
  "Sudáfrica",
  "Sudán",
  "Sudán del Sur",
  "Suecia",
  "Suiza",
  "Surinam",
  "Tailandia",
  "Tanzania",
  "Tayikistán",
  "Timor Oriental",
  "Togo",
  "Tonga",
  "Trinidad y Tobago",
  "Túnez",
  "Turkmenistán",
  "Turquía",
  "Tuvalu",
  "Ucrania",
  "Uganda",
  "Uruguay",
  "Uzbekistán",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Yibuti",
  "Zambia",
  "Zimbabue",
];

function SectionFormPostula() {
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [errorPost, setErrorPost] = useState("");
  const [postulacionOk, setPostulacionOk] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const [postulacionActiva, setPostulacionActiva] = useState(false);

  useEffect(() => {
    if (
      process.env.REACT_APP_POSTULACION_ACTIVA === 0 ||
      process.env.REACT_APP_POSTULACION_ACTIVA === "0"
    ) {
      setPostulacionActiva(false);
      Swal.fire({
        html: `
        <div className="w-full mx-auto">
        <div className="w-full">
          <h1 className="titulo_principal_votacion">POSTULACIONES CERRADAS</h1>
        </div>
        <div className="w-full mx-auto container">
            <ol className="instrucciones text-center">
              <li>*No puedes postular en este momento, el periodo de postulaciones actualmente se encuentra cerrado.</li>
            </ol>
          </div>
        </div>
      `,
        customClass: {
          popup: "bg_yellow",
          confirmButton: "bg_purple",
        },
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });
    } else {
      setPostulacionActiva(true);
    }
  }, [process.env.REACT_APP_POSTULACION_ACTIVA]);

  return (
    <Formik
      initialValues={{
        NOMBRE_APELLLIDO: "",
        EDAD: "",
        FECHA_DE_NACIMIENTO: "",
        TELEFONO: "",
        EMAIL: "",
        NACIONALIDAD: "",
        REGION_RESIDENCIA: "",
        LUGAR_RESIDENCIA: "",
        CIUDAD_RESIDENCIA: "",
        BIOGRAFIA: "",
        RRSS: "",
        POSTULADA_POR: "",
        PARENTESCO: "",
        TITULO_DE_OBRA: "",
        DIMENCIONES: "",
        FECHA_CREACION: "",
        TECNICA: "",
        STATMENT: "",
        LINK_WEB: "",
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
        NOMBRE_APELLLIDO: Yup.string().required("Campo obligatorio"),
        EDAD: Yup.number()
          .required("Campo obligatorio")
          .min(60, "Debe tener 60 años o más"),
        EMAIL: Yup.string()
          .email("Dirección de correo inválida")
          .required("Campo obligatorio"),
        FECHA_DE_NACIMIENTO: Yup.string().required("Campo obligatorio"),
        TELEFONO: Yup.string().required("Campo obligatorio"),
        NACIONALIDAD: Yup.string().required("Campo obligatorio"),
        LUGAR_RESIDENCIA: Yup.string().required("Campo obligatorio"),
        CIUDAD_RESIDENCIA: Yup.string().required("Campo obligatorio"),
        REGION_RESIDENCIA: Yup.string().required("Campo obligatorio"),
        BIOGRAFIA: Yup.string().required("Campo obligatorio"),
        RRSS: Yup.string().nullable().notRequired(),
        POSTULADA_POR: Yup.string().nullable().notRequired(),
        PARENTESCO: Yup.string().nullable().notRequired(),
        TITULO_DE_OBRA: Yup.string().required("Campo obligatorio"),
        DIMENCIONES: Yup.string().required("Campo obligatorio"),
        TECNICA: Yup.string().required("Campo obligatorio"),
        STATMENT: Yup.string().required("Campo obligatorio"),
        FOTOGRAFIA_RETRATO_X: Yup.mixed()
          .test("fileSize", "Máximo 10 MB", function (value) {
            if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
            const imgElement = document.getElementById(
              "IMG_FOTOGRAFIA_RETRATO"
            );
            imgElement.src = "/img/boton_adjuntado.png";
            return value.size <= FILE_SIZE;
          })
          .test(
            "fileFormat",
            "Formato de archivo debe ser JPG",
            function (value) {
              if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
              return SUPPORTED_FORMATS.includes(value.type);
            }
          )
          .required(
            "Adjunta una foto a color, de buena calidad y con el rostro visible"
          ),
        FOTOGRAFIA_OBRA_1_X: Yup.mixed()
          .test("fileSize", "Máximo 10 MB", function (value) {
            if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
            const imgElement = document.getElementById("IMG_FOTOGRAFIA_OBRA_1");
            imgElement.src = "/img/boton_adjuntado.png";
            return value.size <= FILE_SIZE;
          })
          .test(
            "fileFormat",
            "Formato de archivo debe ser JPG",
            function (value) {
              if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
              return SUPPORTED_FORMATS.includes(value.type);
            }
          )
          .required("El campo de fotografía de obra es requerido"),
        FOTOGRAFIA_OBRA_2_X: Yup.mixed()
          .test("fileSize", "Máximo 10 MB", function (value) {
            if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa ...
            const imgElement = document.getElementById("IMG_FOTOGRAFIA_OBRA_2");
            imgElement.src = "/img/boton_adjuntado.png";
            return value.size <= FILE_SIZE;
          })
          .test(
            "fileFormat",
            "Formato de archivo debe ser JPG",
            function (value) {
              if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
              return SUPPORTED_FORMATS.includes(value.type);
            }
          )
          .nullable()
          .notRequired(),
        FOTOGRAFIA_OBRA_3_X: Yup.mixed()
          .test("fileSize", "Máximo 10 MB", function (value) {
            if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
            const imgElement = document.getElementById("IMG_FOTOGRAFIA_OBRA_3");
            imgElement.src = "/img/boton_adjuntado.png";
            return value.size <= FILE_SIZE;
          })
          .test(
            "fileFormat",
            "Formato de archivo debe ser JPG",
            function (value) {
              if (!value) return true; // Si no se proporciona ningún archivo, la validación pasa
              return SUPPORTED_FORMATS.includes(value.type);
            }
          )
          .nullable()
          .notRequired(),
        LINK_WEB: Yup.string().nullable().notRequired(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // Aquí manejar el envío del formulario por AJAX

        console.log("Intentando enviar");
        setIsPostLoading(true);

        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key]);
        });

        fetch("/GuardaFormulario.php", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            const statusCode = response.status;
            return response.json().then((data) => {
              return { statusCode, data };
            });
          })
          .then(({ statusCode, data }) => {
            console.log("Status Code:", statusCode);
            console.log("Success:", data);

            if (statusCode != 200) {
              setErrorPost(
                "Ocurrio un error inesperado al enviar el formulario, por favor reintente más tarde.  Si el problema persiste contactenos a premiopam@antenna.cl ."
              );
              setIsOpen(true);
            } else {
              if (data.status != "success") {
                setErrorPost(data.message);
                setIsOpen(true);
              } else {
                // Calcula el 15% de la altura total de la página
                const scrollPosition =
                  document.documentElement.scrollHeight * 0.15;
                // Realiza el scroll a la posición calculada
                window.scrollTo({
                  top: scrollPosition,
                  behavior: "smooth", // Para un desplazamiento suave
                });
                setPostulacionOk(true);
              }
            }
            setIsPostLoading(false);
            setSubmitting(false);
          })
          .catch((error) => {
            setErrorPost(
              "Ocurrio un error inesperado al enviar el formulario, por favor reintente más tarde.  Si el problema persiste contactenos a premiopam@antenna.cl ."
            );
            setIsOpen(true);
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting, setFieldValue, handleSubmit }) => (
        <section id="section_1" className="flex justify-center">
          <div
            className="w-full mx-auto mt-12 md:mt-[4.7rem] lg:mt-[4.7rem] xl:mt-[4.7rem] xs:px-6 px-6 md:px-0  lg:px-0  xl:px-0  md:mt-[8.7rem] lg:mt-[8.7rem] xl:mt-[8.7rem]"
            style={{ backgroundColor: "#e9d9fc" }}
          >
            <div className="presentan h-full flex flex-col justify-start hidden md:block lg:block xl:block ">
              <Presentadores />
            </div>

            {postulacionOk ? (
              <div className="contenido">
                <h1 className="!mb-0" id="titulo_postulacion">
                  POSTULACIÓN PREMIO PAM 2025
                </h1>

                <p className="font-inter text-[#F0000C] text-xl md:text-2xl md:leading-[2.1rem]  lg:text-2xl lg:leading-[2.1rem]  xl:text-2xl xl:leading-[2.1rem]    font-semibold	md:mt-[4.4rem] lg:mt-[4.4rem] xl:mt-[4.4rem]   px-0 md:px-0 lg:px-0 xl:px-0 ">
                  Hemos recibido correctamente tu postulación al Premio PAM
                  2025.
                  <br />
                  <br />
                  ¡Muchas gracias!
                </p>

                <p className="font-inter text-[#F0000C] text-lg md:text-xl font-light mt-6 max-w-[700px]">
                  📩 Te hemos enviado una confirmación a tu correo electrónico.
                </p>

                <div className="mt-10 max-w-[700px]">
                  <h2 className="font-inter text-[#F0000C] text-xl md:text-2xl font-semibold mb-4">
                    🔎 ¿Qué sucede ahora?
                  </h2>

                  <ul className="list-disc pl-6 text-[#F0000C] font-inter text-base md:text-lg font-light space-y-2">
                    <li>
                      <strong>Apertura convocatoria:</strong> 10 de junio al 25
                      de agosto
                    </li>
                    <li>
                      <strong>Voto del público:</strong> 22 de septiembre al 20
                      de octubre
                    </li>
                    <li>
                      <strong>Anuncio ganadoras:</strong> 2 de noviembre
                    </li>
                  </ul>
                </div>

                <div className="mt-10">
                  <a
                    href="/"
                    class="inline-block bg-[#F0000C] text-white font-inter text-base md:text-lg font-semibold px-6 py-3 rounded-lg hover:bg-[#cc0009] transition"
                  >
                    Volver al sitio principal
                  </a>
                </div>
              </div>
            ) : (
              <div className="contenido">
                <h1 className="!mb-0" id="titulo_postulacion">
                  POSTULACIÓN PREMIO PAM 2025
                </h1>
                <h2
                  className="!mt-1 !mb-12 contenido__titulo"
                  id="subtitulo_postulacion"
                  style={{ lineHeight: "normal" }}
                >
                  COMPLETE LA SIGUIENTE INFORMACIÓN:
                </h2>

                <form
                  className="FPAM"
                  id="FPAM"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  <fieldset>
                    <h3 className="titulo_ficha">1. Datos personales</h3>
                    <p className="campos-obligatorios mb-6">
                      Campos con asterisco (*) son obligatorios
                    </p>
                    <div className="frow">
                      <div className="c1">
                        <label>Nombre y Apellido*</label>
                        <Field
                          type="text"
                          name="NOMBRE_APELLLIDO"
                          id="NOMBRE_APELLLIDO"
                        />
                        <div className="ErrorMessage">
                          <ErrorMessage
                            name="NOMBRE_APELLLIDO"
                            component="div"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="frow">
                      <div className="c2">
                        <label>Edad*</label>
                        <Field type="number" name="EDAD" id="EDAD" min="60" />
                        <div className="ErrorMessage">
                          <ErrorMessage
                            className="ErrorMessage"
                            name="EDAD"
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="c2">
                        <label>Fecha de Nacimiento*</label>
                        <Field
                          type="date"
                          name="FECHA_DE_NACIMIENTO"
                          id="FECHA_DE_NACIMIENTO"
                          className="fecha flatpickr-input"
                        />
                        <div className="ErrorMessage">
                          <ErrorMessage
                            name="FECHA_DE_NACIMIENTO"
                            component="div"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="frow">
                      <div className="c2 edad-tel-desktop">
                        <label>Teléfono*</label>
                        <Field type="tel" name="TELEFONO" id="TELEFONO" />
                        <div className="ErrorMessage">
                          <ErrorMessage name="TELEFONO" component="div" />
                        </div>
                      </div>
                      <div className="c2 fecha-mail-desktop">
                        <label>E-Mail*</label>
                        <Field type="email" name="EMAIL" id="EMAIL" />
                        <div className="ErrorMessage">
                          <ErrorMessage name="EMAIL" component="div" />
                        </div>
                      </div>
                    </div>

                    <div className="frow">
                      <div className="c2">
                        <label>Nacionalidad*</label>
                        <Field
                          type="text"
                          list="NACIONALIDADES"
                          name="NACIONALIDAD"
                          id="NACIONALIDAD"
                        />
                        <datalist id="NACIONALIDADES">
                          {nacionalidades.map((nacionalidad, index) => (
                            <option key={index} value={nacionalidad} />
                          ))}
                        </datalist>
                        <div className="ErrorMessage">
                          <ErrorMessage name="NACIONALIDAD" component="div" />
                        </div>
                      </div>
                      <div className="c2 ">
                        <label>País de residencia*</label>
                        <Field
                          type="text"
                          list="PAISES"
                          name="LUGAR_RESIDENCIA"
                          id="LUGAR_RESIDENCIA"
                        />
                        <datalist id="PAISES">
                          {paises.map((pais, index) => (
                            <option key={index} value={pais} />
                          ))}
                        </datalist>
                        <div className="ErrorMessage">
                          <ErrorMessage
                            name="LUGAR_RESIDENCIA"
                            component="div"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="frow">
                      <div className="c2">
                        <label>Región residencia*</label>
                        <Field
                          as="select"
                          id="REGION_RESIDENCIA"
                          name="REGION_RESIDENCIA"
                        >
                          <option value="">Selecciona una región</option>
                          {regionesChilenas.map((region) => (
                            <option key={region} value={region}>
                              {region}
                            </option>
                          ))}
                        </Field>
                        <div className="ErrorMessage">
                          <ErrorMessage
                            name="REGION_RESIDENCIA"
                            component="div"
                          />
                        </div>
                      </div>

                      <div className="c2">
                        <label>Ciudad de residencia*</label>
                        <Field
                          type="text"
                          name="CIUDAD_RESIDENCIA"
                          id="CIUDAD_RESIDENCIA"
                        />
                        <div className="ErrorMessage">
                          <ErrorMessage
                            name="CIUDAD_RESIDENCIA"
                            component="div"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="frow">
                      <div className="c1">
                        <label>
                          Biografía de la artista* (máximo 500 palabras)
                        </label>
                        <Field as="textarea" name="BIOGRAFIA" id="BIOGRAFIA" />
                        <div className="ErrorMessage">
                          <ErrorMessage name="BIOGRAFIA" component="div" />
                        </div>
                      </div>
                    </div>

                    <div className="frow">
                      <div className="c1">
                        <label>Redes Sociales</label>
                        <Field type="text" name="RRSS" id="RRSS" />
                        <div className="ErrorMessage">
                          <ErrorMessage name="RRSS" component="div" />
                        </div>
                      </div>
                    </div>

                    <div className="frow">
                      <div className="c1">
                        <label>Postulado por </label>
                        <Field
                          type="text"
                          name="POSTULADA_POR"
                          id="POSTULADA_POR"
                        />
                        <div className="ErrorMessage">
                          <ErrorMessage name="POSTULADA_POR" component="div" />
                        </div>
                      </div>
                    </div>

                    <div className="frow">
                      <div className="c1">
                        <label>Parentesco</label>
                        <Field type="text" name="PARENTESCO" id="PARENTESCO" />
                        <div className="ErrorMessage">
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
                            setFieldValue("FOTOGRAFIA_RETRATO_X", file); // Guarda el archivo en el campo de Formik
                          }}
                        />
                        <div className="ErrorMessage">
                          <ErrorMessage
                            name="FOTOGRAFIA_RETRATO"
                            component="div"
                          />
                          <ErrorMessage
                            name="FOTOGRAFIA_RETRATO_X"
                            component="div"
                          />
                        </div>

                        <Tippy
                          theme="pam-theme"
                          content="Adjunta una foto a color, de buena calidad y con el rostro visible."
                        >
                          <label htmlFor="FOTOGRAFIA_RETRATO">
                            <img
                              src="img/boton_adjuntar_retrato.png"
                              className="my-1 upload"
                              id="IMG_FOTOGRAFIA_RETRATO"
                              alt="Upload"
                            />
                          </label>
                        </Tippy>
                      </div>

                      <div className="c2">{/* Espacio vacío */}</div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <h3 className="titulo_ficha">2. Ficha técnica</h3>
                    <p className="campos-obligatorios mb-6">
                      Campos con asterisco (*) son obligatorios
                    </p>
                    <div className="frow">
                      <div className="c1">
                        <label>Título de la obra*</label>
                        <Field
                          type="text"
                          name="TITULO_DE_OBRA"
                          id="TITULO_DE_OBRA"
                        />
                        <div className="ErrorMessage">
                          <ErrorMessage name="TITULO_DE_OBRA" component="div" />
                        </div>
                      </div>
                    </div>

                    <div className="frow">
                      <div className="c2">
                        <label>Dimensiones* (medidas en cm)</label>
                        <Field
                          type="text"
                          name="DIMENCIONES"
                          id="DIMENCIONES"
                        />
                        <div className="ErrorMessage">
                          <ErrorMessage name="DIMENCIONES" component="div" />
                        </div>
                      </div>
                      <div className="c2">
                        <label>Fecha de creación*</label>
                        <Field
                          type="date"
                          name="FECHA_CREACION"
                          id="FECHA_CREACION"
                          className="fecha flatpickr-input"
                        />
                        <div className="ErrorMessage">
                          <ErrorMessage name="FECHA_CREACION" component="div" />
                        </div>
                      </div>
                    </div>

                    <div className="frow">
                      <div className="c1">
                        <label>Técnica*</label>
                        <Field type="text" name="TECNICA" id="TECNICA" />
                        <div className="ErrorMessage">
                          <ErrorMessage name="TECNICA" component="div" />
                        </div>
                      </div>
                    </div>

                    <div className="frow">
                      <div className="c1">
                        <label>
                          Descripción de la obra * (máximo 500 palabras)
                        </label>
                        <Field as="textarea" name="STATMENT" id="STATMENT" />
                        <div className="ErrorMessage">
                          <ErrorMessage name="STATMENT" component="div" />
                        </div>
                      </div>
                    </div>

      

                    <div className="frow">
                      <div className="c2">
                        <label>Fotografía de la obra 1* </label>
                        <Field
                          type="file"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("FOTOGRAFIA_OBRA_1_X", file); // Guarda el archivo en el campo de Formik
                          }}
                          className="hidden"
                          name="FOTOGRAFIA_OBRA_1"
                          id="FOTOGRAFIA_OBRA_1"
                        />
                        <div className="ErrorMessage">
                          <ErrorMessage
                            name="FOTOGRAFIA_OBRA_1"
                            component="div"
                          />
                          <ErrorMessage
                            name="FOTOGRAFIA_OBRA_1_X"
                            component="div"
                          />
                        </div>
                        <label htmlFor="FOTOGRAFIA_OBRA_1">
                          <img
                            src="img/boton_adjuntar_obra.png"
                            className="my-1 upload"
                            id="IMG_FOTOGRAFIA_OBRA_1"
                            alt="Upload"
                          />
                        </label>
                      </div>
                      <div className="c2">
                        <label>Fotografía de la obra 2 </label>
                        <Field
                          type="file"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("FOTOGRAFIA_OBRA_2_X", file); // Guarda el archivo en el campo de Formik
                          }}
                          className="hidden"
                          name="FOTOGRAFIA_OBRA_2"
                          id="FOTOGRAFIA_OBRA_2"
                        />
                        <div className="ErrorMessage">
                          <ErrorMessage
                            name="FOTOGRAFIA_OBRA_2"
                            component="div"
                          />
                          <ErrorMessage
                            name="FOTOGRAFIA_OBRA_2_X"
                            component="div"
                          />
                        </div>

                        <label htmlFor="FOTOGRAFIA_OBRA_2">
                          <img
                            src="img/boton_adjuntar_obra.png"
                            className="my-1 upload"
                            id="IMG_FOTOGRAFIA_OBRA_2"
                            alt="Upload"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="frow">
                      <div className="c2">
                        <label>Fotografía de la obra 3 </label>
                        <Field
                          type="file"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("FOTOGRAFIA_OBRA_3_X", file); // Guarda el archivo en el campo de Formik
                          }}
                          className="hidden"
                          name="FOTOGRAFIA_OBRA_3"
                          id="FOTOGRAFIA_OBRA_3"
                        />
                        <div className="ErrorMessage">
                          <ErrorMessage
                            name="FOTOGRAFIA_OBRA_3"
                            component="div"
                          />
                          <ErrorMessage
                            name="FOTOGRAFIA_OBRA_3_X"
                            component="div"
                          />
                        </div>
                        <label htmlFor="FOTOGRAFIA_OBRA_3">
                          <img
                            src="img/boton_adjuntar_obra.png"
                            className="my-1 upload"
                            id="IMG_FOTOGRAFIA_OBRA_3"
                            alt="Upload"
                          />
                        </label>

                        
                      </div>
                      <div className="c2">
                        <p className="font-inter text-[#F0000C] text-base font-medium mt-20 block">
                          Postula con una (1) obra. Recuerda que no debe salir tu rostro ni firma en la foto.</p>
                      </div>
                    </div>

                    <div className="frow">
                      <div className="c2">
                        <label>Para obras audiovisuales escribir link</label>
                        <Field type="text" name="LINK_WEB" id="LINK_WEB" />
                        <div className="ErrorMessage">
                          <ErrorMessage name="LINK_WEB" component="div" />
                        </div>
                      </div>
                      
                    </div>
                  </fieldset>

                  <div className="flex justify-center my-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-enviar"
                    >
                      {isPostLoading ? (
                        <span className="pr-2">
                          ({/*<Spinner color="info" size="md" />*/})
                        </span>
                      ) : (
                        "Enviar"
                      )}
                      {isPostLoading && "Enviando..."}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      )}
    </Formik>
  );
}

export default SectionFormPostula;
