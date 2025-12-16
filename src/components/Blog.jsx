import { useState, useEffect } from 'react';
import './Blog.css';

// Simple Blog Component
const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null);


    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    // Filter to remove duplicates if any (data safety)
    const uniquePosts = posts;

    if (loading) return <div className="section container text-center"><h2 className="text-gradient">Cargando Tutoriales...</h2></div>;

    if (selectedPost) {
        return (
            <div className="section container blog-view">
                <button onClick={() => setSelectedPost(null)} className="btn btn-outline mb-4">← Volver</button>
                <article className="card card-glass animate-fade-in">
                    {selectedPost.image && <img src={selectedPost.image} alt={selectedPost.title} className="blog-detail-image" />}
                    <div className="blog-content-detail">
                        <span className="blog-date">{new Date(selectedPost.date).toLocaleDateString()}</span>
                        <h1 className="text-gradient mb-4">{selectedPost.title}</h1>
                        <div className="blog-body" dangerouslySetInnerHTML={{ __html: selectedPost.content.replace(/\n/g, '<br />') }}></div>
                    </div>
                </article>
            </div>
        );
    }

    return (
        <section className="section container" id="blog">
            <div className="text-center mb-5">
                <h2 className="text-gradient">Nuestros Tutoriales</h2>
                <p className="text-secondary">Aprende con nuestras guías exclusivas</p>
            </div>

            {uniquePosts.length === 0 ? (
                <div className="text-center bg-glass p-5 rounded">
                    <p>No hay tutoriales publicados aún.</p>
                </div>
            ) : (
                <div className="blog-grid">
                    {uniquePosts.map(post => (
                        <div key={post.id} className="card card-glass blog-card" onClick={() => setSelectedPost(post)}>
                            {post.image && (
                                <div className="blog-image-wrapper">
                                    <img src={post.image} alt={post.title} />
                                </div>
                            )}
                            <div className="blog-card-content">
                                <span className="blog-date-sm">{new Date(post.date).toLocaleDateString()}</span>
                                <h3>{post.title}</h3>
                                <p className="limit-text">{post.content.substring(0, 100)}...</p>
                                <span className="read-more">Leer más →</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Blog;
