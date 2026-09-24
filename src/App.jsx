import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <hr className="rule" />
        <About />
        <hr className="rule" />
        <Skills />
        <hr className="rule" />
        <Experience />
        <hr className="rule" />
        <Projects />
        <hr className="rule" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
