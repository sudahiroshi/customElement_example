window.addEventListener('load', function() {
	var link = document.querySelector('link[rel="import"]#operation');
	var content = link.import;
	var elm = content.querySelector('template').content;
	var dest = document.querySelectorAll('x-operation');
	var nl = new nylon();
	for( x of dest ) {
		//x.appendChild(elm.cloneNode(true));
		let shadowroot = x.attachShadow({mode:'open'});
		shadowroot.appendChild(elm.cloneNode(true));
		shadowroot.querySelector("#start").addEventListener( "click", () => {
			nl.emit( "start", null );
		});
	}
	elm.getElementById("start").addEventListener( "click", () => {
		nl.emit( "start", null );
	});
	elm.getElementById("stop").addEventListener( "click", () => {
		nl.emit( "stop", null );
	});
	elm.getElementById("b01").addEventListener( "click", () => {
		nl.emit( "stop", null );
		nl.emit( "delta", { "top":0.1 } );
	});
	elm.getElementById("b02").addEventListener( "click", () => {
		nl.emit( "stop", null );
		nl.emit( "delta", { "top":0.2 } );
	});
	elm.getElementById("b03").addEventListener( "click", () => {
		nl.emit( "stop", null );
		nl.emit( "delta", { "top":0.3 } );
	});
	elm.getElementById("b04").addEventListener( "click", () => {
		nl.emit( "stop", null );
		nl.emit( "delta", { "top":0.4 } );
	});
	elm.getElementById("b05").addEventListener( "click", () => {
		nl.emit( "stop", null );
		nl.emit( "delta", { "top":0.5 } );
	});
	elm.getElementById("moment").addEventListener( "click", () => {
		nl.emit( "moment", null );
	});
	elm.getElementById("overlap").addEventListener( "click", () => {
		nl.emit( "overlap", null );
	});
});
