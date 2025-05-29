import React from "react";

function PamHeader({ titulo, contenido }) {
  ///votacion

  return (
    <header>
      <div className="flex justify-center bg-[#e9d9fc]">
        <div className="w-full mx-auto   bg-[#e9d9fc]">
          <div className="flex justify-between items-center px-8 pt-8 pb-8">
            <div><a href="/"><img src="/img/header/AntennaLogo.png" alt="Logo Fundación Antenna" className="max-h-[2.0rem]  md:max-h-[3.5rem] lg:max-h-[3.5rem]  xl:max-h-[3.5rem]" /></a></div>
            <div></div>
          </div>

          <img className="HeaderIMG w-full" src="img/header/web.png" alt=""  />
          <img id="HeaderIMG-mobile" src="img/header/movil.gif" alt="" />
          <div className="flex justify-between items-center px-4 pb-2  md:px-12 lg:px-12 xl:px-12   mt-7">
            <div className="text-[#F0000C] font-roboto [font-size:0.8rem] md:[font-size:1.55rem] lg:[font-size:1.55rem] xl:[font-size:1.55rem] font-semibold">CONVOCATORIA<br className='block md:hidden lg:hidden xl:hidden'/> ABIERTA</div>
            <div className="text-right text-[#F0000C] font-roboto [font-size:0.8rem] md:[font-size:1.55rem] lg:[font-size:1.55rem] xl:[font-size:1.55rem] font-semibold">HASTA EL 25<br className='block md:hidden lg:hidden xl:hidden'/> DE AGOSTO 2025</div>
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
