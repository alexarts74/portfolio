console.log("je suis dans la console")

function displayDiv(id) {
  console.log("je suis dans la fonction")
  if (document.getElementById(id).style.display == 'block') {
    document.getElementById(id).style.display = 'none';
  }
  else {
      document.getElementById(id).style.display = 'block';
  }
}
