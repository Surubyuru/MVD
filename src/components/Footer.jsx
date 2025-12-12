import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        company: [
            { label: 'Sobre Nosotros', href: '#about' },
            { label: 'Servicios', href: '#services' },
            { label: 'Contacto', href: '#contact' }
        ],
        legal: [
            { label: 'Privacidad', href: '#' },
            { label: 'Términos', href: '#' },
            { label: 'Cookies', href: '#' }
        ]
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-text">MVD</span>
                            <span className="logo-subtext">Technologies</span>
                        </div>
                        <p className="footer-description">
                            Transformando ideas en soluciones digitales innovadoras desde Montevideo, Uruguay.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-column">
                            <h4 className="footer-column-title">Empresa</h4>
                            <ul className="footer-links">
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="footer-link">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-column-title">Legal</h4>
                            <ul className="footer-links">
                                {footerLinks.legal.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="footer-link">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} MVD Technologies. Todos los derechos reservados.
                    </p>
                    <p className="footer-made-with">
                        Hecho con <span className="heart">❤️</span> en Uruguay
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
