import React from "react";

function PamHeader({ titulo, contenido }) {
  ///votacion

  return (
    <header>
      <div className="flex justify-center bg-[#e9d9fc]">
        <div className="w-full mx-auto   bg-[#e9d9fc]">
          <div className="flex justify-between items-center px-8 py-10">
            <div><img src="/img/header/AntennaLogo.png" alt="Logo Fundación Antenna" className="max-h-14" /></div>
            <div><img src="/img/header/BiceLogo.png" alt="Logo Fundación Antenna"  className="max-h-14"  /></div>
          </div>

          <img className="HeaderIMG" src="img/header/web.png" alt="" />
          <img id="HeaderIMG-mobile" src="img/header/movil.png" alt="" />
          <div className="flex justify-between items-center px-8  mt-10">
            <div className="text-[#F0000C] text-2xl font-bold">CONVOCATORIA ABIERTA</div>
            <div className="text-[#F0000C] text-2xl font-bold">HASTA EL 26 DE AGOSTO 2025</div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto  container_logo_movil">
        <img id="LOGOS_MOVIL" src="img/LOGOS_MOVIL.png" alt="" />
      </div>
    </header>
  );
}

export default PamHeader;
