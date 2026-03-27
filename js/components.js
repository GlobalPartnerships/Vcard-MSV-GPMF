// Componentes Interactivos para GPMF Consulting

// ============================================
// NAVEGACIÓN Y MENÚ
// ============================================

class Navigation {
    constructor() {
        this.nav = document.querySelector('nav');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.megaMenuTriggers = document.querySelectorAll('.mega-menu-trigger');
        this.init();
    }

    init() {
        this.setupStickyNav();
        this.setupMobileMenu();
        this.setupMegaMenu();
        this.setupSmoothScroll();
    }

    // Navegación sticky con transparencia adaptativa
    setupStickyNav() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Agregar clase scrolled
            if (currentScroll > 50) {
                this.nav.classList.add('scrolled');
            } else {
                this.nav.classList.remove('scrolled');
            }

            // Ocultar/mostrar nav al hacer scroll
            if (currentScroll > lastScroll && currentScroll > 500) {
                this.nav.style.transform = 'translateY(-100%)';
            } else {
                this.nav.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        });
    }

    // Menú móvil hamburguesa
    setupMobileMenu() {
        if (!this.mobileMenuBtn || !this.mobileMenu) return;

        this.mobileMenuBtn.addEventListener('click', () => {
            this.mobileMenu.classList.toggle('active');
            this.mobileMenuBtn.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Cerrar al hacer clic en un enlace
        this.mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                this.mobileMenu.classList.remove('active');
                this.mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Cerrar al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!this.mobileMenu.contains(e.target) && !this.mobileMenuBtn.contains(e.target)) {
                this.mobileMenu.classList.remove('active');
                this.mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Mega menú para servicios
    setupMegaMenu() {
        this.megaMenuTriggers.forEach(trigger => {
            const megaMenu = trigger.querySelector('.mega-menu-content');
            if (!megaMenu) return;

            let timeout;

            trigger.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
                megaMenu.classList.add('active');
            });

            trigger.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    megaMenu.classList.remove('active');
                }, 300);
            });
        });
    }

    // Smooth scroll para enlaces internos
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Offset para nav sticky
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ============================================
// SELECTOR DE IDIOMA
// ============================================

class LanguageSelector {
    constructor() {
        this.selector = document.getElementById('languageSelector');
        this.langButtons = document.querySelectorAll('.lang-btn');
        this.init();
    }

    init() {
        // Selector dropdown
        if (this.selector) {
            this.selector.addEventListener('change', (e) => {
                window.i18n.changeLanguage(e.target.value);
            });
        }

        // Botones de idioma
        this.langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                window.i18n.changeLanguage(lang);
            });
        });
    }
}

// ============================================
// ANIMACIONES AL HACER SCROLL (AOS)
// ============================================

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-aos]');
        this.init();
    }

    init() {
        this.observeElements();
        // Trigger inicial
        this.checkElements();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        this.elements.forEach(el => observer.observe(el));
    }

    animateElement(element) {
        const animation = element.getAttribute('data-aos');
        const delay = element.getAttribute('data-aos-delay') || 0;
        const duration = element.getAttribute('data-aos-duration') || 600;

        setTimeout(() => {
            element.classList.add('aos-animate');
            element.style.animationDuration = `${duration}ms`;
        }, delay);
    }

    checkElements() {
        this.elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                this.animateElement(element);
            }
        });
    }
}

// ============================================
// CARRUSEL DE TESTIMONIOS
// ============================================

class TestimonialCarousel {
    constructor(selector) {
        this.carousel = document.querySelector(selector);
        if (!this.carousel) return;
        
        this.slides = this.carousel.querySelectorAll('.testimonial-slide');
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.init();
    }

    init() {
        if (this.slides.length === 0) return;
        
        this.createControls();
        this.showSlide(0);
        this.startAutoplay();
    }

    createControls() {
        const controls = document.createElement('div');
        controls.className = 'carousel-controls';
        
        // Botón anterior
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn prev';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.addEventListener('click', () => this.prevSlide());
        
        // Botón siguiente
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn next';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Indicadores
        const indicators = document.createElement('div');
        indicators.className = 'carousel-indicators';
        
        this.slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'indicator-dot';
            dot.addEventListener('click', () => this.goToSlide(index));
            indicators.appendChild(dot);
        });
        
        controls.appendChild(prevBtn);
        controls.appendChild(indicators);
        controls.appendChild(nextBtn);
        this.carousel.appendChild(controls);
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        const dots = this.carousel.querySelectorAll('.indicator-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        this.currentIndex = index;
    }

    nextSlide() {
        const next = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(next);
        this.resetAutoplay();
    }

    prevSlide() {
        const prev = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prev);
        this.resetAutoplay();
    }

    goToSlide(index) {
        this.showSlide(index);
        this.resetAutoplay();
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    resetAutoplay() {
        clearInterval(this.autoplayInterval);
        this.startAutoplay();
    }
}

// ============================================
// BOTÓN VOLVER ARRIBA
// ============================================

class BackToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        if (!this.button) this.createButton();
        this.init();
    }

    createButton() {
        this.button = document.createElement('button');
        this.button.id = 'backToTop';
        this.button.className = 'back-to-top';
        this.button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        this.button.setAttribute('aria-label', 'Volver arriba');
        document.body.appendChild(this.button);
    }

    init() {
        // Mostrar/ocultar según scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
        });

        // Scroll suave al hacer clic
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ============================================
// VALIDACIÓN DE FORMULARIOS
// ============================================

class FormValidator {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        if (!this.form) return;
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (this.validateForm()) {
                this.submitForm();
            }
        });

        // Validación en tiempo real
        this.form.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('blur', () => this.validateField(field));
            field.addEventListener('input', () => this.clearError(field));
        });
    }

    validateForm() {
        let isValid = true;
        const fields = this.form.querySelectorAll('[required]');
        
        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        let isValid = true;
        let errorMessage = '';

        // Validar campo requerido
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Este campo es requerido';
        }
        
        // Validar email
        else if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Email inválido';
            }
        }
        
        // Validar teléfono
        else if (type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Teléfono inválido';
            }
        }

        if (!isValid) {
            this.showError(field, errorMessage);
        } else {
            this.clearError(field);
        }

        return isValid;
    }

    showError(field, message) {
        this.clearError(field);
        
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }

    clearError(field) {
        field.classList.remove('error');
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    async submitForm() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Mostrar loading
        const submitBtn = this.form.querySelector('[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        
        try {
            // Aquí iría la lógica de envío real (API, EmailJS, etc.)
            console.log('Form data:', data);
            
            // Simular envío
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            this.showSuccess();
            this.form.reset();
        } catch (error) {
            this.showError(this.form, 'Error al enviar el formulario');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }

    showSuccess() {
        const message = document.createElement('div');
        message.className = 'form-success';
        message.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.</p>
        `;
        this.form.parentNode.insertBefore(message, this.form);
        
        setTimeout(() => {
            message.remove();
        }, 5000);
    }
}

// ============================================
// COOKIE CONSENT BANNER
// ============================================

class CookieConsent {
    constructor() {
        this.cookieName = 'gpmf_cookie_consent';
        this.init();
    }

    init() {
        if (!this.hasConsent()) {
            this.showBanner();
        }
    }

    hasConsent() {
        return localStorage.getItem(this.cookieName) === 'true';
    }

    showBanner() {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra política de cookies.</p>
                <div class="cookie-actions">
                    <button class="btn-accept">Aceptar</button>
                    <button class="btn-decline">Rechazar</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(banner);
        
        banner.querySelector('.btn-accept').addEventListener('click', () => {
            this.acceptCookies();
            banner.remove();
        });
        
        banner.querySelector('.btn-decline').addEventListener('click', () => {
            banner.remove();
        });
    }

    acceptCookies() {
        localStorage.setItem(this.cookieName, 'true');
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar componentes
    new Navigation();
    new LanguageSelector();
    new ScrollAnimations();
    new TestimonialCarousel('.testimonials-carousel');
    new BackToTop();
    new FormValidator('#contactForm');
    new CookieConsent();
});
