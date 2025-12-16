import './Loader.css';

const Loader = ({ fullScreen = false }) => {
    return (
        <div className={`loader-container ${fullScreen ? 'loader-fullscreen' : ''}`}>
            <div className="loader-content">
                <div className="loader-circle"></div>
                <div className="loader-circle-inner"></div>
                <div className="loader-logo">MVD</div>
            </div>
            <p className="loader-text">Cargando experiencia...</p>
        </div>
    );
};

export default Loader;
