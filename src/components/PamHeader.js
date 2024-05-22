 
import React  from 'react';

function PamHeader({titulo,contenido}) {

  return (
    <header>
      <div class="flex justify-center ">
        <div className="w-full mx-auto  container">
          <img id="HeaderIMG"  src="img/pam_header_desk_2024.png"  alt=""/>
          <img id="HeaderIMG-mobile"  src="img/pam_header_desk_2024.png"  alt=""/>

        </div>
      </div>
    </header>
  );
}

export default PamHeader;
