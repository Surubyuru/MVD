import { useState } from 'react'
import './Header.css'

const Header = ({ scrolled }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { label: 'Inicio', href: '#hero' },
        { label: 'Servicios', href: '#services' },
        { label: 'Nosotros', href: '#about' },
        { label: 'Blog', href: '#blog' },
        { label: 'Contacto', href: '#contact' }
    ]

    const handleNavClick = (e, href) => {
        setMenuOpen(false)

        // Check if we are navigating to a different view (Blog/Admin)
        // or if the element doesn't exist on current page (switching back to Home)
        const element = document.querySelector(href)

        if (element) {
            // Anchor exists on current page, smooth scroll
            e.preventDefault()
            element.scrollIntoView({ behavior: 'smooth' })
        }
        // Else: let default behavior happen (hash change) so App.jsx can switch views
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
