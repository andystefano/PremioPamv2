 
import React  from 'react';

function PamHeader({titulo,contenido}) {

  return (
    <header>
      <div class="flex justify-center ">
        <div className="w-full mx-auto  container">
          <img id="HeaderIMG"  src="img/HEADER_DESK.png"  alt=""/>
          <img id="HeaderIMG-mobile"  src="img/HEADER_MOVIL.png"  alt=""/>
          
          <img id="LOGOS_MOVIL"  src="img/CONVOCATORIA_MOVIL.png"  alt=""/>

          
        </div>
      </div>
      <div className="w-full mx-auto  container container_logo_movil">
      <img id="LOGOS_MOVIL"  src="img/LOGOS_MOVIL.png"  alt=""/>
      </div>
    </header>
  );
}

export default PamHeader;
