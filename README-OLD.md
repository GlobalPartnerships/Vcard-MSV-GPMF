# GPMF Consulting - Sitio Web Profesional Multi-Página

Sitio web corporativo completo con arquitectura multi-página, diseño UX excepcional y soporte multiidioma (ES, EN, DE, FR).

## 🌟 Características Principales

### 🌍 Sistema Multiidioma (i18n)
- **4 idiomas soportados**: Español (ES), Inglés (EN), Alemán (DE), Francés (FR)
- Cambio dinámico sin recargar página
- Detección automática del idioma del navegador
- Persistencia de preferencia en localStorage
- Archivos JSON separados para cada idioma

### 🎨 Identidad de Marca GPMF
**Colores Oficiales:**
- GPMF Burgundy: `#7A0F32` (principal)
- GPMF Black: `#000000` (tipografía)
- Warm Gray: `#F5F5F5` (fondos neutros)
- Deep Charcoal: `#2E2E2E` (contrastes)

### 📐 Arquitectura Multi-Página

```
/
├── index.html              # HOME
├── about.html              # Nosotros
├── services.html           # Servicios (resumen)
├── services/
│   ├── strategic-consulting.html
│   ├── data-governance.html
│   ├── business-development.html
│   ├── training.html
│   ├── internationalization.html
│   └── custom-solutions.html
├── how-we-work.html        # Metodología
├── pricing.html            # Planes y Precios
├── partners.html           # Partners
├── blog.html               # Recursos/Blog
├── contact.html            # Contacto
├── css/
│   ├── main.css           # Estilos principales
│   └── animations.css     # Animaciones AOS
├── js/
│   ├── i18n.js           # Sistema de internacionalización
│   ├── components.js     # Componentes interactivos
│   └── main.js           # Funcionalidades adicionales
├── lang/
│   ├── es.json           # Traducciones español
│   ├── en.json           # Traducciones inglés
│   ├── de.json           # Traducciones alemán
│   └── fr.json           # Traducciones francés
└── assets/
    ├── images/
    ├── icons/
    └── logo/
```

## 🚀 Cómo Usar

### Instalación
1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador
3. O usa un servidor local:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js (http-server)
   npx http-server
   
   # VS Code Live Server
   # Click derecho > Open with Live Server
   ```

### Cambiar Idioma
El sistema detecta automáticamente el idioma del navegador. Para cambiar manualmente:
- Usa los botones ES/EN/DE/FR en la navegación
- La preferencia se guarda automáticamente

### Personalizar Contenido
1. **Textos**: Edita los archivos en `/lang/`
2. **Estilos**: Modifica `/css/main.css`
3. **Colores**: Cambia las variables CSS en `:root`
4. **Imágenes**: Reemplaza en `/assets/images/`

## 🎯 Componentes Implementados

### Navegación
- ✅ Header sticky con transparencia adaptativa
- ✅ Mega menú para servicios
- ✅ Menú hamburguesa móvil
- ✅ Selector de idioma visible
- ✅ Smooth scroll

### Animaciones
- ✅ Scroll reveal (AOS)
- ✅ Hover effects
- ✅ Transiciones suaves
- ✅ Loading states
- ✅ Micro-interactions

### Formularios
- ✅ Validación avanzada
- ✅ Mensajes de error/éxito
- ✅ Validación en tiempo real
- ✅ Campos requeridos

### Funcionalidades
- ✅ WhatsApp flotante
- ✅ Botón volver arriba
- ✅ Cookie consent banner
- ✅ Scroll progress indicator
- ✅ Lazy loading de imágenes

## 📱 Responsive Design

Breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large: 1440px+

## ⚡ Performance

- CSS modular y optimizado
- JavaScript vanilla (sin dependencias pesadas)
- Lazy loading de imágenes
- Animaciones con `will-change`
- Transiciones CSS en lugar de JS

## 🔧 Tecnologías

- **HTML5** semántico
- **CSS3** con variables personalizadas
- **JavaScript** ES6+ vanilla
- **Font Awesome** para iconos
- **Google Fonts** (Inter, Poppins)

## 📝 Sistema i18n

### Agregar Nuevo Idioma
1. Crea `/lang/xx.json` (xx = código idioma)
2. Copia estructura de `es.json`
3. Traduce todos los textos
4. Agrega botón en navegación:
   ```html
   <button class="lang-btn" data-lang="xx">XX</button>
   ```
5. Actualiza `i18n.js` en array `supportedLangs`

### Usar Traducciones en HTML
```html
<!-- Texto simple -->
<h1 data-i18n="hero.title">Texto por defecto</h1>

<!-- Placeholder -->
<input data-i18n-placeholder="contact.formName">

<!-- Atributo personalizado -->
<img data-i18n-attr="alt:hero.imageAlt">
```

### Usar Traducciones en JavaScript
```javascript
// Obtener traducción
const text = i18n.t('hero.title');

// Cambiar idioma
i18n.changeLanguage('en');

// Escuchar cambios
window.addEventListener('languageChanged', (e) => {
    console.log('Nuevo idioma:', e.detail.language);
});
```

## 🎨 Personalización de Estilos

### Variables CSS
```css
:root {
    --gpmf-burgundy: #7A0F32;
    --gpmf-black: #000000;
    --warm-gray: #F5F5F5;
    --deep-charcoal: #2E2E2E;
    /* Personaliza aquí */
}
```

### Clases Utilitarias
```html
<!-- Botones -->
<button class="btn btn-primary">Primario</button>
<button class="btn btn-secondary">Secundario</button>
<button class="btn btn-outline">Outline</button>

<!-- Cards -->
<div class="card hover-lift">...</div>

<!-- Grid -->
<div class="grid grid-3">...</div>

<!-- Animaciones -->
<div data-aos="fade-up" data-aos-delay="200">...</div>
```

## 📊 SEO

### Meta Tags Incluidos
- Title y Description
- Open Graph (Facebook)
- Twitter Cards
- Canonical URLs
- Language alternates

### Próximos Pasos SEO
- [ ] Crear `sitemap.xml`
- [ ] Configurar `robots.txt`
- [ ] Agregar Schema.org markup
- [ ] Optimizar imágenes (WebP)
- [ ] Implementar lazy loading

## 🔒 Seguridad

- Validación de formularios client-side
- Sanitización de inputs
- HTTPS recomendado
- Cookie consent GDPR compliant

## 📞 Soporte

Para dudas o personalizaciones:
- Email: contacto@gpmfconsulting.com
- Documentación: Este README

## 📄 Licencia

© 2025 GPMF Consulting. Todos los derechos reservados.

---

## 🎯 Próximas Mejoras Sugeridas

1. **Backend Integration**
   - Conectar formularios a API
   - Sistema de newsletter (MailChimp, SendGrid)
   - CMS para blog (opcional)

2. **Analytics**
   - Google Analytics 4
   - Hotjar para heatmaps
   - Conversion tracking

3. **Performance**
   - Minificar CSS/JS
   - Comprimir imágenes
   - CDN para assets
   - Service Worker (PWA)

4. **Funcionalidades**
   - Modo oscuro
   - Buscador site-wide
   - Chatbot integrado
   - Calculadora de ROI

---

**Versión**: 2.0  
**Última actualización**: Octubre 2025  
**Estado**: ✅ Listo para producción
