import React from 'react';
import AcordeonTab from './AcordeonTab.js';

function Faq() {
  const isVisible = process.env.REACT_APP_FAQ_VISIBLE === '1';

  return (
    <section id="faq" className="px-12 py-12 md:px-24 md:py-24 lg:px-24 lg:py-24 xl:px-24 xl:py-24 ">
      {isVisible && (
        <><div className=" mx-auto ">
          <h2 id="faq_titulo" className="block md:hidden lg:hidden xl:hidden  mb-6 text-4xl font-normal tracking-tight text-left text-cream lg:mb-8 lg:text-4xl font-unbounded">
            PREGUNTAS <br /> FRECUENTES
          </h2>
        </div>

        <div className="flex">
  {/* Columna izquierda: el h2 usa solo el ancho que necesita */}
  <div className=" flex-none">
    <h2
      id="faq_titulo"
      className="hidden md:block lg:block xl:block  mb-6 text-4xl font-normal tracking-tight text-left text-cream lg:mb-8 lg:text-4xl font-unbounded"
    >
      PREGUNTAS <br /> FRECUENTES
    </h2>
  </div>

  {/* Columna derecha: ocupa el resto del espacio */}
  <div className="pt-20 flex-grow pl-8 hidden md:block  lg:block xl:block" id='version_movil'>
    {/* Aquí va el contenido que se ajusta al espacio restante */}
    <div className="">
      
         <div id="accordion" className='mt-36'>
                <AcordeonTab titulo="¿Hasta qué fecha se puede postular?" contenido="Las postulaciones se pueden enviar desde el día 10 de junio 2025 hasta el día 25 de agosto, a las 23:59 hrs. Las postulaciones que lleguen después serán consideradas como fuera de base." />
                <AcordeonTab titulo="¿Se puede postular más de una obra?" contenido="No, solamente se puede postular una obra por cada artista o postulante." />
                <AcordeonTab titulo="¿Pueden postular artistas que hayan postulado a las versiones anteriores?" contenido="Sí, las participantes de convocatorias anteriores pueden postular, excepto aquellas que hayan obtenido el primer lugar en cualquiera de las versiones anteriores." />
                <AcordeonTab titulo="¿Es un premio de adquisición de obra?" contenido="No, el premio no es de adquisición." />
                <AcordeonTab
                  titulo="¿Qué quiere decir un jurado ciego?"
                  contenido="Jurado ciego significa que, al momento de deliberar, los jurados no saben a qué artista pertenece cada obra, solo tienen acceso a la información visual enviada de la obra postulada, misma metodología aplica para el voto del público. Para lo anterior, es importante también que en la fotografía de la obra postulada no aparezca el rostro de la postulante, con el fin de no revelar su identidad." />
                <AcordeonTab
                  titulo="¿Qué tipo de obra o disciplina artística se puede postular?"
                  contenido="La convocatoria está abierta a todas las disciplinas de las artes plásticas, por ello la postulación es mediante el envío de fotografías que den cuenta de la obra postulada o un link para poder verla online. Esto incluye, pero no está limitado a las siguientes técnicas: pintura, escultura, fotografía, arte textil, instalación, video arte, cerámica, dibujo." />
                <AcordeonTab titulo="¿La obra postulada debe ser inédita?" contenido="No, las obras pueden ser preexistentes o inéditas." />
                <AcordeonTab
                  titulo="¿Cuántas fotografías de la obra se pueden enviar?"
                  contenido="Se pueden enviar de una a tres fotografías de la obra. Es importante considerar que la primera foto sea una fotografía general de la obra. Las dos fotografías siguientes pueden ser detalles o vistas desde otras perspectivas. Las fotografías de las obras no deben contener el rostro de las postulantes, con el fin de no revelar su identidad para el voto ciego del jurado y del público." />
                <AcordeonTab
                  titulo="¿Qué pasa si mi postulación no se envía en la plataforma?"
                  contenido="Las postulaciones que cumplen con los requisitos técnicos de la plataforma se envían sin problema. Sí tienes dificultades para enviar tu postulación, suele ser porque las fotografías superan el peso permitido (2 MB) o porque el formato de las fechas no es correcto. Te recomendamos revisar esto y volver a intentar." />
                <AcordeonTab
                  titulo="¿Qué pasa si no recibo el mail de confirmación?"
                  contenido="Las postulaciones las revisamos manualmente por lo que no hay un correo de confirmación automático. En caso de no recibir un mail de confirmación en un plazo de 2 días, escribir a premiopam@antenna.cl. Es importante revisar la sección o bandeja de “Spam”, “Promociones” y “No deseados” del correo." />
                <AcordeonTab titulo="¿Qué sucede si envío más de una postulación?" contenido="En caso de que una artista envíe más de una postulación, se considerará la última postulación enviada." />
          </div>

    </div>
  </div>
</div>






 

        
        <div id='version_movil' className="mt-10 block md:hidden lg:hidden xl:hidden">
            <div className="">
              <div id="accordion">
                <AcordeonTab titulo="¿Hasta qué fecha se puede postular?" contenido="Las postulaciones se pueden enviar desde el día 10 de junio 2025 hasta el día 25 de agosto, a las 23:59 hrs. Las postulaciones que lleguen después serán consideradas como fuera de base." />
                <AcordeonTab titulo="¿Se puede postular más de una obra?" contenido="No, solamente se puede postular una obra por cada artista o postulante." />
                <AcordeonTab titulo="¿Pueden postular artistas que hayan postulado a las versiones anteriores?" contenido="Si, las participantes de las convocatorias anteriores pueden postular, a excepción de las ganadoras de las versiones anteriores." />
                <AcordeonTab titulo="¿Es un premio de adquisición de obra?" contenido="No, el premio no es de adquisición." />
                <AcordeonTab
                  titulo="¿Qué quiere decir un jurado ciego?"
                  contenido="Jurado ciego significa que, al momento de deliberar, los jurados no saben a qué artista pertenece cada obra, solo tienen acceso a la información visual enviada de la obra postulada, misma metodología aplica para el voto del público. Para lo anterior, es importante también que en la fotografía de la obra postulada no aparezca el rostro de la postulante, con el fin de no revelar su identidad." />
                <AcordeonTab
                  titulo="¿Qué tipo de obra o disciplina artística se puede postular?"
                  contenido="La convocatoria está abierta a todas las disciplinas de las artes plásticas, por ello la postulación es mediante el envío de fotografías que den cuenta de la obra postulada o un link para poder verla online. Esto incluye, pero no está limitado a las siguientes técnicas: pintura, escultura, fotografía, arte textil, instalación, video arte, cerámica, dibujo." />
                <AcordeonTab titulo="¿La obra postulada debe ser inédita?" contenido="No, las obras pueden ser preexistentes o inéditas." />
                <AcordeonTab
                  titulo="¿Cuántas fotografías de la obra se pueden enviar?"
                  contenido="Se pueden enviar de una a tres fotografías de la obra. Es importante considerar que la primera foto sea una fotografía general de la obra. Las dos fotografías siguientes pueden ser detalles o vistas desde otras perspectivas. Las fotografías de las obras no deben contener el rostro de las postulantes, con el fin de no revelar su identidad para el voto ciego del jurado y del público." />
                <AcordeonTab
                  titulo="¿Qué pasa si mi postulación no se envía en la plataforma?"
                  contenido="Las postulaciones que cumplen con los requisitos técnicos de la plataforma se envían sin problema. Sí tienes dificultades para enviar tu postulación, suele ser porque las fotografías superan el peso permitido (2 MB) o porque el formato de las fechas no es correcto. Te recomendamos revisar esto y volver a intentar." />
                <AcordeonTab
                  titulo="¿Qué pasa si no recibo el mail de confirmación?"
                  contenido="Las postulaciones las revisamos manualmente por lo que no hay un correo de confirmación automático. En caso de no recibir un mail de confirmación en un plazo de 2 días, escribir a premiopam@antenna.cl. Es importante revisar la sección o bandeja de “Spam”, “Promociones” y “No deseados” del correo." />
                <AcordeonTab titulo="¿Qué sucede si envío más de una postulación?" contenido="En caso de que una artista envíe más de una postulación, se considerará la última postulación enviada." />
              </div>
            </div>
          </div></>
      )}
    </section>
  );
}

export default Faq;
