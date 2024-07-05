import logo from './logo.svg';
import './App.css';
import PamHeader from './components/PamHeader.js'
import Votacion from './components/Votacion.js'
import Faq from './components/Faq.js'
import Footer from './components/Footer.js'



function Votar() {
  return (
    <div className="App">
      <div id='page'>
      <PamHeader/>
      <main>
      <Votacion/>
   
      </main>

     <Footer/>
      </div>
    </div>
  );
}

export default Votar;
