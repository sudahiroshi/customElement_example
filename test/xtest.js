
window.addEventListener('load', function() {
  var link = document.querySelector('link[rel="import"]#xtest');
  var content = link.import;
  var elm = content.querySelector('template').content;
  var dest = document.querySelectorAll('x-test');
  for( x of dest ) {
    x.appendChild(elm.cloneNode(true));
  }
  });
