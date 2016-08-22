$(function(){
    function runEffect(){      
      var selectedEffect = $( "#effectTypes" ).val();
      var options = {};
      if ( selectedEffect === "scale" ) {
        options = { percent: 60 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 480, height: 385 } };
      }
      $( "#effect" ).show( selectedEffect, options, 1100, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
        }, 10000 );
    };
    $( "#button" ).click(function() {
      runEffect();
    });
 
    $( "#effect" ).hide();
    $( "#v_nav_bar").show();
    
    $(function() {
      $( "#accordion" ).accordion();
   } );
    //$("#accordion").hide();
    $( "#clickme" ).click(function() {
      $( "#back" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});
});
