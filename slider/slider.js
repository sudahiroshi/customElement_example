
window.addEventListener('load', function() {
  var link = document.querySelector('link[rel="import"]#slider');
  var content = link.import;
  var elm = content.querySelector('template').content;
  var dest = document.querySelectorAll('x-slider');
  for( x of dest ) {
    x.appendChild(elm.cloneNode(true));
  }

  var nl = new nylon();
  document.getElementById("vertex").addEventListener( "change", (ev) => {
    let value = document.getElementById("vertex").value;
    nl.emit( "stop", null );
    nl.emit( "delta", { "top": value});
    console.log( value );
    let area = document.getElementById( 'showRangeArea' );
    area.innerHTML = value;
  });
});
