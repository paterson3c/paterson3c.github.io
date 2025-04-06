// Script para traducción de idioma
const supportedLangs = ['en', 'es', 'fr'];
const defaultLang = 'en';

function setLang(lang) {
  if (!supportedLangs.includes(lang)) lang = defaultLang;
  localStorage.setItem('lang', lang);
  loadLang(lang);
  document.getElementById('current-flag').src = `assets/img/flags/${lang}.svg`;
}

function loadLang(lang) {
  fetch(`assets/lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = key.split('.').reduce((o, i) => (o ? o[i] : null), data);
        if (translation) el.innerText = translation;
      });
    });
}

window.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || defaultLang;
  setLang(lang);
});