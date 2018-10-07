
window.addEventListener('load', function() {
  var link = document.querySelector('link[rel="import"]#image');
  var content = link.import;
  var elm = content.querySelector('template').content;
  var dest = document.querySelectorAll('x-image');
  for( x of dest ) {
    x.appendChild(elm.cloneNode(true));
  }
  });
