function compornentImport( linkId, elementId ) {
  var link = document.querySelector('link[rel="import"]#' + linkId );
  var content = link.import;
  var elm = content.querySelector('template').content;
  var dest = document.querySelectorAll( elementId );
  for( x of dest ) {
    x.appendChild(elm.cloneNode(true));
  }
}
