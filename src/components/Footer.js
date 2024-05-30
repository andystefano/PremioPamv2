 

import React  from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";



function Footer() {

  return (
    <footer  class="flex justify-center ">

            

    <div id="Footer" className='mx-auto  container'>

<div id="Izquierda">

<img id="IMGLogoFooterDesk" src="img/logoFooterDesk.png" />
<img id="IMGLogoFooterMovil" src="img/logoFooterMovil.png" />

</div>

<div id="Derecha">

<a href="mailto:premiopam@antenna.cl"> <h4 class="derecha__bold">Contáctanos</h4>
<h4 class="derecha__regular">premiopam@antenna.cl</h4></a>

 

 

<div class="icons-footer">
<a href="https://www.instagram.com/antennaorg/?hl=es-la" target="_blank">
  <FaInstagram size={32}  color="#F0000C"/>
  </a>
<a href="https://www.facebook.com/antennaorg" target="_blank">
<ImFacebook size={24}  color="#F0000C"/>
  </a>
<a href="https://www.linkedin.com/company/antennaorg/" target="_blank">
<AiOutlineLinkedin size={35}  color="#F0000C"/>
  </a>
<a href="https://www.premiopam.cl/" target="_blank"><img style={{maxHeight:'20px'}} class="hashtag__footer" src="img/icons/hashtag_1.png" alt="premio-pam"/></a>

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
