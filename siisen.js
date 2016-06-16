
$(function() {
  // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 60 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 480, height: 385 } };
      }
       // run the effect
      $( "#effect" ).show( selectedEffect, options, 1100, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
        }, 10000 );
    };
 
    // set effect from select menu value
    $( "#button" ).click(function() {
      runEffect();
    });
 
    $( "#effect" ).hide();
  
    //hide v_nav_bar
     //$( "#v_nav_bar").show();
    
    $(function() {
      $( "#accordion" ).accordion();

    $("#accordion").hide();
    $( "#clickme" ).click(function() {
      $( "#back" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});
});
})();
