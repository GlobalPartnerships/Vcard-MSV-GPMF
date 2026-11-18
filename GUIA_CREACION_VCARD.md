# Guía de Creación y Replicación de vCards | GPMF

Esta guía documenta la arquitectura técnica, las buenas prácticas y el paso a paso exacto para crear o replicar nuevas tarjetas digitales (vCards) para las socias de **Global Partnerships & Multidisciplinary Firm (GPMF)** en menos de 5 minutos, con soporte **PWA instalable** y **código QR de contacto 100% offline**.

---

## 1. ¿Cómo funciona la arquitectura?

La vCard está diseñada bajo el estándar **PWA (Progressive Web App)** con capacidades offline duales:

1. **Instalable en el móvil como App (Acceso directo real):**
   * Gracias al `manifest.json`, las metaetiquetas de Apple y el `sw.js` (Service Worker), cualquier teléfono (iPhone o Android) puede instalar la tarjeta en su pantalla de inicio como una aplicación nativa que abre a pantalla completa y sin barras de navegador.
2. **Uso Offline para la dueña de la tarjeta:**
   * La tarjeta y todos sus recursos (foto, banner, tipografías, logos) se guardan en la memoria caché del navegador en la primera visita. Abre de inmediato incluso en Modo Avión o sin cobertura.
3. **Uso Offline para la persona que recibe el contacto (Networking en vivo):**
   * El botón del código QR en la esquina superior derecha genera la vCard en **texto plano directo** (`BEGIN:VCARD...END:VCARD`). La persona a quien se lo muestras solo apunta su cámara y su teléfono (iOS o Android) procesa los datos localmente y abre *"Añadir a contactos"* **sin gastar un solo byte de internet**.

---

## 2. Los 3 Archivos Clave del Proyecto

| Archivo | Función |
| :--- | :--- |
| **`index.html`** | Estructura visual, estilos responsivos (móvil y escritorio), lógica del QR dual y generador del archivo `.vcf`. |
| **`manifest.json`** | Configuración para que el móvil reconozca la web como App instalable (nombre, colores e iconos). |
| **`sw.js`** | Service Worker que administra la memoria caché para que funcione sin internet. |

---

## 3. Checklist de 5 Minutos: Crear la vCard de una Nueva Socia

Al crear un nuevo repositorio para otra socia (ej. `Vcard-NombreSocia-GPMF`):

### Paso 1: Foto y Recursos
1. Guarda la foto de perfil en la carpeta `assets/` con nombre en minúsculas y sin espacios (ej. `assets/foto-socia.jpg`).
   * **Recomendación:** Foto cuadrada (1:1), idealmente de `400x400px` o `500x500px`, peso menor a 150 KB.
2. Asegúrate de que los logos e imágenes nunca tengan espacios en el nombre (usa `burgundy-ball.png` en vez de `burgundy ball.png`).

### Paso 2: Editar `index.html`
Busca y reemplaza únicamente estos campos:
* **`<title>`:** `Tarjeta Digital | Nombre de la Socia`
* **Etiqueta `apple-mobile-web-app-title`:** `Nombre VCard`
* **Imagen de perfil:** `<img src="assets/foto-socia.jpg" ...>`
* **Nombre y Cargo:** `<h1>Nombre de la Socia</h1>` y `<p class="role">Cargo</p>`
* **Enlaces de contacto:**
  * Correo: `href="mailto:correo@gpmf.com"`
  * WhatsApp: `href="https://wa.me/573XXXXXXXXX"`
  * LinkedIn: `href="https://www.linkedin.com/in/usuario/"`
* **Bloque JavaScript `vCardData` (al final del archivo):**
  ```javascript
  const vCardData = `BEGIN:VCARD
  VERSION:3.0
  N:Apellido;Nombre;;;
  FN:Nombre Completo
  TITLE:Cargo Oficial
  ORG:Global Partnerships & Multidisciplinary Firm
  TEL;TYPE=CELL,VOICE,PREF:+573XXXXXXXXX
  EMAIL;TYPE=WORK,INTERNET:correo@gpmf.com
  URL:https://globalpartnerships.vercel.app/en
  X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/usuario/
  END:VCARD`;
  ```
* **Nombre de descarga del archivo `.vcf`:**
  * Cambiar `a.download = 'Nombre_Apellido.vcf';`
* **Variable `webUrl`:**
  * Poner la URL pública de su tarjeta en GitHub Pages.

### Paso 3: Editar `manifest.json`
Actualiza el nombre para la pantalla de inicio del teléfono:
```json
{
  "name": "Nombre de la Socia | VCard",
  "short_name": "Nombre VCard",
  "description": "Tarjeta Digital de Nombre - Global Partnerships & Multidisciplinary Firm",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#fafafa",
  "theme_color": "#7A0F32",
  "orientation": "portrait",
  "icons": [
    {
      "src": "assets/logo/burgundy-ball.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/logo/burgundy-ball.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}
```
> [!NOTE]
> Mantén `"purpose": "any"` en un icono y `"purpose": "maskable"` en el otro. Esto evita advertencias del validador de VS Code y cumple con las especificaciones de Google Chrome y Apple Safari.

### Paso 4: Editar `sw.js`
* Actualiza el identificador de caché:
  `const CACHE_NAME = 'nombre-vcard-v1';`
* En `STATIC_ASSETS`, actualiza la ruta de la foto de perfil:
  `'./assets/foto-socia.jpg',`

---

## 4. ¿Por qué algunas páginas NO se pueden guardar como App y esta sí?

Para que un navegador móvil (Safari en iOS o Chrome en Android) permita crear un **Acceso Directo tipo App (PWA)** en lugar de un simple marcador web corriente, la página **DEBE** cumplir obligatoriamente con 5 requisitos técnicos:

1. **Protocolo seguro HTTPS:** Debe servirse bajo `https://` (GitHub Pages y Vercel lo tienen automático).
2. **Manifiesto Web (`manifest.json`):**
   * Debe tener `"display": "standalone"` (esto le quita las barras de navegación al abrir).
   * Debe tener iconos definidos de mínimo 192x192 y 512x512.
3. **Metaetiquetas para Apple iOS:**
   ```html
   <link rel="manifest" href="manifest.json">
   <meta name="theme-color" content="#7A0F32">
   <meta name="apple-mobile-web-app-capable" content="yes">
   <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
   <meta name="apple-mobile-web-app-title" content="MSV VCard">
   <link rel="apple-touch-icon" href="assets/logo/burgundy-ball.png">
   ```
   * *Si una web no tiene `apple-touch-icon`, iPhone solo guarda una captura de pantalla fea.*
   * *Si no tiene `apple-mobile-web-app-capable`, iPhone la abre en el navegador Safari común en lugar de como App.*
4. **Service Worker registrado (`sw.js`):**
   * Android Chrome verifica que exista un Service Worker activo antes de mostrar el menú de *"Instalar aplicación"*.
5. **Etiqueta Viewport responsiva:**
   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

---

## 5. Aplicar esto a `portfolio.html` (o a cualquier otra página)

Si deseas que `portfolio.html` (o cualquier otra página web que tengas en este u otro repositorio) también se pueda instalar como acceso directo en el celular:

1. Copia el bloque de metaetiquetas PWA dentro de la etiqueta `<head>` de esa página.
2. Copia el script del Service Worker justo antes del cierre de `</body>`:
   ```html
   <script>
       if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
           window.addEventListener('load', () => {
               navigator.serviceWorker.register('./sw.js')
                   .then((reg) => console.log('PWA lista:', reg.scope))
                   .catch((err) => console.warn('Aviso PWA:', err));
           });
       }
   </script>
   ```
3. Verifica que `portfolio.html` esté en la lista `STATIC_ASSETS` de `sw.js`.
