//navtoggle

$( ".navbar-toggler" ).click(function() {
  $( ".navbar-collapse" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

// contact
$( "#contactSubmit" ).click(function(event) {
	var personName = $( "input#contactName" ).val();
	console.log( 'personName', personName );
});
