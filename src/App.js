
import './App.css';
import Navbar from './components/section/Navbar';
import Presentation from './components/section/Presentation';
import Skills from './components/section/Skills';
import Projects from './components/section/Projects';
import Footer from './components/section/Footer';
import Formations from './components/section/Formations';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation/>
      <Skills/>
      <Formations/>
      <Projects/>
      <Footer/>

    </div>
  );
}

export default App;
