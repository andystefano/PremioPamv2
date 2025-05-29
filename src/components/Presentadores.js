 
import React  from 'react';

function Presentadores() {

  return (<div className='mt-0  pb-10 mb-7 hidden md:block lg:block xl:block'>


       <div class="ganadoras-btn-presentan"> 
                <a
                  className=""
                  href="/postulacion"
                >
                  POSTULA AQUI
                </a>
        </div>



       <div class="ganadoras-btn-presentan mb-28 mt-16"> 
                <a
                  className=""
                  href="/bases.zip"
                >
                  BASES 2025
                </a>
        </div>

        <h2 className="presentan__titulo">COLABORA:</h2>
        <img src="img/AUSPICIA.png" alt='Bank Of America' />  
        <img src="img/COLABORA2.png" alt='GRUPO ROCA'  className='mt-16'   />  
        <h2 className="presentan__titulo">APOYA:</h2>
        <img src="img/COLABORA1.png" alt='Capitulo Chileno de Mational Musseum of WOMEN in the ARTS' />  
        <img src="img/APOYA.png" alt='e-press' className='mt-16'  />  

        {process.env.REACT_APP_BTN_GANADORAS_ANTERIORES_ACTIVO === 1 || process.env.REACT_APP_BTN_GANADORAS_ANTERIORES_ACTIVO === '1' && (<div>
            <div class="ganadoras-btn-presentan mt-16"> 
                <a
                  className=""
                  href="/ganadoras"
                >
                  GANADORAS ANTERIORES
                </a>
            </div></div>)}
          

        </div>
  );
}

export default Presentadores;
