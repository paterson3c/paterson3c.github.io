const supportedLangs = ['en', 'es', 'fr'];
const defaultLang = 'en';

function setLang(lang) {
  if (!supportedLangs.includes(lang)) lang = defaultLang;
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
  loadLang(lang);

  // Ajusta ruta relativa para la bandera
  const prefix = window.location.pathname.includes("/projects/") ? "../" : "";
  const flag = document.getElementById('current-flag');
  if (flag) flag.src = `${prefix}assets/img/flags/${lang}.svg`;
}

function loadLang(lang) {
  const prefix = window.location.pathname.includes("/projects/") ? "../" : "";
  fetch(`${prefix}assets/lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = key.split('.').reduce((obj, part) => obj?.[part], data);
        if (translation) el.innerText = translation;
      });
    })
    .catch(err => console.error("Translation loading failed:", err));
}

window.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || defaultLang;
  setLang(lang);
});