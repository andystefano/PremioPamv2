 
import React  from 'react';

function Presentadores() {

  return (<div className='mt-auto  pb-10 mb-7'>


       <div class="ganadoras-btn-presentan"> 
                <a
                  className=""
                  href="/ganadoras"
                >
                  POSTULA AQUI
                </a>
        </div>



       <div class="ganadoras-btn-presentan mb-28"> 
                <a
                  className=""
                  href="/ganadoras"
                >
                  BASES 2025
                </a>
        </div>

        <h2 className="presentan__titulo">COLABORA:</h2>
        <img src="img/AUSPICIA.png" alt='Bank Of America' />  
        <img src="img/COLABORA2.png" alt='GRUPO ROCA'  />  
        <h2 className="presentan__titulo">APOYA:</h2>
        <img src="img/COLABORA1.png" alt='Capitulo Chileno de Mational Musseum of WOMEN in the ARTS' />  
        <img src="img/APOYA.png" alt='e-press' style={{marginTop:'1rem'}} />  

        {process.env.REACT_APP_BTN_GANADORAS_ANTERIORES_ACTIVO === 1 || process.env.REACT_APP_BTN_GANADORAS_ANTERIORES_ACTIVO === '1' && (<div>
            <div class="ganadoras-btn-presentan"> 
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
