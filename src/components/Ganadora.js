import React from "react";


function Ganadoras(props) {
    return ( <div className="ganadora" style={{ display: props.ano === props.anoSeleccion ? 'unset' : 'none' }} >
        <div>
          <div className="flex w-full">
            <div className="pr-10 pt-4 zona_foto">
              <img
                src={`/img/ganadoras/${props.retrato}`}
                alt={`Retrato`}
                style={{ width: "345px" }}
              />
            </div>
            <div>
              <h2 class="contenido__tituloGanadoras w-full">
                GANADORAS PAM {props.ano} / {props.anoSeleccion} 
              </h2>
              <h1 class="titulo_principalGanadoras w-full">
                { props.nombre }
              </h1>
              <p class="text-black w-full">
                { props.biografia }
              </p>
            </div>
          </div>
          <div className="w-full">
            <img
              src={`/img/ganadoras/isabel_obra.png`}
              style={{ width: "100%" }}
              alt="Obra"
              className="pt-10"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="pt-10">
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
