import { useState } from 'react'
import './Services.css'

// Import module icons
import icon1 from '../assets/modules/Icono con Borde (1).png'
import icon2 from '../assets/modules/Icono con Borde (2).png'
import icon3 from '../assets/modules/Icono con Borde (3).png'
import icon4 from '../assets/modules/Icono con Borde (4).png'
import icon5 from '../assets/modules/Icono con Borde (5).png'
import icon6 from '../assets/modules/Icono con Borde (6).png'
// Keep others just in case for future use
import icon7 from '../assets/modules/Icono con Borde (7).png'
import mvdQualityLogo from '../assets/mvd_quality_logo.png'

const Services = () => {
    const [activeService, setActiveService] = useState(0)
    const [carouselIndex, setCarouselIndex] = useState(0)

    const modulesData = [
        {
            icon: icon1,
            title: 'Gestión Documental',
            features: [
                '📂 Repositorio centralizado: organiza y protege toda la documentación.',
                '✅ Flujos de aprobación automáticos con trazabilidad completa.',
                '🔄 Versionado e historial de cambios.',
                '🤖 Integración con IA para consultas sobre documentos.',
                '🧾 Exportación a PDF lista para auditorías.'
            ]
        },
        {
            icon: icon2,
            title: 'Formularios y Expedientes',
            features: [
                '📝 Formularios y expedientes a medida sin limitaciones.',
                '✅ Flujos de trabajo automatizados para revisiones.',
                '🔐 Permisos avanzados por rol o confidencialidad.',
                '🔔 Alertas inteligentes de vencimientos.',
                '🤖 Asistencia con IA para estructurar contenidos.'
            ]
        },
        {
            icon: icon3,
            title: 'Auditorías Internas',
            features: [
                '📅 Planificación de objetivos y alcance.',
                '🔍 Registro de hallazgos y evidencias con fotos.',
                '✅ Checklists y guías estandarizadas.',
                '📝 Generación de informes de conclusiones.',
                '⚡ Seguimiento de acciones correctivas.'
            ]
        },
        {
            icon: icon4,
            title: 'Gestión de Clientes',
            features: [
                '👤 Ficha completa e historial de interacciones.',
                '⚠ Gestión de incidentes y solicitudes.',
                '📊 Medición de satisfacción con indicadores.',
                '📝 Encuestas de satisfacción automatizadas.',
                '💡 Identificación de oportunidades de mejora.'
            ]
        },
        {
            icon: icon5,
            title: 'Gestión de Proveedores',
            features: [
                '🏢 Ficha centralizada del proveedor.',
                '⚠ Gestión de incumplimientos e incidentes.',
                '📊 Evaluación de desempeño y calidad.',
                '💡 Fortalecimiento de la colaboración.'
            ]
        },
        {
            icon: icon6,
            title: 'Evaluación de Riesgos',
            features: [
                '⚠ Identificación de amenazas potenciales.',
                '📂 Categorización por impacto y probabilidad.',
                '🛡 Definición de planes de mitigación.',
                '🗺 Mapa de riesgos visual para análisis rápido.'
            ]
        }
    ];

    const services = [
        {
            icon: mvdQualityLogo,
            title: 'MVD Quality',
            description: 'Plataforma líder para gestión de Calidad e ISO. Simplifique auditorías, controle no conformidades y garantice la mejora continua.',
            features: ['ISO 9001, 14001, 45001', 'Gestión de Riesgos', 'Auditorías Digitales', 'Indicadores de Gestión']
        },
        {
            type: 'carousel',
            title: 'Módulos Integrados',
            description: 'Un ecosistema completo de herramientas interconectadas para potenciar cada área de su organización.',
            data: modulesData
        }
    ]

    const nextSlide = (e) => {
        e.stopPropagation();
        setCarouselIndex((prev) => (prev + 1) % modulesData.length);
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCarouselIndex((prev) => (prev - 1 + modulesData.length) % modulesData.length);
    };

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
                            className={`service-card card ${activeService === index ? 'service-card-active' : ''} ${service.type === 'carousel' ? 'service-card-carousel-mode' : ''}`}
                            onMouseEnter={() => setActiveService(index)}
                        >
                            {service.type === 'carousel' ? (
                                <div className="carousel-wrapper">
                                    <div className="carousel-slide-content">
                                        <div className="carousel-top">
                                            <div className="module-icon-large">
                                                <img src={modulesData[carouselIndex].icon} alt={modulesData[carouselIndex].title} />
                                            </div>
                                            <h3 className="service-title">{modulesData[carouselIndex].title}</h3>
                                        </div>

                                        <ul className="module-features-list">
                                            {modulesData[carouselIndex].features.map((feature, idx) => (
                                                <li key={idx} className="module-feature-item">
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="carousel-controls">
                                        <button className="carousel-btn" onClick={prevSlide}>❮</button>
                                        <div className="carousel-indicators">
                                            {modulesData.map((_, idx) => (
                                                <span key={idx} className={`indicator ${idx === carouselIndex ? 'active' : ''}`}></span>
                                            ))}
                                        </div>
                                        <button className="carousel-btn" onClick={nextSlide}>❯</button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className={`service-icon ${typeof service.icon !== 'string' ? 'is-image' : ''}`}>
                                        {typeof service.icon === 'string' ? service.icon : <img src={service.icon} alt={service.title} />}
                                    </div>
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
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
