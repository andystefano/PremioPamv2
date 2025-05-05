import logo from './logo.svg';
import './App.css';
import PamHeader from './components/PamHeader.js'
import Section1 from './components/Section1.js'
import SectionResultados from './components/SectionResultados.js'
import Section2 from './components/Section2.js'
import Faq from './components/Faq.js'
import Footer from './components/Footer.js'



function Home() {
  return (
    <div className="App">
      <div id='page'>
      <PamHeader/>
      {/* <SectionResultados />*/}
      <Section1 />

      {/* <Section2 />*/}
      Franja fechas Importantes Roja
      ___<br/>
      Section Amarilla Fechas
      Fechas  Fechas  Fechas  Fechas
      Fechas  Fechas  Fechas  Fechas
      <Faq/>
     <Footer/>
      </div>
    </div>
  );
}

export default Home;
