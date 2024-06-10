function displayDiv(id) {

  if (document.getElementById(id).style.display == 'block') {
    document.getElementById(id).style.display = 'none';
  }
  else {
      document.getElementById(id).style.display = 'block';
  }
}

const ratio = .5;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.remove('reveal-visible')
        observer.unobserve(entry.target)
      }
    })
  }

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('.left-col, .right-col').forEach(function (element) {
  observer.observe(element);
});


function setLanguage(language) {
    localStorage.setItem('language', language);
    switchLanguage(language);
}

function applyLanguagePreference() {
    const language = localStorage.getItem('language') || 'fr';
    switchLanguage(language);
}

function switchLanguage(lang) {
    const frElements = document.querySelectorAll('.fr');
    const enElements = document.querySelectorAll('.en');
    const langLinks = document.querySelectorAll('.lang-switch a');

    if (lang === 'en') {
        frElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'block');
        langLinks[0].style.display = 'none'; // Masquer le lien "English"
        langLinks[1].style.display = 'block'; // Afficher le lien "Français"
    } else {
        enElements.forEach(el => el.style.display = 'none');
        frElements.forEach(el => el.style.display = 'block');
        langLinks[0].style.display = 'block'; // Afficher le lien "English"
        langLinks[1].style.display = 'none'; // Masquer le lien "Français"
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const langLinks = document.querySelectorAll('.lang-switch a');
    langLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });
});
