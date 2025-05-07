import { HiOutlineArrowNarrowRight } from "react-icons/hi";
 
import React  from 'react';

function Section() {

  return (
    <section id='section_fecha' className="flex justify-center bg-[#fff6e6] py-10">
      <div className="w-full mx-auto container bg-[#fff6e6] text-[#f0000c] px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Item 1 */}
          <div className=" p-5  relative">
            <div className="flex  items-start">
              <HiOutlineArrowNarrowRight className="mt-0 mr-2 flex-shrink-0 self-start" size={65} />
              <div>
                <div className="font-bold text-2xl text-left mt-4">APERTURA CONVOCATORIA</div>
                <div className="text-2xl font-extralight text-left">26 DE JULIO</div>
              </div>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className=" p-5  relative">
            <div className="flex  items-start">
              <HiOutlineArrowNarrowRight className="mt-0 mr-2 flex-shrink-0 self-start" size={65} />
              <div>
                <div className="font-bold text-2xl text-left mt-4">APERTURA CONVOCATORIA</div>
                <div className="text-2xl font-extralight text-left">26 DE JULIO</div>
              </div>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className=" p-5  relative">
            <div className="flex  items-start">
              <HiOutlineArrowNarrowRight className="mt-0 mr-2 flex-shrink-0 self-start" size={65} />
              <div>
                <div className="font-bold text-2xl text-left mt-4">APERTURA CONVOCATORIA</div>
                <div className="text-2xl font-extralight text-left">26 DE JULIO</div>
              </div>
            </div>
          </div>
          
          {/* Item 4 */}
          <div className=" p-5  relative">
            <div className="flex  items-start">
              <HiOutlineArrowNarrowRight className="mt-0 mr-2 flex-shrink-0 self-start" size={65} />
              <div>
                <div className="font-bold text-2xl text-left mt-4">APERTURA CONVOCATORIA</div>
                <div className="text-2xl font-extralight text-left">26 DE JULIO</div>
              </div>
            </div>
          </div>
          
          {/* Item 5 */}
          <div className=" p-5  relative">
            <div className="flex  items-start">
              <HiOutlineArrowNarrowRight className="mt-0 mr-2 flex-shrink-0 self-start" size={65} />
              <div>
                <div className="font-bold text-2xl text-left mt-4">APERTURA CONVOCATORIA</div>
                <div className="text-2xl font-extralight text-left">26 DE JULIO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
