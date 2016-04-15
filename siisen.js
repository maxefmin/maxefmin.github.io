jquery(function() {
  // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = jquery( "#effectTypes" ).val();
 
      // most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 60 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 480, height: 385 } };
      }
       // run the effect
      jquery( "#effect" ).show( selectedEffect, options, 1100, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        jquery( "#effect:visible" ).removeAttr( "style" ).fadeOut();
        }, 10000 );
    };
 
    // set effect from select menu value
    jquery( "#button" ).click(function() {
      runEffect();
    });
 
    jquery( "#effect" ).hide();
  
    //hide v_nav_bar
     //$( "#v_nav_bar").show();
    
    jquery(function() {
      jquery( "#accordion" ).accordion();
      })
    });
    
    jquery( "#clickme" ).click(function() {
      jquery( "#back" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});
