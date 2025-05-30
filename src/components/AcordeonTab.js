import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";


import React  from 'react';
import { useState } from 'react';

function AcordeonTab({titulo,contenido}) {
  const [openTab, setOpenTab] = useState(false);



  return (
    <div className="acordeon-radius mt-2">
            <div className="flex items-center ml-auto"  style={{
                  color: '#F0000C',
                  borderBottom:'5px solid #f0e9e9'
                }}>
              <div
                className="text-black  font-unbounded  font-normal text-left w-11/12"
              >
                <h3 
                 onClick={() => setOpenTab(!openTab)}  className="w-full  text-2xl pt-5 pb-1 text-left titulo__item_faq">
                {titulo}
                </h3>
              </div>
              {openTab===false && (
              <span className="text-white w-1/12 flex justify-end items-center pl-1 cursor-pointer">
                <AiOutlineDown style={{color:'#F0000C'}} className={openTab ? 'hidden' : ''} size={30} onClick={() => setOpenTab(true)} />
              </span>)}
              {openTab && (
              <span className="text-white w-1/12 flex justify-end items-center pl-1 cursor-pointer">
                <AiOutlineUp style={{color:'#F0000C'}} className={openTab ? '' : 'hidden'} size={30} onClick={() => setOpenTab(false)} />
              </span>)}
              
            </div>
              <div>

              {openTab && (
                      <div className="">
                      <p       dangerouslySetInnerHTML={{ __html: contenido }}
 className="font-medium w-full py-3 font-medium text-left pl-3 texto__item_faq">                      
                      </p>
                    </div>
                    )}

                


              </div>
            </div>
  );
}

export default AcordeonTab;
