// Sistema de Internacionalización (i18n) para GPMF Consulting
// Soporta: Español (ES), Inglés (EN), Alemán (DE), Francés (FR)

class I18n {
    constructor() {
        this.currentLang = this.getStoredLanguage() || 'es';
        this.translations = {};
        this.fallbackLang = 'es';
    }

    // Obtener idioma almacenado en localStorage
    getStoredLanguage() {
        return localStorage.getItem('gpmf_language');
    }

    // Guardar idioma en localStorage
    setStoredLanguage(lang) {
        localStorage.setItem('gpmf_language', lang);
    }

    // Cargar traducciones desde archivo JSON
    async loadTranslations(lang) {
        try {
            const response = await fetch(`./lang/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${lang}.json`);
            }
            this.translations[lang] = await response.json();
            return true;
        } catch (error) {
            console.error(`Error loading translations for ${lang}:`, error);
            return false;
        }
    }

    // Inicializar el sistema i18n
    async init() {
        // Cargar idioma actual
        await this.loadTranslations(this.currentLang);
        
        // Cargar idioma fallback si es diferente
        if (this.currentLang !== this.fallbackLang) {
            await this.loadTranslations(this.fallbackLang);
        }

        // Aplicar traducciones a la página
        this.applyTranslations();
        
        // Actualizar selector de idioma
        this.updateLanguageSelector();
        
        // Actualizar atributo lang del HTML
        document.documentElement.lang = this.currentLang;
    }

    // Obtener traducción por clave (notación punto: "nav.home")
    t(key, defaultValue = '') {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];

        // Navegar por el objeto de traducciones
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Si no se encuentra, intentar con idioma fallback
                value = this.translations[this.fallbackLang];
                for (const fk of keys) {
                    if (value && typeof value === 'object' && fk in value) {
                        value = value[fk];
                    } else {
                        return defaultValue || key;
                    }
                }
                break;
            }
        }

        return typeof value === 'string' ? value : defaultValue || key;
    }

    // Aplicar traducciones a elementos con atributo data-i18n
    applyTranslations() {
        // Traducir elementos con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Traducir atributos con data-i18n-attr
        document.querySelectorAll('[data-i18n-attr]').forEach(element => {
            const attrData = element.getAttribute('data-i18n-attr');
            const [attr, key] = attrData.split(':');
            const translation = this.t(key);
            element.setAttribute(attr, translation);
        });

        // Traducir placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });

        // Traducir títulos (title attribute)
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.t(key);
        });
    }

    // Cambiar idioma
    async changeLanguage(lang) {
        if (lang === this.currentLang) return;

        // Verificar si el idioma es soportado
        const supportedLangs = ['es', 'en', 'de', 'fr'];
        if (!supportedLangs.includes(lang)) {
            console.error(`Language ${lang} is not supported`);
            return;
        }

        // Cargar traducciones si no están cargadas
        if (!this.translations[lang]) {
            const loaded = await this.loadTranslations(lang);
            if (!loaded) return;
        }

        // Actualizar idioma actual
        this.currentLang = lang;
        this.setStoredLanguage(lang);

        // Aplicar traducciones
        this.applyTranslations();

        // Actualizar selector de idioma
        this.updateLanguageSelector();

        // Actualizar atributo lang del HTML
        document.documentElement.lang = lang;

        // Emitir evento personalizado
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: lang } 
        }));

        // Animación suave de cambio
        document.body.style.opacity = '0.7';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 150);
    }

    // Actualizar selector de idioma en la UI
    updateLanguageSelector() {
        const selector = document.getElementById('languageSelector');
        if (selector) {
            selector.value = this.currentLang;
        }

        // Actualizar botones de idioma activos
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Actualizar flags activos
        document.querySelectorAll('.lang-flag').forEach(flag => {
            const flagLang = flag.getAttribute('data-lang');
            if (flagLang === this.currentLang) {
                flag.classList.add('active');
            } else {
                flag.classList.remove('active');
            }
        });
    }

    // Obtener idioma actual
    getCurrentLanguage() {
        return this.currentLang;
    }

    // Obtener nombre del idioma en su idioma nativo
    getLanguageName(lang = this.currentLang) {
        const names = {
            'es': 'Español',
            'en': 'English',
            'de': 'Deutsch',
            'fr': 'Français'
        };
        return names[lang] || lang.toUpperCase();
    }

    // Detectar idioma del navegador
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        const supportedLangs = ['es', 'en', 'de', 'fr'];
        return supportedLangs.includes(langCode) ? langCode : 'es';
    }

    // Auto-detectar y establecer idioma si no hay uno guardado
    autoDetectLanguage() {
        if (!this.getStoredLanguage()) {
            const detectedLang = this.detectBrowserLanguage();
            this.currentLang = detectedLang;
            this.setStoredLanguage(detectedLang);
        }
    }
}

// Crear instancia global
const i18n = new I18n();

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        i18n.autoDetectLanguage();
        i18n.init();
    });
} else {
    i18n.autoDetectLanguage();
    i18n.init();
}

// Exportar para uso global
window.i18n = i18n;
