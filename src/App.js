
import './App.css';
import { Routes,Route } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Skills from './routes/Skills'
import Projects from './routes/Projects'
import Contact from './routes/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
