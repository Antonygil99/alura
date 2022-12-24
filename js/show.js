function myFunction() {
  var x = document.getElementById('myDIV');
  if (x.stylesheet.display === 'none') {
    x.stylesheet.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
