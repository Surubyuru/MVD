import './About.css'

const About = () => {
    const values = [
        {
            icon: '🎯',
            title: 'Innovación',
            description: 'Siempre a la vanguardia de las últimas tecnologías'
        },
        {
            icon: '⚡',
            title: 'Agilidad',
            description: 'Entregas rápidas sin comprometer la calidad'
        },
        {
            icon: '🤝',
            title: 'Compromiso',
            description: 'Tu éxito es nuestro éxito'
        },
        {
            icon: '🏆',
            title: 'Excelencia',
            description: 'Superamos expectativas en cada proyecto'
        }
    ]

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">
                            Sobre <span className="text-gradient">Nosotros</span>
                        </h2>
                        <p className="about-description">
                            MVD Technologies es una empresa uruguaya líder en desarrollo de software y soluciones tecnológicas.
                            Con más de una década de experiencia, hemos ayudado a cientos de empresas a transformar sus
                            operaciones mediante la tecnología.
                        </p>
                        <p className="about-description">
                            Nuestro equipo está conformado por profesionales altamente capacitados y apasionados por la
                            innovación. Trabajamos con las tecnologías más modernas para crear soluciones que no solo
                            resuelven problemas, sino que impulsan el crecimiento de tu negocio.
                        </p>
                        <div className="about-highlights">
                            <div className="highlight">
                                <div className="highlight-number text-gradient">12000+</div>
                                <div className="highlight-text">Usuarios</div>
                            </div>
                            <div className="highlight">
                                <div className="highlight-number text-gradient">90+</div>
                                <div className="highlight-text">Clientes</div>
                            </div>
                        </div>
                    </div>

                    <div className="about-values">
                        <h3 className="values-title">Nuestros Valores</h3>
                        <div className="values-grid">
                            {values.map((value, index) => (
                                <div key={index} className="value-card card-glass">
                                    <div className="value-icon">{value.icon}</div>
                                    <h4 className="value-title">{value.title}</h4>
                                    <p className="value-description">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
