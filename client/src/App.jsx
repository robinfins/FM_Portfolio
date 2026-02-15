import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
