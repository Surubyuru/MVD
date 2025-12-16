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
import NotFound from './components/NotFound'
import Loader from './components/Loader'

function App() {
    const [scrolled, setScrolled] = useState(false)
    const [currentView, setCurrentView] = useState('home') // home, blog, admin, 404
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Initial fake loader for premium feel
        setTimeout(() => setLoading(false), 2000);

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
                if (hash === '' || hash === '#hero' || hash === '#services' || hash === '#about' || hash === '#contact') {
                    setCurrentView('home');
                } else {
                    setCurrentView('404');
                }
            }
        };

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('hashchange', handleHashChange)

        handleHashChange();

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [])

    if (loading) {
        return <Loader fullScreen={true} />
    }

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
                {currentView === '404' && <NotFound />}
            </main>
            <Footer />
        </div>
    )
}

export default App
