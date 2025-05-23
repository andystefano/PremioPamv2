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
    <div className="App">
      <div id='page'>
      <PamHeader/>
      {/* <SectionResultados />*/}
      <Section1 />
      <SectionRoja/>
      <SectionFechas/>
      <Faq/>
     <Footer/>
      </div>
    </div>
  );
}

export default Home;
