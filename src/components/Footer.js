 

import React  from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TbDownload } from "react-icons/tb";



function Footer() {

  return (
    <footer  className="md:flex lg:flex xl:flex md:justify-center lg:justify-center xl:justify-center ">

            

    <div id="Footer" className='mx-auto  container'>

<div id="Izquierda">

<img id="IMGLogoFooterDesk" src="img/footer/web.png" />
<img id="IMGLogoFooterMovil" src="img/footer/movil.png" />

</div>

<div id="Derecha">

<a href="mailto:premiopam@antenna.cl"> <h4 className="derecha__bold">Contáctanos</h4>
<h4 className="derecha__regular">premiopam@antenna.cl</h4></a>

 

 

<div className="icons-footer">
<a href="https://www.instagram.com/antennaorg/?hl=es-la" target="_blank">
  <FaInstagram size={32}  color="#F0000C"/>
  </a>
<a href="https://www.facebook.com/antennaorg" target="_blank">
<ImFacebook size={24}  color="#F0000C"/>
  </a>
<a href="https://www.linkedin.com/company/antennaorg/" target="_blank">
<AiOutlineLinkedin size={35}  color="#F0000C"/>
  </a>
<a href="https://www.premiopam.cl/" target="_blank"><img style={{maxHeight:'20px'}} className="hashtag__footer" src="img/icons/hashtag_1.png" alt="premio-pam"/></a>

</div>

<div className="icons-footer"  style={{ marginTop: '15px' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginTop: '0px'  }}>
    <a href="https://drive.google.com/drive/folders/1S9ERKjvwknrvjhQMJxogi0Lv7QpOB7Xc?usp=drive_link " target="_blank">
      <TbDownload size={28} color="#F0000C" /> </a>
    <a href="https://drive.google.com/drive/folders/1S9ERKjvwknrvjhQMJxogi0Lv7QpOB7Xc?usp=drive_link " target="_blank"><span style={{ marginLeft: '8px' }} className='contenido__titulo'>Media kit 2025</span></a>
   
  </div>
</div>

 

</div>
<div className="arrow">
<a href="#">

<img src="img/arrow.png" />

</a>
</div>

</div>


<div className='w-full  block md:hidden lg:hidden xl:hidden' id='Footer-2-Movil'>

<h1 className='mx-12' >Contáctanos</h1>
<h1 className='mx-12' style={{fontSize: '26px', fontWeight: '300'}}>premiopam@antenna.cl</h1>
<div className="icons-footer mx-12">
<a href="https://www.instagram.com/antennaorg/?hl=es-la" target="_blank">
  <FaInstagram size={32}  color="#F0000C"/>
  </a>
<a href="https://www.facebook.com/antennaorg" target="_blank">
<ImFacebook size={24}  color="#F0000C"/>
  </a>
<a href="https://www.linkedin.com/company/antennaorg/" target="_blank">
<AiOutlineLinkedin size={35}  color="#F0000C"/>
  </a>
<a href="https://www.premiopam.cl/" target="_blank"><img style={{maxHeight:'20px'}} className="hashtag__footer" src="img/icons/hashtag_1.png" alt="premio-pam"/></a>

</div>

<div className="icons-footer mx-12"  style={{ marginTop: '15px' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginTop: '0px'  }}>
    <a href="https://drive.google.com/drive/folders/1S9ERKjvwknrvjhQMJxogi0Lv7QpOB7Xc?usp=drive_link " target="_blank">
      <TbDownload size={28} color="#F0000C" /> </a>
    <a href="https://drive.google.com/drive/folders/1S9ERKjvwknrvjhQMJxogi0Lv7QpOB7Xc?usp=drive_link " target="_blank"><span style={{ marginLeft: '8px' }} className='contenido__titulo'>Media kit 2025</span></a>
   
  </div>
</div>

</div>

    </footer>
  );
}

export default Footer;
