import { useState, useEffect } from 'react';
import './Admin.css';

const Admin = () => {
    const [auth, setAuth] = useState(false);
    const [password, setPassword] = useState('');
    const [posts, setPosts] = useState([]);

    // Form States
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const SECRET_KEY = 'mvd-secret-admin';

    const checkAuth = () => {
        if (password === SECRET_KEY) {
            setAuth(true);
            fetchPosts();
        } else {
            alert('Contraseña incorrecta');
        }
    };

    const fetchPosts = () => {
        fetch('http://localhost:3001/api/posts')
            .then(res => res.json())
            .then(setPosts);
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3001/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content, image, secret: SECRET_KEY })
        });

        if (res.ok) {
            alert('Post creado!');
            setTitle('');
            setContent('');
            setImage('');
            fetchPosts();
        } else {
            alert('Error al crear post');
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('¿Seguro que quieres borrar este post?')) return;

        await fetch(`http://localhost:3001/api/posts/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ secret: SECRET_KEY })
        });
        fetchPosts();
    };

    if (!auth) {
        return (
            <div className="admin-login-container">
                <div className="card card-glass text-center p-5">
                    <h2 className="mb-4">Panel Secreto</h2>
                    <input
                        type="password"
                        placeholder="Contraseña Maestra"
                        className="admin-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={checkAuth} className="btn btn-primary mt-3">Entrar</button>
                </div>
            </div>
        );
    }

    return (
        <div className="section container">
            <div className="d-flex justify-between mb-5">
                <h2 className="text-gradient">Admin Panel</h2>
                <button onClick={() => setAuth(false)} className="btn btn-outline">Salir</button>
            </div>

            <div className="admin-grid">
                {/* Create Form */}
                <div className="card card-glass">
                    <h3 className="mb-3">Crear Nuevo Post</h3>
                    <form onSubmit={handleCreate}>
                        <div className="form-group">
                            <label>Título</label>
                            <input
                                className="admin-input"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Imagen URL (Opcional)</label>
                            <input
                                className="admin-input"
                                value={image}
                                onChange={e => setImage(e.target.value)}
                                placeholder="httos://..."
                            />
                        </div>
                        <div className="form-group">
                            <label>Contenido</label>
                            <textarea
                                className="admin-input admin-textarea"
                                value={content}
                                onChange={e => setContent(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary full-width">Publicar</button>
                    </form>
                </div>

                {/* List */}
                <div className="card card-glass">
                    <h3 className="mb-3">Posts Activos</h3>
                    <div className="admin-post-list">
                        {posts.map(post => (
                            <div key={post.id} className="admin-post-item">
                                <div>
                                    <strong>{post.title}</strong>
                                    <br />
                                    <small>{new Date(post.date).toLocaleDateString()}</small>
                                </div>
                                <button onClick={() => handleDelete(post.id)} className="btn-delete">Eliminar</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
