class InitialCondition {

  constructor( elm1 ) {
    this.elm1 = elm1;
    const N = 40;
    const M = N/2.0;

    this.vc1 = new VCanvas( elm1 );
    this.vc1.scale( -2, M, N+4, -2.0*M );

    var u = new Array(N+1);

    var delta = function( peak ) {
      var ia = peak * N;
      for( var i=0; i<=ia; i++ )  u[i] = i/ia*0.7;
      for( var i=ia; i<=N; i++ )  u[i] = 0.7 - ((i-ia)/(N-ia))*0.7;
    }
    delta( 0.5 );

    var nl = new nylon();

    var draw = () => {
      this.vc1.cls();
      this.vc1.forecolor( 0, 0, 0 );
      this.vc1.beginPath();
      this.vc1.line( 0, -M/5, 0, M/5 );
      this.vc1.line( N, -M/5, N, M/5 );
      this.vc1.line( 0, 0, N, 0 );
      for( var i=0; i<N; i+=N/10 ) {
        this.vc1.line( i, -M/10, i, M/10 );
      }
      this.vc1.setFont( "18px sans-serif" );
      this.vc1.print( N/3, -10, "Initial Position" );
      this.vc1.stroke();

      this.vc1.forecolor( 180, 10, 80 );
      this.vc1.beginPath();
			this.vc1.lineStart( 0, u[0]*M );
			for( var i=1; i<=N; i++ )
				this.vc1.lineto( i, u[i]*M );
			this.vc1.stroke();
    }
    draw();

    nl.on( "delta", ( key, params ) => {
      console.log( params );
      delta( params["top"] );
      draw();
    });
  }
}

window.addEventListener("load", function(e) {
  x = new InitialCondition(
    document.getElementById( 'initial' ) );
});
