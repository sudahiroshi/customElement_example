class StringVibration {

  constructor( elm1, elm2 ) {
    this.clear = true;
    this.elm1 = elm1;
    this.elm2 = elm2;
    const N = 40;
    const M = N/2.0;

    this.vc1 = new VCanvas( elm1 );
    this.vc2 = new VCanvas( elm2 );

    this.vc1.scale( -2, M, N+4, -2.0*M );
    this.vc2.scale( -2, M, N+4, -2.0*M );

    this.vc2.forecolor( 0, 0, 0 );
    this.vc2.beginPath();
    this.vc2.line( 0, -M/5, 0, M/5 );
    this.vc2.line( N, -M/5, N, M/5 );
    this.vc2.line( 0, 0, N, 0 );
    for( var i=0; i<N; i+=N/10 ) {
      this.vc2.line( i, -M/10, i, M/10 );
    }
    this.vc2.stroke();

    var u = new Array(N+1);
    var v = new Array(N+1);
    var w = new Array(N+1);

    var k = 0.01;
    var h = 1.0/N;
    var r = k/h;
    var q = r*r;
    var s = 2.0 * (1.0-q);

    var delta = function( peak ) {
      var ia = peak * N;
      for( var i=0; i<=ia; i++ )  u[i] = i/ia*0.7;
      for( var i=ia; i<=N; i++ )  u[i] = 0.7 - ((i-ia)/(N-ia))*0.7;
      for( var i=0; i<=N; i++ )   v[i] = u[i];
      for( var i=0; i<=N; i++ )   w[i] = 0.0;
    }
    delta( 0.5 );

    var timer1 = new vbTimer();
    timer1.interval = 50;
    var nl = new nylon();

    timer1.timer = () => {
      if( this.clear) this.vc1.cls();
      this.vc1.forecolor( 10, 80, 10 );
      this.vc1.beginPath();
			this.vc1.lineStart( 0, u[0]*M );
			for( var i=1; i<=N; i++ )
				this.vc1.lineto( i, u[i]*M );
			this.vc1.stroke();

			for( var i=1; i<N; i++ )
				w[i] = q * ( u[i+1] + u[i-1] ) + s * u[i] - v[i];
			for( var i=0; i<N; i++ ) {
				v[i] = u[i];
				u[i] = w[i];
			}
    }

    timer1.timer();
    nl.on( "start", ( key, params ) => {
      timer1.enable();
    });
    nl.on( "stop", ( key, params ) => {
      timer1.disable();
    });
    nl.on( "delta", ( key, params ) => {
      console.log( params );
      delta( params["top"] );
      timer1.timer();
    });
    nl.on( "moment", ( key, params ) => {
      this.clear = true;
    });
    nl.on( "overlap", ( key, params ) => {
      this.clear = false
    });
  }
}

var guisetup = () => {
	var nl = new nylon();
	document.getElementById("start").addEventListener( "click", () => {
		nl.emit( "start", null );
	});
  document.getElementById("stop").addEventListener( "click", () => {
    nl.emit( "stop", null );
  });
  document.getElementById("b01").addEventListener( "click", () => {
    nl.emit( "stop", null );
    nl.emit( "delta", { "top":0.1 } );
  });
  document.getElementById("b02").addEventListener( "click", () => {
    nl.emit( "stop", null );
    nl.emit( "delta", { "top":0.2 } );
  });
  document.getElementById("b03").addEventListener( "click", () => {
    nl.emit( "stop", null );
    nl.emit( "delta", { "top":0.3 } );
  });
  document.getElementById("b04").addEventListener( "click", () => {
    nl.emit( "stop", null );
    nl.emit( "delta", { "top":0.4 } );
  });
  document.getElementById("b05").addEventListener( "click", () => {
    nl.emit( "stop", null );
    nl.emit( "delta", { "top":0.5 } );
  });
  document.getElementById("moment").addEventListener( "click", () => {
    nl.emit( "moment", null );
  });
  document.getElementById("overlap").addEventListener( "click", () => {
    nl.emit( "overlap", null );
  });

}



window.addEventListener("load", function(e) {
  //var nl = new nylon();
  //guisetup();

  x = new StringVibration(
    document.getElementById('graph1'),
    document.getElementById('graph2') );

});
