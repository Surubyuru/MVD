# MVD Technologies - Sitio Web Corporativo

Sitio web moderno y profesional para MVD Technologies Uruguay, desarrollado con React y Vite.

## 🚀 Características

- ✨ Diseño moderno con animaciones suaves
- 🎨 Tema oscuro premium con gradientes
- 📱 Totalmente responsive
- ⚡ Optimizado con Vite para desarrollo rápido
- 🎯 SEO optimizado
- 💫 Efectos visuales interactivos

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **CSS3** - Estilos con variables CSS y animaciones
- **Google Fonts** - Tipografía (Inter & Outfit)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/mvd-technologies.git
cd mvd-technologies
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea el build de producción
- `npm run preview` - Previsualiza el build de producción

## 📁 Estructura del Proyecto

```
mvd-technologies/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes de React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales y sistema de diseño
├── index.html          # HTML principal
├── vite.config.js      # Configuración de Vite
└── package.json        # Dependencias del proyecto
```

## 🎨 Sistema de Diseño

El proyecto utiliza un sistema de diseño completo con:
- Variables CSS para colores, tipografía y espaciado
- Componentes reutilizables (botones, cards, etc.)
- Animaciones y transiciones suaves
- Tema oscuro premium

## 📝 Personalización

### Colores
Los colores se pueden modificar en `src/index.css` en la sección `:root`:
```css
:root {
  --color-primary: hsl(220, 90%, 56%);
  --color-secondary: hsl(280, 85%, 60%);
  --color-accent: hsl(170, 75%, 50%);
  /* ... más colores */
}
```

### Contenido
- **Hero**: Edita `src/components/Hero.jsx`
- **Servicios**: Modifica el array `services` en `src/components/Services.jsx`
- **Contacto**: Actualiza `contactInfo` en `src/components/Contact.jsx`

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### GitHub Pages
1. Actualiza `vite.config.js` con tu base URL
2. Ejecuta `npm run build`
3. Sube la carpeta `dist` a la rama `gh-pages`

## 📄 Licencia

© 2025 MVD Technologies. Todos los derechos reservados.

## 👥 Contacto

- **Email**: info@mvdtech.uy
- **Ubicación**: Montevideo, Uruguay

---

Desarrollado con ❤️ por MVD Technologies
