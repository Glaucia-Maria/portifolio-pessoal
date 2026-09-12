import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header.jsx'
import Formacao from './components/Formacao.jsx'
import HeroSection from "./components/HeroSection.jsx"
import Skills from './components/Skills.jsx'
import Experiencias from './components/Experiencias.jsx'
import Projetos from './components/Projetos.jsx'
import Contato from './components/Contato.jsx'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <Header />
      <HeroSection />
      <Formacao />
      <Skills />
      <Experiencias />
      <Projetos />
      <Contato />
    </div>
  )
}

export default App