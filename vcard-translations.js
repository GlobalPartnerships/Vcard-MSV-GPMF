// Translation data for vCard
const translations = {
    es: {
        name: "Marcela Sánchez Vargas",
        title: "Co-Fundadora & Business Development",
        company: "Global Partnerships & Multidisciplinary Firm",
        phone: "📞 Teléfono",
        website: "🌐 Ir al inicio",
        linkedinGPMF: "LinkedIn GPMF",
        linkedinPersonal: "LinkedIn Personal",
        addToContacts: "Añadir a contactos",
        schedule: "Agendar"
    },
    en: {
        name: "Marcela Sánchez Vargas",
        title: "Co-Founder & Business Development",
        company: "Global Partnerships & Multidisciplinary Firm",
        phone: "📞 Phone",
        website: "🌐 Go to Homepage",
        linkedinGPMF: "LinkedIn GPMF",
        linkedinPersonal: "LinkedIn Personal",
        addToContacts: "Add to Contacts",
        schedule: "Schedule"
    },
    de: {
        name: "Marcela Sánchez Vargas",
        title: "Mitgründerin & Business Development",
        company: "Global Partnerships & Multidisciplinary Firm",
        phone: "📞 Telefon",
        website: "🌐 Zur Startseite",
        linkedinGPMF: "LinkedIn GPMF",
        linkedinPersonal: "LinkedIn Persönlich",
        addToContacts: "Zu Kontakten hinzufügen",
        schedule: "Termin vereinbaren"
    },
    fr: {
        name: "Marcela Sánchez Vargas",
        title: "Co-Fondatrice & Business Development",
        company: "Global Partnerships & Multidisciplinary Firm",
        phone: "📞 Téléphone",
        website: "🌐 Accueil",
        linkedinGPMF: "LinkedIn GPMF",
        linkedinPersonal: "LinkedIn Personnel",
        addToContacts: "Ajouter aux contacts",
        schedule: "Prendre rendez-vous"
    }
};

// Language switching function
function changeLanguage(lang) {
    const t = translations[lang];
    
    // Update navigation
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // Update vCard content
    const nameElement = document.querySelector('h2');
    if (nameElement) nameElement.textContent = t.name;
    
    const titleElement = document.querySelector('.text-lg.text-burgundy');
    if (titleElement) titleElement.textContent = t.title;
    
    const companyElement = document.querySelector('.text-gray-600');
    if (companyElement) companyElement.textContent = t.company;
    
    // Update contact info
    const phoneLink = document.querySelector('a[href*="tel:"]');
    if (phoneLink) {
        const phoneContainer = phoneLink.parentElement;
        phoneContainer.innerHTML = `<span class="text-2xl">📞</span><a href="tel:+573156166760" class="text-lg text-charcoal hover:text-burgundy transition-colors">+57 315 616 6760</a>`;
        const phoneLabel = phoneContainer.querySelector('span');
        if (phoneLabel) phoneLabel.textContent = t.phone;
    }
    
    const websiteLink = document.querySelector('a[href*="globalpartnerships.github.io"]');
    if (websiteLink) {
        const websiteContainer = websiteLink.parentElement;
        websiteLink.textContent = t.website;
    }
    
    // Update LinkedIn links
    const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com"]');
    if (linkedinLinks[0]) linkedinLinks[0].textContent = t.linkedinGPMF;
    if (linkedinLinks[1]) linkedinLinks[1].textContent = t.linkedinPersonal;
    
    // Update buttons
    const addButton = document.getElementById('addToContacts');
    if (addButton) addButton.textContent = t.addToContacts;
    
    const scheduleButton = document.querySelector('a[href*="diagnostico"]');
    if (scheduleButton) scheduleButton.textContent = t.schedule;
    
    // Update language button styles
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.classList.remove('text-burgundy', 'border-b', 'border-burgundy');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('text-burgundy', 'border-b', 'border-burgundy');
        } else {
            btn.classList.add('hover:text-burgundy', 'transition-colors');
        }
    });
    
    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language or default to Spanish
    const savedLang = localStorage.getItem('selectedLanguage') || 'es';
    changeLanguage(savedLang);
});
