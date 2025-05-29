import './App.css';
import PamHeader from './components/PamHeader.js'
import SectionFormPostula from './components/SectionFormPostula.js'
import Footer from './components/Footer.js'



function Postula() {
  return (

    <div className="App max-w-screen-2xl mx-auto bg-[#e9d9fc]">
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
