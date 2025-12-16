import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Clients from './components/Clients'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/Blog'
import Admin from './components/Admin'

function App() {
    const [scrolled, setScrolled] = useState(false)
    const [currentView, setCurrentView] = useState('home') // home, blog, admin

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#blog') {
                setCurrentView('blog');
                window.scrollTo(0, 0);
            } else if (hash === '#admin') {
                setCurrentView('admin');
                window.scrollTo(0, 0);
            } else {
                // If hash is empty or one of the section hashes (#contact, #hero), stay on home
                // We assume section hashes are for scrolling within home
                if (hash === '' || hash === '#hero' || hash === '#services' || hash === '#about' || hash === '#contact') {
                    setCurrentView('home');
                }
            }
        };

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('hashchange', handleHashChange)

        // Check initial hash
        handleHashChange();

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [])

    return (
        <div className="app">
            <Header scrolled={scrolled} />
            <main>
                {currentView === 'home' && (
                    <>
                        <Hero />
                        <Services />
                        <Clients />
                        <About />
                        <Contact />
                    </>
                )}
                {currentView === 'blog' && <Blog />}
                {currentView === 'admin' && <Admin />}
            </main>
            <Footer />
        </div>
    )
}

export default App
