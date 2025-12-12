import { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the data to a backend
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', company: '', message: '' })
        }, 3000)
    }

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'info@mvdtech.com',
            link: 'mailto:info@mvdtech.com'
        },
        {
            icon: '📱',
            title: 'Teléfono Uruguay',
            value: '(+598) 2601 7585',
            link: 'tel:+59826017585'
        },
        {
            icon: '📍',
            title: 'Uruguay',
            value: 'Av. Italia 6201, LATU - Edificio Los Sauces of. 13, Montevideo',
            link: 'https://maps.google.com/?q=LATU+Montevideo'
        }
    ]

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Hablemos de tu <span className="text-gradient">Proyecto</span>
                    </h2>
                    <p className="section-description">
                        ¿Tienes una idea? Estamos listos para convertirla en realidad
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3 className="contact-info-title">Información de Contacto</h3>
                        <p className="contact-info-description">
                            Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios.
                        </p>

                        <div className="contact-methods">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="contact-method card-glass"
                                >
                                    <div className="contact-method-icon">{info.icon}</div>
                                    <div className="contact-method-content">
                                        <div className="contact-method-title">{info.title}</div>
                                        <div className="contact-method-value">{info.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="GitHub">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form card" onSubmit={handleSubmit}>
                        {submitted ? (
                            <div className="form-success">
                                <div className="success-icon">✓</div>
                                <h3>¡Mensaje Enviado!</h3>
                                <p>Nos pondremos en contacto contigo pronto.</p>
                            </div>
                        ) : (
                            <>
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company" className="form-label">Empresa (Opcional)</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="form-input"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Mensaje</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-input form-textarea"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg btn-block">
                                    Enviar Mensaje
                                </button>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
