import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configuración del transporte de correo (SMTP)
// Esto leerá las credenciales del archivo .env
const transporter = nodemailer.createTransport({
    service: 'gmail', // O 'outlook', o configura host/port para correo corporativo
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'posts.json');

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// Ruta para recibir el contacto
app.post('/api/contact', async (req, res) => {
    const { name, email, company, message } = req.body;

    try {
        // Configurar el email que se enviará
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@mvdtech.com', // A quién le llega el correo
            subject: `Nuevo contacto web: ${name}`,
            text: `
        Nombre: ${name}
        Email: ${email}
        Empresa: ${company || 'No especificada'}
        
        Mensaje:
        ${message}
      `,
            html: `
        <h3>Nuevo mensaje de contacto desde la web</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        console.log('Correo enviado correctamente');
        res.status(200).json({ success: true, message: 'Correo enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar correo:', error);
        res.status(500).json({ success: false, message: 'Error al enviar el correo' });
    }
});

// BLOG API
app.get('/api/posts', (req, res) => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: 'Error reading posts' });
    }
});

app.post('/api/posts', (req, res) => {
    const { title, content, image, secret } = req.body;

    // Simple "Secret" protection
    if (secret !== 'mvd-secret-admin') {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        const newPost = {
            id: Date.now(),
            title,
            content,
            image: image || 'https://via.placeholder.com/400x200',
            date: new Date().toISOString()
        };
        data.unshift(newPost); // Add to top
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        res.json({ success: true, post: newPost });
    } catch (error) {
        res.status(500).json({ error: 'Error saving post' });
    }
});

app.delete('/api/posts/:id', (req, res) => {
    const { secret } = req.body;
    if (secret !== 'mvd-secret-admin') {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        const filtered = data.filter(p => p.id != req.params.id);
        fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2));
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting post' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor Backend corriendo en http://localhost:${PORT}`);
});
