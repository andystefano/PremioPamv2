 

import React  from 'react';



function Footer() {

  return (
    <footer  class="flex justify-center ">

            

    <div id="Footer" className='mx-auto  container'>

<div id="Izquierda">

<img id="IMGLogoFooter" src="img/logo-footer-2024.png" />
</div>

<div id="Derecha">

<a href="mailto:premiopam@antenna.cl"> <h4 class="derecha__bold">Contáctanos</h4>
<h4 class="derecha__regular">premiopam@antenna.cl</h4></a>

 


<div class="icons-footer">
<a href="https://www.instagram.com/antennaorg/?hl=es-la" target="_blank"><img class="icon__footer" src="img/icons/rrss-instagram.svg" alt="Instagram"/></a>
<a href="https://www.facebook.com/antennaorg" target="_blank"><img class="icon__footer" src="img/icons/rrss-facebook.svg" alt="facebook"/></a>
<a href="https://www.linkedin.com/company/antennaorg/" target="_blank"><img class="icon__footer" src="img/icons/rrss-linkedin.svg" alt="linkedin"/></a>
<a href="https://www.premiopam.cl/" target="_blank"><img class="hashtag__footer" src="img/icons/PremioPAM2023-horizontal.svg" alt="premio-pam"/></a>

</div>

 

</div>
<div class="arrow">
<a href="#">

<img src="img/arrow.png" />

</a>
</div>

</div>


    </footer>
  );
}

export default Footer;
