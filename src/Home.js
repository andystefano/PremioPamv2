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
      <main>
      {process.env.REACT_APP_RESULTADOS_ACTIVO === '1' ? (
      <SectionResultados />
      ) : (
          <Section1 />
      )}

      <Section2/>
      {process.env.REACT_APP_RESULTADOS_ACTIVO !== '1' && (<Faq/>)}

      </main>

     <Footer/>
      </div>
    </div>
  );
}

export default Home;
