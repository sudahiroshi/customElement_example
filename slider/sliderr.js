
window.addEventListener('load', function() {
  var link = document.querySelector('link[rel="import"]#slider');
  var content = link.import;
  var elm = content.querySelector('template').content;
  var dest = document.querySelectorAll('x-slider');
  for( x of dest ) {
    x.appendChild(elm.cloneNode(true));
  }

  var nl = new nylon();
  document.getElementById("slider").addEventListener( "change", (ev) => {
    nl.emit( "stop", null );
    nl.emit( "delta", { "top":document.getElementById("slider").value });
    console.log(document.getElementById("slider").value);
  });
});
