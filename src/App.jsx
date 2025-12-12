import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Clients from './components/Clients'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="app">
            <Header scrolled={scrolled} />
            <main>
                <Hero />
                <Services />
                <Clients />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
