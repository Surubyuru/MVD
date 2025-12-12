# Guía Rápida de Inicio - MVD Technologies

## ⚠️ Problema de PowerShell

Si ves un error sobre "ejecución de scripts deshabilitada", sigue estos pasos:

### Solución 1: Habilitar Scripts en PowerShell (Recomendado)

1. Abre PowerShell como **Administrador** (clic derecho → "Ejecutar como administrador")
2. Ejecuta este comando:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Confirma con "S" (Sí)

### Solución 2: Usar CMD

1. Abre el **Símbolo del sistema** (CMD) en lugar de PowerShell
2. Navega a la carpeta del proyecto:
   ```cmd
   cd C:\Users\damis\OneDrive\Desktop\MVD
   ```

## 🚀 Pasos para Ejecutar el Proyecto

Una vez resuelto el problema de PowerShell:

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   - El servidor se abrirá automáticamente en `http://localhost:3000`
   - Si no se abre, copia y pega esa URL en tu navegador

## 📋 Características del Sitio

✅ **Single Page Application** - Todo en una sola página con scroll suave
✅ **Secciones:**
   - Hero (Inicio con animación de partículas)
   - Servicios (6 servicios interactivos)
   - Nosotros (Información de la empresa)
   - Contacto (Formulario funcional)

✅ **Navegación suave** - Los links del menú hacen scroll automático
✅ **Responsive** - Se adapta a móviles, tablets y desktop
✅ **Animaciones modernas** - Efectos visuales premium

## 🎨 Personalización

Para cambiar contenido, edita estos archivos:
- `src/components/Hero.jsx` - Texto principal y estadísticas
- `src/components/Services.jsx` - Lista de servicios
- `src/components/About.jsx` - Información de la empresa
- `src/components/Contact.jsx` - Información de contacto

## 📦 Para GitHub

El proyecto ya está listo para subir a GitHub:

```bash
git init
git add .
git commit -m "Initial commit: MVD Technologies website"
git branch -M main
git remote add origin https://github.com/tu-usuario/mvd-technologies.git
git push -u origin main
```

Todas las imágenes y recursos están incluidos en el código (SVG, emojis, canvas animations).
No necesitas subir carpetas adicionales - el `.gitignore` ya está configurado.

## ❓ ¿Necesitas Ayuda?

Si tienes problemas, verifica:
1. ✅ Node.js está instalado: `node --version`
2. ✅ npm está instalado: `npm --version`
3. ✅ Estás en la carpeta correcta del proyecto
4. ✅ PowerShell permite ejecutar scripts

---

¡Listo para desarrollar! 🚀
