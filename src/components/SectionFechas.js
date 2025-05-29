import { HiOutlineArrowNarrowRight } from "react-icons/hi";
 
import React  from 'react';

function Section() {

  return (
    <section id='section_fecha' className="flex justify-center bg-[#fff6e6] py-10">
      <div className="w-full mx-auto container bg-[#fff6e6] text-[#f0000c] ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Item 1 */}
          <div className=" px-5 md:p-5 lg:p-5 xl:p-5  relative">
            <div className="flex  items-start">
              <HiOutlineArrowNarrowRight className="mt-0 mr-2 flex-shrink-0 self-start hidden md:block  lg:block  xl:block  " size={65} />
              <HiOutlineArrowNarrowRight className="mt-2 mr-2 flex-shrink-0 self-start block md:hidden  lg:hidden  xl:hidden " size={45} />          
              <div>
                <div className="font-black text-lg md:text-2xl lg:text-2xl xl:text-2xl text-left mt-4">APERTURA CONVOCATORIA</div>
                <div className="text-lg md:text-xl lg:text-xl xl:text-xl font-normal text-left">10 DE JUNIO AL 25 DE AGOSTO</div>
              </div>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className=" px-5 md:p-5 lg:p-5 xl:p-5  relative">
            <div className="flex  items-start">
              <HiOutlineArrowNarrowRight className="mt-0 mr-2 flex-shrink-0 self-start hidden md:block  lg:block  xl:block  " size={65} />
              <HiOutlineArrowNarrowRight className="mt-2 mr-2 flex-shrink-0 self-start block md:hidden  lg:hidden  xl:hidden " size={45} />              <div>
                <div className="font-black text-lg md:text-2xl lg:text-2xl xl:text-2xl text-left mt-4">VOTO DEL PÚBLICO</div>
                <div className="text-lg md:text-xl lg:text-xl xl:text-xl font-normal text-left">22 DE SEPTIEMBRE AL 20 DE OCTUBRE</div>
              </div>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className=" px-5 md:p-5 lg:p-5 xl:p-5   relative">
            <div className="flex  items-start">
              <HiOutlineArrowNarrowRight className="mt-0 mr-2 flex-shrink-0 self-start hidden md:block  lg:block  xl:block  " size={65} />
              <HiOutlineArrowNarrowRight className="mt-2 mr-2 flex-shrink-0 self-start block md:hidden  lg:hidden  xl:hidden " size={45} />              <div>
                <div className="font-black text-lg md:text-2xl lg:text-2xl xl:text-2xl text-left mt-4">ANUNCIO GANADORAS</div>
                <div className="text-lg md:text-xl lg:text-xl xl:text-xl font-normal text-left">2 DE NOVIEMBRE</div>
              </div>
            </div>
          </div>
           
        </div>
      </div>
    </section>
  );
}

export default Section;
