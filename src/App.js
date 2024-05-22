import logo from './logo.svg';
import './App.css';
import PamHeader from './components/PamHeader.js'
import Section1 from './components/Section1.js'
import Section2 from './components/Section2.js'
import Faq from './components/Faq.js'
import Footer from './components/Footer.js'



function App() {
  return (
    <div className="App">
      <div id='page'>
      <PamHeader/>
      <main>
      <Section1/>
      <Section2/>
      <Faq/>
      </main>

     <Footer/>
      </div>
    </div>
  );
}

export default App;
