import { useEffect, useState } from 'react'
import './Clients.css'

const Clients = () => {
    const [logos, setLogos] = useState([])

    useEffect(() => {
        const loadLogos = async () => {
            // Importación dinámica de imágenes con Vite
            const modules = import.meta.glob('../assets/clients/*.{png,jpg,jpeg,svg}', { eager: true })
            const loadedLogos = Object.values(modules).map(module => module.default)
            setLogos(loadedLogos)
        }

        loadLogos()
    }, [])

    // Lógica para el carrusel infinito
    const hasLogos = logos.length > 0

    // Si tenemos logos, los duplicamos x4 para asegurar scroll fluido en monitores anchos
    // Si no, mostramos 12 placeholders
    const carouselContent = hasLogos
        ? [...logos, ...logos, ...logos, ...logos]
        : Array(12).fill(null)

    return (
        <section id="clients" className="clients section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Confían en <span className="text-gradient">Nosotros</span>
                    </h2>
                    <p className="section-description">
                        Empresas líderes que han transformado su gestión con nuestras soluciones
                    </p>
                </div>

                <div className="logos-slider">
                    <div className="logos-slide-track">
                        {carouselContent.map((logo, index) => (
                            <div key={index} className="logo-slide">
                                {logo ? (
                                    <img src={logo} alt={`Cliente ${index}`} loading="lazy" />
                                ) : (
                                    <div className="placeholder-logo">
                                        <span className="placeholder-icon">🏢</span>
                                        <span className="placeholder-text">CLIENTE</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients
