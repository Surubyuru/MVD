import { useState } from 'react'
import './Header.css'

const Header = ({ scrolled }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { label: 'Inicio', href: '#hero' },
        { label: 'Servicios', href: '#services' },
        { label: 'Nosotros', href: '#about' },
        { label: 'Contacto', href: '#contact' }
    ]

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, '#hero')}>
                        <span className="logo-text">MVD</span>
                        <span className="logo-subtext">Technologies</span>
                    </a>

                    <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="nav-link"
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a href="#contact" className="btn btn-primary btn-nav" onClick={(e) => handleNavClick(e, '#contact')}>
                            Comenzar
                        </a>
                    </nav>

                    <button
                        className={`menu-toggle ${menuOpen ? 'menu-toggle-open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
