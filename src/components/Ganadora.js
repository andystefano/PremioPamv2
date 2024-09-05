import React from "react";


function Ganadoras(props) {
    return ( <div className="ganadora" style={{ display: props.ano === props.anoSeleccion ? 'block' : 'none' }} >
        <div>
          <div className="flex flex-col md:flex-row w-full">
            <div className="pr-0 sm:pr-7 zona_foto">

            <hr/>
              <img
                src={`/img/ganadoras/${props.ano}/${props.retrato}`}
                alt={`Retrato`}
              />
            </div>
            <div>
              <h2 class="contenido__tituloGanadoras w-full ">
                GANADORAS PAM {props.ano} 
              </h2>
              <h1 class="titulo_principalGanadoras w-full ">
                { props.nombre }
              </h1>
              <p class="text-black w-full text-justify text-xs sm:text-sm ">
                { props.biografia }
              </p>
            </div>
          </div>
          <div className="w-full">
            <img
              src={`/img/ganadoras/${props.ano}/${props.obra}`}
              style={{ width: "100%" , maxWidth:"65%" }}
              alt="Obra"
              className="pt-4 fotoObra"
            />
          </div>
        </div>
        <div className="w-full ">
          <div className="pt-4 text-black w-full text-justify text-xs sm:text-sm ">
            <ol>
              <li>
                Título : Circuitos Híbridos Dimensiones : { props.titulo }
              </li>
              <li>Fecha de creación : { props.fecha }</li>
              <li>
                Técnica : { props.tecnica }
              </li>
              <li>
                Dimensiones : { props.dimensiones }
              </li>
            </ol>
          </div>
        </div>
      </div>)
}

export default Ganadoras;
