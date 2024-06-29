function displayDiv(id) {
    if (document.getElementById(id).style.display == 'block') {
        document.getElementById(id).style.display = 'none';
    }
    else {
        document.getElementById(id).classList.remove('hidden');
        document.getElementById(id).classList.add = 'visible';
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

document.getElementById('burger-menu').addEventListener('click', function() {
    const menu = document.getElementById('burger-menu-content');
    menu.classList.toggle('hidden');
});

let isBigScreen = window.matchMedia("only screen and (min-width: 1024px)").matches;
let isDesktop = window.matchMedia("only screen and (min-width: 1024px)").matches;
let isTablet = window.matchMedia("only screen and (min-width: 761px) and (max-width: 1024px)").matches;
let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

document.addEventListener("DOMContentLoaded", function() {
    const section = document.getElementById("container-video");
    const chevron1 = document.getElementById("chevron-1");
    const chevron2 = document.getElementById("chevron-2");
    const chevron3 = document.getElementById("chevron-3");
    const chevron4 = document.getElementById("chevron-4");

    window.addEventListener("scroll", function() {
        const sectionTop = section.getBoundingClientRect().top;

            if(isBigScreen) {
                if (sectionTop < 620) {
                    chevron1.classList.add("reveal-visible");
                    chevron1.classList.remove("reveal-hidden");
                    chevron3.classList.add("reveal-visible");
                    chevron3.classList.remove("reveal-hidden");
                } else {
                    chevron1.classList.remove("reveal-visible");
                    chevron1.classList.add("reveal-hidden");
                    chevron3.classList.remove("reveal-visible");
                    chevron3.classList.add("reveal-hidden");
                }

                if (sectionTop < 400) {
                    chevron2.classList.add("reveal-visible");
                    chevron2.classList.remove("reveal-hidden");
                    chevron4.classList.add("reveal-visible");
                    chevron4.classList.remove("reveal-hidden");
                } else {
                    chevron2.classList.remove("reveal-visible");
                    chevron2.classList.add("reveal-hidden");
                    chevron4.classList.remove("reveal-visible");
                    chevron4.classList.add("reveal-hidden");
                }
            }

            if (isDesktop) {
                if (sectionTop < 260) {
                    chevron1.classList.add("reveal-visible");
                    chevron1.classList.remove("reveal-hidden");
                    chevron3.classList.add("reveal-visible");
                    chevron3.classList.remove("reveal-hidden");
                } else {
                    chevron1.classList.remove("reveal-visible");
                    chevron1.classList.add("reveal-hidden");
                    chevron3.classList.remove("reveal-visible");
                    chevron3.classList.add("reveal-hidden");
                }

                if (sectionTop < 20) {
                    chevron2.classList.add("reveal-visible");
                    chevron2.classList.remove("reveal-hidden");
                    chevron4.classList.add("reveal-visible");
                    chevron4.classList.remove("reveal-hidden");
                } else {
                    chevron2.classList.remove("reveal-visible");
                    chevron2.classList.add("reveal-hidden");
                    chevron4.classList.remove("reveal-visible");
                    chevron4.classList.add("reveal-hidden");
                }
            }

            if (isTablet) {
                if (sectionTop < 780) {
                    chevron1.classList.add("reveal-visible");
                    chevron1.classList.remove("reveal-hidden");
                    chevron3.classList.add("reveal-visible");
                    chevron3.classList.remove("reveal-hidden");
                } else {
                    chevron1.classList.remove("reveal-visible");
                    chevron1.classList.add("reveal-hidden");
                    chevron3.classList.add("reveal-visible");
                    chevron3.classList.remove("reveal-hidden");
                }

                if (sectionTop < 540) {
                    chevron2.classList.add("reveal-visible");
                    chevron2.classList.remove("reveal-hidden");
                    chevron4.classList.add("reveal-visible");
                    chevron4.classList.remove("reveal-hidden");
                } else {
                    chevron2.classList.remove("reveal-visible");
                    chevron2.classList.add("reveal-hidden");
                    chevron4.classList.add("reveal-visible");
                    chevron4.classList.remove("reveal-hidden");
                }
            }

            if (isMobile) {
                if (sectionTop < 270) {
                    chevron1.classList.add("reveal-visible");
                    chevron1.classList.remove("reveal-hidden");
                    chevron3.classList.add("reveal-visible");
                    chevron3.classList.remove("reveal-hidden");

                } else {
                    chevron1.classList.remove("reveal-visible");
                    chevron1.classList.add("reveal-hidden");
                    chevron3.classList.add("reveal-visible");
                    chevron3.classList.remove("reveal-hidden");
                }

                if (sectionTop < -550) {
                    chevron2.classList.add("reveal-visible");
                    chevron2.classList.remove("reveal-hidden");
                    chevron4.classList.add("reveal-visible");
                    chevron4.classList.remove("reveal-hidden");
                } else {
                    chevron2.classList.remove("reveal-visible");
                    chevron2.classList.add("reveal-hidden");
                    chevron4.classList.add("reveal-visible");
                    chevron4.classList.remove("reveal-hidden");
                }
            }
        });
    });

// document.addEventListener('DOMContentLoaded', function() {
//     let menuLinks = document.getElementById('transition-link');

//     menuLinks.forEach(function(link) {
//         link.addEventListener('click', function(e) {
//             e.preventDefault(); // Empêche la navigation par défaut

//             let href = this.getAttribute('href');
//             let container = document.getElementById('transition-animation');

//             // Ajoute une classe pour l'animation de transition
//             container.classList.add('page-transition');

//             // Attendez la fin de l'animation (0.5s) avant de naviguer
//             setTimeout(function() {
//                 window.location.href = href;
//             }, 500);
//         });
//     });
// });

// window.transitionToPage = function(href) {
//     document.querySelector('body').style.opacity = 0
//     setTimeout(function() {
//         window.location.href = href
//     }, 500)
// }

// document.addEventListener('DOMContentLoaded', function(event) {
//     document.querySelector('body').style.opacity = 1
// })
