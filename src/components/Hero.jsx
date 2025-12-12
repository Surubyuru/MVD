import { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const particles = []
        const particleCount = 50

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 2 + 1
                this.speedX = Math.random() * 0.5 - 0.25
                this.speedY = Math.random() * 0.5 - 0.25
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                if (this.x > canvas.width) this.x = 0
                if (this.x < 0) this.x = canvas.width
                if (this.y > canvas.height) this.y = 0
                if (this.y < 0) this.y = canvas.height
            }

            draw() {
                ctx.fillStyle = 'rgba(100, 200, 255, 0.5)'
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach(particle => {
                particle.update()
                particle.draw()
            })

            // Draw connections
            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach(b => {
                    const dx = a.x - b.x
                    const dy = a.y - b.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(100, 200, 255, ${0.2 * (1 - distance / 100)})`
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(a.x, a.y)
                        ctx.lineTo(b.x, b.y)
                        ctx.stroke()
                    }
                })
            })

            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section id="hero" className="hero">
            <canvas ref={canvasRef} className="hero-canvas"></canvas>

            <div className="hero-content container">
                <div className="hero-text animate-fade-in-up">
                    <h1 className="hero-title">
                        Simplifique y Potencie su <br />
                        <span className="text-gradient">Gestión Empresarial</span>
                    </h1>
                    <p className="hero-description">
                        Software especializado para Sistemas Integrados de Gestión y Control de Cumplimiento.
                        Adecuado a normas ISO, OHSAS y leyes de responsabilidad empresarial.
                        Potencie su estrategia con MVD Quality.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary btn-lg">
                            Solicitar Demo
                        </a>
                        <a href="#services" className="btn btn-outline btn-lg">
                            Conocer Productos
                        </a>
                    </div>
                </div>

                <div className="hero-stats">
                    <div className="stat-card card-glass">
                        <div className="stat-number text-accent-gradient">ISO</div>
                        <div className="stat-label">9001, 14001...</div>
                    </div>
                    <div className="stat-card card-glass">
                        <div className="stat-number text-accent-gradient">100%</div>
                        <div className="stat-label">Cumplimiento Legal</div>
                    </div>
                    <div className="stat-card card-glass">
                        <div className="stat-number text-accent-gradient">LATU</div>
                        <div className="stat-label">Edificio Los Sauces</div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
