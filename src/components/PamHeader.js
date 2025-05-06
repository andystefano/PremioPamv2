import React from "react";

function PamHeader({ titulo, contenido }) {
  ///votacion

  return (
    <header>
      <div className="flex justify-center bg-[#e9d9fc]">
        <div className="w-full mx-auto   bg-[#e9d9fc]">
          <div className="flex justify-between items-center px-4">
            <div>AntennaLogo</div>
            <div>BancoBiceLogo</div>
          </div>

          <img className="HeaderIMG" src="img/header/web.png" alt="" />

          <img id="HeaderIMG-mobile" src="img/header/movil.png" alt="" />
          <img
            id="LOGOS_MOVIL"
            src="img/CONVOCATORIA_MOVIL.png"
            alt=""
            onClick={
              process.env.REACT_APP_VOTACION_ACTIVA === "1" ||
              process.env.REACT_APP_VOTACION_ACTIVA === 1
                ? () => (window.location.href = "/votacion")
                : null
            }
          />
        </div>
      </div>
      <div className="w-full mx-auto  container_logo_movil">
        <img id="LOGOS_MOVIL" src="img/LOGOS_MOVIL.png" alt="" />
      </div>
    </header>
  );
}

export default PamHeader;
