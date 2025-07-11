import React  from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


function Presentadores() {

  return (<div className='mt-0  pb-10 mb-7 hidden md:block lg:block xl:block'>


       <div className="ganadoras-btn-presentan"> 
                <a id='postula_btn_desk'
                  className=""
                  href="/postulacion"
                >
                  POSTULA AQUÍ
                </a>
        </div>



       <div className="ganadoras-btn-presentan mb-10 mt-16"> 
                <a
                  className=""
                  target='_blank'
                  href="https://drive.google.com/file/d/1KxT2mQTMT2AL8v8kAMFeRMlGx0eC9oPm/view?usp=sharing"
                >
                  BASES 2025
                </a>
        </div>

<div className='promo'>
<HiOutlineArrowNarrowRight className="hidden text-[#f0000c]  md:block lg:block xl:block mr-1 flex-shrink-0" size={65} />

<h4>Primer lugar:</h4>
<h3>$5.000.000</h3>
<h4>Premio del público:</h4>
<h3>$2.000.000</h3>
<h4>Menciones honrosas (2):</h4>
<h3>$1.500.000</h3>
</div>


        {/* <h2 className="presentan__titulo">PRESENTA:</h2> 
        <img src="img/PRESENTA.png" alt='Fundación Antenna' className=''  />  

        <h2 className="presentan__titulo">AUSPICIA:</h2>
        <img src="img/AUSPICIA.png" alt='Bank Of America' />    
        <img src="img/AUSPICIA2.png" alt='OKWU'  className='mt-16'   />  
        <h2 className="presentan__titulo">COLABORA:</h2>
        <img src="img/COLABORA2.png" alt='GRUPO ROCA'  className=''   />          
        <h2 className="presentan__titulo">APOYA:</h2>
        <img src="img/APOYA.png" alt='e-press' />  
        <img src="img/COLABORA1.png" alt='Capitulo Chileno de Mational Musseum of WOMEN in the ARTS'  className='mt-16'  />   */}

        <img src="img/sidebar/logos_desk.png" alt='' className="mix-blend-multiply" style={{ backgroundColor: '#e9d9fc' }}  />  
        
    
          

        </div>
  );
}

export default Presentadores;
