import logo from './logo.svg';
import './App.css';
import PamHeader from './components/PamHeader.js'
import Section1 from './components/Section1.js'
import SectionResultados from './components/SectionResultados.js'
import SectionRoja from './components/SectionRoja.js'
import Faq from './components/Faq.js'
import Footer from './components/Footer.js'
import SectionFechas from './components/SectionFechas.js'




function Home() {
  return (
    <div className="App ">
      <div id='page'>
      <PamHeader/>
      {/* <SectionResultados />*/}
      <Section1 />
      <SectionRoja/>
      <SectionFechas/>
      <Faq/>
      <section id='section_destacada' className='bg-[#f0000c] text-white text-center py-2 font-regular font-inter text-2xl py-3'>
        <a href='/ganadoras'>CONOCE A LAS <span className='font-bold'>GANADORAS ANTERIORES</span></a>
      </section>
     <Footer/>
      </div>
    </div>
  );
}

export default Home;
