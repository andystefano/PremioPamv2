import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";


import React  from 'react';
import { useState } from 'react';

function AcordeonTab({titulo,contenido}) {
  const [openTab, setOpenTab] = useState(false);



  return (
    <div className="acordeon-radius px-4  mt-4">
            <div className="flex items-center ml-auto"  style={{
                  color: '#F0000C',
                  borderBottom:'3px solid #f0e9e9'
                }}>
              <div
                className="text-black  font-unbounded  font-normal text-left w-11/12"
              >
                <h3 
                 onClick={() => setOpenTab(!openTab)}  className="text-cream font-medium w-full text-base sd:text-2xl sm:text-2xl lg:text-2xl xl:text-2xl  pt-5 pb-1 font-medium text-left">
                {titulo}
                </h3>
              </div>
              {openTab===false && (
              <span className="text-white w-1/12 flex items-end pl-1 cursor-pointer">
                <TiArrowSortedDown style={{color:'#F0000C'}} className={openTab ? 'hidden' : ''} size={30} onClick={() => setOpenTab(true)} />
              </span>)}
              {openTab && (
              <span className="text-white w-1/12 flex items-end pl-1 cursor-pointer">
                <TiArrowSortedUp style={{color:'#F0000C'}} className={openTab ? '' : 'hidden'} size={30} onClick={() => setOpenTab(false)} />
              </span>)}
              
            </div>
              <div>

              {openTab && (
                      <div className=" pb-5">
                      <p       dangerouslySetInnerHTML={{ __html: contenido }}
 className="text-cream font-medium w-full text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl py-3 font-medium text-left pl-3">                      
                      </p>
                    </div>
                    )}

                


              </div>
            </div>
  );
}

export default AcordeonTab;
