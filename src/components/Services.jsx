import { useState } from 'react'
import './Services.css'

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
            icon: '🚀',
            title: 'Transformación Digital',
            description: 'Servicios profesionales para digitalizar sus procesos de calidad y cumplimiento. Acompañamos el cambio en su organización.',
            features: ['Implementación Ágil', 'Consultoría Experta', 'Soporte Local', 'Integraciones a Medida']
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
                            className={`service-card card ${activeService === index ? 'service-card-active' : ''}`}
                            onMouseEnter={() => setActiveService(index)}
                        >
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
                            <div className="service-overlay"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
