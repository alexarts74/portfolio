function displayDiv(id) {
  console.log("je suis dans la fonction")
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
        console.log("visible")
        entry.target.classList.remove('reveal-visible')
        observer.unobserve(entry.target)
      }
    })
  }

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('.left-col, .right-col').forEach(function (element) {
  observer.observe(element);
});
