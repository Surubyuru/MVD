import { useState } from 'react'
import './Services.css'

// Import module icons
import icon1 from '../assets/modules/Icono con Borde (1).png'
import icon2 from '../assets/modules/Icono con Borde (2).png'
import icon3 from '../assets/modules/Icono con Borde (3).png'
import icon4 from '../assets/modules/Icono con Borde (4).png'
import icon5 from '../assets/modules/Icono con Borde (5).png'
import icon6 from '../assets/modules/Icono con Borde (6).png'
import icon7 from '../assets/modules/Icono con Borde (7).png'
import icon8 from '../assets/modules/Icono con Borde (8).png'
import icon9 from '../assets/modules/Icono con Borde (9).png'
import icon10 from '../assets/modules/Icono con Borde (10).png'
import icon11 from '../assets/modules/Icono con Borde (11).png'
import icon12 from '../assets/modules/Icono con Borde (12).png'
import icon13 from '../assets/modules/Icono con Borde (13).png'
import icon14 from '../assets/modules/Icono con Borde (14).png'
import icon15 from '../assets/modules/Icono con Borde (15).png'
import icon16 from '../assets/modules/Icono con Borde (16).png'
import icon17 from '../assets/modules/Icono con Borde (17).png'

const Services = () => {
    const [activeService, setActiveService] = useState(0)

    const services = [
        {
            icon: '💎',
            title: 'MVD Quality',
            description: 'Plataforma líder para gestión de Calidad e ISO. Simplifique auditorías, controle no conformidades y garantice la mejora continua.',
            features: ['ISO 9001, 14001, 45001', 'Gestión de Riesgos', 'Auditorías Digitales', 'Indicadores de Gestión']
        },
        {
            type: 'carousel',
            title: 'Módulos Integrados',
            description: 'Un ecosistema completo de herramientas interconectadas para potenciar cada área de su organización.',
            modules: [
                icon1, icon2, icon3, icon4, icon5, icon6,
                icon7, icon8, icon9, icon10, icon11, icon12,
                icon13, icon14, icon15, icon16, icon17
            ]
        }
    ]

    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Nuestras <span className="text-gradient">Soluciones</span>
                    </h2>
                    <p className="section-description">
                        Software especializado y consultoría para optimizar la gestión de su empresa
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card card ${activeService === index ? 'service-card-active' : ''} ${service.type === 'carousel' ? 'service-card-carousel' : ''}`}
                            onMouseEnter={() => setActiveService(index)}
                        >
                            {service.type === 'carousel' ? (
                                <>
                                    <div className="carousel-header">
                                        <h3 className="service-title">{service.title}</h3>
                                        <p className="service-description">{service.description}</p>
                                    </div>
                                    <div className="modules-carousel-container">
                                        <div className="modules-track">
                                            {/* Duplicate for infinite scroll effect */}
                                            {[...service.modules, ...service.modules].map((img, idx) => (
                                                <div key={idx} className="module-item">
                                                    <img src={img} alt="Module Icon" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="service-icon">{service.icon}</div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <ul className="service-features">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="service-feature">
                                                <span className="feature-check">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            <div className="service-overlay"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
