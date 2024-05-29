 
import React  from 'react';

function Section1() {

  return (
<section id='section_1'  class="flex justify-center">

<div className="w-full mx-auto  container">
  <div className='presentan'>
    <img src="img/logos.png" />
  </div>
<div class="contenido">
<h2 class="contenido__subtitulo">PREMIO PAM 2024</h2>
<h1>CINCO AÑOS RECONOCIENDO <br/> A ARTISTAS MUJERES .</h1>

<p class="texto__principal">Fundación Antenna y Bank of America presentan la quinta versión del Premio PAM Artista Mujer, que invita a artistas visuales mujeres desde los 60 años.</p>


<p class="texto__principal">Un jurado de expertos escogerá a la artista ganadora y a dos menciones honrosas a través de un proceso ciego, es decir, teniendo únicamente la obra como referente.</p>

<p class="texto__principal">Además, el público votará y seleccionará a una artista ganadora, lo cual permite democratizar este reconocimiento y difundir más ampliamente a las participantes y sus obras.</p>

<div class="texto__premios">


<h2>PREMIOS</h2>
<div class="premio__container">
<p class="premio__medium">Primer lugar:&nbsp; </p><p class="premio__semibold">$5.000.000</p>
</div>
<div class="premio__container">
<p class="premio__medium">Premio del público:&nbsp; </p>
<p class="premio__semibold">$2.000.000</p>
</div>
<div class="premio__container">
<p class="premio__medium">Mención honrosa (2):&nbsp; </p>
<p class="premio__semibold">$1.500.000</p>
</div>
<div class="postular-btns">
<a class="btn__bases"  href="bases_pam_2024.pdf" target="_blank" > BASES 2024 </a>
<a className="btn__bases" href="https://premiopam.cl/ganadores.html" target="_blank"> POSTULA TU OBRA AQUÍ</a>
</div>

</div>
</div>



<div class="icons-header">
<div>
<a href="https://www.instagram.com/antennaorg/?hl=es-la" target="_blank"><img class="icons__img" src="img/icons/rrss-instagram.svg" alt="Instagram"/></a></div>
<div>
<a href="https://www.facebook.com/antennaorg" target="_blank"><img class="icons__img" src="img/icons/rrss-facebook.svg" alt="facebook"/></a></div>
<div>
<a href="https://www.linkedin.com/company/antennaorg/" target="_blank"><img class="icons__img" src="img/icons/rrss-linkedin.svg" alt="linkedin"/></a></div>
<div>
<a href="https://www.premiopam.cl/" target="_blank"><img class="icons__hastag" src="img/icons/PremioPAM2023.svg" alt="premio-pam"/></a></div>
</div>


  
</div>

</section>
  );
}

export default Section1;
