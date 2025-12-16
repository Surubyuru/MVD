import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="error-code text-gradient">404</h1>
                <h2 className="mb-4">Página no encontrada</h2>
                <p className="text-secondary mb-5">
                    Parece que te has perdido en el ciberespacio.
                    La página que buscas no existe o ha sido movida.
                </p>
                <a href="#hero" className="btn btn-primary" onClick={() => window.location.hash = ''}>
                    Volver al Inicio
                </a>
            </div>
            <div className="bg-glow"></div>
        </div>
    );
};

export default NotFound;
