# 🎨 Guía de Estilo Gamma para GPMF Consulting

## ✅ Cambios Aplicados

He actualizado tu sitio con características del estilo Gamma:

### 1. Variables CSS Actualizadas
- ✅ **Espaciado 2x más generoso** (1rem → 2rem, 2rem → 4rem, etc.)
- ✅ **Sombras más suaves y grandes** (efecto "flotante")
- ✅ **Bordes más redondeados** (0.75rem → 1.5rem)
- ✅ **Tipografía más dramática** (h1: 3-5rem, peso 800)

### 2. Nuevo Archivo: `gamma-style.css`
Contiene componentes específicos estilo Gamma:
- Glassmorphism (efecto vidrio)
- Gradientes modernos
- Cards elevadas
- Botones con sombras dramáticas
- Texto con gradiente
- Animaciones suaves

## 🚀 Cómo Aplicar el Estilo Gamma

### Paso 1: Agregar el CSS Gamma

En `index.html` y todas tus páginas, agrega después de `main.css`:

```html
<link rel="stylesheet" href="./css/main.css">
<link rel="stylesheet" href="./css/gamma-style.css"> <!-- NUEVO -->
<link rel="stylesheet" href="./css/animations.css">
```

### Paso 2: Actualizar el Hero

Reemplaza tu hero actual con:

```html
<section class="hero-gamma gradient-burgundy-soft">
    <div class="hero-content">
        <h1 class="animate-fade-in-up">
            Soluciones Estratégicas para
            <span class="text-gradient">Transformar tu Negocio</span>
        </h1>
        <p class="animate-fade-in-up" style="animation-delay: 0.2s;">
            Impulsamos el crecimiento empresarial a través de consultoría 
            estratégica, gobernanza de datos e innovación digital
        </p>
        <div class="hero-cta animate-fade-in-up" style="animation-delay: 0.4s; display: flex; gap: 1rem; justify-content: center;">
            <a href="contact.html" class="btn-gamma btn-gamma-primary">
                Solicitar Consultoría Gratuita
            </a>
            <a href="services.html" class="btn-gamma btn-gamma-outline">
                Ver Servicios
            </a>
        </div>
    </div>
</section>
```

### Paso 3: Actualizar Cards de Servicios

Reemplaza tus cards con:

```html
<div class="grid-gamma">
    <div class="card-gamma">
        <div class="card-gamma-icon">
            <i class="fas fa-chart-line"></i>
        </div>
        <h3>Consultoría Estratégica</h3>
        <p>Desarrollamos estrategias personalizadas para impulsar el crecimiento y la rentabilidad de tu negocio</p>
        <a href="services/strategic-consulting.html" class="btn-gamma btn-gamma-outline">
            Conocer Más
        </a>
    </div>
    
    <!-- Repetir para cada servicio -->
</div>
```

### Paso 4: Secciones con Espaciado Gamma

```html
<section class="section-gamma section-gamma-light">
    <div class="container">
        <h2 class="text-gradient" style="text-align: center; margin-bottom: 4rem;">
            ¿Por Qué Elegir GPMF?
        </h2>
        <div class="grid-gamma">
            <!-- Contenido -->
        </div>
    </div>
</section>
```

## 🎨 Componentes Disponibles

### Botones
```html
<!-- Primario con gradiente -->
<button class="btn-gamma btn-gamma-primary">Acción Principal</button>

<!-- Outline -->
<button class="btn-gamma btn-gamma-outline">Acción Secundaria</button>
```

### Cards Elevadas
```html
<div class="card-gamma">
    <div class="card-gamma-icon">
        <i class="fas fa-icon"></i>
    </div>
    <h3>Título</h3>
    <p>Descripción</p>
</div>
```

### Glassmorphism (Efecto Vidrio)
```html
<div class="glass-card" style="padding: 3rem;">
    <h3>Contenido con efecto vidrio</h3>
    <p>Perfecto para overlays y modales</p>
</div>
```

### Texto con Gradiente
```html
<h1>
    Texto normal 
    <span class="text-gradient">con gradiente</span>
</h1>
```

### Texto Destacado
```html
<p>
    Este es un texto con 
    <span class="text-highlight">palabra destacada</span>
</p>
```

### Badges Modernos
```html
<span class="badge-gamma">
    <i class="fas fa-check"></i>
    Nuevo
</span>
```

### Stats Destacados
```html
<div class="stat-gamma">
    <div class="stat-gamma-number">500+</div>
    <div class="stat-gamma-label">Proyectos Completados</div>
</div>
```

### Testimonios
```html
<div class="testimonial-gamma">
    <p class="testimonial-gamma-text">
        "GPMF transformó completamente nuestra estrategia de datos..."
    </p>
    <div class="testimonial-gamma-author">
        <img src="avatar.jpg" alt="Cliente" class="testimonial-gamma-avatar">
        <div>
            <strong>Juan Pérez</strong>
            <p>CEO, Empresa XYZ</p>
        </div>
    </div>
</div>
```

## 🎨 Gradientes Disponibles

```html
<!-- Gradiente morado -->
<div class="gradient-purple">...</div>

<!-- Gradiente azul -->
<div class="gradient-blue">...</div>

<!-- Gradiente rosa -->
<div class="gradient-pink">...</div>

<!-- Gradiente naranja -->
<div class="gradient-orange">...</div>

<!-- Gradiente burgundy suave (recomendado para GPMF) -->
<div class="gradient-burgundy-soft">...</div>

<!-- Gradient mesh (fondo abstracto) -->
<div class="gradient-mesh">...</div>
```

## 📐 Layout Recomendado Estilo Gamma

### Estructura de Página Completa

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Meta tags -->
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/gamma-style.css">
    <link rel="stylesheet" href="./css/animations.css">
</head>
<body>
    
    <!-- Navegación con glassmorphism -->
    <nav class="glass-nav">
        <!-- Tu navegación -->
    </nav>
    
    <!-- Hero full-screen -->
    <section class="hero-gamma gradient-burgundy-soft">
        <h1>
            Título Enorme
            <span class="text-gradient">Con Gradiente</span>
        </h1>
        <p>Subtítulo grande y legible</p>
        <div style="display: flex; gap: 1rem;">
            <button class="btn-gamma btn-gamma-primary">CTA Principal</button>
            <button class="btn-gamma btn-gamma-outline">CTA Secundario</button>
        </div>
    </section>
    
    <!-- Sección con mucho espacio -->
    <section class="section-gamma section-gamma-light">
        <div class="container">
            <h2 class="text-gradient" style="text-align: center; margin-bottom: 4rem;">
                Sección Título
            </h2>
            <div class="grid-gamma">
                <div class="card-gamma">...</div>
                <div class="card-gamma">...</div>
                <div class="card-gamma">...</div>
            </div>
        </div>
    </section>
    
    <!-- Sección oscura -->
    <section class="section-gamma section-gamma-dark">
        <div class="container">
            <h2 style="color: white; text-align: center;">Título en Oscuro</h2>
            <!-- Contenido -->
        </div>
    </section>
    
    <!-- Footer minimalista -->
    <footer class="footer-gamma">
        <!-- Tu footer -->
    </footer>
    
</body>
</html>
```

## 🎯 Características Clave del Estilo Gamma

### 1. **Espaciado Generoso**
- Padding de secciones: 8rem (en lugar de 4rem)
- Gaps en grids: 3-4rem (en lugar de 1.5rem)
- Mucho "aire" entre elementos

### 2. **Tipografía Dramática**
- H1: 3-5rem (en lugar de 2-3.5rem)
- Peso: 800-900 (ultra bold)
- Line-height: 1.1 (más compacto)

### 3. **Sombras Suaves y Grandes**
- `box-shadow: 0 20px 60px -10px rgba(0,0,0,0.08)`
- Efecto "flotante" en hover
- Transiciones suaves (0.4s cubic-bezier)

### 4. **Bordes Muy Redondeados**
- Cards: 1.5-2rem (en lugar de 0.75rem)
- Botones: border-radius: 9999px (completamente redondeados)

### 5. **Gradientes Sutiles**
- Fondos con gradientes suaves
- Texto con gradiente para destacar
- Overlays con blur (glassmorphism)

### 6. **Animaciones Fluidas**
- `cubic-bezier(0.4, 0, 0.2, 1)` para transiciones naturales
- Hover: translateY(-12px) con sombra aumentada
- Fade in up para elementos al scroll

## 🖼️ Recursos Recomendados

### Imágenes/Ilustraciones
- **Unsplash**: Fotos de alta calidad
- **unDraw**: Ilustraciones SVG personalizables
- **Storyset**: Ilustraciones animadas
- **Blush**: Ilustraciones con estilo

### Iconos
- **Font Awesome** (ya incluido)
- **Heroicons**: Iconos minimalistas
- **Phosphor Icons**: Iconos modernos

### Fuentes Alternativas (más modernas)
```html
<!-- Opción 1: Space Grotesk (muy Gamma) -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">

<!-- Opción 2: DM Sans (limpia y moderna) -->
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">

<!-- Opción 3: Plus Jakarta Sans (redondeada) -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap" rel="stylesheet">
```

## 📱 Responsive

Todos los componentes Gamma son responsive:
- Hero: padding reducido en móvil (4rem)
- Cards: padding 2rem en móvil
- Grids: 1 columna automáticamente
- Tipografía: clamp() ajusta automáticamente

## 🎨 Paleta de Colores Gamma

Además de tus colores GPMF, considera agregar:

```css
:root {
    /* Colores GPMF (mantener) */
    --gpmf-burgundy: #7A0F32;
    
    /* Colores Gamma adicionales */
    --gamma-purple: #667eea;
    --gamma-blue: #4facfe;
    --gamma-pink: #f093fb;
    --gamma-orange: #fa709a;
    --gamma-green: #30cfd0;
    
    /* Grises suaves */
    --gray-50: #fafafa;
    --gray-100: #f5f5f5;
    --gray-900: #1a1a1a;
}
```

## ✅ Checklist de Implementación

- [ ] Agregar `gamma-style.css` a todas las páginas
- [ ] Actualizar hero con clase `hero-gamma`
- [ ] Cambiar cards a `card-gamma`
- [ ] Actualizar botones a `btn-gamma`
- [ ] Agregar `text-gradient` a títulos destacados
- [ ] Usar `section-gamma` para secciones
- [ ] Implementar `grid-gamma` para layouts
- [ ] Agregar animaciones `animate-fade-in-up`
- [ ] Actualizar navegación con `glass-nav`
- [ ] Cambiar footer a `footer-gamma`

## 🚀 Resultado Final

Con estos cambios, tu sitio tendrá:
- ✅ Look ultra moderno estilo Gamma
- ✅ Espaciado generoso y respirable
- ✅ Tipografía dramática e impactante
- ✅ Animaciones fluidas y profesionales
- ✅ Efectos glassmorphism y gradientes
- ✅ Sombras suaves y elevadas
- ✅ 100% responsive

---

**Próximo paso**: Actualiza `index.html` con las clases Gamma y verás la transformación inmediata.
