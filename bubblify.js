(function( $ ){

  $.fn.bubblify = function( options ) {  

    var settings = {
      'location'         : 'top',
      'background-color' : 'blue'
    };

    return this.each(function() {        
      // If options exist, lets merge them
      // with our default settings
      if ( options ) { 
        $.extend( settings, options );
      }
      $(this).
    });

  };
})( jQuery );