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

    const handleSubmit = async (e) => {
        e.preventDefault()


        try {
            // Enviamos los datos a nuestro propio servidor Backend
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitted(true)
                setFormData({ name: '', email: '', company: '', message: '' })
                setTimeout(() => setSubmitted(false), 5000)
            } else {
                alert("Hubo un problema al enviar el mensaje. Asegúrate de que el servidor backend esté corriendo.")
            }
        } catch (error) {
            console.error(error);
            alert("Error de conexión. ¿Está corriendo el servidor backend? (node server.js)")
        }
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
                            <a href="https://www.linkedin.com/company/mvd-technologies/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
