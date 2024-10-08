 
import React  from 'react';

function PamHeader({titulo,contenido}) {

  ///votacion

  return (
    <header>
      <div className="flex justify-center ">
        <div className="w-full mx-auto  container">
        <img className="HeaderIMG"  src="img/HEADER_DESK_P1.png"  alt=""/>
        <img className="HeaderIMG"   src="img/HEADER_DESK_P2.png"  alt="" style={{cursor:'pointer'}}
         onClick={() => window.location.href = '/votacion'} />
        <img id="HeaderIMG-mobile"  src="img/HEADER_MOVIL.png"  alt=""/>
        <img id="LOGOS_MOVIL"  src="img/CONVOCATORIA_MOVIL.png"  alt=""   onClick={() => window.location.href = '/votacion'}  />          
        </div>
      </div>
      <div className="w-full mx-auto  container container_logo_movil">
      <img id="LOGOS_MOVIL"  src="img/LOGOS_MOVIL.png"  alt=""/>
      </div>
    </header>
  );
}

export default PamHeader;
