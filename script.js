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
        console.log('Switching to English');
        frElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'block');
        langLinks[0].style.display = 'none';
        langLinks[1].style.display = 'block';
    } else {
        console.log('Switching to French');
        enElements.forEach(el => el.style.display = 'none');
        frElements.forEach(el => el.style.display = 'block');
        langLinks[0].style.display = 'block';
        langLinks[1].style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    const items = document.querySelectorAll(".letter-by-letter");
    console.log(items);
    items.forEach(item => {
        const link = item.querySelector("a");
        const text = link.textContent.trim();
        const intervalDelay = 100;
        let index = 0;

        link.innerHTML = "";

        function typeWriter() {
            if (index < text.length) {
                const char = text[index];
                const span = document.createElement("span");
                span.textContent = char;
                link.appendChild(span);
                index++;
                setTimeout(typeWriter, intervalDelay);
            }
        }
        typeWriter();
    });
});


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

// Try 3D effect

// const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let particlesArray = [];
// const numberOfParticles = 200;
// const colors = ['#1A84D6', '#D62839', '#F5B700', '#00B300', '#E13C6C'];

// class Particle {
//   constructor(x, y, directionX, directionY, size, color) {
//     this.x = x;
//     this.y = y;
//     this.directionX = directionX;
//     this.directionY = directionY;
//     this.size = size;
//     this.color = color;
//   }

//   draw() {
//     context.beginPath();
//     context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
//     context.fillStyle = this.color;
//     context.fill();
//   }

//   update() {
//     if (this.x + this.size > canvas.width || this.x - this.size < 0) {
//       this.directionX = -this.directionX;
//     }

//     if (this.y + this.size > canvas.height || this.y - this.size < 0) {
//       this.directionY = -this.directionY;
//     }

//     this.x += this.directionX;
//     this.y += this.directionY;
//     this.draw();
//   }
// }

// function init() {
//   particlesArray = [];
//   for (let i = 0; i < numberOfParticles; i++) {
//     const size = Math.random() * 5 + 1;
//     const x = Math.random() * (canvas.width - size * 2) + size;
//     const y = Math.random() * (canvas.height - size * 2) + size;
//     const directionX = (Math.random() * 0.4) - 0.2;
//     const directionY = (Math.random() * 0.4) - 0.2;
//     const color = colors[Math.floor(Math.random() * colors.length)];

//     particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
//   }
// }

// function animate() {
//   requestAnimationFrame(animate);
//   context.clearRect(0, 0, canvas.width, canvas.height);

//   for (let i = 0; i < particlesArray.length; i++) {
//     particlesArray[i].update();
//   }
// }

// init();
// animate();
