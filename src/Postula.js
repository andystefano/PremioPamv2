import './App.css';
import PamHeader from './components/PamHeader.js'
import SectionFormPostula from './components/SectionFormPostula.js'
import Footer from './components/Footer.js'



function Postula() {
  return (

    <div className="App">
    <div id='page'>
    <PamHeader/>
    {/* <SectionResultados />*/}
    <SectionFormPostula/>
   <Footer/>
    </div>
  </div>
  );
}

export default Postula;
