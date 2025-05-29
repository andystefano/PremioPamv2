import './App.css';
import PamHeader from './components/PamHeader.js'
import Section1 from './components/Section1.js'
import GanadorasSection from './components/GanadorasSection.js'
import Faq from './components/Faq.js'
import Footer from './components/Footer.js'



function Ganadoras() {
  return (
    <div className="App max-w-screen-2xl mx-auto bg-[#e9d9fc]">
      <div id='page'>
      <PamHeader/>
      <main>
      <GanadorasSection/>
      </main>

     <Footer/>
      </div>
    </div>
  );
}

export default Ganadoras;
